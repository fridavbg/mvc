var classes = [
    {
        "name": "CFastTrackCache",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "enable",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCacheDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFilename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addHeaderOnOutput",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFilename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "writeToCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 23,
        "ccn": 15,
        "ccnMethodMax": 9,
        "externals": [
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 128,
        "vocabulary": 31,
        "volume": 634.14,
        "difficulty": 12.4,
        "effort": 7860.66,
        "level": 0.08,
        "bugs": 0.21,
        "time": 437,
        "intelligentContent": 51.16,
        "number_operators": 43,
        "number_operands": 85,
        "number_operators_unique": 7,
        "number_operands_unique": 24,
        "cloc": 84,
        "loc": 183,
        "lloc": 99,
        "mi": 78.19,
        "mIwoC": 34.83,
        "commentWeight": 43.36,
        "kanDefect": 1.47,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 6.85,
        "relativeSystemComplexity": 7.85,
        "totalStructuralComplexity": 10,
        "totalDataComplexity": 68.5,
        "totalSystemComplexity": 78.5,
        "package": "\\",
        "pageRank": 0.1,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CRemoteImage",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "getStatus",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDetails",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCacheWritable",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setHeaderFields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateCacheDetails",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "download",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadCacheDetails",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getCachedSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 11,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 24,
        "ccn": 16,
        "ccnMethodMax": 5,
        "externals": [
            "Exception",
            "CHttpGet",
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 232,
        "vocabulary": 51,
        "volume": 1316,
        "difficulty": 17.04,
        "effort": 22419.05,
        "level": 0.06,
        "bugs": 0.44,
        "time": 1246,
        "intelligentContent": 77.25,
        "number_operators": 73,
        "number_operands": 159,
        "number_operators_unique": 9,
        "number_operands_unique": 42,
        "cloc": 102,
        "loc": 239,
        "lloc": 137,
        "mi": 71.79,
        "mIwoC": 29.4,
        "commentWeight": 42.4,
        "kanDefect": 0.99,
        "relativeStructuralComplexity": 225,
        "relativeDataComplexity": 0.83,
        "relativeSystemComplexity": 225.83,
        "totalStructuralComplexity": 2475,
        "totalDataComplexity": 9.13,
        "totalSystemComplexity": 2484.13,
        "package": "\\",
        "pageRank": 0.13,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "CHttpGet",
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
                "name": "buildUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setUrl",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "parseHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doGet",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStatus",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLastModified",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getContentType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMaxAge",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBody",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 12,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 12,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 30,
        "ccn": 19,
        "ccnMethodMax": 7,
        "externals": [
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 277,
        "vocabulary": 72,
        "volume": 1709.07,
        "difficulty": 13.56,
        "effort": 23179.25,
        "level": 0.07,
        "bugs": 0.57,
        "time": 1288,
        "intelligentContent": 126.01,
        "number_operators": 60,
        "number_operands": 217,
        "number_operators_unique": 8,
        "number_operands_unique": 64,
        "cloc": 90,
        "loc": 205,
        "lloc": 115,
        "mi": 72.63,
        "mIwoC": 29.86,
        "commentWeight": 42.77,
        "kanDefect": 1.03,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 4.22,
        "relativeSystemComplexity": 8.22,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 50.67,
        "totalSystemComplexity": 98.67,
        "package": "\\",
        "pageRank": 0.29,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "CWhitelist",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "check",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 7,
        "ccnMethodMax": 6,
        "externals": [
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 31,
        "vocabulary": 12,
        "volume": 111.13,
        "difficulty": 7.14,
        "effort": 793.81,
        "level": 0.14,
        "bugs": 0.04,
        "time": 44,
        "intelligentContent": 15.56,
        "number_operators": 11,
        "number_operands": 20,
        "number_operators_unique": 5,
        "number_operands_unique": 7,
        "cloc": 24,
        "loc": 52,
        "lloc": 28,
        "mi": 96.6,
        "mIwoC": 53.17,
        "commentWeight": 43.43,
        "kanDefect": 0.66,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 2.75,
        "relativeSystemComplexity": 3.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 5.5,
        "totalSystemComplexity": 7.5,
        "package": "\\",
        "pageRank": 0.13,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "CAsciiArt",
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
                "name": "addCharacterSet",
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
                "name": "createFromFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "luminanceAreaAverage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLuminance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "luminance2character",
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
        "wmc": 16,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 290,
        "vocabulary": 69,
        "volume": 1771.47,
        "difficulty": 26.94,
        "effort": 47731.33,
        "level": 0.04,
        "bugs": 0.59,
        "time": 2652,
        "intelligentContent": 65.75,
        "number_operators": 96,
        "number_operands": 194,
        "number_operators_unique": 15,
        "number_operands_unique": 54,
        "cloc": 72,
        "loc": 161,
        "lloc": 89,
        "mi": 76.4,
        "mIwoC": 33.39,
        "commentWeight": 43.02,
        "kanDefect": 0.44,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.31,
        "relativeSystemComplexity": 26.31,
        "totalStructuralComplexity": 175,
        "totalDataComplexity": 9.17,
        "totalSystemComplexity": 184.17,
        "package": "\\",
        "pageRank": 0.13,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "CImage",
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
                "name": "injectDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVerbose",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSaveFolder",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useCache",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createDummyImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRemoteDownload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isRemoteSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRemoteHostWhitelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isRemoteSourceOnWhitelist",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "checkFileExtension",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "normalizeFileExtension",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "downloadRemoteSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTarget",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTarget",
                "role": "getter",
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
                "name": "mapFilter",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadImageDetails",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getMimeType",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initDimensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "calculateNewWidthAndHeight",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reCalculateDimensions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSaveAsExtension",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setJpegQuality",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPngCompression",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useOriginalIfPossible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "generateFilename",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "useCacheIfPossible",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "load",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPngType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPngTypeAsString",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "colorsTotal",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "preResize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setCopyResizeStrategy",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "imageCopyResampled",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "postResize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "rotateExif",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "trueColorToPalette",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "sharpenImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "embossImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "blurImage",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createConvolveArguments",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addConvolveExpressions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "imageConvolution",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDefaultBackgroundColor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBackgroundColor",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "createImageKeepTransparency",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPostProcessingOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTargetImageExtension",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "save",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "convert2sRGBColorSpace",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "linkToCacheFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addHTTPHeader",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "output",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "json",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAsciiOptions",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "ascii",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "log",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setVerboseToFile",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "verboseOutput",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "raiseError",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 64,
        "nbMethods": 61,
        "nbMethodsPrivate": 11,
        "nbMethodsPublic": 50,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 2,
        "wmc": 395,
        "ccn": 335,
        "ccnMethodMax": 35,
        "externals": [
            "CWhitelist",
            "Exception",
            "CRemoteImage",
            "Exception",
            "Exception",
            "Exception",
            "Exception",
            "Exception",
            "Exception",
            "Exception",
            "Exception",
            "Imagick",
            "CAsciiArt",
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 3860,
        "vocabulary": 548,
        "volume": 35118.4,
        "difficulty": 69.12,
        "effort": 2427400.19,
        "level": 0.01,
        "bugs": 11.71,
        "time": 134856,
        "intelligentContent": 508.08,
        "number_operators": 968,
        "number_operands": 2892,
        "number_operators_unique": 25,
        "number_operands_unique": 523,
        "cloc": 763,
        "loc": 2171,
        "lloc": 1408,
        "mi": 39.73,
        "mIwoC": 0,
        "commentWeight": 39.73,
        "kanDefect": 12.67,
        "relativeStructuralComplexity": 3249,
        "relativeDataComplexity": 1.21,
        "relativeSystemComplexity": 3250.21,
        "totalStructuralComplexity": 207936,
        "totalDataComplexity": 77.53,
        "totalSystemComplexity": 208013.53,
        "package": "\\",
        "pageRank": 0.1,
        "afferentCoupling": 0,
        "efferentCoupling": 5,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "CCache",
        "interface": false,
        "abstract": false,
        "final": false,
        "methods": [
            {
                "name": "setDir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPathToSubdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getStatusOfSubdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "removeSubdir",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 13,
        "ccn": 10,
        "ccnMethodMax": 5,
        "externals": [
            "Exception"
        ],
        "parents": [],
        "implements": [],
        "lcom": 1,
        "length": 76,
        "vocabulary": 17,
        "volume": 310.65,
        "difficulty": 12.55,
        "effort": 3897.21,
        "level": 0.08,
        "bugs": 0.1,
        "time": 217,
        "intelligentContent": 24.76,
        "number_operators": 30,
        "number_operands": 46,
        "number_operators_unique": 6,
        "number_operands_unique": 11,
        "cloc": 39,
        "loc": 84,
        "lloc": 45,
        "mi": 88.65,
        "mIwoC": 45.14,
        "commentWeight": 43.51,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 8.25,
        "relativeSystemComplexity": 8.25,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 33,
        "totalSystemComplexity": 33,
        "package": "\\",
        "pageRank": 0.1,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    }
]