/**
 * This is the main programmatic entry point for the project.
 */
import {IInsightFacade, InsightResponse} from "./IInsightFacade";
import Log from "../Util";
import * as JSZIP from "jszip";
import {escape} from "querystring";

export default class InsightFacade implements IInsightFacade {

    constructor() {
        Log.trace('InsightFacadeImpl::init()');
    }
    addDataset(id: string, content: string): Promise<InsightResponse> {
        return new Promise(function (fulfill, reject) {
            var files: any;
            var zip = new JSZIP();
            var pArr: Array<Promise<any>> = [];
            zip.loadAsync(content, {base64: true}).then(function (zip) {
                files = zip.files;
                Object.keys(files).forEach(function(filename) {
                    let file: JSZipObject = files[filename];
                    pArr.push(
                    file.async('string').then(function(fileData) {
                        console.log(fileData);
                    }));
                })
            })
                .then(function (next) {
                    Promise.all(pArr).then(function(ful) {
                        fulfill(null);
                    })
                        .catch(function(err) {
                            reject("Promise all");
                    })
                })
                .catch(function (err) {
                    reject("Error: Not base64");
                })
        });
    }

    removeDataset(id: string): Promise<InsightResponse> {
        return null;
    }

    performQuery(query: any): Promise <InsightResponse> {
        return null;
    }
}
