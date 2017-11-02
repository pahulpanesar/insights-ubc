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
import TestConstants from "./testConstants";

describe("EchoSpec", function () {

    var test: TestConstants = new TestConstants();
    function sanityCheck(response: InsightResponse) {
        expect(response).to.have.property('code');
        expect(response).to.have.property('body');
        expect(response.code).to.be.a('number');
    }

    before(function () {
        Log.test('Before: ' + (<any>this).test.parent.title);
    });

    beforeEach(function () {
        Log.test('BeforeTest: ' + (<any>this).currentTest.title);
        test.insightFace = new InsightFacade();
        test.zip = new JSZip();
        // insightFace.removeDataset("courses");
        test.dataStringCourses = fs.readFileSync(test.COURSES_PATH,'base64');
        test.dataStringRooms = fs.readFileSync(test.ROOMS_PATH, 'base64');
        test.nonZipString = fs.readdirSync(test.NON_ZIP_PATH,'base64');
        test.badZipString = fs.readFileSync(test.BAD_ZIP_PATH, 'base64');
        test.badJsonString = fs.readFileSync(test.BAD_JSON_PATH, 'base64');
        test.badRoomString = fs.readFileSync(test.BAD_ROOM_PATH, 'base64');
    });

    after(function () {
        Log.test('After: ' + (<any>this).test.parent.title);
    });

    afterEach(function () {
        Log.test('AfterTest: ' + (<any>this).currentTest.title);
        test.insightFace.removeDataset("courses");
        test.insightFace.removeDataset("rooms");
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
        return test.insightFace.addDataset("courses", "").then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect(err.code).to.equal(400);
        })
    });

    it("Should reject when adding an invalid zip file", function () {
        return test.insightFace.addDataset("courses", "fsdfagiuyqweb").then(function (value: InsightResponse) {
            Log.test('Value: ' + value);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body);
            expect(err.code).to.equal(400);
        })
    });


    it("Option object receiving correct columns - SIMPLE", function () {
        test.t.addKeys((JSON.parse(test.testJSONSimple)));
        var q:Query = new Query(test.t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(test.t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.columns[0] === "course_dept") && (optionObj.columns[1] === "courses_avg");
    });

    it("Option object receiving correct order - SIMPLE", function () {
        test.t.addKeys(test.SIMPLE_QUERY);
        var q:Query = new Query(test.t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(test.t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.order[0] === "courses_avg");
    });

    it("Option object receiving correct order - COMPLEX", function () {
        test.t.addKeys(test.COMPLEX_QUERY);
        var q:Query = new Query(test.t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(test.t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.order[0] === "courses_avg");
    });

    it("Option object receiving correct columns - COMPLEX", function () {
        test.t.addKeys(test.COMPLEX_QUERY);
        var q:Query = new Query(test.t,null);
        q.parseFilter();
        var o:OptionNode = new OptionNode(test.t,null);
        o.parse();
        var optionObj = o.evaluate();
        console.log(optionObj);
        return (optionObj.columns[0] === "course_dept") && (optionObj.columns[1] === "courses_id") && (optionObj.columns[2] === "courses_avg");
    });

    it("Reject bad Order", function () {
        try {
            test. t.addKeys((JSON.parse(test.testJSONComplex)));
            var q: Query = new Query(test.t, null);
            q.parseFilter();
            var o: OptionNode = new OptionNode(test.t, null);
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
        return test.insightFace.removeDataset("courses").then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.equal(404);
        })
    });

    it("ADDDATASET 201 - old proper dataset", function () {
        this.timeout(5000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
        }).catch((err) => {
            Log.test('Errorboo: ' + err);
            expect.fail();
        }).then(() => {
            return test.insightFace.removeDataset("courses").then(function (value: InsightResponse) {
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect(value.code).to.deep.equal(204);
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect.fail();
        })
    });

    it("ADDDATASET 400- not zip file", function () {
        this.timeout(5000);
        return test.insightFace.addDataset("courses", test.nonZipString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("ADDDATASET 400- no courses in zip file", function () {
        this.timeout(5000);
        return test.insightFace.addDataset("courses", test.badZipString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("ADDDATASET 400- bad json in zip file", function () {
        this.timeout(5000);
        return test.insightFace.addDataset("courses", test.badJsonString).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(400);
        })
    });

    it("PERFORMQUERY 200 - new proper dataset simple GT query", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.SIMPLE_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.SIMPLE_QUERY_RESPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.PROF_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.PROF_QUERY_REPSPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.COMPLEX_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.COMPLEX_QUERY_RESPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.GT_LT_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.GT_LT_QUERY_RESPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.NOT_LT).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.NOT_LT_RESPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.BIG_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.BIG_RESPONSE);
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
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.OR_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.OR_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });
  
    it("PERFORMQUERY 200 - two nested ands", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.NESTED_AND_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.BIG_AND);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - excalibur", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.EXCALIBUR).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.EXCALIBUR_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 400 - test on string", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.SIMPLE_QUERY_IS_BAD).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect.fail();
            }).catch(function (err) {
                Log.test('Error: ' + err.body.error);
                expect(err.code).to.deep.equal(400);
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("ADDDATASET 204 - rooms", function () {
        this.timeout(5000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            expect(value.code).to.deep.equal(204);
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect.fail();
        })
    });

    it("isRoom - course", function () {
        test.t = new Tokenizer();
        test.t.addKeys(test.SIMPLE_QUERY);
        return !test.insightFace.isRoomQuery(test.t.tokens);
    });
    it("isRoom - room", function () {
        test.t = new Tokenizer();
        test.t.addKeys(test.ROOM_QUERY);
        return test.insightFace.isRoomQuery(test.t.tokens);
    });
    it("isRoom - course - mix", function () {
        try {
            test. t.addKeys(test.MIX_QUERY_COURSE);
            test.insightFace.isRoomQuery(test.t.tokens);
            return false;
        }
        catch(e){
            return e === "Malformed Query - Room/Course";
        }
    });
    it("isRoom - room - mix", function () {
        try {
            test. t.addKeys(test.MIX_QUERY_ROOM);
            test.insightFace.isRoomQuery(test.t.tokens);
            return false;
        }
        catch(e){
            return e === "Malformed Query - Room/Course";
        }
    });

    it("PERFORMQUERY 200 - simple room", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.SIMPLE_ROOM_QUERY).then(function (val: InsightResponse) {
                Log.test('Value: ' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.SIMPLE_ROOM_QUERY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.body.error);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY 200 - simple room 2", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.SIMPLE_ROOM_QUERY_2).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.SIMPLE_ROOM_QUERY_2_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err);
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err);
            expect.fail();
        })
    });

    it("PERFORMQUERY METRO", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.METRO).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                /*for(var i = 0; i < val.body.result.length; i++) {
                    console.log("ours:");
                    console.log(val.body.result[i]);
                    console.log("theirs:");
                    console.log(test.METRO_RESPONSE.result[i])
                }*/
                expect(val.body).to.deep.equal(test.METRO_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("PERFORMQUERY ROOM-NUMBER", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.ROOM_NUMBER_QUERY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.ROOM_NUMBER_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("DIESEL", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.DIESEL).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.DIESEL_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("NAUTTILUS", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.NAUTILUS).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.NAUTILUS_RESONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("NITRO", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.NITRO).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.NITRO_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("PISCES", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.PISCES).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.PISCES_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("GALLIUM", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("courses", test.dataStringCourses).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.GALLIUM).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                for(var i = 0; i < val.body.result.length; i++) {
                    console.log("ours:");
                    console.log(val.body.result[i]);
                    console.log("theirs:");
                    console.log(test.GALLIUM_RESPONSE.result[i])
                }
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.GALLIUM_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });
    it("ODYSSEY", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.ODYSSEY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.ODYSSEY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });

    it("OKELYDOKELY", function () {
        this.timeout(15000);
        return test.insightFace.addDataset("rooms", test.dataStringRooms).then(function (value: InsightResponse) {
            Log.test('Value: ' + value.code);
            return test.insightFace.performQuery(test.OKELY).then(function (val: InsightResponse) {
                Log.test('Value' + val.code);
                expect(val.code).to.deep.equal(200);
                expect(val.body).to.deep.equal(test.OKELY_RESPONSE);
            }).catch(function (err) {
                Log.test('Error: ' + err.toString());
                expect.fail();
            })
        }).catch(function (err) {
            Log.test('Error: ' + err.toString());
            expect.fail();
        })
    });

    it("PERFORMQUERY 424 - no dataset added", function () {
        this.timeout(15000);
        return test.insightFace.performQuery(test.SIMPLE_QUERY_IS_BAD).then(function (val: InsightResponse) {
            Log.test('Value' + val.code);
            expect.fail();
        }).catch(function (err) {
            Log.test('Error: ' + err.body.error);
            expect(err.code).to.deep.equal(424);
        })
    });
});
