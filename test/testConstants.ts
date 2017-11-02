
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
            "ORDER": "courses_avg"
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
    GALLIUM = { "WHERE": { "EQ": { "courses_year": 2008 } }, "OPTIONS": { "COLUMNS": [ "courses_year" ], "ORDER": "courses_year" } };
    GALLIUM_RESPONSE= {"result":[{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008},{"courses_year":2008}]};

}