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
import Room from "../dataStructs/Room";
import GroupNode from "./nodes/GroupNode";
import TransformationNode from "./nodes/TransformationNode";
let http = require("http");
let fs = require('fs');
let parse5 =  require('parse5');
let Decimal = require("decimal.js");


export default class InsightFacade implements IInsightFacade {

    private dataSets: any = {};
    private validRooms: Array<string> = [];
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
                let rooms: any = {};
                zip.loadAsync(content, {base64: true}).then((zip: any) => {
                    if(id === "courses") {
                        this.dataSets[id] = new Array<Course>();
                    }
                    if(id === "rooms") {
                        this.dataSets[id] = new Array<Room>();
                    }

                    files = zip.files;
                    Object.keys(files).forEach((filename) => {
                        let file: JSZipObject = files[filename];
                        pArr.push(
                            file.async('string').then((fileData) => {
                                if (fileData != '') {
                                    if(id === "courses"){
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
                                    if(id === "rooms") {
                                        let dataOb: any = new Object(parse5.parse(fileData));
                                        if (file.name === "index.htm") {
                                            this.addValidRooms(dataOb);
                                        }
                                        else if (!file.dir && file.name.indexOf(".DS_Store") == -1) {
                                            if (file.name.indexOf("buildings-and-classrooms") == -1) {
                                                throw new Error("no building");
                                            }
                                            rooms[file.name] = dataOb;
                                        }
                                    }

                                }
                            }).catch((err) => {
                                reject({code: 400, body: {"error": err.message}});
                            }));
                    });
                }).catch((err:any) => {
                    this.dataSets[id] = [];
                    reject({code: 400, body: {"error": err.message}});
                })
                    .then(() => {
                        Promise.all(pArr).then(() => {
                            if(id === "courses"){
                                if(!validCourse){
                                    this.dataSets[id] = [];
                                    reject({code: 400, body: {"error":"no valid course"}});
                                }
                                dataObjectArray.forEach((dataArray) => {
                                    dataArray.forEach((dataObject: any) => {
                                        this.addCourse(dataObject);
                                    })
                                });
                                if (fs.existsSync('./disk/' + id + '.json')) {
                                    this.saveToDisk(id).then(() => {
                                        fulfill({code: 201, body: {}});
                                    }).catch((err) => {
                                        throw new Error("ugh");
                                    })
                                }
                                else {
                                    this.saveToDisk(id).then(() => {
                                        fulfill({code: 204, body: {}});
                                    }).catch((err) => {
                                        throw new Error("MAN!");
                                    })
                                }
                            }
                            if(id === "rooms"){
                                let pArr2: Array<Promise<any>> = [];
                                Object.keys(rooms).forEach((room) => {
                                    let p: Promise<any> = this.addRoom(rooms[room], room);
                                    pArr2.push(p);
                                });
                                Promise.all(pArr2).then(() => {

                                    if (fs.existsSync('./disk/' + id + '.json')) {
                                        this.saveToDisk(id).then(() => {
                                            fulfill({code: 201, body: {}});
                                        }).catch((err) => {
                                            throw new Error("ugh");
                                        })
                                    }
                                    else {
                                        this.saveToDisk(id).then(() => {
                                            fulfill({code: 204, body: {}});
                                        }).catch((err) => {
                                            throw new Error("MAN!");
                                        })
                                    }
                                }).catch((err) => {
                                    throw new Error("goodness");
                                })
                            }
                        })
                    })
            }
            catch (err) {
                this.dataSets[id] = [];
                reject({code: 400, body: {"error": err.message}});
            }
        });
    }

    saveToDisk(id: string): Promise<any> {
        return new Promise((fulfill, reject) => {
            if (!fs.existsSync('./disk')){
                fs.mkdirSync('./disk');
            }
                let filename: string = './disk/' + id + '.json';
                fs.writeFileSync(filename, JSON.stringify(this.dataSets[id]));
                fulfill();
        })
    }

    addValidRooms(dataObject: any): void {
        try{
            let childs0 = dataObject.childNodes;
            let preBody = childs0[childs0.length - 1];
            let preBodyChildren = preBody.childNodes;
            let body = preBodyChildren[preBodyChildren.length - 1];
            let container: any = this.findAttrs(body, "full-width-container");
            let main: any = this.findAttrs(container, "main");
            let content: any = this.findAttrs(main, "content");
            let blockSystem: any = this.findAttrs(content, "block-system-main");
            let viewBuildings: any = this.findAttrs(blockSystem, "view-buildings-and-classrooms");
            let viewContent: any = this.findAttrs(viewBuildings, "view-content");
            let viewsTable: any = this.findAttrs(viewContent, "views-table");
            let tBody: any = viewsTable.childNodes[3];
            for(var i = 1; i < tBody.childNodes.length; i = i+2){
                this.validRooms.push(tBody.childNodes[i].childNodes[3].childNodes[0].value.trim());
            }
        }
        catch (err){
            throw new Error("bad index");
        }
    }

    addRoom(dataObject: any, fileName: string): Promise<any> {
        return new Promise((fulfill, reject) => {
            try{
                let shortName: string  = fileName.substring(fileName.lastIndexOf('/') + 1);
                if(!this.validRooms.includes(shortName)){
                    fulfill("valid rooms doesn't include this");
                    return;
                }
                let childs0 = dataObject.childNodes;
                let preBody = childs0[childs0.length - 1];
                let preBodyChildren = preBody.childNodes;
                let body = preBodyChildren[preBodyChildren.length - 1];
                let container: any = this.findAttrs(body, "full-width-container");
                let main: any = this.findAttrs(container, "main");
                let content: any = this.findAttrs(main, "content");
                let blockSystem: any = this.findAttrs(content, "block-system-main");
                let viewBuildings: any = this.findAttrs(blockSystem, "view-buildings-and-classrooms");
                let viewContent: any = this.findAttrs(viewBuildings, "view-content");
                let viewsRows: any = this.findAttrs(viewContent, "views-row");
                let buildingWrapper: any = this.findAttrs(viewsRows, "buildings-wrapper");
                let buildingInfo: any  = this.findAttrs(buildingWrapper, "building-info");
                let buildingField: any = this.findAttrs(buildingInfo, "building-field");
                let fieldContent: any = this.findAttrs(buildingField, "field-content");
                let name: string = buildingInfo.childNodes[1].childNodes[0].childNodes[0].value;
                let viewFooter: any = this.findAttrs(viewBuildings, "view-footer");
                let viewFooterBuildings: any = this.findAttrs(viewFooter, "view-buildings");
                let viewFooterContent: any = this.findAttrs(viewFooterBuildings, "view-content");
                if(!viewFooterContent) {
                    fulfill(true);
                    return;
                }
                let viewsTable: any = this.findAttrs(viewFooterContent, "views-table");
                if(!viewsTable){
                    reject("no valid table");
                    return;
                }
                let loc: string = fieldContent.childNodes[0].value;
                let lat: number;
                let lon: number;
                let spaceRegex: RegExp = / /gi;
                let urlLoc: string = 'http://skaha.cs.ubc.ca:11316/api/v1/team75/' + loc.replace(spaceRegex, '%20');
                this.getLocation(urlLoc).then((res) => {
                    lat = res.lat;
                    lon = res.lon;
                    let tBody: any = viewsTable.childNodes[3];
                    for(var i = 1; i < tBody.childNodes.length; i = i+2){
                        let room: Room = new Room();
                        room.rooms_fullname = name;
                        room.rooms_shortname = shortName;
                        let tRow = tBody.childNodes[i];
                        room.rooms_number = tRow.childNodes[1].childNodes[1].childNodes[0].value.trim();
                        room.rooms_address = loc;
                        room.rooms_lon = lon;
                        room.rooms_lat = lat;
                        room.rooms_name = room.rooms_shortname + '_' + room.rooms_number;
                        room.rooms_seats = parseInt(tRow.childNodes[3].childNodes[0].value.trim());
                        room.rooms_furniture = tRow.childNodes[5].childNodes[0].value.trim();
                        room.rooms_type = tRow.childNodes[7].childNodes[0].value.trim();
                        room.rooms_href = tRow.childNodes[9].childNodes[1].attrs[0].value.trim();
                        this.dataSets["rooms"].push(room);
                    }
                    fulfill(true);
                }).catch((err) => {
                    reject(err);
                });
            }
            catch (err){
                reject(err);
            }
        })


    }

    getLocation(url: string): Promise<any> {
        return new Promise(function(fulfill, reject) {
            http.get(url, function(res: any){
                var body = '';
                res.on('data', function(chunck: any) {
                    body += chunck;
                });
                res.on('end', function(){
                    body = body.trim();
                    let res: any = {};
                    if(body.indexOf("lat") != -1) {
                        res.lat  = parseFloat(body.substring(body.indexOf("\"lat\":")+6,body.indexOf(",")));
                    }
                    if(body.indexOf("lon") != -1) {
                        res.lon  = parseFloat(body.substring(body.indexOf("\"lon\":")+6,body.indexOf("}")));
                    }
                    if(body.indexOf("\"error\":") != -1) {
                        res.error  = (body.substring(body.indexOf(":")+2,body.indexOf("}")-1));
                    }
                    fulfill(res);
                });

            }).on('error', function(e: any) {
                console.log("Got error: " + e.message);
                reject(e);
            });
        })
    }

    findAttrs(parent: any, value: string): any{
        let child: any;
        try{
            for(var i = 0; i < parent.childNodes.length; i++){
                if(parent.childNodes[i].attrs && parent.childNodes[i].attrs[0] && parent.childNodes[i].attrs[0].value.indexOf(value) !== -1){
                    child = parent.childNodes[i];
                    break;
                }
            }
            return child;
        }
        catch (err){
            console.log(value);
        }

    }

    addCourse(dataObject: any): void {
        let course: Course = new Course();
        let courses: any = this.dataSets["courses"];
        course.courses_title = dataObject.Title;
        course.courses_uuid = dataObject.id;
        course.courses_id = dataObject.Course;
        course.courses_dept = dataObject.Subject;
        course.courses_instructor = dataObject.Professor;
        course.courses_pass = dataObject.Pass;
        course.courses_fail = dataObject.Fail;
        course.courses_audit = dataObject.Audit;
        course.courses_avg = dataObject.Avg;
        if(dataObject.Section === "overall"){
            course.courses_year = 1900;
        }
        else{
            course.courses_year = Number.parseInt(dataObject.Year);
        }
        courses.push(course);
    }

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
            try {
                if(!this.isDatasetPresent(query)){
                    reject({code: 424, body: {"error": "No dataset"}});
                }
                var filteredArray: Array<any> = [];
                var optionObj: any = {};
                let transform: any = query["TRANSFORMATIONS"];
                var transformationObj: any = {};
                var t: Tokenizer = new Tokenizer();
                t.addKeys(query);
                let dataSet: Array<any> = this.isRoomQuery(query) ? this.dataSets["rooms"] : this.dataSets["courses"];
                filteredArray = this.fillFilter(t, filteredArray, query, dataSet);
                let o: OptionNode = new OptionNode(t, dataSet[0], -1, transform);
                o.parse();
                optionObj = o.evaluate();
                let trans = new TransformationNode(t, {"errorCatch": optionObj.errorCatch}, -1);
                trans.parse();
                transformationObj = trans.evaluate();
                //error check keys
                this.errorCheckApplyTokens(optionObj, transformationObj);
                let map: any = {};
                let groupArray: Array<any> = [];
                this.dirSort(filteredArray, optionObj);
                if (!transform) {
                    groupArray = this.createNoTransform(filteredArray, optionObj);
                }
                else {
                    this.createMap(map, transformationObj, filteredArray);
                    if (transformationObj.apply.length == 0) {
                        this.tranAction(null, groupArray, map, optionObj);
                    }
                    else {
                        this.tranAction(transformationObj.apply, groupArray, map, optionObj);
                    }
                    this.dirSort(groupArray, optionObj);
                    groupArray = this.createTransform(groupArray, optionObj, transformationObj);
                }
                fulfill({code: 200, body: {"result": groupArray}});
            }
            catch (err){
                reject({code: 400, body: {"error": "invalid query"}});
            }
        });
    }

    isRoomQuery(query: any): boolean{
        var t = new Tokenizer();
        t.addKeys(query);
        var tokens: any[] = t.tokens;
        var roomFlag: number = -1;
        for(var i =0;i<tokens.length;i++){
            if(tokens[i].toString().match("rooms_")){
                if(roomFlag === -1) {
                    roomFlag = 1;
                }
                else if(roomFlag === 0){
                    throw new Error("Malformed Query - Room/Course");
                }
            }
            if(tokens[i].toString().match("courses_")){
                if(roomFlag == -1) {
                    roomFlag = 0;
                }
                else if(roomFlag === 1){
                    throw new Error("Malformed Query - Room/Course");
                }
            }
        }
        return roomFlag === 1;
    }

    isDatasetPresent(query: any): boolean {
        if (Object.keys(this.dataSets).length < 1 || (!fs.existsSync('./disk/rooms.json') && !fs.existsSync('./disk/courses.json'))) {
            return false;
        }
        if (this.isRoomQuery(query)) {
            if (this.dataSets["rooms"] == null || this.dataSets["rooms"].length == 0 || (!fs.existsSync('./disk/rooms.json'))) {
                return false;
            }
        }
        else {
            if (this.dataSets["courses"] == null || this.dataSets["courses"].length == 0 || !fs.existsSync('./disk/courses.json')) {
                return false;
            }
        }
        return true;
    }

    fillFilter(t: Tokenizer, filteredArray: Array<any>, query:any, dataSet:Array<any>): Array<any>{
        if(!query["WHERE"]) throw new Error;
        if(Object.keys(query["WHERE"]).length == 0){
            filteredArray = dataSet.slice(0);
            t.index = 1;
        }
        else{
            for (var i = 0; i < dataSet.length; i++) {
                t.index = 0;
                let c: any = dataSet[i];
                let q: Query = new Query(t, c, -1);
                q.parseFilter();
                if (q.evaluate()) { //If AST (Query Object) returns true add it to the filtered Array
                    filteredArray.push(c)
                }
            }
        }
        return filteredArray;
    }

    createTransform(groupArray: Array<any>, optionObj: any, transformationObj: any): Array<any>{
        return groupArray.map((struct) => {
            let contain: any = {};
            let tKey: boolean = false;
            optionObj["columns"].options.forEach((column: any) => {
                contain[column] = struct[column];
            });
            return contain;
        });
    }

    createNoTransform(filteredArray: Array<any>, optionObj: any): Array<any>{
        return filteredArray.map((struct) => {
            let contain: any = {};
            let tKey: boolean = false;
            optionObj["columns"].options.forEach((column: any) => {
                if (!tKey) {
                    contain[column] = struct[column];
                }
            });
            return contain;
        });
    }

    createMap(map: any, transformationObj: any, filteredArray: Array<any>): void {
        var keyName = "";
        for(var i = 0; i < filteredArray.length-1; i++){
            var add = true;
            for(var j = 0; j < transformationObj.group.length; j++){
                let groupObj = transformationObj.group[j];
                let curr = filteredArray[i][groupObj];
                let next = filteredArray[i+1][groupObj];
                if(curr !== next){
                    add = false;
                }
                keyName += curr;
            }
            if(!map[keyName]){
                map[keyName] = new Array<any>();
                map[keyName].push(filteredArray[i]);
            }
            if(add) {
                map[keyName].push(filteredArray[i+1]);
            }
            keyName = "";
            // add = true;
            if(i + 2 === filteredArray.length && !add){
                for(var j = 0; j < transformationObj.group.length; j++){
                    let groupObj = transformationObj.group[j];
                    keyName += filteredArray[i+1][groupObj];
                }
                map[keyName] = new Array<any>();
                map[keyName].push(filteredArray[i+1]);
            }
        }
    }

    dirSort(filteredArray: Array<any>, optionObj: any){
        if(optionObj.keys) {
            filteredArray.sort(function(a, b) {
                for(var i =0;i<optionObj.keys.length;i++) { //sort by first key, tie break with the second etc...
                    if (a[optionObj.keys[i]] < b[optionObj.keys[i]]){
                        return optionObj.dir === "DOWN"? 1 : -1;
                    }
                    else if (a[optionObj.keys[i]] > b[optionObj.keys[i]]){
                        return optionObj.dir === "DOWN"? -1 : 1;
                    }
                }
                return 0;
            });
        }
    }

    tranAction(applyArr: Array<any>, groupArray: Array<any>, map: any, optionObj: any): void {
        if(applyArr === null){
            for(var i = 0;i < Object.keys(map).length; i++){
                let currGroup: Array<any> = map[Object.keys(map)[i]];
                groupArray.push(currGroup[0]);
            }
            return;
        }

        for(var i = 0; i < Object.keys(map).length; i++) {
            let currGroup: Array<any> = map[Object.keys(map)[i]];
            let n: any = currGroup[0];
            for (var ind = 0; ind < applyArr.length; ind++) {
                let apply: any = applyArr[ind];
                let res: number = -1;
                if (apply.action === "MAX") {
                    if(currGroup.length == 1){
                        res = currGroup[0][apply.key];
                    }
                    else{
                        res = currGroup.map((val: any) => (val[apply.key])).reduce((a, b) => Math.max(a, b));
                    }
                }
                if (apply.action === "MIN") {
                    if(currGroup.length == 1){
                        res = currGroup[0][apply.key];
                    }
                    else{
                        res = currGroup.map((val: any) => (val[apply.key])).reduce((a, b) => Math.min(a, b));
                    }                }
                if (apply.action === "AVG") {
                    if(currGroup.length == 1){
                        res = currGroup[0][apply.key];
                    }
                    else{
                        res = Number((currGroup.map((val: any) => <any>new Decimal(val[apply.key])).reduce((a, b) => a.plus(b)).toNumber() / currGroup.length).toFixed(2));
                    }
                }
                if (apply.action === "COUNT") {
                    if(currGroup.length === 1){
                        res = 1;
                    }
                    else {
                        res = currGroup.map((val: any) => (val[apply.key])).reduce((a, b) => {
                            if (a !== b) return 1;
                            else return 0;
                        });
                    }
                }
                if (apply.action === "SUM") {
                    if(currGroup.length == 1){
                        res = currGroup[0][apply.key];
                    }
                    else{
                        res = Number(currGroup.map((val: any) => new Decimal(val[apply.key])).reduce((a, b) => a.plus(b)).toNumber().toFixed(2));
                    }
                }
                if (res === -1) {
                    res = currGroup[0][apply.key];
                }
                n[apply.name] = res;
            }
            groupArray.push(n);
        }
    }

    errorCheckApplyTokens(optionObj: any, transformationObj: any) {
        for (var i = 0; i < optionObj.errorCatch.length; i++) {
            let err = optionObj.errorCatch[i];
            for (var j = 0; j < transformationObj.apply.length; j++) {
                if (transformationObj.apply.name === err) {
                    break;
                }
            }
            throw new Error("No Apply Key match for Error Catch element");
        }
        let unique = new Set(optionObj.errorCatch);
        if (unique.size < optionObj.length) {
            throw new Error("Duplicate Apply Tokens - Col");
        }
        let uniqueTemp = [];
        for (var i = 0; i < transformationObj.apply.length; i++) {
            uniqueTemp.push(transformationObj.apply[i]);
        }
        unique = new Set(uniqueTemp);
        if (unique.size < uniqueTemp.length) {
            throw new Error("Duplicate Apply Tokens - Trans")
        }
    }
}
