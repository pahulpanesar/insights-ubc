/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
import * as JSZIP from "jszip";
import Course from "../dataStructs/Course";
import Tokenizer from "./Tokenizer";
import Query from "./Query";

export default class InsightFacade implements IInsightFacade {

    private courses: Array<Course> = [];
    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }
    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {
            var files: any;
            var zip = new JSZIP();
            var pArr: Array<Promise<any>> = [];
            let dataObjectArray: Array<any> = [];
            zip.loadAsync(content, {base64: true}).then((zip) => {
                files = zip.files;
                Object.keys(files).forEach((filename) => {
                    let file: JSZipObject = files[filename];
                    pArr.push(
                    file.async('string').then((fileData) => {
                        try {
                            if(fileData != '') {
                                let dataOb: any = new Object(JSON.parse((fileData)));
                                if (dataOb.result.length > 0) {
                                    dataObjectArray.push(dataOb.result);
                                }
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                    }).catch((e) =>{
                        reject(e);
                    }));
                });
            })
                .then(() => {
                    Promise.all(pArr).then(() => {
                        let prev: any;
                        let countPrev: number = 0;
                        dataObjectArray.forEach((dataArray) => {
                            dataArray.forEach((dataObject: any) => {
                                this.addCourse(dataObject);
                            })
                        });
                        console.log(this.filterCourses());
                        fulfill(null);
                    }).catch((err) => {
                        reject(err);
                    })
                })
            .catch((err) => {
                reject("Error: Not base64");
            })
        });
    }

    addCourse(dataObject: any): void {
        let course: Course = new Course();
        let courses: any = this.courses;
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

    filterCourses(): Array<any> {
        let filteredCourses: Array<any> = [];
        let course: Course;
        filteredCourses = this.courses.filter(
           course => course.courses_avg >= 97);
        return filteredCourses.map(course => course.courses_dept + " " + course.courses_avg)
    }

    removeDataset(id: string): Promise<InsightResponse> {
        return null;
    }

    performQuery(query: any): Promise <InsightResponse> {
        let response:InsightResponse;
        let filteredArray:Course[] = [];
        let t: Tokenizer = new Tokenizer();
        t.addKeys(query);

        for(var i = 0; i<this.courses.length; i++){
            let c: Course = this.courses[i];
            let q: Query = new Query(t,c);
            q.parse();
            if(q.evaluate()){ //If AST (Query Object) returns true add it to the filtered Array
                filteredArray.push(c)
            }
        }

        return null;
        //return response;

    }
}
