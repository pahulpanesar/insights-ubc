/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
let JSZIP = require('jszip');
import Course from "../dataStructs/Course";
import Tokenizer from "../dataStructs/Tokenizer";
import Query from "../dataStructs/Query";
import OptionNode from "./nodes/OptionNode";
let fs = require('fs');

export default class InsightFacade implements IInsightFacade {

    private dataSets: any = {};
    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }
    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {

            try {
                var files: any;
                var validCourse: boolean = false;
                var zip = new JSZIP();
                var pArr: Array<Promise<any>> = [];
                let dataObjectArray: Array<any> = [];
                zip.loadAsync(content, {base64: true}).then((zip: any) => {
                    if (this.dataSets[id] != undefined && this.dataSets[id] != null) {
                        fulfill({code: 201, body: {}});
                    }
                    else if (fs.existsSync('./disk/' + id + '.json')) {
                        this.dataSets[id] = JSON.parse(fs.readFileSync("./disk/" + id + ".json", "utf8"));
                        fulfill({code: 201, body: {}});
                    }
                    else {
                        this.dataSets[id] = new Array<Course>();
                        files = zip.files;
                        Object.keys(files).forEach((filename) => {
                            let file: JSZipObject = files[filename];
                            pArr.push(
                                file.async('string').then((fileData) => {
                                    if (fileData != '') {
                                        let dataOb: any = new Object(JSON.parse((fileData)));
                                        if (dataOb.result != null) {
                                            dataOb.result.forEach((x: any) => {
                                                if (x["Course"] != null) {
                                                    validCourse = true;
                                                }
                                            })
                                        }
                                        if (dataOb.result.length > 0) {
                                            dataObjectArray.push(dataOb.result);
                                        }
                                    }
                                }).catch((err) => {
                                    reject({code: 400, body: {"error": err.message}});
                                }));
                        });
                    }
                }).catch((err:any) => {
                    reject({code: 400, body: {"error": err.message}});
                })
                    .then(() => {
                        Promise.all(pArr).then(() => {
                            if(!validCourse) {
                                reject({code: 400, body: {"error": "No valid courses"}});
                            }
                            dataObjectArray.forEach((dataArray) => {
                                dataArray.forEach((dataObject: any) => {
                                    if (id === "courses") {
                                        this.addCourse(dataObject, id);
                                    }
                                })
                            });
                            this.saveToDisk(id).then(() => {
                                fulfill({code: 204, body: {}});
                            })
                        })
                    })
            }
            catch (err) {
                reject({code: 400, body: {"error": err.message}});
            }
        });
    }

    saveToDisk(id: string): Promise<any> {
        return new Promise((fulfill, reject) => {
            if (!fs.existsSync('./disk')){
                fs.mkdirSync('./disk');
            }
                let filename: string = './disk/' + id + '.json'
                fs.writeFileSync(filename, JSON.stringify(this.dataSets[id]));
                fulfill();
        })
    }

    addCourse(dataObject: any, id: string): void {
        let course: Course = new Course();
        let courses: any = this.dataSets[id];
        course.courses_title = dataObject.Title;
        course.courses_uuid = dataObject["id"];
        course.courses_id = dataObject.Course;
        course.courses_dept = dataObject.Subject;
        course.courses_instructor = dataObject.Professor;
        course.courses_pass = dataObject.Pass;
        course.courses_fail = dataObject.Fail;
        course.courses_audit = dataObject.Audit;
        course.courses_avg = dataObject.Avg;
        courses.push(course);
    }

    // filterCourses(id: string): Array<any> {
    //     let filteredCourses: Array<any> = [];
    //     let course: Course;
    //     let courses: Array<Course> = this.dataSets[id];
    //     filteredCourses = courses.filter(
    //        course => course.courses_avg >= 97);
    //     return filteredCourses.map(course => course.courses_dept + " " + course.courses_avg)
    // }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {
            if(fs.existsSync('./disk/' + id + '.json')) {
                fs.unlinkSync('./disk/' + id + '.json');
                if(this.dataSets[id]) {
                    this.dataSets[id] = null;
                }
                fulfill({code:204, body: {}});
            }
            else {
                reject({code: 404, body: {"error": "No dataset to remove"}});
            }
        })
    }

    performQuery(query: any): Promise <InsightResponse> {
        return new Promise((fulfill, reject) => {
            let parsedQuery: any = query;
            if(Object.keys(this.dataSets).length < 1) {
                reject({code: 424, body: {"error": "No dataset"}});
            }
            try{
                var filteredArray: Array<Course> = [];
                var optionObj:any = {};
                var flag:boolean = false;
                let resArray: Array<any> = [];
                    var t: Tokenizer = new Tokenizer();
                t.addKeys(parsedQuery);

                Object.keys(this.dataSets).forEach((setName) => {
                    let dataSet: Array<any> = this.dataSets[setName];
                    for (var i = 0; i < dataSet.length; i++) {
                        t.index = 0;
                        let c: Course = dataSet[i];
                        let q: Query = new Query(t, c);
                        q.parseFilter();
                        if(!flag) {
                            let o: OptionNode = new OptionNode(t, c);
                            o.parse();
                            optionObj = o.evaluate();
                        }

                        if (q.evaluate()) { //If AST (Query Object) returns true add it to the filtered Array
                            filteredArray.push(c)
                        }
                    }

                    });
                if(optionObj.order) {
                    filteredArray.sort(function(a, b) {
                        return a[optionObj.order] - b[optionObj.order];
                    });
                }
                resArray = filteredArray.map((course) => {
                    let contain: any = {};
                    optionObj["columns"].forEach((column:any) => {
                        contain[column] = course[column];
                    })
                    return contain;
                });
                fulfill({code: 200, body: {"result": resArray}});
            }
            catch (err){
                reject({code: 400, body: {"error": err}});
            }
        });
    }
}
