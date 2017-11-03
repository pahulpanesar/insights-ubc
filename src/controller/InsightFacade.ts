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
let http = require("http");
let fs = require('fs');
let parse5 =  require('parse5');


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
                    if (this.dataSets[id] != undefined && this.dataSets[id] != null) {
                        fulfill({code: 201, body: {}});
                    }
                    else if (fs.existsSync('./disk/' + id + '.json')) {
                        this.dataSets[id] = JSON.parse(fs.readFileSync("./disk/" + id + ".json", "utf8"));
                        fulfill({code: 201, body: {}});
                    }
                    else {
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
                                                    this.dataSets[id] = [];
                                                    reject({code: 400, body: {"error":"no building"}});
                                                }
                                                rooms[file.name] = dataOb;
                                            }
                                        }
                                    }
                                }).catch((err) => {
                                    this.dataSets[id] = [];
                                    reject({code: 400, body: {"error": err.message}});
                                }));
                        });
                    }
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
                                this.saveToDisk(id).then(() => {
                                    fulfill({code: 204, body: {}});
                                })
                            }
                            if(id === "rooms"){
                                let pArr2: Array<Promise<any>> = [];
                                Object.keys(rooms).forEach((room) => {
                                    let p: Promise<any> = this.addRoom(rooms[room], room);
                                    pArr2.push(p);
                                });
                                Promise.all(pArr2).then(() => {
                                    this.saveToDisk(id).then(() => {
                                        fulfill({code: 204, body: {}});
                                    }).catch((err) => {
                                        this.dataSets[id] = [];
                                        reject({code: 400, body: {"error": err.message}});
                                    })
                                }).catch((err) => {
                                    this.dataSets[id] = [];
                                    reject({code: 400, body: {"error": err.message}});
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
                // let ubcFooter: any = this.findAttrs(body, "ubc7-footer");
                // let unitFooter: any = this.findAttrs(ubcFooter, "ubc7-unit");
                // let footerContainer: any = this.findAttrs(unitFooter, "container");
                // let span10: any = this.findAttrs(footerContainer, "span10");
                // let addressLocation: any = this.findAttrs(span10, "ubc7-address-location");
                // let postal: any = this.findAttrs(addressLocation, "postal").childNodes[0].value.trim();
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
            course.courses_year = parseInt(dataObject.Year);
        }
        courses.push(course);
    }

    // filterCourses(id: string): Array<any> {
    //     let filteredCourses: Array<any> = [];
    //     let dataStruct: Course;
    //     let courses: Array<Course> = this.dataSets[id];
    //     filteredCourses = courses.filter(
    //        dataStruct => dataStruct.courses_avg >= 97);
    //     return filteredCourses.map(dataStruct => dataStruct.courses_dept + " " + dataStruct.courses_avg)
    // }

    removeDataset(id: string): Promise<InsightResponse> {
        return new Promise((fulfill, reject) => {
            if(id !== "rooms" && id !== "courses"){
                reject({code: 404, body: {"error": "Not valid dataset"}});
            }
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

    performQuery(query: any): Promise <InsightResponse> {
        return new Promise((fulfill, reject) => {
            try{
                if(Object.keys(this.dataSets).length < 1 || (!fs.existsSync('./disk/rooms.json') &&  !fs.existsSync('./disk/courses.json'))) {
                    if (this.isRoomQuery(query)) {
                        if (this.dataSets["rooms"] == null || this.dataSets["rooms"].length == 0) {
                            reject({code: 424, body: {"error": "no rooms"}});
                        }
                    }
                    else {
                        if (this.dataSets["courses"] == null || this.dataSets["courses"].length == 0) {
                            reject({code: 424, body: {"error": "no courses"}});
                        }
                    }
                }
                else {
                    if (this.isRoomQuery(query)) {
                        if (this.dataSets["rooms"] == null || this.dataSets["rooms"].length == 0) {
                            this.dataSets["rooms"] = JSON.parse(fs.readFileSync("./disk/rooms.json", "utf8"));
                        }
                    }
                    else {
                        if (this.dataSets["courses"] == null || this.dataSets["courses"].length == 0) {
                            this.dataSets["courses"] = JSON.parse(fs.readFileSync("./disk/courses.json", "utf8"));
                        }
                    }
                }
                var filteredArray: Array<any> = [];
                var optionObj:any = {};
                var flag:boolean = false;
                let resArray: Array<any> = [];
                var t: Tokenizer = new Tokenizer();
                t.addKeys(query);
                let dataSet = this.isRoomQuery(query) ? this.dataSets["rooms"] : this.dataSets["courses"];
                for (var i = 0; i < dataSet.length; i++) {
                    t.index = 0;
                    let c: any = dataSet[i];
                    let q: Query = new Query(t, c);
                    q.parseFilter();
                    if(!flag) {
                        let o: OptionNode = new OptionNode(t, c);
                        o.parse();
                        optionObj = o.evaluate();
                        flag = true;
                    }
                    if (q.evaluate()) { //If AST (Query Object) returns true add it to the filtered Array
                        filteredArray.push(c)
                    }
                }

                if(optionObj.order) {
                    filteredArray.sort(function(a, b) {
                        if(a[optionObj.order] < b[optionObj.order]) return -1;
                        if(a[optionObj.order] > b[optionObj.order]) return 1;
                        return 0;
                        //return a[optionObj.order] - b[optionObj.order];
                    });
                }
                resArray = filteredArray.map((struct) => {
                    let contain: any = {};
                    optionObj["columns"].forEach((column:any) => {
                        contain[column] = struct[column];
                    });
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
