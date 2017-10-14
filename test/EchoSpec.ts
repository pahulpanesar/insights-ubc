/**
 * Created by rtholmes on 2016-10-31.
 */

import Server from "../src/rest/Server";
import {expect} from 'chai';
import Log from "../src/Util";
import {InsightResponse} from "../src/controller/IInsightFacade";
import InsightFacade from "../src/controller/InsightFacade";
import Tokenizer from "../src/controller/Tokenizer";
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

    before(function () {
        Log.test('Before: ' + (<any>this).test.parent.title);
    });
    var testJSONComplex = '{ "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } }';
    var testJSONSimple = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
    var t = new Tokenizer();
    var insightFace: InsightFacade = null;
    var zip = null;
    let dataString: string = null;
    const DATA_PATH = './courses.zip';
    beforeEach(function () {
        Log.test('BeforeTest: ' + (<any>this).currentTest.title);
        insightFace = new InsightFacade();
        zip = new JSZip();
        fs.readFile(DATA_PATH,  function(err: any, data: any) {
            if(err) {
                console.log(err);
            }
            dataString = new Buffer(data).toString('base64');
        });
    });

    after(function () {
        Log.test('After: ' + (<any>this).test.parent.title);
    });

    afterEach(function () {
        Log.test('AfterTest: ' + (<any>this).currentTest.title);
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
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
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

    it("Simple Query", function() {
        var i:InsightFacade = new InsightFacade();
        console.log(i.performQuery(testJSONSimple));
        return true;
    });
    it("Should fulfill 201 when given new proper dataset", function () {
        this.timeout(5000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
                Log.test('Value: ' + value.code);
                expect(value.code).to.deep.equal(201);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        });

    it("Should fulfill 204 when given old proper dataset", function () {
        this.timeout(5000);
        insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
                Log.test('Value: ' + value.code);
                expect(value.code).to.deep.equal(204);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail()})
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Should remove and return 204 when given proper dataset", function () {
        insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            return insightFace.removeDataset("courses").then(function (value: InsightResponse) {
                Log.test('Value: ' + value.code);
                expect(value.code).to.deep.equal(204);
            }).catch(function (err) {
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("Should return 400 when given empty dataset", function () {
        return insightFace.removeDataset("courses").then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.code);
            expect(err.code).to.equal(400);
        })
    });
});
