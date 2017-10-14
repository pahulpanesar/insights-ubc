/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
let JSZIP = require('jszip');
import Course from "../dataStructs/Course";
import Tokenizer from "./Tokenizer";
import Query from "./Query";
let fs = require('fs');

export default class InsightFacade implements IInsightFacade {

    private dataSets: any = {};
    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }
    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {
            if (this.dataSets[id] != undefined && this.dataSets[id] != null) {
                fulfill({code: 201, body: {}});
            }
            else if (fs.existsSync('./disk/' + id + '.json')) {
                this.dataSets[id] = JSON.parse(fs.readFileSync("./disk/" + id + ".json", "utf8"));
                fulfill({code: 201, body: {}})
            }
            else {
                try {
                    var files: any;
                    var zip = new JSZIP();
                    var pArr: Array<Promise<any>> = [];
                    this.dataSets[id] = new Array<Course>();
                    let dataObjectArray: Array<any> = [];
                    zip.loadAsync(content, {base64: true}).then((zip: any) => {
                        files = zip.files;
                        Object.keys(files).forEach((filename) => {
                            let file: JSZipObject = files[filename];
                            if (file.name.indexOf("course") == -1) {
                                throw Error;
                            }
                            pArr.push(
                                file.async('string').then((fileData) => {
                                    try {
                                        if (fileData != '') {
                                            let dataOb: any = new Object(JSON.parse((fileData)));
                                            if (dataOb.result.length > 0) {
                                                dataObjectArray.push(dataOb.result);
                                            }
                                        }
                                    }
                                    catch (err) {
                                        reject({code: 400, body: {"error": err}});
                                    }
                                }).catch((err) => {
                                    reject({code: 400, body: {"error": err}});
                                }));
                        });
                    }).catch((err:any) => {
                        throw err;
                    })
                        .then(() => {
                            Promise.all(pArr).then(() => {
                                dataObjectArray.forEach((dataArray) => {
                                    dataArray.forEach((dataObject: any) => {
                                        if (id === "courses") {
                                            this.addCourse(dataObject, id);
                                        }
                                    })
                                });
                                this.saveToDisk(id).then(() => {
                                    fulfill({code: 204, body: {}});
                                }).catch((err) => {
                                    throw err;
                                })
                            }).catch((err) => {
                                reject({code: 400, body: {"error": err.message}});
                            });
                        })
                        .catch((err: any) => {
                            reject({code: 400, body: {"error": err.message}});
                        });
                }
                catch (err) {
                    reject({code: 400, body: {"error": err.message}});
                }
            }
        });
    }

    saveToDisk(id: string): Promise<any> {
        return new Promise((fulfill, reject) => {
            if (!fs.existsSync('./disk')){
                fs.mkdirSync('./disk');
            }
            try {
                let filename: string = './disk/' + id + '.json'
                fs.writeFileSync(filename, JSON.stringify(this.dataSets[id]));
                fulfill();
            }
            catch (err) {
                reject(err);
            }
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
                reject({code: 404, error: "No dataset to remove"});
            }
        })
    }

    performQuery(query: any): Promise <InsightResponse> {
        return new Promise(function(fulfill, reject) {
            if(this.dataSets.length < 1) {
                reject({code: 424, error: "No dataset"});
            }
            try{
                let filteredArray:Course[] = [];
                let t: Tokenizer = new Tokenizer();
                t.addKeys(query);
                this.dataSets.forEach((dataSet: Array<any>) => {
                    for(var i = 0; i< dataSet.length; i++){
                        let c: Course = dataSet[i];
                        let q: Query = new Query(t,c);
                        q.parse();
                        if(q.evaluate()){ //If AST (Query Object) returns true add it to the filtered Array
                            filteredArray.push(c)
                        }
                    }
                }).then(() => {
                        fulfill({code: 200, body: {}});
                    }
                ).catch((err: any) => {
                    console.log(err);
                    reject({code: 400, body: {"error": err}});
                })
            }
            catch (err){
                reject({code: 400, body: {"error": err}});
            }
        });
    }
}
