/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
import * as JSZIP from "jszip";
import Course from "../dataStructs/Course";

export default class InsightFacade implements IInsightFacade {

    private dataSets: any = {};
    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }
    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {
            var files: any;
            var zip = new JSZIP();
            var pArr: Array<Promise<any>> = [];
            this.dataSets[id] = new Array<Course>();
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
                        catch (err) {
                            reject({code: 400, error: err});
                        }
                    }).catch((err) =>{
                        reject({code: 400, error: err});
                    }));
                });
            })
                .then(() => {
                    Promise.all(pArr).then(() => {
                        dataObjectArray.forEach((dataArray) => {
                            dataArray.forEach((dataObject: any) => {
                                if(id === "courses") {
                                    this.addCourse(dataObject, id);
                                }
                            })
                        });
                        fulfill({code: 200, body: {}});
                    }).catch((err) => {
                        reject({code: 400, error: err});
                    })
                })
            .catch((err) => {
                reject({code: 400, error: err});
            })
        });
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

    filterCourses(id: string): Array<any> {
        let filteredCourses: Array<any> = [];
        let course: Course;
        let courses: Array<Course> = this.dataSets[id];
        filteredCourses = courses.filter(
           course => course.courses_avg >= 97);
        return filteredCourses.map(course => course.courses_dept + " " + course.courses_avg)
    }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise(function(fulfill, reject) {
            if(this.dataSets[id].length < 1) {
                reject({code: 400, error: "No dataset to remove"});
            }
            else {
                this.dataSets[id] = null;
                fulfill({code: 200, body: {}});
            }
        })
    }

    performQuery(query: any): Promise <InsightResponse> {
        return null;
    }
}
