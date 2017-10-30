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
import Query from "../src/dataStructs/Query";
import OptionNode from "../src/controller/nodes/OptionNode";

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
    const SIMPLE_QUERY = { "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } };
    const GT_LT_QUERY = {
            "WHERE": {
                "AND": [
                    {
                        "GT": {
                            "courses_avg": 95.50
                        }
                    },
                    {
                        "LT": {
                            "courses_avg": 95.60
                        }
                    }

                ]
            },
            "OPTIONS": {
                "COLUMNS": [
                    "courses_avg",
                    "courses_dept"
                ],
                "ORDER": "courses_avg"
            }
        };
    const NOT_LT = {
        "WHERE": {
            "NOT": {
                "LT": {
                    "courses_avg": 99
                }
            }

        },
        "OPTIONS": {
            "COLUMNS": [
                "courses_avg",
                "courses_dept"
            ],
            "ORDER": "courses_avg"
        }
    };
    const NOT_LT_RESPONSE = {
        result:[
            {courses_avg: 99.19,courses_dept: 'cnps'},
            {courses_avg: 99.78,courses_dept: 'math'},
            {courses_avg: 99.78,courses_dept: 'math'}
            ]};
    const GT_LT_QUERY_RESPONSE = {
        result:[
            {courses_avg: 95.54,courses_dept: 'chbe'},
            {courses_avg: 95.54,courses_dept: 'chbe'},
            {courses_avg: 95.56,courses_dept: 'math'},
            {courses_avg: 95.56,courses_dept: 'math'},
            {courses_avg: 95.58,courses_dept: 'edcp'},
            {courses_avg: 95.58,courses_dept: 'edcp'}]};

    const BIG_RESPONSE = {"result":[{"courses_dept":"eosc","courses_id":"542","courses_avg":91},{"courses_dept":"apsc","courses_id":"279","courses_avg":91},{"courses_dept":"audi","courses_id":"551","courses_avg":91},{"courses_dept":"audi","courses_id":"551","courses_avg":91},{"courses_dept":"audi","courses_id":"553","courses_avg":91},{"courses_dept":"audi","courses_id":"553","courses_avg":91},{"courses_dept":"sowk","courses_id":"559","courses_avg":91},{"courses_dept":"sowk","courses_id":"525","courses_avg":91},{"courses_dept":"bmeg","courses_id":"599","courses_avg":91},{"courses_dept":"bmeg","courses_id":"599","courses_avg":91},{"courses_dept":"bmeg","courses_id":"599","courses_avg":91},{"courses_dept":"bota","courses_id":"544","courses_avg":91},{"courses_dept":"bota","courses_id":"544","courses_avg":91},{"courses_dept":"cell","courses_id":"505","courses_avg":91},{"courses_dept":"cell","courses_id":"505","courses_avg":91},{"courses_dept":"cell","courses_id":"507","courses_avg":91},{"courses_dept":"cell","courses_id":"507","courses_avg":91},{"courses_dept":"chbe","courses_id":"575","courses_avg":91},{"courses_dept":"chbe","courses_id":"575","courses_avg":91},{"courses_dept":"chbe","courses_id":"599","courses_avg":91},{"courses_dept":"chil","courses_id":"599","courses_avg":91},{"courses_dept":"chil","courses_id":"599","courses_avg":91},{"courses_dept":"civl","courses_id":"555","courses_avg":91},{"courses_dept":"civl","courses_id":"555","courses_avg":91},{"courses_dept":"cnps","courses_id":"365","courses_avg":91},{"courses_dept":"cnps","courses_id":"426","courses_avg":91},{"courses_dept":"sowk","courses_id":"525","courses_avg":91},{"courses_dept":"rhsc","courses_id":"587","courses_avg":91},{"courses_dept":"cpsc","courses_id":"501","courses_avg":91},{"courses_dept":"cpsc","courses_id":"501","courses_avg":91},{"courses_dept":"rhsc","courses_id":"509","courses_avg":91},{"courses_dept":"rhsc","courses_id":"505","courses_avg":91},{"courses_dept":"crwr","courses_id":"599","courses_avg":91},{"courses_dept":"phil","courses_id":"485","courses_avg":91},{"courses_dept":"phil","courses_id":"485","courses_avg":91},{"courses_dept":"path","courses_id":"531","courses_avg":91},{"courses_dept":"path","courses_id":"531","courses_avg":91},{"courses_dept":"obst","courses_id":"549","courses_avg":91},{"courses_dept":"nurs","courses_id":"595","courses_avg":91},{"courses_dept":"nurs","courses_id":"554","courses_avg":91},{"courses_dept":"dent","courses_id":"575","courses_avg":91},{"courses_dept":"econ","courses_id":"495","courses_avg":91},{"courses_dept":"econ","courses_id":"495","courses_avg":91},{"courses_dept":"nurs","courses_id":"554","courses_avg":91},{"courses_dept":"nurs","courses_id":"336","courses_avg":91},{"courses_dept":"econ","courses_id":"516","courses_avg":91},{"courses_dept":"econ","courses_id":"516","courses_avg":91},{"courses_dept":"econ","courses_id":"640","courses_avg":91},{"courses_dept":"musc","courses_id":"563","courses_avg":91},{"courses_dept":"musc","courses_id":"563","courses_avg":91},{"courses_dept":"edst","courses_id":"518","courses_avg":91},{"courses_dept":"edst","courses_id":"518","courses_avg":91},{"courses_dept":"eece","courses_id":"541","courses_avg":91},{"courses_dept":"eece","courses_id":"541","courses_avg":91},{"courses_dept":"eece","courses_id":"576","courses_avg":91},{"courses_dept":"eece","courses_id":"576","courses_avg":91},{"courses_dept":"eece","courses_id":"597","courses_avg":91},{"courses_dept":"eece","courses_id":"599","courses_avg":91},{"courses_dept":"arth","courses_id":"599","courses_avg":91},{"courses_dept":"eosc","courses_id":"542","courses_avg":91},{"courses_dept":"eosc","courses_id":"546","courses_avg":91},{"courses_dept":"eosc","courses_id":"546","courses_avg":91},{"courses_dept":"eosc","courses_id":"598","courses_avg":91},{"courses_dept":"epse","courses_id":"534","courses_avg":91},{"courses_dept":"epse","courses_id":"595","courses_avg":91},{"courses_dept":"mine","courses_id":"698","courses_avg":91},{"courses_dept":"mech","courses_id":"698","courses_avg":91},{"courses_dept":"mech","courses_id":"698","courses_avg":91},{"courses_dept":"fish","courses_id":"510","courses_avg":91},{"courses_dept":"fish","courses_id":"510","courses_avg":91},{"courses_dept":"fopr","courses_id":"262","courses_avg":91},{"courses_dept":"hinu","courses_id":"102","courses_avg":91},{"courses_dept":"math","courses_id":"551","courses_avg":91},{"courses_dept":"math","courses_id":"551","courses_avg":91},{"courses_dept":"math","courses_id":"539","courses_avg":91},{"courses_dept":"math","courses_id":"539","courses_avg":91},{"courses_dept":"nurs","courses_id":"424","courses_avg":95},{"courses_dept":"math","courses_id":"532","courses_avg":95},{"courses_dept":"kin","courses_id":"500","courses_avg":95},{"courses_dept":"kin","courses_id":"500","courses_avg":95},{"courses_dept":"kin","courses_id":"499","courses_avg":95},{"courses_dept":"epse","courses_id":"682","courses_avg":95},{"courses_dept":"epse","courses_id":"682","courses_avg":95},{"courses_dept":"epse","courses_id":"606","courses_avg":95},{"courses_dept":"mtrl","courses_id":"564","courses_avg":95},{"courses_dept":"mtrl","courses_id":"564","courses_avg":95},{"courses_dept":"mtrl","courses_id":"599","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"musc","courses_id":"553","courses_avg":95},{"courses_dept":"edcp","courses_id":"473","courses_avg":95},{"courses_dept":"edcp","courses_id":"473","courses_avg":95},{"courses_dept":"econ","courses_id":"516","courses_avg":95},{"courses_dept":"math","courses_id":"532","courses_avg":95},{"courses_dept":"nurs","courses_id":"424","courses_avg":95},{"courses_dept":"econ","courses_id":"516","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"obst","courses_id":"549","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"crwr","courses_id":"599","courses_avg":95},{"courses_dept":"psyc","courses_id":"501","courses_avg":95},{"courses_dept":"psyc","courses_id":"501","courses_avg":95},{"courses_dept":"rhsc","courses_id":"501","courses_avg":95},{"courses_dept":"cpsc","courses_id":"589","courses_avg":95},{"courses_dept":"cpsc","courses_id":"589","courses_avg":95},{"courses_dept":"cnps","courses_id":"535","courses_avg":95},{"courses_dept":"cnps","courses_id":"535","courses_avg":95},{"courses_dept":"bmeg","courses_id":"597","courses_avg":95},{"courses_dept":"bmeg","courses_id":"597","courses_avg":95},{"courses_dept":"sowk","courses_id":"570","courses_avg":95}]};
    const BIG_QUERY = {"WHERE": {
        "OR": [
            {
                "AND": [
                    {
                        "GT": {
                            "courses_avg": 90
                        }
                    },
                    {
                        "EQ": {
                            "courses_avg": 91
                        }
                    }
                ]
            },
            {
                "EQ": {
                    "courses_avg": 95
                }
            }
        ]
    },
        "OPTIONS": {
            "COLUMNS": [
                "courses_dept",
                "courses_id",
                "courses_avg"
            ],
            "ORDER": "courses_avg"
        }
    };
    const CS_310_QUERY = { "WHERE":{ "IS":{
        "courses_instructor": "*banias*"}
    }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_instructor" ] } };
    const PROF_QUERY = {
        "WHERE": {
            "AND": [
                {
                    "IS": {
                        "courses_dept": "adhe"
                    }
                },
                {
                    "IS": {
                        "courses_instructor": "c*"
                    }
                }

            ]
        },
        "OPTIONS": {
            "COLUMNS": [
                "courses_instructor",
                "courses_dept"
            ]
        }
    };
    const PROF_QUERY_REPSPONSE = {
        result:[
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'crisfield, erin',courses_dept: 'adhe'},
        {courses_instructor:'chan, jennifer',courses_dept: 'adhe'},
        {courses_instructor:'chan, jennifer',courses_dept: 'adhe'}
    ]};
    const SIMPLE_QUERY_BAD_ORDER = { "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_fail" } };
    const SIMPLE_QUERY_IS = '{ "WHERE":{ "IS":{ "courses_dept": nj } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';
    const COMPLEX_QUERY = { "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } };
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
    const COMPLEX_QUERY_RESPONSE = { result: [ { courses_dept: 'adhe', courses_id: '329', courses_avg: 90.02 }, { courses_dept: 'adhe', courses_id: '412', courses_avg: 90.16 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 90.17 }, { courses_dept: 'adhe', courses_id: '412', courses_avg: 90.18 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 90.5 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 90.72 }, { courses_dept: 'adhe', courses_id: '329', courses_avg: 90.82 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 90.85 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 91.29 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 91.33 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 91.33 }, { courses_dept: 'adhe', courses_id: '330', courses_avg: 91.48 }, { courses_dept: 'adhe', courses_id: '329', courses_avg: 92.54 }, { courses_dept: 'adhe', courses_id: '329', courses_avg: 93.33 }, { courses_dept: 'rhsc', courses_id: '501', courses_avg: 95 }, { courses_dept: 'bmeg', courses_id: '597', courses_avg: 95 }, { courses_dept: 'bmeg', courses_id: '597', courses_avg: 95 }, { courses_dept: 'cnps', courses_id: '535', courses_avg: 95 }, { courses_dept: 'cnps', courses_id: '535', courses_avg: 95 }, { courses_dept: 'cpsc', courses_id: '589', courses_avg: 95 }, { courses_dept: 'cpsc', courses_id: '589', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'crwr', courses_id: '599', courses_avg: 95 }, { courses_dept: 'sowk', courses_id: '570', courses_avg: 95 }, { courses_dept: 'econ', courses_id: '516', courses_avg: 95 }, { courses_dept: 'edcp', courses_id: '473', courses_avg: 95 }, { courses_dept: 'edcp', courses_id: '473', courses_avg: 95 }, { courses_dept: 'epse', courses_id: '606', courses_avg: 95 }, { courses_dept: 'epse', courses_id: '682', courses_avg: 95 }, { courses_dept: 'epse', courses_id: '682', courses_avg: 95 }, { courses_dept: 'kin', courses_id: '499', courses_avg: 95 }, { courses_dept: 'kin', courses_id: '500', courses_avg: 95 }, { courses_dept: 'kin', courses_id: '500', courses_avg: 95 }, { courses_dept: 'math', courses_id: '532', courses_avg: 95 }, { courses_dept: 'math', courses_id: '532', courses_avg: 95 }, { courses_dept: 'mtrl', courses_id: '564', courses_avg: 95 }, { courses_dept: 'mtrl', courses_id: '564', courses_avg: 95 }, { courses_dept: 'mtrl', courses_id: '599', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'musc', courses_id: '553', courses_avg: 95 }, { courses_dept: 'nurs', courses_id: '424', courses_avg: 95 }, { courses_dept: 'nurs', courses_id: '424', courses_avg: 95 }, { courses_dept: 'obst', courses_id: '549', courses_avg: 95 }, { courses_dept: 'psyc', courses_id: '501', courses_avg: 95 }, { courses_dept: 'psyc', courses_id: '501', courses_avg: 95 }, { courses_dept: 'econ', courses_id: '516', courses_avg: 95 }, { courses_dept: 'adhe', courses_id: '329', courses_avg: 96.11 } ] };
    const OR_QUERY = {
        "WHERE":{
            "AND": [{
                "GT": {
                    "courses_avg":99
                }
            },
                {
                    "EQ": {
                        "courses_fail":0
                    }
                }
            ]},
        "OPTIONS":{
            "COLUMNS":[
                "courses_dept",
                "courses_id",
                "courses_avg"
            ],
            "ORDER":"courses_avg"
        }
    };
    const OR_RESPONSE = {"result":[{"courses_dept":"cnps","courses_id":"574","courses_avg":99.19},{"courses_dept":"math","courses_id":"527","courses_avg":99.78},{"courses_dept":"math","courses_id":"527","courses_avg":99.78}]};

    const BIG_AND = {"result":[{"courses_dept":"epse","courses_id":"421","courses_avg":98.36},{"courses_dept":"epse","courses_id":"449","courses_avg":98.58},{"courses_dept":"epse","courses_id":"449","courses_avg":98.58},{"courses_dept":"epse","courses_id":"449","courses_avg":98.8},{"courses_dept":"spph","courses_id":"300","courses_avg":98.98},{"courses_dept":"spph","courses_id":"300","courses_avg":98.98}]};

    const BIG_AND_QUERY = {
        "WHERE":{
            "AND": [{
                "GT": {
                    "courses_avg":98
                }
            },
                {
                    "EQ": {
                        "courses_fail":0
                    }
                },
                {
                    "GT": {
                        "courses_pass":20
                    }
                }
            ]},
        "OPTIONS":{
            "COLUMNS":[
                "courses_dept",
                "courses_id",
                "courses_avg"
            ],
            "ORDER":"courses_avg"
        }
    };

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


    it("Option object receiving correct columns - SIMPLE", function () {
        t.addKeys((JSON.parse(testJSONSimple)));
        var q:Query = new Query(t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.columns[0] === "course_dept") && (optionObj.columns[1] === "courses_avg");
    });

    it("Option object receiving correct order - SIMPLE", function () {
        t.addKeys(SIMPLE_QUERY);
        var q:Query = new Query(t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.order[0] === "courses_avg");
    });

    it("Option object receiving correct order - COMPLEX", function () {
        t.addKeys(COMPLEX_QUERY);
        var q:Query = new Query(t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.order[0] === "courses_avg");
    });

    it("Option object receiving correct columns - COMPLEX", function () {
        t.addKeys(COMPLEX_QUERY);
        var q:Query = new Query(t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.columns[0] === "course_dept") && (optionObj.columns[1] === "courses_id") && (optionObj.columns[2] === "courses_avg");
    });

    it("Reject bad Order", function () {
        try {
            t.addKeys((JSON.parse(testJSONComplex)));
            var q: Query = new Query(t, null);
            q.parseFilter();
            var o: OptionNode = new OptionNode(t, null);
            o.parse();
            var optionObj = o.evaluate();
            console.log(optionObj);
            return false;
        }
        catch(e){
            return true;
        }
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

    it("PERFORMQUERY 200 - new proper dataset simple GT query", function () {
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

    it("PERFORMQUERY 200 - new proper dataset prof query", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(PROF_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(PROF_QUERY_REPSPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.body.error);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - new proper dataset complex query", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(COMPLEX_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(COMPLEX_QUERY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - new proper dataset gt lt query", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(GT_LT_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(GT_LT_QUERY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - new proper dataset not lt query", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(NOT_LT).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(NOT_LT_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - new proper find big", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(BIG_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(BIG_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - new proper find or", function () {
        this.timeout(15000);
        return insightFace.addDataset("courses", dataString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return insightFace.performQuery(OR_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(OR_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });
});
