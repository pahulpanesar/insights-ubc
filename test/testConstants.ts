
import Tokenizer from "../src/dataStructs/Tokenizer";
import InsightFacade from "../src/controller/InsightFacade";

export default class TestConstants {

    testJSONComplex = '{ "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } }';

    testJSONSimple = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';

    ROOM_QUERY = '{ "WHERE": { "IS": { "rooms_name": "DMP_*" } }, "OPTIONS": { "COLUMNS": [ "rooms_name" ], "ORDER": "rooms_name" } }';
    MIX_QUERY_COURSE = '"WHERE": { "AND": [ { "GT": { "courses_avg": 95.50 } }, { "IS": { "rooms_name": "DMP_*" } } ] }, "OPTIONS": { "COLUMNS": [ "courses_avg", "courses_dept" ], "ORDER": "courses_avg" } };';
    MIX_QUERY_ROOM= '"WHERE": { "AND": [ { "IS": { "rooms_name": "DMP_*" } } ,{ "GT": { "courses_avg": 95.50 } } ] }, "OPTIONS": { "COLUMNS": [ "courses_avg", "courses_dept" ], "ORDER": "courses_avg" } };';
    t = new Tokenizer();

    insightFace: InsightFacade = null;

    zip: any= null;
    dataStringCourses: string = null;
    dataStringRooms: string = null;
    nonZipString: string = null;
    badZipString: string = null;

    badJsonString: string = null;

    badRoomString: string = null;

    BAD_ROOM_PATH = './badRooms.zip';

    BAD_ZIP_PATH = './badcourses.zip';

    COURSES_PATH = './courses.zip';

    ROOMS_PATH = './rooms.zip';

    NON_ZIP_PATH = './courses';

    BAD_JSON_PATH = './badjson.zip';

    SIMPLE_QUERY = {
        "WHERE": {"GT": {"courses_avg": 97}},
        "OPTIONS": {"COLUMNS": ["courses_dept", "courses_avg"], "ORDER": "courses_avg"}
    };

