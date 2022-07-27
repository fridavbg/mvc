var classes = [
    {
        "name": "Anax\\Database\\Database",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOption",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "expandParamArray",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeFetchAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeFetch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeFetchClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "executeFetchInto",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchAllClass",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fetchInto",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createException",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "pdoException",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "statementException",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "lastInsertId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rowCount",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 20,
        "nbMethods": 20,
        "nbMethodsPrivate": 4,
        "nbMethodsPublic": 16,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 32,
        "ccn": 13,
        "ccnMethodMax": 5,
        "externals": [
            "Anax\\Database\\Exception\\Exception",
            "PDO",
            "Anax\\Database\\Exception\\Exception",
            "Anax\\Database\\Exception\\Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 248,
        "vocabulary": 51,
        "volume": 1406.76,
        "difficulty": 17.77,
        "effort": 24994.55,
        "level": 0.06,
        "bugs": 0.47,
        "time": 1389,
        "intelligentContent": 79.18,
        "number_operators": 57,
        "number_operands": 191,
        "number_operators_unique": 8,
        "number_operands_unique": 43,
        "cloc": 162,
        "loc": 303,
        "lloc": 141,
        "mi": 74.6,
        "mIwoC": 29.32,
        "commentWeight": 45.28,
        "kanDefect": 1.01,
        "relativeStructuralComplexity": 256,
        "relativeDataComplexity": 1.02,
        "relativeSystemComplexity": 257.02,
        "totalStructuralComplexity": 5120,
        "totalDataComplexity": 20.47,
        "totalSystemComplexity": 5140.47,
        "package": "Anax\\Database\\",
        "pageRank": 0.32,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Anax\\Database\\Exception\\Exception",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Exception"
        ],
        "parents": [
            "Exception"
        ],
        "implements": [],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 3,
        "loc": 7,
        "lloc": 4,
        "mi": 213.45,
        "mIwoC": 171,
        "commentWeight": 42.45,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Anax\\Database\\Exception\\",
        "pageRank": 0.57,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Anax\\Database\\DatabaseDebug",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "connect",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadHistory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "saveHistory",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getNumQueries",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQueries",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "dump",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "execute",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 7,
        "nbMethods": 7,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 7,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 14,
        "ccn": 8,
        "ccnMethodMax": 3,
        "externals": [
            "Anax\\Database\\Database"
        ],
        "parents": [
            "Anax\\Database\\Database"
        ],
        "implements": [],
        "lcom": 4,
        "length": 117,
        "vocabulary": 32,
        "volume": 585,
        "difficulty": 6.94,
        "effort": 4062.5,
        "level": 0.14,
        "bugs": 0.2,
        "time": 226,
        "intelligentContent": 84.24,
        "number_operators": 42,
        "number_operands": 75,
        "number_operators_unique": 5,
        "number_operands_unique": 27,
        "cloc": 57,
        "loc": 123,
        "lloc": 66,
        "mi": 83.34,
        "mIwoC": 39.86,
        "commentWeight": 43.49,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 2.14,
        "relativeSystemComplexity": 6.14,
        "totalStructuralComplexity": 28,
        "totalDataComplexity": 15,
        "totalSystemComplexity": 43,
        "package": "Anax\\Database\\",
        "pageRank": 0.11,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]