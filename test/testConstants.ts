
import Tokenizer from "../src/dataStructs/Tokenizer";
import InsightFacade from "../src/controller/InsightFacade";

export default class TestConstants {

    testJSONComplex = '{ "WHERE":{ "OR":[ { "AND":[ { "GT":{ "courses_avg":90 } }, { "IS":{ "courses_dept":"adhe" } } ] }, { "EQ":{ "courses_avg":95 } } ] }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_id", "courses_avg" ], "ORDER":"courses_avg" } }';

    testJSONSimple = '{ "WHERE":{ "GT":{ "courses_avg":97 } }, "OPTIONS":{ "COLUMNS":[ "courses_dept", "courses_avg" ], "ORDER":"courses_avg" } }';

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
}