    SIMPLE_ROOM_QUERY = { "WHERE": { "IS": { "rooms_name": "DMP_*" } }, "OPTIONS": { "COLUMNS": [ "rooms_name" ], "ORDER": "rooms_name" } };
    SIMPLE_ROOM_QUERY_RESPONSE = { "result": [{ "rooms_name": "DMP_101" }, { "rooms_name": "DMP_110" }, { "rooms_name": "DMP_201" }, { "rooms_name": "DMP_301" }, { "rooms_name": "DMP_310" }] };
    SIMPLE_ROOM_QUERY_2 = { "WHERE": { "IS": { "rooms_address": "*Agrono*" } }, "OPTIONS": { "COLUMNS": [ "rooms_address", "rooms_name" ] } };
    SIMPLE_ROOM_QUERY_2_RESPONSE = {"result":[{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4074"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4068"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4058"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4018"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4004"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3074"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3068"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3058"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3018"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3004"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_1001"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4072"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4062"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4052"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4016"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_4002"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3072"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3062"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3052"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3016"},{"rooms_address":"6363 Agronomy Road","rooms_name":"ORCH_3002"},{"rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_name":"DMP_310"},{"rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_name":"DMP_201"},{"rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_name":"DMP_101"},{"rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_name":"DMP_301"},{"rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_name":"DMP_110"}]};
    GT_LT_QUERY = {
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
    NOT_LT = {
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
    NOT_LT_RESPONSE = {
        result: [
            {courses_avg: 99.19, courses_dept: 'cnps'},
            {courses_avg: 99.78, courses_dept: 'math'},
            {courses_avg: 99.78, courses_dept: 'math'}
        ]
    };

    GT_LT_QUERY_RESPONSE = {
        result: [
            {courses_avg: 95.54, courses_dept: 'chbe'},
            {courses_avg: 95.54, courses_dept: 'chbe'},
            {courses_avg: 95.56, courses_dept: 'math'},
            {courses_avg: 95.56, courses_dept: 'math'},
            {courses_avg: 95.58, courses_dept: 'edcp'},
            {courses_avg: 95.58, courses_dept: 'edcp'}]
    };


    BIG_RESPONSE = {
        "result": [{
            "courses_dept": "eosc",
            "courses_id": "542",
            "courses_avg": 91
        }, {"courses_dept": "apsc", "courses_id": "279", "courses_avg": 91}, {
            "courses_dept": "audi",
            "courses_id": "551",
            "courses_avg": 91
        }, {"courses_dept": "audi", "courses_id": "551", "courses_avg": 91}, {
            "courses_dept": "audi",
            "courses_id": "553",
            "courses_avg": 91
        }, {"courses_dept": "audi", "courses_id": "553", "courses_avg": 91}, {
            "courses_dept": "sowk",
            "courses_id": "559",
            "courses_avg": 91
        }, {"courses_dept": "sowk", "courses_id": "525", "courses_avg": 91}, {
            "courses_dept": "bmeg",
            "courses_id": "599",
            "courses_avg": 91
        }, {"courses_dept": "bmeg", "courses_id": "599", "courses_avg": 91}, {
            "courses_dept": "bmeg",
            "courses_id": "599",
            "courses_avg": 91
        }, {"courses_dept": "bota", "courses_id": "544", "courses_avg": 91}, {
            "courses_dept": "bota",
            "courses_id": "544",
            "courses_avg": 91
        }, {"courses_dept": "cell", "courses_id": "505", "courses_avg": 91}, {
            "courses_dept": "cell",
            "courses_id": "505",
            "courses_avg": 91
        }, {"courses_dept": "cell", "courses_id": "507", "courses_avg": 91}, {
            "courses_dept": "cell",
            "courses_id": "507",
            "courses_avg": 91
        }, {"courses_dept": "chbe", "courses_id": "575", "courses_avg": 91}, {
            "courses_dept": "chbe",
            "courses_id": "575",
            "courses_avg": 91
        }, {"courses_dept": "chbe", "courses_id": "599", "courses_avg": 91}, {
            "courses_dept": "chil",
            "courses_id": "599",
            "courses_avg": 91
        }, {"courses_dept": "chil", "courses_id": "599", "courses_avg": 91}, {
            "courses_dept": "civl",
            "courses_id": "555",
            "courses_avg": 91
        }, {"courses_dept": "civl", "courses_id": "555", "courses_avg": 91}, {
            "courses_dept": "cnps",
            "courses_id": "365",
            "courses_avg": 91
        }, {"courses_dept": "cnps", "courses_id": "426", "courses_avg": 91}, {
            "courses_dept": "sowk",
            "courses_id": "525",
            "courses_avg": 91
        }, {"courses_dept": "rhsc", "courses_id": "587", "courses_avg": 91}, {
            "courses_dept": "cpsc",
            "courses_id": "501",
            "courses_avg": 91
        }, {"courses_dept": "cpsc", "courses_id": "501", "courses_avg": 91}, {
            "courses_dept": "rhsc",
            "courses_id": "509",
            "courses_avg": 91
        }, {"courses_dept": "rhsc", "courses_id": "505", "courses_avg": 91}, {
            "courses_dept": "crwr",
            "courses_id": "599",
            "courses_avg": 91
        }, {"courses_dept": "phil", "courses_id": "485", "courses_avg": 91}, {
            "courses_dept": "phil",
            "courses_id": "485",
            "courses_avg": 91
        }, {"courses_dept": "path", "courses_id": "531", "courses_avg": 91}, {
            "courses_dept": "path",
            "courses_id": "531",
            "courses_avg": 91
        }, {"courses_dept": "obst", "courses_id": "549", "courses_avg": 91}, {
            "courses_dept": "nurs",
            "courses_id": "595",
            "courses_avg": 91
        }, {"courses_dept": "nurs", "courses_id": "554", "courses_avg": 91}, {
            "courses_dept": "dent",
            "courses_id": "575",
            "courses_avg": 91
        }, {"courses_dept": "econ", "courses_id": "495", "courses_avg": 91}, {
            "courses_dept": "econ",
            "courses_id": "495",
            "courses_avg": 91
        }, {"courses_dept": "nurs", "courses_id": "554", "courses_avg": 91}, {
            "courses_dept": "nurs",
            "courses_id": "336",
            "courses_avg": 91
        }, {"courses_dept": "econ", "courses_id": "516", "courses_avg": 91}, {
            "courses_dept": "econ",
            "courses_id": "516",
            "courses_avg": 91
        }, {"courses_dept": "econ", "courses_id": "640", "courses_avg": 91}, {
            "courses_dept": "musc",
            "courses_id": "563",
            "courses_avg": 91
        }, {"courses_dept": "musc", "courses_id": "563", "courses_avg": 91}, {
            "courses_dept": "edst",
            "courses_id": "518",
            "courses_avg": 91
        }, {"courses_dept": "edst", "courses_id": "518", "courses_avg": 91}, {
            "courses_dept": "eece",
            "courses_id": "541",
            "courses_avg": 91
        }, {"courses_dept": "eece", "courses_id": "541", "courses_avg": 91}, {
            "courses_dept": "eece",
            "courses_id": "576",
            "courses_avg": 91
        }, {"courses_dept": "eece", "courses_id": "576", "courses_avg": 91}, {
            "courses_dept": "eece",
            "courses_id": "597",
            "courses_avg": 91
        }, {"courses_dept": "eece", "courses_id": "599", "courses_avg": 91}, {
            "courses_dept": "arth",
            "courses_id": "599",
            "courses_avg": 91
        }, {"courses_dept": "eosc", "courses_id": "542", "courses_avg": 91}, {
            "courses_dept": "eosc",
            "courses_id": "546",
            "courses_avg": 91
        }, {"courses_dept": "eosc", "courses_id": "546", "courses_avg": 91}, {
            "courses_dept": "eosc",
            "courses_id": "598",
            "courses_avg": 91
        }, {"courses_dept": "epse", "courses_id": "534", "courses_avg": 91}, {
            "courses_dept": "epse",
            "courses_id": "595",
            "courses_avg": 91
        }, {"courses_dept": "mine", "courses_id": "698", "courses_avg": 91}, {
            "courses_dept": "mech",
            "courses_id": "698",
            "courses_avg": 91
        }, {"courses_dept": "mech", "courses_id": "698", "courses_avg": 91}, {
            "courses_dept": "fish",
            "courses_id": "510",
            "courses_avg": 91
        }, {"courses_dept": "fish", "courses_id": "510", "courses_avg": 91}, {
            "courses_dept": "fopr",
            "courses_id": "262",
            "courses_avg": 91
        }, {"courses_dept": "hinu", "courses_id": "102", "courses_avg": 91}, {
            "courses_dept": "math",
            "courses_id": "551",
            "courses_avg": 91
        }, {"courses_dept": "math", "courses_id": "551", "courses_avg": 91}, {
            "courses_dept": "math",
            "courses_id": "539",
            "courses_avg": 91
        }, {"courses_dept": "math", "courses_id": "539", "courses_avg": 91}, {
            "courses_dept": "nurs",
            "courses_id": "424",
            "courses_avg": 95
        }, {"courses_dept": "math", "courses_id": "532", "courses_avg": 95}, {
            "courses_dept": "kin",
            "courses_id": "500",
            "courses_avg": 95
        }, {"courses_dept": "kin", "courses_id": "500", "courses_avg": 95}, {
            "courses_dept": "kin",
            "courses_id": "499",
            "courses_avg": 95
        }, {"courses_dept": "epse", "courses_id": "682", "courses_avg": 95}, {
            "courses_dept": "epse",
            "courses_id": "682",
            "courses_avg": 95
        }, {"courses_dept": "epse", "courses_id": "606", "courses_avg": 95}, {
            "courses_dept": "mtrl",
            "courses_id": "564",
            "courses_avg": 95
        }, {"courses_dept": "mtrl", "courses_id": "564", "courses_avg": 95}, {
            "courses_dept": "mtrl",
            "courses_id": "599",
            "courses_avg": 95
        }, {"courses_dept": "musc", "courses_id": "553", "courses_avg": 95}, {
            "courses_dept": "musc",
            "courses_id": "553",
            "courses_avg": 95
        }, {"courses_dept": "musc", "courses_id": "553", "courses_avg": 95}, {
            "courses_dept": "musc",
            "courses_id": "553",
            "courses_avg": 95
        }, {"courses_dept": "musc", "courses_id": "553", "courses_avg": 95}, {
            "courses_dept": "musc",
            "courses_id": "553",
            "courses_avg": 95
        }, {"courses_dept": "edcp", "courses_id": "473", "courses_avg": 95}, {
            "courses_dept": "edcp",
            "courses_id": "473",
            "courses_avg": 95
        }, {"courses_dept": "econ", "courses_id": "516", "courses_avg": 95}, {
            "courses_dept": "math",
            "courses_id": "532",
            "courses_avg": 95
        }, {"courses_dept": "nurs", "courses_id": "424", "courses_avg": 95}, {
            "courses_dept": "econ",
            "courses_id": "516",
            "courses_avg": 95
        }, {"courses_dept": "crwr", "courses_id": "599", "courses_avg": 95}, {
            "courses_dept": "crwr",
            "courses_id": "599",
            "courses_avg": 95
        }, {"courses_dept": "crwr", "courses_id": "599", "courses_avg": 95}, {
            "courses_dept": "obst",
            "courses_id": "549",
            "courses_avg": 95
        }, {"courses_dept": "crwr", "courses_id": "599", "courses_avg": 95}, {
            "courses_dept": "crwr",
            "courses_id": "599",
            "courses_avg": 95
        }, {"courses_dept": "crwr", "courses_id": "599", "courses_avg": 95}, {
            "courses_dept": "crwr",
            "courses_id": "599",
            "courses_avg": 95
        }, {"courses_dept": "psyc", "courses_id": "501", "courses_avg": 95}, {
            "courses_dept": "psyc",
            "courses_id": "501",
            "courses_avg": 95
        }, {"courses_dept": "rhsc", "courses_id": "501", "courses_avg": 95}, {
            "courses_dept": "cpsc",
            "courses_id": "589",
            "courses_avg": 95
        }, {"courses_dept": "cpsc", "courses_id": "589", "courses_avg": 95}, {
            "courses_dept": "cnps",
            "courses_id": "535",
            "courses_avg": 95
        }, {"courses_dept": "cnps", "courses_id": "535", "courses_avg": 95}, {
            "courses_dept": "bmeg",
            "courses_id": "597",
            "courses_avg": 95
        }, {"courses_dept": "bmeg", "courses_id": "597", "courses_avg": 95}, {
            "courses_dept": "sowk",
            "courses_id": "570",
            "courses_avg": 95
        }]
    };

    BIG_QUERY = {
        "WHERE": {
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

    PROF_QUERY = {
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

    PROF_QUERY_REPSPONSE = {
        result: [
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'crisfield, erin', courses_dept: 'adhe'},
            {courses_instructor: 'chan, jennifer', courses_dept: 'adhe'},
            {courses_instructor: 'chan, jennifer', courses_dept: 'adhe'}
        ]
    };

    SIMPLE_QUERY_BAD_ORDER = {
        "WHERE": {"GT": {"courses_avg": 97}},
        "OPTIONS": {"COLUMNS": ["courses_dept", "courses_avg"], "ORDER": "courses_fail"}
    };

    SIMPLE_QUERY_IS_BAD = '{ "WHERE": {"IS": {"courses_dept": nj } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';

    COMPLEX_QUERY = {
        "WHERE": {"OR": [{"AND": [{"GT": {"courses_avg": 90}}, {"IS": {"courses_dept": "adhe"}}]}, {"EQ": {"courses_avg": 95}}]},
        "OPTIONS": {"COLUMNS": ["courses_dept", "courses_id", "courses_avg"], "ORDER": "courses_avg"}
    };

    SIMPLE_QUERY_RESPONSE = {
        result:
            [{courses_dept: 'epse', courses_avg: 97.09},
                {courses_dept: 'math', courses_avg: 97.09},
                {courses_dept: 'math', courses_avg: 97.09},
                {courses_dept: 'epse', courses_avg: 97.09},
                {courses_dept: 'math', courses_avg: 97.25},
                {courses_dept: 'math', courses_avg: 97.25},
                {courses_dept: 'epse', courses_avg: 97.29},
                {courses_dept: 'epse', courses_avg: 97.29},
                {courses_dept: 'nurs', courses_avg: 97.33},
                {courses_dept: 'nurs', courses_avg: 97.33},
                {courses_dept: 'epse', courses_avg: 97.41},
                {courses_dept: 'epse', courses_avg: 97.41},
                {courses_dept: 'cnps', courses_avg: 97.47},
                {courses_dept: 'cnps', courses_avg: 97.47},
                {courses_dept: 'math', courses_avg: 97.48},
                {courses_dept: 'math', courses_avg: 97.48},
                {courses_dept: 'educ', courses_avg: 97.5},
                {courses_dept: 'nurs', courses_avg: 97.53},
                {courses_dept: 'nurs', courses_avg: 97.53},
                {courses_dept: 'epse', courses_avg: 97.67},
                {courses_dept: 'epse', courses_avg: 97.69},
                {courses_dept: 'epse', courses_avg: 97.78},
                {courses_dept: 'crwr', courses_avg: 98},
                {courses_dept: 'crwr', courses_avg: 98},
                {courses_dept: 'epse', courses_avg: 98.08},
                {courses_dept: 'nurs', courses_avg: 98.21},
                {courses_dept: 'nurs', courses_avg: 98.21},
                {courses_dept: 'epse', courses_avg: 98.36},
                {courses_dept: 'epse', courses_avg: 98.45},
                {courses_dept: 'epse', courses_avg: 98.45},
                {courses_dept: 'nurs', courses_avg: 98.5},
                {courses_dept: 'nurs', courses_avg: 98.5},
                {courses_dept: 'epse', courses_avg: 98.58},
                {courses_dept: 'nurs', courses_avg: 98.58},
                {courses_dept: 'nurs', courses_avg: 98.58},
                {courses_dept: 'epse', courses_avg: 98.58},
                {courses_dept: 'epse', courses_avg: 98.7},
                {courses_dept: 'nurs', courses_avg: 98.71},
                {courses_dept: 'nurs', courses_avg: 98.71},
                {courses_dept: 'eece', courses_avg: 98.75},
                {courses_dept: 'eece', courses_avg: 98.75},
                {courses_dept: 'epse', courses_avg: 98.76},
                {courses_dept: 'epse', courses_avg: 98.76},
                {courses_dept: 'epse', courses_avg: 98.8},
                {courses_dept: 'spph', courses_avg: 98.98},
                {courses_dept: 'spph', courses_avg: 98.98},
                {courses_dept: 'cnps', courses_avg: 99.19},
                {courses_dept: 'math', courses_avg: 99.78},
                {courses_dept: 'math', courses_avg: 99.78}]
    };

    COMPLEX_QUERY_RESPONSE = {
        result: [{
            courses_dept: 'adhe',
            courses_id: '329',
            courses_avg: 90.02
        }, {courses_dept: 'adhe', courses_id: '412', courses_avg: 90.16}, {
            courses_dept: 'adhe',
            courses_id: '330',
            courses_avg: 90.17
        }, {courses_dept: 'adhe', courses_id: '412', courses_avg: 90.18}, {
            courses_dept: 'adhe',
            courses_id: '330',
            courses_avg: 90.5
        }, {courses_dept: 'adhe', courses_id: '330', courses_avg: 90.72}, {
            courses_dept: 'adhe',
            courses_id: '329',
            courses_avg: 90.82
        }, {courses_dept: 'adhe', courses_id: '330', courses_avg: 90.85}, {
            courses_dept: 'adhe',
            courses_id: '330',
            courses_avg: 91.29
        }, {courses_dept: 'adhe', courses_id: '330', courses_avg: 91.33}, {
            courses_dept: 'adhe',
            courses_id: '330',
            courses_avg: 91.33
        }, {courses_dept: 'adhe', courses_id: '330', courses_avg: 91.48}, {
            courses_dept: 'adhe',
            courses_id: '329',
            courses_avg: 92.54
        }, {courses_dept: 'adhe', courses_id: '329', courses_avg: 93.33}, {
            courses_dept: 'rhsc',
            courses_id: '501',
            courses_avg: 95
        }, {courses_dept: 'bmeg', courses_id: '597', courses_avg: 95}, {
            courses_dept: 'bmeg',
            courses_id: '597',
            courses_avg: 95
        }, {courses_dept: 'cnps', courses_id: '535', courses_avg: 95}, {
            courses_dept: 'cnps',
            courses_id: '535',
            courses_avg: 95
        }, {courses_dept: 'cpsc', courses_id: '589', courses_avg: 95}, {
            courses_dept: 'cpsc',
            courses_id: '589',
            courses_avg: 95
        }, {courses_dept: 'crwr', courses_id: '599', courses_avg: 95}, {
            courses_dept: 'crwr',
            courses_id: '599',
            courses_avg: 95
        }, {courses_dept: 'crwr', courses_id: '599', courses_avg: 95}, {
            courses_dept: 'crwr',
            courses_id: '599',
            courses_avg: 95
        }, {courses_dept: 'crwr', courses_id: '599', courses_avg: 95}, {
            courses_dept: 'crwr',
            courses_id: '599',
            courses_avg: 95
        }, {courses_dept: 'crwr', courses_id: '599', courses_avg: 95}, {
            courses_dept: 'sowk',
            courses_id: '570',
            courses_avg: 95
        }, {courses_dept: 'econ', courses_id: '516', courses_avg: 95}, {
            courses_dept: 'edcp',
            courses_id: '473',
            courses_avg: 95
        }, {courses_dept: 'edcp', courses_id: '473', courses_avg: 95}, {
            courses_dept: 'epse',
            courses_id: '606',
            courses_avg: 95
        }, {courses_dept: 'epse', courses_id: '682', courses_avg: 95}, {
            courses_dept: 'epse',
            courses_id: '682',
            courses_avg: 95
        }, {courses_dept: 'kin', courses_id: '499', courses_avg: 95}, {
            courses_dept: 'kin',
            courses_id: '500',
            courses_avg: 95
        }, {courses_dept: 'kin', courses_id: '500', courses_avg: 95}, {
            courses_dept: 'math',
            courses_id: '532',
            courses_avg: 95
        }, {courses_dept: 'math', courses_id: '532', courses_avg: 95}, {
            courses_dept: 'mtrl',
            courses_id: '564',
            courses_avg: 95
        }, {courses_dept: 'mtrl', courses_id: '564', courses_avg: 95}, {
            courses_dept: 'mtrl',
            courses_id: '599',
            courses_avg: 95
        }, {courses_dept: 'musc', courses_id: '553', courses_avg: 95}, {
            courses_dept: 'musc',
            courses_id: '553',
            courses_avg: 95
        }, {courses_dept: 'musc', courses_id: '553', courses_avg: 95}, {
            courses_dept: 'musc',
            courses_id: '553',
            courses_avg: 95
        }, {courses_dept: 'musc', courses_id: '553', courses_avg: 95}, {
            courses_dept: 'musc',
            courses_id: '553',
            courses_avg: 95
        }, {courses_dept: 'nurs', courses_id: '424', courses_avg: 95}, {
            courses_dept: 'nurs',
            courses_id: '424',
            courses_avg: 95
        }, {courses_dept: 'obst', courses_id: '549', courses_avg: 95}, {
            courses_dept: 'psyc',
            courses_id: '501',
            courses_avg: 95
        }, {courses_dept: 'psyc', courses_id: '501', courses_avg: 95}, {
            courses_dept: 'econ',
            courses_id: '516',
            courses_avg: 95
        }, {courses_dept: 'adhe', courses_id: '329', courses_avg: 96.11}]
    };

    OR_QUERY = {
        "WHERE": {
            "AND": [{
                "GT": {
                    "courses_avg": 99
                }
            },
                {
                    "EQ": {
                        "courses_fail": 0
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
            "courses_href": "courses_avg"
        }
    };

    EXCALIBUR = {
        "WHERE": {
            "AND": [
                {
                    "OR": [{
                        "IS": {
                            "courses_dept": "adhe"
                        }
                    }, {
                        "IS": {
                            "courses_dept": "cpsc"
                        }
                    }]
                },
                {
                    "GT": {

                        "courses_avg": 93
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
    EXCALIBUR_RESPONSE = {
        "result": [{
            "courses_instructor": "bishundayal, deonarine",
            "courses_dept": "adhe"
        }, {
            "courses_instructor": "bishundayal, deonarine",
            "courses_dept": "adhe"
        }, {"courses_instructor": "tsiknis, georgios", "courses_dept": "cpsc"}, {
            "courses_instructor": "",
            "courses_dept": "cpsc"
        }, {"courses_instructor": "knorr, edwin max", "courses_dept": "cpsc"}, {
            "courses_instructor": "",
            "courses_dept": "cpsc"
        }, {"courses_instructor": "friedman, joel", "courses_dept": "cpsc"}, {
            "courses_instructor": "",
            "courses_dept": "cpsc"
        }, {"courses_instructor": "carenini, giuseppe", "courses_dept": "cpsc"}, {
            "courses_instructor": "",
            "courses_dept": "cpsc"
        }, {"courses_instructor": "", "courses_dept": "cpsc"}, {"courses_instructor": "", "courses_dept": "cpsc"}]
    };

    OR_RESPONSE = {
        "result": [{
            "courses_dept": "cnps",
            "courses_id": "574",
            "courses_avg": 99.19
        }, {"courses_dept": "math", "courses_id": "527", "courses_avg": 99.78}, {
            "courses_dept": "math",
            "courses_id": "527",
            "courses_avg": 99.78
        }]
    };


    BIG_AND = {
        "result": [{"courses_dept": "epse", "courses_id": "421", "courses_avg": 98.36}, {
            "courses_dept": "epse",
            "courses_id": "449",
            "courses_avg": 98.58
        }, {"courses_dept": "epse", "courses_id": "449", "courses_avg": 98.58}, {
            "courses_dept": "epse",
            "courses_id": "449",
            "courses_avg": 98.8
        }, {"courses_dept": "spph", "courses_id": "300", "courses_avg": 98.98}, {
            "courses_dept": "spph",
            "courses_id": "300",
            "courses_avg": 98.98
        }]
    };


    BIG_AND_QUERY = {
        "WHERE": {
            "AND": [{
                "GT": {
                    "courses_avg": 98
                }
            },
                {
                    "EQ": {
                        "courses_fail": 0
                    }
                },
                {
                    "GT": {
                        "courses_pass": 20
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

    NESTED_AND_QUERY = {
        "WHERE": {
            "AND": [
                {
                    "AND": [{
                        "GT": {
                            "courses_avg": 98
                        }
                    },
                        {
                            "EQ": {
                                "courses_fail": 0
                            }
                        }]
                },
                {
                    "AND": [{
                        "GT": {
                            "courses_pass": 20
                        }
                    },
                        {
                            "EQ": {
                                "courses_fail": 0
                            }
                        }]
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

    ROOM_NUMBER_QUERY = { "WHERE": { "GT": { "rooms_seats": 75 } }, "OPTIONS": { "COLUMNS": [ "rooms_number" ], "ORDER": "rooms_number" } };
    ROOM_NUMBER_RESPONSE = {"result":[{"rooms_number":"098"},{"rooms_number":"1"},{"rooms_number":"100"},{"rooms_number":"100"},{"rooms_number":"100"},{"rooms_number":"100"},{"rooms_number":"100"},{"rooms_number":"1001"},{"rooms_number":"1002"},{"rooms_number":"1003"},{"rooms_number":"1005"},{"rooms_number":"101"},{"rooms_number":"1012"},{"rooms_number":"1013"},{"rooms_number":"102"},{"rooms_number":"102"},{"rooms_number":"104"},{"rooms_number":"105"},{"rooms_number":"110"},{"rooms_number":"1100"},{"rooms_number":"1101"},{"rooms_number":"120"},{"rooms_number":"1201"},{"rooms_number":"1202"},{"rooms_number":"121"},{"rooms_number":"122"},{"rooms_number":"1221"},{"rooms_number":"1250"},{"rooms_number":"153"},{"rooms_number":"166"},{"rooms_number":"182"},{"rooms_number":"2"},{"rooms_number":"200"},{"rooms_number":"200"},{"rooms_number":"200"},{"rooms_number":"2000"},{"rooms_number":"201"},{"rooms_number":"201"},{"rooms_number":"201"},{"rooms_number":"2012"},{"rooms_number":"202"},{"rooms_number":"202"},{"rooms_number":"207"},{"rooms_number":"2200"},{"rooms_number":"220A"},{"rooms_number":"220B"},{"rooms_number":"220C"},{"rooms_number":"221"},{"rooms_number":"222"},{"rooms_number":"228"},{"rooms_number":"254"},{"rooms_number":"254"},{"rooms_number":"261"},{"rooms_number":"3"},{"rooms_number":"301"},{"rooms_number":"301"},{"rooms_number":"310"},{"rooms_number":"4"},{"rooms_number":"5"},{"rooms_number":"6"},{"rooms_number":"60"},{"rooms_number":"A"},{"rooms_number":"A101"},{"rooms_number":"A102"},{"rooms_number":"A103"},{"rooms_number":"A104"},{"rooms_number":"A201"},{"rooms_number":"A202"},{"rooms_number":"A203"},{"rooms_number":"B150"},{"rooms_number":"B213"},{"rooms_number":"B215"},{"rooms_number":"B250"},{"rooms_number":"B313"},{"rooms_number":"B315"},{"rooms_number":"C124"},{"rooms_number":"C126"},{"rooms_number":"D200"},{"rooms_number":"D300"}]};
    METRO = { "WHERE": { "GT": { "rooms_seats": 75 } }, "OPTIONS": { "COLUMNS": [ "rooms_shortname" ], "ORDER": "rooms_shortname" } };
    METRO_RESPONSE = {"result":[{"rooms_shortname":"AERL"},{"rooms_shortname":"ALRD"},{"rooms_shortname":"ANGU"},{"rooms_shortname":"ANGU"},{"rooms_shortname":"ANSO"},{"rooms_shortname":"BIOL"},{"rooms_shortname":"BIOL"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"BUCH"},{"rooms_shortname":"CEME"},{"rooms_shortname":"CHBE"},{"rooms_shortname":"CHBE"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CHEM"},{"rooms_shortname":"CIRS"},{"rooms_shortname":"DMP"},{"rooms_shortname":"DMP"},{"rooms_shortname":"DMP"},{"rooms_shortname":"ESB"},{"rooms_shortname":"ESB"},{"rooms_shortname":"ESB"},{"rooms_shortname":"FNH"},{"rooms_shortname":"FRDM"},{"rooms_shortname":"FSC"},{"rooms_shortname":"FSC"},{"rooms_shortname":"GEOG"},{"rooms_shortname":"GEOG"},{"rooms_shortname":"HEBB"},{"rooms_shortname":"HENN"},{"rooms_shortname":"HENN"},{"rooms_shortname":"HENN"},{"rooms_shortname":"IBLC"},{"rooms_shortname":"IBLC"},{"rooms_shortname":"IONA"},{"rooms_shortname":"LASR"},{"rooms_shortname":"LASR"},{"rooms_shortname":"LSC"},{"rooms_shortname":"LSC"},{"rooms_shortname":"LSC"},{"rooms_shortname":"LSK"},{"rooms_shortname":"LSK"},{"rooms_shortname":"MATH"},{"rooms_shortname":"MATX"},{"rooms_shortname":"MCLD"},{"rooms_shortname":"MCLD"},{"rooms_shortname":"MCLD"},{"rooms_shortname":"MCML"},{"rooms_shortname":"OSBO"},{"rooms_shortname":"PHRM"},{"rooms_shortname":"PHRM"},{"rooms_shortname":"SCRF"},{"rooms_shortname":"SRC"},{"rooms_shortname":"SRC"},{"rooms_shortname":"SRC"},{"rooms_shortname":"SWNG"},{"rooms_shortname":"SWNG"},{"rooms_shortname":"SWNG"},{"rooms_shortname":"SWNG"},{"rooms_shortname":"WESB"},{"rooms_shortname":"WESB"},{"rooms_shortname":"WOOD"},{"rooms_shortname":"WOOD"},{"rooms_shortname":"WOOD"},{"rooms_shortname":"WOOD"},{"rooms_shortname":"WOOD"},{"rooms_shortname":"WOOD"}]};
    DIESEL = { "WHERE": { "AND":[ {"EQ": { "rooms_lat": 49.26044 }},{ "EQ": { "rooms_lon": -123.24886 }}] }, "OPTIONS": { "COLUMNS": [ "rooms_fullname" ], "ORDER": "rooms_fullname" } };
    DIESEL_RESPONSE = {"result":[{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"},{"rooms_fullname":"Forest Sciences Centre"}]};
    NAUTILUS = { "WHERE": { "IS": { "rooms_type": "Small Group" } }, "OPTIONS": { "COLUMNS": [ "rooms_name" ], "ORDER": "rooms_name" } };
    NAUTILUS_RESONSE = {"result":[{"rooms_name":"ANGU_232"},{"rooms_name":"ANGU_292"},{"rooms_name":"ANGU_332"},{"rooms_name":"ANGU_339"},{"rooms_name":"ANSO_202"},{"rooms_name":"ANSO_203"},{"rooms_name":"ANSO_205"},{"rooms_name":"AUDX_142"},{"rooms_name":"AUDX_157"},{"rooms_name":"BIOL_1503"},{"rooms_name":"BIOL_2519"},{"rooms_name":"BUCH_B216"},{"rooms_name":"BUCH_B302"},{"rooms_name":"BUCH_B304"},{"rooms_name":"BUCH_B306"},{"rooms_name":"BUCH_B307"},{"rooms_name":"BUCH_B308"},{"rooms_name":"BUCH_B310"},{"rooms_name":"BUCH_B312"},{"rooms_name":"BUCH_B316"},{"rooms_name":"BUCH_B319"},{"rooms_name":"BUCH_D205"},{"rooms_name":"BUCH_D207"},{"rooms_name":"BUCH_D209"},{"rooms_name":"BUCH_D213"},{"rooms_name":"BUCH_D214"},{"rooms_name":"BUCH_D216"},{"rooms_name":"BUCH_D221"},{"rooms_name":"BUCH_D228"},{"rooms_name":"BUCH_D229"},{"rooms_name":"BUCH_D304"},{"rooms_name":"BUCH_D306"},{"rooms_name":"BUCH_D307"},{"rooms_name":"BUCH_D313"},{"rooms_name":"BUCH_D315"},{"rooms_name":"BUCH_D319"},{"rooms_name":"BUCH_D323"},{"rooms_name":"BUCH_D325"},{"rooms_name":"CEME_1206"},{"rooms_name":"CEME_1210"},{"rooms_name":"DMP_101"},{"rooms_name":"DMP_201"},{"rooms_name":"FNH_20"},{"rooms_name":"FNH_30"},{"rooms_name":"FNH_320"},{"rooms_name":"FORW_317"},{"rooms_name":"FORW_519"},{"rooms_name":"FSC_1002"},{"rooms_name":"FSC_1402"},{"rooms_name":"FSC_1611"},{"rooms_name":"FSC_1613"},{"rooms_name":"FSC_1615"},{"rooms_name":"FSC_1617"},{"rooms_name":"GEOG_214"},{"rooms_name":"GEOG_242"},{"rooms_name":"HENN_301"},{"rooms_name":"HENN_302"},{"rooms_name":"HENN_304"},{"rooms_name":"IBLC_156"},{"rooms_name":"IBLC_157"},{"rooms_name":"IBLC_158"},{"rooms_name":"IBLC_185"},{"rooms_name":"IBLC_191"},{"rooms_name":"IBLC_192"},{"rooms_name":"IBLC_193"},{"rooms_name":"IBLC_194"},{"rooms_name":"IBLC_195"},{"rooms_name":"IBLC_263"},{"rooms_name":"IBLC_264"},{"rooms_name":"IBLC_265"},{"rooms_name":"IBLC_266"},{"rooms_name":"IBLC_460"},{"rooms_name":"IBLC_461"},{"rooms_name":"LASR_211"},{"rooms_name":"LASR_5C"},{"rooms_name":"MATH_102"},{"rooms_name":"MATH_202"},{"rooms_name":"MATH_225"},{"rooms_name":"MCLD_220"},{"rooms_name":"MCML_256"},{"rooms_name":"MCML_260"},{"rooms_name":"MCML_358"},{"rooms_name":"MCML_360A"},{"rooms_name":"MCML_360B"},{"rooms_name":"MCML_360C"},{"rooms_name":"MCML_360D"},{"rooms_name":"MCML_360E"},{"rooms_name":"MCML_360F"},{"rooms_name":"MCML_360G"},{"rooms_name":"MCML_360H"},{"rooms_name":"MCML_360J"},{"rooms_name":"MCML_360K"},{"rooms_name":"MCML_360L"},{"rooms_name":"MCML_360M"},{"rooms_name":"OSBO_203A"},{"rooms_name":"OSBO_203B"},{"rooms_name":"PCOH_1008"},{"rooms_name":"PCOH_1009"},{"rooms_name":"PCOH_1011"},{"rooms_name":"PCOH_1215"},{"rooms_name":"PCOH_1302"},{"rooms_name":"PHRM_3112"},{"rooms_name":"PHRM_3114"},{"rooms_name":"PHRM_3115"},{"rooms_name":"PHRM_3116"},{"rooms_name":"PHRM_3118"},{"rooms_name":"PHRM_3120"},{"rooms_name":"PHRM_3122"},{"rooms_name":"PHRM_3124"},{"rooms_name":"SCRF_1003"},{"rooms_name":"SCRF_1004"},{"rooms_name":"SCRF_1005"},{"rooms_name":"SCRF_1020"},{"rooms_name":"SCRF_1021"},{"rooms_name":"SCRF_1022"},{"rooms_name":"SCRF_1023"},{"rooms_name":"SCRF_1024"},{"rooms_name":"SCRF_1328"},{"rooms_name":"SCRF_200"},{"rooms_name":"SCRF_201"},{"rooms_name":"SCRF_202"},{"rooms_name":"SCRF_203"},{"rooms_name":"SCRF_204"},{"rooms_name":"SCRF_204A"},{"rooms_name":"SCRF_205"},{"rooms_name":"SCRF_206"},{"rooms_name":"SCRF_207"},{"rooms_name":"SCRF_208"},{"rooms_name":"SCRF_209"},{"rooms_name":"SCRF_210"},{"rooms_name":"SOWK_122"},{"rooms_name":"SOWK_324"},{"rooms_name":"SOWK_326"},{"rooms_name":"SPPH_143"},{"rooms_name":"SPPH_B108"},{"rooms_name":"SPPH_B112"},{"rooms_name":"SPPH_B136"},{"rooms_name":"SPPH_B138"},{"rooms_name":"SWNG_106"},{"rooms_name":"SWNG_108"},{"rooms_name":"SWNG_110"},{"rooms_name":"SWNG_306"},{"rooms_name":"SWNG_308"},{"rooms_name":"SWNG_310"},{"rooms_name":"SWNG_406"},{"rooms_name":"SWNG_408"},{"rooms_name":"SWNG_410"},{"rooms_name":"UCLL_101"},{"rooms_name":"WOOD_B75"},{"rooms_name":"WOOD_B79"},{"rooms_name":"WOOD_G41"},{"rooms_name":"WOOD_G44"},{"rooms_name":"WOOD_G53"},{"rooms_name":"WOOD_G55"},{"rooms_name":"WOOD_G57"},{"rooms_name":"WOOD_G59"},{"rooms_name":"WOOD_G65"},{"rooms_name":"WOOD_G66"}]};
    NITRO = { "WHERE": { "IS": { "rooms_furniture": "Classroom-Movable Tables & Chairs" } }, "OPTIONS": { "COLUMNS": [ "rooms_name" ], "ORDER": "rooms_name" } };
    NITRO_RESPONSE = {"result":[{"rooms_name":"ALRD_112"},{"rooms_name":"ALRD_113"},{"rooms_name":"ANGU_232"},{"rooms_name":"ANGU_254"},{"rooms_name":"ANGU_292"},{"rooms_name":"ANGU_293"},{"rooms_name":"ANGU_296"},{"rooms_name":"ANGU_332"},{"rooms_name":"ANGU_339"},{"rooms_name":"ANGU_432"},{"rooms_name":"ANGU_435"},{"rooms_name":"ANGU_437"},{"rooms_name":"ANSO_202"},{"rooms_name":"AUDX_142"},{"rooms_name":"AUDX_157"},{"rooms_name":"BIOL_1503"},{"rooms_name":"BIOL_2519"},{"rooms_name":"BRKX_2367"},{"rooms_name":"BUCH_B141"},{"rooms_name":"BUCH_B142"},{"rooms_name":"BUCH_B216"},{"rooms_name":"BUCH_B312"},{"rooms_name":"BUCH_B316"},{"rooms_name":"BUCH_B318"},{"rooms_name":"BUCH_D201"},{"rooms_name":"BUCH_D204"},{"rooms_name":"BUCH_D205"},{"rooms_name":"BUCH_D207"},{"rooms_name":"BUCH_D209"},{"rooms_name":"BUCH_D214"},{"rooms_name":"BUCH_D221"},{"rooms_name":"BUCH_D229"},{"rooms_name":"BUCH_D315"},{"rooms_name":"BUCH_D319"},{"rooms_name":"BUCH_D323"},{"rooms_name":"BUCH_D325"},{"rooms_name":"CEME_1206"},{"rooms_name":"CEME_1210"},{"rooms_name":"CHBE_103"},{"rooms_name":"DMP_101"},{"rooms_name":"DMP_201"},{"rooms_name":"EOSM_135"},{"rooms_name":"FNH_30"},{"rooms_name":"FORW_317"},{"rooms_name":"FORW_519"},{"rooms_name":"FSC_1002"},{"rooms_name":"FSC_1402"},{"rooms_name":"FSC_1611"},{"rooms_name":"FSC_1613"},{"rooms_name":"FSC_1615"},{"rooms_name":"FSC_1617"},{"rooms_name":"GEOG_101"},{"rooms_name":"GEOG_147"},{"rooms_name":"GEOG_200"},{"rooms_name":"GEOG_201"},{"rooms_name":"HEBB_10"},{"rooms_name":"HEBB_12"},{"rooms_name":"HEBB_13"},{"rooms_name":"HENN_301"},{"rooms_name":"HENN_302"},{"rooms_name":"HENN_304"},{"rooms_name":"IBLC_156"},{"rooms_name":"IBLC_157"},{"rooms_name":"IBLC_158"},{"rooms_name":"IBLC_185"},{"rooms_name":"IBLC_191"},{"rooms_name":"IBLC_195"},{"rooms_name":"IBLC_261"},{"rooms_name":"IBLC_264"},{"rooms_name":"IBLC_265"},{"rooms_name":"IBLC_460"},{"rooms_name":"IONA_633"},{"rooms_name":"LASR_211"},{"rooms_name":"LASR_5C"},{"rooms_name":"LSK_460"},{"rooms_name":"LSK_462"},{"rooms_name":"MATH_102"},{"rooms_name":"MATH_104"},{"rooms_name":"MATH_203"},{"rooms_name":"MCLD_214"},{"rooms_name":"MCLD_220"},{"rooms_name":"MCLD_242"},{"rooms_name":"MCLD_254"},{"rooms_name":"MCML_154"},{"rooms_name":"MCML_256"},{"rooms_name":"MCML_260"},{"rooms_name":"MCML_358"},{"rooms_name":"MCML_360M"},{"rooms_name":"ORCH_3002"},{"rooms_name":"ORCH_3058"},{"rooms_name":"ORCH_3074"},{"rooms_name":"ORCH_4058"},{"rooms_name":"ORCH_4068"},{"rooms_name":"OSBO_203A"},{"rooms_name":"OSBO_A"},{"rooms_name":"PCOH_1001"},{"rooms_name":"PCOH_1002"},{"rooms_name":"PCOH_1009"},{"rooms_name":"PCOH_1011"},{"rooms_name":"PCOH_1215"},{"rooms_name":"PCOH_1302"},{"rooms_name":"PHRM_3112"},{"rooms_name":"PHRM_3114"},{"rooms_name":"PHRM_3115"},{"rooms_name":"PHRM_3116"},{"rooms_name":"PHRM_3118"},{"rooms_name":"PHRM_3120"},{"rooms_name":"PHRM_3122"},{"rooms_name":"PHRM_3124"},{"rooms_name":"PHRM_3208"},{"rooms_name":"SCRF_1003"},{"rooms_name":"SCRF_1004"},{"rooms_name":"SCRF_1005"},{"rooms_name":"SCRF_1020"},{"rooms_name":"SCRF_1021"},{"rooms_name":"SCRF_1022"},{"rooms_name":"SCRF_1023"},{"rooms_name":"SCRF_1024"},{"rooms_name":"SCRF_1328"},{"rooms_name":"SCRF_200"},{"rooms_name":"SCRF_202"},{"rooms_name":"SCRF_204"},{"rooms_name":"SCRF_204A"},{"rooms_name":"SCRF_205"},{"rooms_name":"SCRF_206"},{"rooms_name":"SCRF_207"},{"rooms_name":"SCRF_208"},{"rooms_name":"SCRF_209"},{"rooms_name":"SCRF_210"},{"rooms_name":"SOWK_122"},{"rooms_name":"SOWK_324"},{"rooms_name":"SOWK_326"},{"rooms_name":"SPPH_B112"},{"rooms_name":"SPPH_B136"},{"rooms_name":"SPPH_B138"},{"rooms_name":"SRC_220A"},{"rooms_name":"SRC_220B"},{"rooms_name":"SRC_220C"},{"rooms_name":"SWNG_105"},{"rooms_name":"SWNG_106"},{"rooms_name":"SWNG_107"},{"rooms_name":"SWNG_108"},{"rooms_name":"SWNG_109"},{"rooms_name":"SWNG_110"},{"rooms_name":"SWNG_305"},{"rooms_name":"SWNG_306"},{"rooms_name":"SWNG_307"},{"rooms_name":"SWNG_308"},{"rooms_name":"SWNG_309"},{"rooms_name":"SWNG_310"},{"rooms_name":"SWNG_405"},{"rooms_name":"SWNG_407"},{"rooms_name":"SWNG_409"},{"rooms_name":"SWNG_410"},{"rooms_name":"UCLL_101"},{"rooms_name":"UCLL_107"},{"rooms_name":"WOOD_B75"},{"rooms_name":"WOOD_G41"},{"rooms_name":"WOOD_G44"},{"rooms_name":"WOOD_G53"},{"rooms_name":"WOOD_G55"},{"rooms_name":"WOOD_G57"},{"rooms_name":"WOOD_G59"},{"rooms_name":"WOOD_G65"},{"rooms_name":"WOOD_G66"}]};
    PISCES = { "WHERE": { "IS": { "rooms_name": "DMP_*" } }, "OPTIONS": { "COLUMNS": [ "rooms_href" ], "ORDER": "rooms_href" } };
    PISCES_RESPONSE = {"result":[{"rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-101"},{"rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-110"},{"rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-201"},{"rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-301"},{"rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-310"}]};
    GALLIUM = { "WHERE": {"AND":[{ "EQ": { "courses_year": 1900 } }, {"EQ":{"courses_avg": 95.0}}]}, "OPTIONS": { "COLUMNS": [ "courses_id", "courses_year" ], "ORDER": "courses_year" } };
    GALLIUM_RESPONSE= {"result":[{"courses_id":"532","courses_year":1900},{"courses_id":"597","courses_year":1900},{"courses_id":"589","courses_year":1900},{"courses_id":"599","courses_year":1900},{"courses_id":"516","courses_year":1900},{"courses_id":"473","courses_year":1900},{"courses_id":"682","courses_year":1900},{"courses_id":"535","courses_year":1900},{"courses_id":"564","courses_year":1900},{"courses_id":"553","courses_year":1900},{"courses_id":"553","courses_year":1900},{"courses_id":"553","courses_year":1900},{"courses_id":"424","courses_year":1900},{"courses_id":"549","courses_year":1900},{"courses_id":"501","courses_year":1900}]};
        PLENTY_OF_SEATS = {
        "WHERE":{
            "GT":{
                "rooms_seats":50
            }
        },
        "OPTIONS":{
            "COLUMNS":[
                "rooms_shortname","rooms_seats"

            ],
            "ORDER":"rooms_seats"
        }
    };
    PLENTY_OF_SEATS_RESPONSE = {"result":[{"rooms_shortname":"LASR","rooms_seats":51},{"rooms_shortname":"ANGU","rooms_seats":53},{"rooms_shortname":"HEBB","rooms_seats":54},{"rooms_shortname":"ANGU","rooms_seats":54},{"rooms_shortname":"ANGU","rooms_seats":54},{"rooms_shortname":"FNH","rooms_seats":54},{"rooms_shortname":"ANGU","rooms_seats":54},{"rooms_shortname":"HEBB","rooms_seats":54},{"rooms_shortname":"HEBB","rooms_seats":54},{"rooms_shortname":"ANGU","rooms_seats":54},{"rooms_shortname":"UCLL","rooms_seats":55},{"rooms_shortname":"BUCH","rooms_seats":56},{"rooms_shortname":"ANGU","rooms_seats":58},{"rooms_shortname":"ANGU","rooms_seats":60},{"rooms_shortname":"GEOG","rooms_seats":60},{"rooms_shortname":"GEOG","rooms_seats":60},{"rooms_shortname":"ANGU","rooms_seats":60},{"rooms_shortname":"MATH","rooms_seats":60},{"rooms_shortname":"MCLD","rooms_seats":60},{"rooms_shortname":"SCRF","rooms_seats":60},{"rooms_shortname":"MCLD","rooms_seats":60},{"rooms_shortname":"CHBE","rooms_seats":60},{"rooms_shortname":"LASR","rooms_seats":60},{"rooms_shortname":"CEME","rooms_seats":62},{"rooms_shortname":"FORW","rooms_seats":63},{"rooms_shortname":"BUCH","rooms_seats":65},{"rooms_shortname":"BUCH","rooms_seats":65},{"rooms_shortname":"BUCH","rooms_seats":65},{"rooms_shortname":"FSC","rooms_seats":65},{"rooms_shortname":"BUCH","rooms_seats":65},{"rooms_shortname":"FSC","rooms_seats":65},{"rooms_shortname":"SPPH","rooms_seats":66},{"rooms_shortname":"ANGU","rooms_seats":68},{"rooms_shortname":"SOWK","rooms_seats":68},{"rooms_shortname":"ANGU","rooms_seats":68},{"rooms_shortname":"ANGU","rooms_seats":68},{"rooms_shortname":"ANGU","rooms_seats":70},{"rooms_shortname":"ANGU","rooms_seats":70},{"rooms_shortname":"BRKX","rooms_seats":70},{"rooms_shortname":"ORCH","rooms_seats":72},{"rooms_shortname":"GEOG","rooms_seats":72},{"rooms_shortname":"PHRM","rooms_seats":72},{"rooms_shortname":"ORCH","rooms_seats":72},{"rooms_shortname":"ORCH","rooms_seats":72},{"rooms_shortname":"MCML","rooms_seats":72},{"rooms_shortname":"MCML","rooms_seats":74},{"rooms_shortname":"LSK","rooms_seats":75},{"rooms_shortname":"BIOL","rooms_seats":76},{"rooms_shortname":"BUCH","rooms_seats":78},{"rooms_shortname":"BUCH","rooms_seats":78},{"rooms_shortname":"BUCH","rooms_seats":78},{"rooms_shortname":"BUCH","rooms_seats":78},{"rooms_shortname":"ANGU","rooms_seats":80},{"rooms_shortname":"LASR","rooms_seats":80},{"rooms_shortname":"DMP","rooms_seats":80},{"rooms_shortname":"ESB","rooms_seats":80},{"rooms_shortname":"MCLD","rooms_seats":84},{"rooms_shortname":"WOOD","rooms_seats":88},{"rooms_shortname":"CHEM","rooms_seats":90},{"rooms_shortname":"CHEM","rooms_seats":90},{"rooms_shortname":"ANSO","rooms_seats":90},{"rooms_shortname":"LASR","rooms_seats":94},{"rooms_shortname":"CHBE","rooms_seats":94},{"rooms_shortname":"ALRD","rooms_seats":94},{"rooms_shortname":"FNH","rooms_seats":99},{"rooms_shortname":"FSC","rooms_seats":99},{"rooms_shortname":"CEME","rooms_seats":100},{"rooms_shortname":"IONA","rooms_seats":100},{"rooms_shortname":"GEOG","rooms_seats":100},{"rooms_shortname":"WESB","rooms_seats":102},{"rooms_shortname":"MATX","rooms_seats":106},{"rooms_shortname":"BUCH","rooms_seats":108},{"rooms_shortname":"BUCH","rooms_seats":108},{"rooms_shortname":"IBLC","rooms_seats":112},{"rooms_shortname":"CHEM","rooms_seats":114},{"rooms_shortname":"CHEM","rooms_seats":114},{"rooms_shortname":"WOOD","rooms_seats":120},{"rooms_shortname":"DMP","rooms_seats":120},{"rooms_shortname":"WOOD","rooms_seats":120},{"rooms_shortname":"WOOD","rooms_seats":120},{"rooms_shortname":"MCLD","rooms_seats":123},{"rooms_shortname":"LSC","rooms_seats":125},{"rooms_shortname":"BUCH","rooms_seats":131},{"rooms_shortname":"MCLD","rooms_seats":136},{"rooms_shortname":"AERL","rooms_seats":144},{"rooms_shortname":"BUCH","rooms_seats":150},{"rooms_shortname":"BUCH","rooms_seats":150},{"rooms_shortname":"HENN","rooms_seats":150},{"rooms_shortname":"ESB","rooms_seats":150},{"rooms_shortname":"IBLC","rooms_seats":154},{"rooms_shortname":"HENN","rooms_seats":155},{"rooms_shortname":"DMP","rooms_seats":160},{"rooms_shortname":"FRDM","rooms_seats":160},{"rooms_shortname":"PHRM","rooms_seats":167},{"rooms_shortname":"BUCH","rooms_seats":181},{"rooms_shortname":"WOOD","rooms_seats":181},{"rooms_shortname":"LSK","rooms_seats":183},{"rooms_shortname":"SWNG","rooms_seats":187},{"rooms_shortname":"SWNG","rooms_seats":188},{"rooms_shortname":"SWNG","rooms_seats":190},{"rooms_shortname":"SWNG","rooms_seats":190},{"rooms_shortname":"CHBE","rooms_seats":200},{"rooms_shortname":"MCML","rooms_seats":200},{"rooms_shortname":"LSK","rooms_seats":205},{"rooms_shortname":"MATH","rooms_seats":224},{"rooms_shortname":"GEOG","rooms_seats":225},{"rooms_shortname":"BIOL","rooms_seats":228},{"rooms_shortname":"PHRM","rooms_seats":236},{"rooms_shortname":"CHEM","rooms_seats":240},{"rooms_shortname":"FSC","rooms_seats":250},{"rooms_shortname":"HENN","rooms_seats":257},{"rooms_shortname":"ANGU","rooms_seats":260},{"rooms_shortname":"CHEM","rooms_seats":265},{"rooms_shortname":"BUCH","rooms_seats":275},{"rooms_shortname":"SCRF","rooms_seats":280},{"rooms_shortname":"SRC","rooms_seats":299},{"rooms_shortname":"SRC","rooms_seats":299},{"rooms_shortname":"SRC","rooms_seats":299},{"rooms_shortname":"WESB","rooms_seats":325},{"rooms_shortname":"LSC","rooms_seats":350},{"rooms_shortname":"LSC","rooms_seats":350},{"rooms_shortname":"ESB","rooms_seats":350},{"rooms_shortname":"HEBB","rooms_seats":375},{"rooms_shortname":"CIRS","rooms_seats":426},{"rooms_shortname":"OSBO","rooms_seats":442},{"rooms_shortname":"WOOD","rooms_seats":503}]};
    ODYSSEY = {
        "WHERE":{

            "AND":[
                {
                    "GT":{
                        "rooms_lat":49.2669
                    }
                },
                {
                    "LT":{
                        "rooms_lat":50
                    }
                },
                {
                    "GT":{
                        "rooms_lon":-124
                    }
                },
                {
                    "LT":{
                        "rooms_lon":-123.25
                    }
                }
            ]

        },
        "OPTIONS":{
            "COLUMNS":[
                "rooms_name",
                "rooms_lat", "rooms_lon"
            ],
            "ORDER":"rooms_name"
        }
    };
    ODYSSEY_RESPONSE = {"result":[{"rooms_name":"ALRD_105","rooms_lat":49.2699,"rooms_lon":-123.25318},{"rooms_name":"ALRD_112","rooms_lat":49.2699,"rooms_lon":-123.25318},{"rooms_name":"ALRD_113","rooms_lat":49.2699,"rooms_lon":-123.25318},{"rooms_name":"ALRD_121","rooms_lat":49.2699,"rooms_lon":-123.25318},{"rooms_name":"ALRD_B101","rooms_lat":49.2699,"rooms_lon":-123.25318},{"rooms_name":"ANSO_202","rooms_lat":49.26958,"rooms_lon":-123.25741},{"rooms_name":"ANSO_203","rooms_lat":49.26958,"rooms_lon":-123.25741},{"rooms_name":"ANSO_205","rooms_lat":49.26958,"rooms_lon":-123.25741},{"rooms_name":"ANSO_207","rooms_lat":49.26958,"rooms_lon":-123.25741},{"rooms_name":"BRKX_2365","rooms_lat":49.26862,"rooms_lon":-123.25237},{"rooms_name":"BRKX_2367","rooms_lat":49.26862,"rooms_lon":-123.25237},{"rooms_name":"BUCH_A101","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A102","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A103","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A104","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A201","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A202","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_A203","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B141","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B142","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B208","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B209","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B210","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B211","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B213","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B215","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B216","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B218","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B219","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B302","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B303","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B304","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B306","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B307","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B308","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B309","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B310","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B312","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B313","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B315","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B316","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B318","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_B319","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D201","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D204","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D205","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D207","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D209","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D213","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D214","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D216","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D217","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D218","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D219","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D221","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D222","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D228","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D229","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D301","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D304","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D306","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D307","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D312","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D313","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D314","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D315","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D316","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D317","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D319","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D322","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D323","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"BUCH_D325","rooms_lat":49.26826,"rooms_lon":-123.25468},{"rooms_name":"IBLC_155","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_156","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_157","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_158","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_182","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_185","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_191","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_192","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_193","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_194","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_195","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_261","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_263","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_264","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_265","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_266","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_460","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IBLC_461","rooms_lat":49.26766,"rooms_lon":-123.2521},{"rooms_name":"IONA_301","rooms_lat":49.27106,"rooms_lon":-123.25042},{"rooms_name":"IONA_633","rooms_lat":49.27106,"rooms_lon":-123.25042},{"rooms_name":"LASR_102","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"LASR_104","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"LASR_105","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"LASR_107","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"LASR_211","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"LASR_5C","rooms_lat":49.26767,"rooms_lon":-123.25583},{"rooms_name":"UCLL_101","rooms_lat":49.26867,"rooms_lon":-123.25692},{"rooms_name":"UCLL_103","rooms_lat":49.26867,"rooms_lon":-123.25692},{"rooms_name":"UCLL_107","rooms_lat":49.26867,"rooms_lon":-123.25692},{"rooms_name":"UCLL_109","rooms_lat":49.26867,"rooms_lon":-123.25692}]};
    OKELY = {
        "WHERE":{"NOT":{

            "AND":[
                {
                    "GT":{
                        "rooms_lat":49.2669
                    }
                },
                {
                    "LT":{
                        "rooms_lat":50
                    }
                },
                {
                    "GT":{
                        "rooms_lon":-124
                    }
                },
                {
                    "LT":{
                        "rooms_lon":-123.25
                    }
                }
            ]}

        },
        "OPTIONS":{
            "COLUMNS":[
                "rooms_name",
                "rooms_lat", "rooms_lon"
            ],
            "ORDER":"rooms_name"
        }
    };
    OKELY_RESPONSE = {"result":[{"rooms_name":"AERL_120","rooms_lat":49.26372,"rooms_lon":-123.25099},{"rooms_name":"ANGU_037","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_039","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_098","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_232","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_234","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_235","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_237","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_241","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_243","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_254","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_291","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_292","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_293","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_295","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_296","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_332","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_334","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_335","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_339","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_343","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_345","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_347","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_350","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_354","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_432","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_434","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_435","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"ANGU_437","rooms_lat":49.26486,"rooms_lon":-123.25364},{"rooms_name":"AUDX_142","rooms_lat":49.2666,"rooms_lon":-123.25655},{"rooms_name":"AUDX_157","rooms_lat":49.2666,"rooms_lon":-123.25655},{"rooms_name":"BIOL_1503","rooms_lat":49.26479,"rooms_lon":-123.25249},{"rooms_name":"BIOL_2000","rooms_lat":49.26479,"rooms_lon":-123.25249},{"rooms_name":"BIOL_2200","rooms_lat":49.26479,"rooms_lon":-123.25249},{"rooms_name":"BIOL_2519","rooms_lat":49.26479,"rooms_lon":-123.25249},{"rooms_name":"CEME_1202","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CEME_1204","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CEME_1206","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CEME_1210","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CEME_1212","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CEME_1215","rooms_lat":49.26273,"rooms_lon":-123.24894},{"rooms_name":"CHBE_101","rooms_lat":49.26228,"rooms_lon":-123.24718},{"rooms_name":"CHBE_102","rooms_lat":49.26228,"rooms_lon":-123.24718},{"rooms_name":"CHBE_103","rooms_lat":49.26228,"rooms_lon":-123.24718},{"rooms_name":"CHEM_B150","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CHEM_B250","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CHEM_C124","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CHEM_C126","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CHEM_D200","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CHEM_D300","rooms_lat":49.2659,"rooms_lon":-123.25308},{"rooms_name":"CIRS_1250","rooms_lat":49.26207,"rooms_lon":-123.25314},{"rooms_name":"DMP_101","rooms_lat":49.26125,"rooms_lon":-123.24807},{"rooms_name":"DMP_110","rooms_lat":49.26125,"rooms_lon":-123.24807},{"rooms_name":"DMP_201","rooms_lat":49.26125,"rooms_lon":-123.24807},{"rooms_name":"DMP_301","rooms_lat":49.26125,"rooms_lon":-123.24807},{"rooms_name":"DMP_310","rooms_lat":49.26125,"rooms_lon":-123.24807},{"rooms_name":"EOSM_135","rooms_lat":49.26228,"rooms_lon":-123.25198},{"rooms_name":"ESB_1012","rooms_lat":49.26274,"rooms_lon":-123.25224},{"rooms_name":"ESB_1013","rooms_lat":49.26274,"rooms_lon":-123.25224},{"rooms_name":"ESB_2012","rooms_lat":49.26274,"rooms_lon":-123.25224},{"rooms_name":"FNH_20","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FNH_30","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FNH_320","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FNH_40","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FNH_50","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FNH_60","rooms_lat":49.26414,"rooms_lon":-123.24959},{"rooms_name":"FORW_303","rooms_lat":49.26176,"rooms_lon":-123.25179},{"rooms_name":"FORW_317","rooms_lat":49.26176,"rooms_lon":-123.25179},{"rooms_name":"FORW_519","rooms_lat":49.26176,"rooms_lon":-123.25179},{"rooms_name":"FRDM_153","rooms_lat":49.26541,"rooms_lon":-123.24608},{"rooms_name":"FSC_1001","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1002","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1003","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1005","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1221","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1402","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1611","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1613","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1615","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"FSC_1617","rooms_lat":49.26044,"rooms_lon":-123.24886},{"rooms_name":"GEOG_100","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_101","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_147","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_200","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_201","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_212","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_214","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"GEOG_242","rooms_lat":49.26605,"rooms_lon":-123.25623},{"rooms_name":"HEBB_10","rooms_lat":49.2661,"rooms_lon":-123.25165},{"rooms_name":"HEBB_100","rooms_lat":49.2661,"rooms_lon":-123.25165},{"rooms_name":"HEBB_12","rooms_lat":49.2661,"rooms_lon":-123.25165},{"rooms_name":"HEBB_13","rooms_lat":49.2661,"rooms_lon":-123.25165},{"rooms_name":"HENN_200","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"HENN_201","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"HENN_202","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"HENN_301","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"HENN_302","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"HENN_304","rooms_lat":49.26627,"rooms_lon":-123.25374},{"rooms_name":"LSC_1001","rooms_lat":49.26236,"rooms_lon":-123.24494},{"rooms_name":"LSC_1002","rooms_lat":49.26236,"rooms_lon":-123.24494},{"rooms_name":"LSC_1003","rooms_lat":49.26236,"rooms_lon":-123.24494},{"rooms_name":"LSK_200","rooms_lat":49.26545,"rooms_lon":-123.25533},{"rooms_name":"LSK_201","rooms_lat":49.26545,"rooms_lon":-123.25533},{"rooms_name":"LSK_460","rooms_lat":49.26545,"rooms_lon":-123.25533},{"rooms_name":"LSK_462","rooms_lat":49.26545,"rooms_lon":-123.25533},{"rooms_name":"MATH_100","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_102","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_104","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_105","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_202","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_203","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_204","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATH_225","rooms_lat":49.266463,"rooms_lon":-123.255534},{"rooms_name":"MATX_1100","rooms_lat":49.266089,"rooms_lon":-123.254816},{"rooms_name":"MCLD_202","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCLD_214","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCLD_220","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCLD_228","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCLD_242","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCLD_254","rooms_lat":49.26176,"rooms_lon":-123.24935},{"rooms_name":"MCML_154","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_158","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_160","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_166","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_256","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_260","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_358","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360A","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360B","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360C","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360D","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360E","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360F","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360G","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360H","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360J","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360K","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360L","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MCML_360M","rooms_lat":49.26114,"rooms_lon":-123.25027},{"rooms_name":"MGYM_206","rooms_lat":49.2663,"rooms_lon":-123.2466},{"rooms_name":"MGYM_208","rooms_lat":49.2663,"rooms_lon":-123.2466},{"rooms_name":"ORCH_1001","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3002","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3004","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3016","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3018","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3052","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3058","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3062","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3068","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3072","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_3074","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4002","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4004","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4016","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4018","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4052","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4058","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4062","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4068","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4072","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"ORCH_4074","rooms_lat":49.26048,"rooms_lon":-123.24944},{"rooms_name":"OSBO_203A","rooms_lat":49.26047,"rooms_lon":-123.24467},{"rooms_name":"OSBO_203B","rooms_lat":49.26047,"rooms_lon":-123.24467},{"rooms_name":"OSBO_A","rooms_lat":49.26047,"rooms_lon":-123.24467},{"rooms_name":"PCOH_1001","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1002","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1003","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1008","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1009","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1011","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1215","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PCOH_1302","rooms_lat":49.264,"rooms_lon":-123.2559},{"rooms_name":"PHRM_1101","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_1201","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3112","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3114","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3115","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3116","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3118","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3120","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3122","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3124","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"PHRM_3208","rooms_lat":49.26229,"rooms_lon":-123.24342},{"rooms_name":"SCRF_100","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1003","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1004","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1005","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1020","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1021","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1022","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1023","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1024","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_1328","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_200","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_201","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_202","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_203","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_204","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_204A","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_205","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_206","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_207","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_208","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_209","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SCRF_210","rooms_lat":49.26398,"rooms_lon":-123.2531},{"rooms_name":"SOWK_122","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_124","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_222","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_223","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_224","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_324","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SOWK_326","rooms_lat":49.2643,"rooms_lon":-123.25505},{"rooms_name":"SPPH_143","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SPPH_B108","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SPPH_B112","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SPPH_B136","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SPPH_B138","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SPPH_B151","rooms_lat":49.2642,"rooms_lon":-123.24842},{"rooms_name":"SRC_220A","rooms_lat":49.2683,"rooms_lon":-123.24894},{"rooms_name":"SRC_220B","rooms_lat":49.2683,"rooms_lon":-123.24894},{"rooms_name":"SRC_220C","rooms_lat":49.2683,"rooms_lon":-123.24894},{"rooms_name":"SWNG_105","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_106","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_107","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_108","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_109","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_110","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_121","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_122","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_221","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_222","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_305","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_306","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_307","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_308","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_309","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_310","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_405","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_406","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_407","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_408","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_409","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"SWNG_410","rooms_lat":49.26293,"rooms_lon":-123.25431},{"rooms_name":"WESB_100","rooms_lat":49.26517,"rooms_lon":-123.24937},{"rooms_name":"WESB_201","rooms_lat":49.26517,"rooms_lon":-123.24937},{"rooms_name":"WOOD_1","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_2","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_3","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_4","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_5","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_6","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_B75","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_B79","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G41","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G44","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G53","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G55","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G57","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G59","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G65","rooms_lat":49.26478,"rooms_lon":-123.24673},{"rooms_name":"WOOD_G66","rooms_lat":49.26478,"rooms_lon":-123.24673}]};

    OMEGA = {
        "WHERE":{
            "IS":{
                "rooms_name":"AERL_120"
            }
        },
        "OPTIONS":{
            "COLUMNS":[
                "rooms_name"
            ],
            "ORDER":"rooms_name"
        }
    };
    OMEGA_RESPONSE = {"result":[{"rooms_name":"AERL_120"}]};

    PLATINUM = {
        "WHERE": {
            "IS": {
                "rooms_name": "DMP_*"
            }
        },
        "OPTIONS": {
            "COLUMNS": [
                "rooms_fullname", "rooms_shortname", "rooms_number", "rooms_name", "rooms_address", "rooms_lat", "rooms_lon", "rooms_seats", "rooms_furniture", "rooms_type", "rooms_href"
            ],
            "ORDER": "rooms_name"
        }
    };
    PLATINUM_RESPONSE = {"result":[{"rooms_fullname":"Hugh Dempster Pavilion","rooms_shortname":"DMP","rooms_number":"101","rooms_name":"DMP_101","rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_lat":49.26125,"rooms_lon":-123.24807,"rooms_seats":40,"rooms_furniture":"Classroom-Movable Tables & Chairs","rooms_type":"Small Group","rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-101"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_shortname":"DMP","rooms_number":"110","rooms_name":"DMP_110","rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_lat":49.26125,"rooms_lon":-123.24807,"rooms_seats":120,"rooms_furniture":"Classroom-Fixed Tables/Movable Chairs","rooms_type":"Tiered Large Group","rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-110"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_shortname":"DMP","rooms_number":"201","rooms_name":"DMP_201","rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_lat":49.26125,"rooms_lon":-123.24807,"rooms_seats":40,"rooms_furniture":"Classroom-Movable Tables & Chairs","rooms_type":"Small Group","rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-201"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_shortname":"DMP","rooms_number":"301","rooms_name":"DMP_301","rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_lat":49.26125,"rooms_lon":-123.24807,"rooms_seats":80,"rooms_furniture":"Classroom-Fixed Tables/Movable Chairs","rooms_type":"Tiered Large Group","rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-301"},{"rooms_fullname":"Hugh Dempster Pavilion","rooms_shortname":"DMP","rooms_number":"310","rooms_name":"DMP_310","rooms_address":"6245 Agronomy Road V6T 1Z4","rooms_lat":49.26125,"rooms_lon":-123.24807,"rooms_seats":160,"rooms_furniture":"Classroom-Fixed Tables/Movable Chairs","rooms_type":"Tiered Large Group","rooms_href":"http://students.ubc.ca/campus/discover/buildings-and-classrooms/room/DMP-310"}]};

    MANGO = {
        "WHERE": {
            "OR": [
                {
                    "AND": [
                        {
                            "GT": {
                                "courses_avg": 90
                            }
                        },
                            {"LT": {
                                "courses_avg": 90
                            }
                        },
                        {
                            "LT": {
                                "courses_avg": 91
                            }
                        }
                    ]
                },
                {
                    "EQ": {
                        "courses_avg": 99
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

    ELIXIR = {
        "WHERE": {
            "OR": [
                {
                    "IS": {
                        "courses_instructor": "bani*"
                    }
                },
                {
                    "IS": {
                        "courses_instructor": "crisf*"
                    }
                }

            ]
        }
    };

    ELIXIR_RESPONSE = {"result":[{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"crisfield, erin","courses_dept":"adhe"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"},{"courses_instructor":"baniassad, elisa","courses_dept":"cpsc"}]};

    BIGGEST_QUERY = {
        "WHERE": {
            "OR": [
                {
                    "AND": [{
                        "GT": {
                            "courses_avg": 98
                        }
                    },
                        {
                            "EQ": {
                                "courses_fail": 0
                            }
                        }]
                },
                {
                    "AND": [{
                        "LT": {
                            "courses_pass": 20
                        }
                    },
                        {
                            "IS": {
                                "courses_dept": "cpsc"
                            }
                        },
                        {
                            "EQ": {
                                "courses_fail": 0
                            }
                        }]
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

    BIGGEST_RESPONSE = {"result":[{"courses_dept":"cpsc","courses_id":"416","courses_avg":72.36},{"courses_dept":"cpsc","courses_id":"416","courses_avg":72.36},{"courses_dept":"cpsc","courses_id":"445","courses_avg":73.88},{"courses_dept":"cpsc","courses_id":"445","courses_avg":73.88},{"courses_dept":"cpsc","courses_id":"210","courses_avg":74.57},{"courses_dept":"cpsc","courses_id":"589","courses_avg":75},{"courses_dept":"cpsc","courses_id":"121","courses_avg":77.21},{"courses_dept":"cpsc","courses_id":"121","courses_avg":77.5},{"courses_dept":"cpsc","courses_id":"416","courses_avg":79.31},{"courses_dept":"cpsc","courses_id":"416","courses_avg":79.31},{"courses_dept":"cpsc","courses_id":"121","courses_avg":79.83},{"courses_dept":"cpsc","courses_id":"421","courses_avg":79.88},{"courses_dept":"cpsc","courses_id":"515","courses_avg":79.88},{"courses_dept":"cpsc","courses_id":"421","courses_avg":79.88},{"courses_dept":"cpsc","courses_id":"515","courses_avg":79.88},{"courses_dept":"cpsc","courses_id":"589","courses_avg":80},{"courses_dept":"cpsc","courses_id":"589","courses_avg":80},{"courses_dept":"cpsc","courses_id":"121","courses_avg":80.2},{"courses_dept":"cpsc","courses_id":"444","courses_avg":80.62},{"courses_dept":"cpsc","courses_id":"444","courses_avg":80.62},{"courses_dept":"cpsc","courses_id":"502","courses_avg":81.06},{"courses_dept":"cpsc","courses_id":"502","courses_avg":81.06},{"courses_dept":"cpsc","courses_id":"502","courses_avg":81.57},{"courses_dept":"cpsc","courses_id":"502","courses_avg":81.57},{"courses_dept":"cpsc","courses_id":"543","courses_avg":82.07},{"courses_dept":"cpsc","courses_id":"543","courses_avg":82.07},{"courses_dept":"cpsc","courses_id":"515","courses_avg":82.15},{"courses_dept":"cpsc","courses_id":"515","courses_avg":82.15},{"courses_dept":"cpsc","courses_id":"544","courses_avg":82.28},{"courses_dept":"cpsc","courses_id":"544","courses_avg":82.28},{"courses_dept":"cpsc","courses_id":"502","courses_avg":82.31},{"courses_dept":"cpsc","courses_id":"502","courses_avg":82.31},{"courses_dept":"cpsc","courses_id":"507","courses_avg":82.5},{"courses_dept":"cpsc","courses_id":"507","courses_avg":82.5},{"courses_dept":"cpsc","courses_id":"522","courses_avg":82.55},{"courses_dept":"cpsc","courses_id":"522","courses_avg":82.55},{"courses_dept":"cpsc","courses_id":"544","courses_avg":82.65},{"courses_dept":"cpsc","courses_id":"544","courses_avg":82.65},{"courses_dept":"cpsc","courses_id":"540","courses_avg":83},{"courses_dept":"cpsc","courses_id":"540","courses_avg":83},{"courses_dept":"cpsc","courses_id":"445","courses_avg":83.32},{"courses_dept":"cpsc","courses_id":"445","courses_avg":83.32},{"courses_dept":"cpsc","courses_id":"543","courses_avg":83.36},{"courses_dept":"cpsc","courses_id":"515","courses_avg":83.36},{"courses_dept":"cpsc","courses_id":"515","courses_avg":83.36},{"courses_dept":"cpsc","courses_id":"543","courses_avg":83.36},{"courses_dept":"cpsc","courses_id":"522","courses_avg":83.39},{"courses_dept":"cpsc","courses_id":"522","courses_avg":83.39},{"courses_dept":"cpsc","courses_id":"544","courses_avg":83.41},{"courses_dept":"cpsc","courses_id":"121","courses_avg":83.41},{"courses_dept":"cpsc","courses_id":"544","courses_avg":83.41},{"courses_dept":"cpsc","courses_id":"502","courses_avg":83.43},{"courses_dept":"cpsc","courses_id":"502","courses_avg":83.43},{"courses_dept":"cpsc","courses_id":"544","courses_avg":83.67},{"courses_dept":"cpsc","courses_id":"544","courses_avg":83.67},{"courses_dept":"cpsc","courses_id":"501","courses_avg":83.8},{"courses_dept":"cpsc","courses_id":"501","courses_avg":83.8},{"courses_dept":"cpsc","courses_id":"411","courses_avg":83.94},{"courses_dept":"cpsc","courses_id":"411","courses_avg":83.94},{"courses_dept":"cpsc","courses_id":"522","courses_avg":84},{"courses_dept":"cpsc","courses_id":"522","courses_avg":84},{"courses_dept":"cpsc","courses_id":"513","courses_avg":84.33},{"courses_dept":"cpsc","courses_id":"513","courses_avg":84.33},{"courses_dept":"cpsc","courses_id":"490","courses_avg":84.5},{"courses_dept":"cpsc","courses_id":"490","courses_avg":84.5},{"courses_dept":"cpsc","courses_id":"589","courses_avg":84.67},{"courses_dept":"cpsc","courses_id":"501","courses_avg":84.67},{"courses_dept":"cpsc","courses_id":"501","courses_avg":84.67},{"courses_dept":"cpsc","courses_id":"509","courses_avg":84.75},{"courses_dept":"cpsc","courses_id":"507","courses_avg":84.75},{"courses_dept":"cpsc","courses_id":"507","courses_avg":84.75},{"courses_dept":"cpsc","courses_id":"509","courses_avg":84.75},{"courses_dept":"cpsc","courses_id":"527","courses_avg":84.83},{"courses_dept":"cpsc","courses_id":"527","courses_avg":84.83},{"courses_dept":"cpsc","courses_id":"500","courses_avg":84.85},{"courses_dept":"cpsc","courses_id":"500","courses_avg":84.85},{"courses_dept":"cpsc","courses_id":"411","courses_avg":84.86},{"courses_dept":"cpsc","courses_id":"411","courses_avg":84.86},{"courses_dept":"cpsc","courses_id":"589","courses_avg":85},{"courses_dept":"cpsc","courses_id":"411","courses_avg":85},{"courses_dept":"cpsc","courses_id":"521","courses_avg":85},{"courses_dept":"cpsc","courses_id":"521","courses_avg":85},{"courses_dept":"cpsc","courses_id":"411","courses_avg":85},{"courses_dept":"cpsc","courses_id":"589","courses_avg":85},{"courses_dept":"cpsc","courses_id":"544","courses_avg":85.17},{"courses_dept":"cpsc","courses_id":"544","courses_avg":85.17},{"courses_dept":"cpsc","courses_id":"589","courses_avg":85.25},{"courses_dept":"cpsc","courses_id":"544","courses_avg":85.27},{"courses_dept":"cpsc","courses_id":"544","courses_avg":85.27},{"courses_dept":"cpsc","courses_id":"589","courses_avg":85.6},{"courses_dept":"cpsc","courses_id":"589","courses_avg":85.75},{"courses_dept":"cpsc","courses_id":"509","courses_avg":85.9},{"courses_dept":"cpsc","courses_id":"509","courses_avg":85.9},{"courses_dept":"cpsc","courses_id":"589","courses_avg":86},{"courses_dept":"cpsc","courses_id":"589","courses_avg":86},{"courses_dept":"cpsc","courses_id":"502","courses_avg":86.2},{"courses_dept":"cpsc","courses_id":"502","courses_avg":86.2},{"courses_dept":"cpsc","courses_id":"500","courses_avg":86.33},{"courses_dept":"cpsc","courses_id":"500","courses_avg":86.33},{"courses_dept":"cpsc","courses_id":"543","courses_avg":86.5},{"courses_dept":"cpsc","courses_id":"543","courses_avg":86.5},{"courses_dept":"cpsc","courses_id":"589","courses_avg":86.5},{"courses_dept":"cpsc","courses_id":"544","courses_avg":86.71},{"courses_dept":"cpsc","courses_id":"513","courses_avg":86.71},{"courses_dept":"cpsc","courses_id":"513","courses_avg":86.71},{"courses_dept":"cpsc","courses_id":"544","courses_avg":86.71},{"courses_dept":"cpsc","courses_id":"521","courses_avg":87},{"courses_dept":"cpsc","courses_id":"589","courses_avg":87},{"courses_dept":"cpsc","courses_id":"521","courses_avg":87},{"courses_dept":"cpsc","courses_id":"589","courses_avg":87},{"courses_dept":"cpsc","courses_id":"509","courses_avg":87.2},{"courses_dept":"cpsc","courses_id":"509","courses_avg":87.2},{"courses_dept":"cpsc","courses_id":"503","courses_avg":87.36},{"courses_dept":"cpsc","courses_id":"503","courses_avg":87.36},{"courses_dept":"cpsc","courses_id":"513","courses_avg":87.58},{"courses_dept":"cpsc","courses_id":"513","courses_avg":87.58},{"courses_dept":"cpsc","courses_id":"513","courses_avg":87.64},{"courses_dept":"cpsc","courses_id":"513","courses_avg":87.64},{"courses_dept":"cpsc","courses_id":"543","courses_avg":87.67},{"courses_dept":"cpsc","courses_id":"543","courses_avg":87.67},{"courses_dept":"cpsc","courses_id":"521","courses_avg":87.78},{"courses_dept":"cpsc","courses_id":"521","courses_avg":87.78},{"courses_dept":"cpsc","courses_id":"449","courses_avg":87.83},{"courses_dept":"cpsc","courses_id":"449","courses_avg":87.83},{"courses_dept":"cpsc","courses_id":"544","courses_avg":88},{"courses_dept":"cpsc","courses_id":"509","courses_avg":88},{"courses_dept":"cpsc","courses_id":"509","courses_avg":88},{"courses_dept":"cpsc","courses_id":"544","courses_avg":88},{"courses_dept":"cpsc","courses_id":"513","courses_avg":88.22},{"courses_dept":"cpsc","courses_id":"513","courses_avg":88.22},{"courses_dept":"cpsc","courses_id":"547","courses_avg":88.47},{"courses_dept":"cpsc","courses_id":"547","courses_avg":88.47},{"courses_dept":"cpsc","courses_id":"449","courses_avg":88.5},{"courses_dept":"cpsc","courses_id":"449","courses_avg":88.5},{"courses_dept":"cpsc","courses_id":"503","courses_avg":88.82},{"courses_dept":"cpsc","courses_id":"503","courses_avg":88.82},{"courses_dept":"cpsc","courses_id":"490","courses_avg":89},{"courses_dept":"cpsc","courses_id":"507","courses_avg":89},{"courses_dept":"cpsc","courses_id":"589","courses_avg":89},{"courses_dept":"cpsc","courses_id":"490","courses_avg":89},{"courses_dept":"cpsc","courses_id":"507","courses_avg":89},{"courses_dept":"cpsc","courses_id":"513","courses_avg":89.09},{"courses_dept":"cpsc","courses_id":"513","courses_avg":89.09},{"courses_dept":"cpsc","courses_id":"503","courses_avg":89.1},{"courses_dept":"cpsc","courses_id":"503","courses_avg":89.1},{"courses_dept":"cpsc","courses_id":"507","courses_avg":89.17},{"courses_dept":"cpsc","courses_id":"507","courses_avg":89.17},{"courses_dept":"cpsc","courses_id":"503","courses_avg":89.47},{"courses_dept":"cpsc","courses_id":"503","courses_avg":89.47},{"courses_dept":"cpsc","courses_id":"490","courses_avg":89.64},{"courses_dept":"cpsc","courses_id":"490","courses_avg":89.64},{"courses_dept":"cpsc","courses_id":"543","courses_avg":89.75},{"courses_dept":"cpsc","courses_id":"543","courses_avg":89.75},{"courses_dept":"cpsc","courses_id":"490","courses_avg":89.86},{"courses_dept":"cpsc","courses_id":"527","courses_avg":90.11},{"courses_dept":"cpsc","courses_id":"527","courses_avg":90.11},{"courses_dept":"cpsc","courses_id":"449","courses_avg":90.25},{"courses_dept":"cpsc","courses_id":"449","courses_avg":90.25},{"courses_dept":"cpsc","courses_id":"490","courses_avg":90.27},{"courses_dept":"cpsc","courses_id":"490","courses_avg":90.6},{"courses_dept":"cpsc","courses_id":"490","courses_avg":90.6},{"courses_dept":"cpsc","courses_id":"522","courses_avg":90.71},{"courses_dept":"cpsc","courses_id":"522","courses_avg":90.71},{"courses_dept":"cpsc","courses_id":"501","courses_avg":91},{"courses_dept":"cpsc","courses_id":"501","courses_avg":91},{"courses_dept":"cpsc","courses_id":"527","courses_avg":91.22},{"courses_dept":"cpsc","courses_id":"527","courses_avg":91.22},{"courses_dept":"cpsc","courses_id":"445","courses_avg":91.25},{"courses_dept":"cpsc","courses_id":"445","courses_avg":91.25},{"courses_dept":"cpsc","courses_id":"507","courses_avg":91.79},{"courses_dept":"cpsc","courses_id":"507","courses_avg":91.79},{"courses_dept":"cpsc","courses_id":"490","courses_avg":92},{"courses_dept":"cpsc","courses_id":"490","courses_avg":92},{"courses_dept":"cpsc","courses_id":"490","courses_avg":92.4},{"courses_dept":"cpsc","courses_id":"490","courses_avg":92.4},{"courses_dept":"cpsc","courses_id":"501","courses_avg":92.43},{"courses_dept":"cpsc","courses_id":"501","courses_avg":92.43},{"courses_dept":"cpsc","courses_id":"449","courses_avg":92.5},{"courses_dept":"cpsc","courses_id":"449","courses_avg":92.5},{"courses_dept":"cpsc","courses_id":"449","courses_avg":92.63},{"courses_dept":"cpsc","courses_id":"449","courses_avg":92.63},{"courses_dept":"cpsc","courses_id":"501","courses_avg":92.75},{"courses_dept":"cpsc","courses_id":"501","courses_avg":92.75},{"courses_dept":"cpsc","courses_id":"449","courses_avg":93.38},{"courses_dept":"cpsc","courses_id":"449","courses_avg":93.38},{"courses_dept":"cpsc","courses_id":"449","courses_avg":93.5},{"courses_dept":"cpsc","courses_id":"449","courses_avg":93.5},{"courses_dept":"cpsc","courses_id":"501","courses_avg":94},{"courses_dept":"cpsc","courses_id":"501","courses_avg":94},{"courses_dept":"cpsc","courses_id":"503","courses_avg":94.5},{"courses_dept":"cpsc","courses_id":"503","courses_avg":94.5},{"courses_dept":"cpsc","courses_id":"589","courses_avg":95},{"courses_dept":"cpsc","courses_id":"589","courses_avg":95},{"courses_dept":"epse","courses_id":"421","courses_avg":98.08},{"courses_dept":"nurs","courses_id":"509","courses_avg":98.21},{"courses_dept":"nurs","courses_id":"509","courses_avg":98.21},{"courses_dept":"epse","courses_id":"421","courses_avg":98.36},{"courses_dept":"epse","courses_id":"519","courses_avg":98.45},{"courses_dept":"epse","courses_id":"519","courses_avg":98.45},{"courses_dept":"nurs","courses_id":"578","courses_avg":98.5},{"courses_dept":"nurs","courses_id":"578","courses_avg":98.5},{"courses_dept":"nurs","courses_id":"578","courses_avg":98.58},{"courses_dept":"nurs","courses_id":"578","courses_avg":98.58},{"courses_dept":"epse","courses_id":"449","courses_avg":98.58},{"courses_dept":"epse","courses_id":"449","courses_avg":98.58},{"courses_dept":"epse","courses_id":"421","courses_avg":98.7},{"courses_dept":"nurs","courses_id":"509","courses_avg":98.71},{"courses_dept":"nurs","courses_id":"509","courses_avg":98.71},{"courses_dept":"eece","courses_id":"541","courses_avg":98.75},{"courses_dept":"eece","courses_id":"541","courses_avg":98.75},{"courses_dept":"epse","courses_id":"449","courses_avg":98.76},{"courses_dept":"epse","courses_id":"449","courses_avg":98.76},{"courses_dept":"epse","courses_id":"449","courses_avg":98.8},{"courses_dept":"spph","courses_id":"300","courses_avg":98.98},{"courses_dept":"spph","courses_id":"300","courses_avg":98.98},{"courses_dept":"cnps","courses_id":"574","courses_avg":99.19},{"courses_dept":"math","courses_id":"527","courses_avg":99.78},{"courses_dept":"math","courses_id":"527","courses_avg":99.78}]};

}
