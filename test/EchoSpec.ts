/**
 * Created by rtholmes on 2016-10-31.
 */

import Server from "../src/rest/Server";
import {expect} from 'chai';
import Log from "../src/Util";
import {InsightResponse} from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";
import Tokenizer from "../src/dataStructs/Tokenizer";
let fs = require('fs');
let JSZip = require('jszip');
import chai = require('chai');
import chaiHttp = require('chai-http');
import Response = ChaiHttp.Response;
import restify = require('restify');

describe("EchoSpec", function () {


    function sanityCheck(response: InsightResponse) {
        expect(response).to.have.property('code');
        expect(response).to.have.property('body');
        expect(response.code).to.be.a('number');
    }

    var testJSONComplex = '{ "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } }';
    var testJSONSimple = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
    var t = new Tokenizer();
    var insightFace: InsightFacade = null;
    var zip = null;
    let dataString: string = null;
    let nonZipString: string = null;
    let badZipString: string = null;
    let badJsonString: string = null;
    const BAD_ZIP_PATH ='./badcourses.zip';
    const DATA_PATH = './courses.zip';
    const NON_ZIP_PATH = './courses';
    const BAD_JSON_PATH = './badjson.zip';
    const SIMPLE_QUERY = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
    const COMPLEX_QUERY = '{ "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } }';
    const SIMPLE_QUERY_RESPONSE = {
        result:
            [ { courses_dept: 'epse', courses_avg: 97.09 },
                { courses_dept: 'math', courses_avg: 97.09 },
                { courses_dept: 'math', courses_avg: 97.09 },
                { courses_dept: 'epse', courses_avg: 97.09 },
                { courses_dept: 'math', courses_avg: 97.25 },
                { courses_dept: 'math', courses_avg: 97.25 },
                { courses_dept: 'epse', courses_avg: 97.29 },
                { courses_dept: 'epse', courses_avg: 97.29 },
                { courses_dept: 'nurs', courses_avg: 97.33 },
                { courses_dept: 'nurs', courses_avg: 97.33 },
                { courses_dept: 'epse', courses_avg: 97.41 },
                { courses_dept: 'epse', courses_avg: 97.41 },
                { courses_dept: 'cnps', courses_avg: 97.47 },
                { courses_dept: 'cnps', courses_avg: 97.47 },
                { courses_dept: 'math', courses_avg: 97.48 },
                { courses_dept: 'math', courses_avg: 97.48 },
                { courses_dept: 'educ', courses_avg: 97.5 },
                { courses_dept: 'nurs', courses_avg: 97.53 },
                { courses_dept: 'nurs', courses_avg: 97.53 },
                { courses_dept: 'epse', courses_avg: 97.67 },
                { courses_dept: 'epse', courses_avg: 97.69 },
                { courses_dept: 'epse', courses_avg: 97.78 },
                { courses_dept: 'crwr', courses_avg: 98 },
                { courses_dept: 'crwr', courses_avg: 98 },
                { courses_dept: 'epse', courses_avg: 98.08 },
                { courses_dept: 'nurs', courses_avg: 98.21 },
                { courses_dept: 'nurs', courses_avg: 98.21 },
                { courses_dept: 'epse', courses_avg: 98.36 },
                { courses_dept: 'epse', courses_avg: 98.45 },
                { courses_dept: 'epse', courses_avg: 98.45 },
                { courses_dept: 'nurs', courses_avg: 98.5 },
                { courses_dept: 'nurs', courses_avg: 98.5 },
                { courses_dept: 'epse', courses_avg: 98.58 },
                { courses_dept: 'nurs', courses_avg: 98.58 },
                { courses_dept: 'nurs', courses_avg: 98.58 },
                { courses_dept: 'epse', courses_avg: 98.58 },
                { courses_dept: 'epse', courses_avg: 98.7 },
                { courses_dept: 'nurs', courses_avg: 98.71 },
                { courses_dept: 'nurs', courses_avg: 98.71 },
                { courses_dept: 'eece', courses_avg: 98.75 },
                { courses_dept: 'eece', courses_avg: 98.75 },
                { courses_dept: 'epse', courses_avg: 98.76 },
                { courses_dept: 'epse', courses_avg: 98.76 },
                { courses_dept: 'epse', courses_avg: 98.8 },
                { courses_dept: 'spph', courses_avg: 98.98 },
                { courses_dept: 'spph', courses_avg: 98.98 },
                { courses_dept: 'cnps', courses_avg: 99.19 },
                { courses_dept: 'math', courses_avg: 99.78 },
                { courses_dept: 'math', courses_avg: 99.78 } ] };

    before(function () {
        Log.test('Before: ' + (<any>this).test.parent.title);
    });

    beforeEach(function () {
        Log.test('BeforeTest: ' + (<any>this).currentTest.title);
        insightFace = new InsightFacade();
        zip = new JSZip();
        // insightFace.removeDataset("courses");
        dataString = fs.readFileSync(DATA_PATH,'base64');
        nonZipString = fs.readdirSync(NON_ZIP_PATH,'base64');
        badZipString = fs.readFileSync(BAD_ZIP_PATH, 'base64');
        badJsonString = fs.readFileSync(BAD_JSON_PATH, 'base64');
    });

    after(function () {
        Log.test('After: ' + (<any>this).test.parent.title);
    });

    afterEach(function () {
        Log.test('AfterTest: ' + (<any>this).currentTest.title);
        insightFace.removeDataset("courses");
    });

    it("Should be able to echo", function () {
        let out = Server.performEcho('echo');
        Log.test(JSON.stringify(out));
        sanityCheck(out);
        expect(out.code).to.equal(200);
        expect(out.body).to.deep.equal({message: 'echo...echo'});
    });

    it("Test Server", function() {

        // Init
        chai.use(chaiHttp);
        let server = new Server(4321);
        let URL = "http://127.0.0.1:4321";

        // Test
        expect(server).to.not.equal(undefined);
        try{
            Server.echo((<restify.Request>{}), null, null);
            expect.fail()
        } catch(err) {
            expect(err.message).to.equal("Cannot read property 'json' of null");
        }

        return server.start().then(function(success: boolean) {
            return chai.request(URL)
                .get("/")
        }).catch(function(err) {
            expect.fail()
        }).then(function(res: Response) {
            expect(res.status).to.be.equal(200);
            return chai.request(URL)
                .get("/echo/Hello")
        }).catch(function(err) {
            expect.fail()
        }).then(function(res: Response) {
            expect(res.status).to.be.equal(200);
            return server.start()
        }).then(function(success: boolean) {
            expect.fail();
        }).catch(function(err) {
            expect(err.code).to.equal('EADDRINUSE');
            return server.stop();
        }).catch(function(err) {
            expect.fail();
        });
    });

    it("Should be able to echo silence", function () {
        let out = Server.performEcho('');
        Log.test(JSON.stringify(out));
        sanityCheck(out);
        expect(out.code).to.equal(200);
        expect(out.body).to.deep.equal({message: '...'});
    });

    it("Should be able to handle a missing echo message sensibly", function () {
        let out = Server.performEcho(undefined);
        Log.test(JSON.stringify(out));
        sanityCheck(out);
        expect(out.code).to.equal(400);
        expect(out.body).to.deep.equal({error: 'Message not provided'});
    });

    it("Should be able to handle a null echo message sensibly", function () {
        let out = Server.performEcho(null);
        Log.test(JSON.stringify(out));
        sanityCheck(out);
        expect(out.code).to.equal(400);
        expect(out.body).to.have.property('error');
        expect(out.body).to.deep.equal({error: 'Message not provided'});
    });

    it("Should reject when given no dataset", function () {
        return insightFace.addDataset("courses", "").then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err.code).to.equal(400);
        })
    });

    it("Should reject when adding an invalid zip file", function () {
        return insightFace.addDataset("courses", "fsdfagiuyqweb").then(function (value: InsightResponse) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });

    it("Should tokenize JSON Simple", function () {
        t.addKeys(JSON.parse(testJSONSimple));
        return true;
    });
    it("Should tokenize JSON Complex", function () {
        t.addKeys(JSON.parse(testJSONComplex));
        return true;
    });

    it("REMOVEDATASET 404 - remove empty dataset", function () {
        return insightFace.removeDataset("courses").then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.equal(404);
        })
    });

    it("ADDDATASET 201 - old proper dataset", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
                Log.test('Value: ' + value.code);
                expect(value.code).to.deep.equal(201);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail()})
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("REMOVEDATASET 204 - given proper dataset", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
        }).catch((err) => {
            Log.test('Errorboo: ' + err);
            expect.fail();
        }).then(() => {
            return insightFace.removeDataset("courses").then(function (value: InsightResponse) {
                Log.test('Value: ' + value.code);
                expect(value.code).to.deep.equal(204);
            }).catch(function (err) {
                Log.test('Error: ' + err.body.error);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("ADDDATASET 204 - new proper dataset", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect(value.code).to.deep.equal(204);
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect.fail();
        })
    });

    it("ADDDATASET 400- not zip file", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", nonZipString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("ADDDATASET 400- no courses in zip file", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", badZipString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("ADDDATASET 400- bad json in zip file", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", badJsonString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("PERFORMQUERY 200 - new proper dataset", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(SIMPLE_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(SIMPLE_QUERY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.body.error);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });
});
