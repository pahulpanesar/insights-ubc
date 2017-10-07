/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
import * as JSZIP from "jszip";
import Course from "../dataStructs/Course";

export default class InsightFacade implements IInsightFacade {

    private courses: any = {};
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
                                this.addCourse(dataObject, prev, countPrev);
                            })
                        });
                        console.log(this.courses);
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

    addCourse(dataObject: any, prev: any, countPrev: any): void {
        let course: Course = new Course();
        let courses: any = this.courses;
        if(courses[dataObject.Title] == null){
            course.courses_title = dataObject.Title;
            course.courses_uuid = dataObject["id"];
            course.courses_id = dataObject.Course;
            course.courses_dept = dataObject.Subject;
            course.courses_instructor = dataObject.Professor;
            course.courses_pass = dataObject.Pass;
            course.courses_fail = dataObject.Fail;
            course.courses_audit = dataObject.Audit;
            course.courses_avg = dataObject.Avg;
            courses[course.courses_title] = course;
            if(prev != null) {
                courses[prev.Title].courses_avg = +((courses[prev.Title].courses_avg / countPrev).toFixed(2));
            }
            prev = dataObject;
            countPrev = 1;
        }
        else if(prev != null && prev.Title === dataObject.Title && dataObject.Section != "overall") {
            countPrev++;
            courses[dataObject.Title].courses_pass += dataObject.Pass;
            courses[dataObject.Title].courses_fail += dataObject.Fail;
            courses[dataObject.Title].courses_avg += dataObject.Avg;
            courses[dataObject.Title].courses_audit += dataObject.Audit;
        }
    }

    removeDataset(id: string): Promise<InsightResponse> {
        return null;
    }

    performQuery(query: any): Promise <InsightResponse> {
        return null;
    }
}
