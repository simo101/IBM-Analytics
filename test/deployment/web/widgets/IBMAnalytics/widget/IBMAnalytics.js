define(["dijit/registry","dojo/_base/array","dojo/query","dojo/NodeList-traverse","dojo/_base/lang","dojo/Deferred","dojo/_base/declare","mxui/widget/_WidgetBase","dijit/_TemplatedMixin"], function(__WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony export (immutable) */ __webpack_exports__["b"] = runCallback;
/*eslint no-invalid-this: 0*/

/**
 * Logs using the Mendix logger
 *
 * @export
 * @param {string} methodName
 * @param {...any} args
 */
function log() {
    var methodName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.id) {
        logger.debug(this.id + '.' + methodName, args && args.length ? args[0] : '');
    } else {
        logger.debug(methodName, args && args.length ? args[0] : '');
    }
}

/**
 * Runs a callback and logs the method where it comes from
 *
 * @export
 * @param {() => {}} cb
 * @param {string} from
 */
function runCallback(cb, from) {
    log.call(this, '_callback', from ? 'from ' + from : '');
    if (cb && 'function' === typeof cb) {
        cb();
    }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__lib_bmsclient__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics__);




// import BMSRequest from '@/lib/bmsrequest';

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["a" /* defineWidget */])('IBMAnalytics', false, {

	_obj: null,
	constructor: function constructor() {
		this.log = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["b" /* log */].bind(this);
		this.runCallback = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["c" /* runCallback */].bind(this);
	},
	postCreate: function postCreate() {
		__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["b" /* log */].call(this, 'postCreate', this._WIDGET_VERSION);
		var bmsregion = void 0;
		switch (this.bmsRegion) {
			case 'REGION_US_SOUTH':
				bmsregion = __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default.a.REGION_US_SOUTH;
				break;
			case 'REGION_UK':
				bmsregion = __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default.a.REGION_UK;
				break;
			case 'REGION_SYDNEY':
				bmsregion = __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default.a.REGION_SYDNEY;
				break;
			default:
				bmsregion = __WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default.a.REGION_US_SOUTH;
				break;
		}

		var deviceEvents = void 0;

		switch (this.bmsDevice) {
			case 'NONE':
				deviceEvents = __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.DeviceEvents.NONE;
				break;
			case 'ALL':
				deviceEvents = __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.DeviceEvents.ALL;
				break;
			case 'LIFECYCLE':
				deviceEvents = __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.DeviceEvents.LIFECYCLE;
				break;
			default:
				deviceEvents = __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.DeviceEvents.ALL;
				break;
		}
		var hasUserContext = false;
		if (this.hasUsrCont) {
			hasUserContext = true;
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.setUserIdentity(mx.session.getUserName() + "-" + mx.session.getUserId());
		}
		__WEBPACK_IMPORTED_MODULE_1__lib_bmsclient___default.a.initialize(bmsregion);
		__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.initialize(this.applicationName, this.apiKey, hasUserContext, deviceEvents, this.instanceID);
		if (this.storeLogs) {
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.capture(true);
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.setLogLevel('error');
			// Overide the error function to send logs
			console._error = console.error;
			console.error = function (err) {
				console._error(err);
				this._reportError(err);
			}.bind(this);
		}
		var promise = __WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.send();
		promise.then(function (result) {
			console.log(result); // "Stuff worked!"
		}, function (err) {
			console.log(err); // Error: "It broke"
		});
		if (this.enableUsageAnalytics) {
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.enable();
		}
		if (this.enablePageTracking) {
			this.connect(this.mxform, "onNavigation", this._addPage);
		}
	},

	_reportError: function _reportError(error) {
		try {
			var currentPage = mx.router._contentForm.path.replace(".page.xml", "");
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.log(currentPage + ' : ' + error);
		} catch (e) {
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.error('' + error);
		}
		__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.send();
		console.log("sending " + error);
	},
	_addPage: function _addPage() {
		try {
			var currentPage = mx.router._contentForm.path.replace(".page.xml", "");
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.log({ 'Page Tracker': '' + currentPage });
			console.log("Page Tracker " + currentPage);
		} catch (e) {
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.error('' + e);
			__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.Logger.send();
		}
		__WEBPACK_IMPORTED_MODULE_2__lib_bmsanalytics___default.a.send();
	}
}));

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_data__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_microflow__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_dom__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__["a"]; });
/* unused harmony reexport getData */
/* unused harmony reexport fetchAttr */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["b"]; });
/* unused harmony reexport execute */
/* unused harmony reexport executePromise */
/* unused harmony reexport findWidgetByClass */
/* unused harmony reexport findWidgetByName */
/* unused harmony reexport findElementByName */
/* unused harmony reexport findElement */
/* unused harmony reexport isDescendant */








/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defineWidget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgetBase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__);




// const { packageName, version, widgetFolder } = config;

/**
 * Defines a widget. Use this when you have multiple sub widgets. For a single widget this might be overkill
 *
 * @export
 * @param {string} id
 * @param {string} template
 * @param {{}}} obj
 * @param {any} base
 * @returns
 */
function defineWidget(id, template, obj, base, configParam) {
    var widgetConfig = {"version":"1.0.0","packageName":"IBMAnalytics","widgetFolder":"widget"} || configParam;
    var packageName = void 0;
    var version = void 0;
    var widgetFolder = void 0;

    if ('undefined' !== typeof widgetConfig) {
        packageName = widgetConfig.packageName;
        version = widgetConfig.version;
        widgetFolder = widgetConfig.widgetFolder;
    } else {
        throw new Error('Widget needs a config! Please check your source code!');
    }

    var widgetObj = obj;
    var baseID = packageName + '.' + widgetFolder + '.' + id;

    widgetObj._WIDGET_VERSION = version;
    widgetObj._WIDGET_BASE_ID = baseID;

    var mixins = [];
    if ('undefined' !== typeof base && null !== base) {
        mixins.push(base);
    } else {
        mixins.push(__WEBPACK_IMPORTED_MODULE_1_widgetBase___default.a);
    }

    if (template) {
        mixins.push(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default.a);
        if ('boolean' !== typeof template) {
            widgetObj.templateString = template;
        }
    }

    return __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default()(baseID, mixins, widgetObj);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getData */
/* unused harmony export fetchAttr */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__);



var getData = function getData(params) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    var getParams = __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default.a.mixin({
        callback: deferred.resolve,
        error: deferred.reject
    }, params);
    try {
        mx.data.get(getParams);
    } catch (e) {
        deferred.reject(e);
    }

    return deferred.promise;
};

var fetchAttr = function fetchAttr(obj, attr) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    try {
        obj.fetch(attr, function (val) {
            return deferred.resolve(val);
        });
    } catch (e) {
        deferred.reject(e);
    }
    return deferred.promise;
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export execute */
/* unused harmony export executePromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__);
/*eslint no-invalid-this: 0*/




function execute(microflow, guid, cb, errCb) {
    var _this = this;

    if (microflow) {
        __WEBPACK_IMPORTED_MODULE_1__index__["a" /* log */].call(this, 'execute microflow', 'mf: ' + microflow + ':' + guid);
        var action = {
            params: {
                actionname: microflow,
                applyto: 'selection',
                guids: []
            },
            callback: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (res) {
                if (cb && 'function' == typeof cb) {
                    cb(res);
                }
            }),
            error: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (error) {
                if (errCb && 'function' == typeof errCb) {
                    errCb(error);
                } else {
                    mx.ui.error('Error executing microflow ' + microflow + ' : ' + error.message);
                    console.error(_this.id + '._execMf', error);
                }
            })
        };

        if (guid) {
            action.params.guids = [guid];
        }

        if (!mx.version || mx.version && 7 > parseInt(mx.version.split('.')[0], 10)) {
            action.store = {
                caller: this.mxform
            };
        } else {
            action.origin = this.mxform;
        }

        mx.data.action(action, this);
    }
}

function executePromise(microflow, guid) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default.a();

    execute.call(this, microflow, guid, deferred.resolve, deferred.reject);

    return deferred.promise;
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findWidgetByClass */
/* unused harmony export findWidgetByName */
/* unused harmony export findElementByName */
/* unused harmony export findElement */
/* unused harmony export isDescendant */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dijit_registry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_query__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__);





function _getClassNameByMxName(elementName) {
    return ('mx-name-' + elementName).trim();
}

function findWidgetByClass(className) {
    var findWidget = __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default.a.filter(__WEBPACK_IMPORTED_MODULE_0_dijit_registry___default.a.toArray(), function (widget) {
        return widget.class && -1 !== widget.class.indexOf(className);
    });
    return 0 === findWidget.length ? null : findWidget[0];
}

function findWidgetByName(widgetName) {
    return findWidgetByClass(_getClassNameByMxName(widgetName));
}

function findElementByName(elementName) {
    return findElement('.' + _getClassNameByMxName(elementName));
}

function findElement(cssSelector, parentNode) {
    var target = 'undefined' !== typeof parentNode ? __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector, parentNode) : __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector);
    return target && 1 === target.length ? target[0] : null;
}

function isDescendant(parentNode, child) {
    var node = child.parentNode;
    while (null !== node) {
        if (node === parentNode) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

var BMSClient = {
    BMSClientString: "BMSClient",

    /**
     *  Define region constants
     * @type {string}
     */
    REGION_US_SOUTH: ".ng.bluemix.net",
    REGION_UK: ".eu-gb.bluemix.net",
    REGION_SYDNEY: ".au-syd.bluemix.net",

    bmsregion: ".ng.bluemix.net",

    initialize: function initialize(bluemixRegion) {
        bmsregion = bluemixRegion;
    },

    getRegion: function getRegion() {
        return bmsregion;
    }

};
window.BMSClient = BMSClient;
module.exports = BMSClient;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (root, factory) {
	if (true) {
		// AMD init. No dependencies
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		// Browser globals init
		root.BMSAnalytics = factory();
	}
})(this, function () {

	(function (global) {
		function isArray(arr) {
			return Object.prototype.toString.call(arr) === '[object Array]';
		}

		function foreach(arr, handler) {
			if (isArray(arr)) {
				for (var i = 0; i < arr.length; i++) {
					handler(arr[i]);
				}
			} else handler(arr);
		}

		function D(fn) {
			var status = 'pending',
			    doneFuncs = [],
			    failFuncs = [],
			    progressFuncs = [],
			    resultArgs = null,
			    _promise = {
				done: function done() {
					for (var i = 0; i < arguments.length; i++) {
						// skip any undefined or null arguments
						if (!arguments[i]) {
							continue;
						}

						if (isArray(arguments[i])) {
							var arr = arguments[i];
							for (var j = 0; j < arr.length; j++) {
								// immediately call the function if the deferred has been resolved
								if (status === 'resolved') {
									arr[j].apply(this, resultArgs);
								}

								doneFuncs.push(arr[j]);
							}
						} else {
							// immediately call the function if the deferred has been resolved
							if (status === 'resolved') {
								arguments[i].apply(this, resultArgs);
							}

							doneFuncs.push(arguments[i]);
						}
					}

					return this;
				},

				fail: function fail() {
					for (var i = 0; i < arguments.length; i++) {
						// skip any undefined or null arguments
						if (!arguments[i]) {
							continue;
						}

						if (isArray(arguments[i])) {
							var arr = arguments[i];
							for (var j = 0; j < arr.length; j++) {
								// immediately call the function if the deferred has been resolved
								if (status === 'rejected') {
									arr[j].apply(this, resultArgs);
								}

								failFuncs.push(arr[j]);
							}
						} else {
							// immediately call the function if the deferred has been resolved
							if (status === 'rejected') {
								arguments[i].apply(this, resultArgs);
							}

							failFuncs.push(arguments[i]);
						}
					}

					return this;
				},

				always: function always() {
					return this.done.apply(this, arguments).fail.apply(this, arguments);
				},

				progress: function progress() {
					for (var i = 0; i < arguments.length; i++) {
						// skip any undefined or null arguments
						if (!arguments[i]) {
							continue;
						}

						if (isArray(arguments[i])) {
							var arr = arguments[i];
							for (var j = 0; j < arr.length; j++) {
								// immediately call the function if the deferred has been resolved
								if (status === 'pending') {
									progressFuncs.push(arr[j]);
								}
							}
						} else {
							// immediately call the function if the deferred has been resolved
							if (status === 'pending') {
								progressFuncs.push(arguments[i]);
							}
						}
					}

					return this;
				},

				then: function then() {
					// fail callbacks
					if (arguments.length > 1 && arguments[1]) {
						this.fail(arguments[1]);
					}

					// done callbacks
					if (arguments.length > 0 && arguments[0]) {
						this.done(arguments[0]);
					}

					// notify callbacks
					if (arguments.length > 2 && arguments[2]) {
						this.progress(arguments[2]);
					}
				},

				promise: function promise(obj) {
					if (obj == null) {
						return _promise;
					} else {
						for (var i in _promise) {
							obj[i] = _promise[i];
						}
						return obj;
					}
				},

				state: function state() {
					return status;
				},

				debug: function debug() {
					console.log('[debug]', doneFuncs, failFuncs, status);
				},

				isRejected: function isRejected() {
					return status === 'rejected';
				},

				isResolved: function isResolved() {
					return status === 'resolved';
				},

				pipe: function pipe(done, fail, progress) {
					return D(function (def) {
						foreach(done, function (func) {
							// filter function
							if (typeof func === 'function') {
								deferred.done(function () {
									var returnval = func.apply(this, arguments);
									// if a new deferred/promise is returned, its state is passed to the current deferred/promise
									if (returnval && typeof returnval === 'function') {
										returnval.promise().then(def.resolve, def.reject, def.notify);
									} else {
										// if new return val is passed, it is passed to the piped done
										def.resolve(returnval);
									}
								});
							} else {
								deferred.done(def.resolve);
							}
						});

						foreach(fail, function (func) {
							if (typeof func === 'function') {
								deferred.fail(function () {
									var returnval = func.apply(this, arguments);

									if (returnval && typeof returnval === 'function') {
										returnval.promise().then(def.resolve, def.reject, def.notify);
									} else {
										def.reject(returnval);
									}
								});
							} else {
								deferred.fail(def.reject);
							}
						});
					}).promise();
				}
			},
			    deferred = {
				resolveWith: function resolveWith(context) {
					if (status === 'pending') {
						status = 'resolved';
						var args = resultArgs = arguments.length > 1 ? arguments[1] : [];
						for (var i = 0; i < doneFuncs.length; i++) {
							doneFuncs[i].apply(context, args);
						}
					}
					return this;
				},

				rejectWith: function rejectWith(context) {
					if (status === 'pending') {
						status = 'rejected';
						var args = resultArgs = arguments.length > 1 ? arguments[1] : [];
						for (var i = 0; i < failFuncs.length; i++) {
							failFuncs[i].apply(context, args);
						}
					}
					return this;
				},

				notifyWith: function notifyWith(context) {
					if (status === 'pending') {
						var args = resultArgs = arguments.length > 1 ? arguments[1] : [];
						for (var i = 0; i < progressFuncs.length; i++) {
							progressFuncs[i].apply(context, args);
						}
					}
					return this;
				},

				resolve: function resolve() {
					return this.resolveWith(this, arguments);
				},

				reject: function reject() {
					return this.rejectWith(this, arguments);
				},

				notify: function notify() {
					return this.notifyWith(this, arguments);
				}
			};

			var obj = _promise.promise(deferred);

			if (fn) {
				fn.apply(obj, [obj]);
			}

			return obj;
		}

		D.when = function () {
			if (arguments.length < 2) {
				var obj = arguments.length ? arguments[0] : undefined;
				if (obj && typeof obj.isResolved === 'function' && typeof obj.isRejected === 'function') {
					return obj.promise();
				} else {
					return D().resolve(obj).promise();
				}
			} else {
				return function (args) {
					var df = D(),
					    size = args.length,
					    done = 0,
					    rp = new Array(size); // resolve params: params of each resolve, we need to track down them to be able to pass them in the correct order if the master needs to be resolved

					for (var i = 0; i < args.length; i++) {
						(function (j) {
							var obj = null;

							if (args[j].done) {
								args[j].done(function () {
									rp[j] = arguments.length < 2 ? arguments[0] : arguments;if (++done == size) {
										df.resolve.apply(df, rp);
									}
								}).fail(function () {
									df.reject(arguments);
								});
							} else {
								obj = args[j];
								args[j] = new Deferred();

								args[j].done(function () {
									rp[j] = arguments.length < 2 ? arguments[0] : arguments;if (++done == size) {
										df.resolve.apply(df, rp);
									}
								}).fail(function () {
									df.reject(arguments);
								}).resolve(obj);
							}
						})(i);
					}

					return df.promise();
				}(arguments);
			}
		}, D.isEmptyObject = function (obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		};

		global.Deferred = D;
		global.BMSJQ = D;
		global.BMSJQ.Deferred = function () {
			return new Deferred();
		};
	})(window);

	function printStackTrace(e) {
		e = e || { guess: true };var t = e.e || null,
		    n = !!e.guess;var r = new printStackTrace.implementation(),
		    i = r.run(t);return n ? r.guessAnonymousFunctions(i) : i;
	}if (typeof module !== "undefined" && module.exports) {
		module.exports = printStackTrace;
	}printStackTrace.implementation = function () {};printStackTrace.implementation.prototype = { run: function run(e, t) {
			e = e || this.createException();t = t || this.mode(e);if (t === "other") {
				return this.other(arguments.callee);
			} else {
				return this[t](e);
			}
		}, createException: function createException() {
			try {
				this.undef();
			} catch (e) {
				return e;
			}
		}, mode: function mode(e) {
			if (e["arguments"] && e.stack) {
				return "chrome";
			} else if (e.stack && e.sourceURL) {
				return "safari";
			} else if (e.stack && e.number) {
				return "ie";
			} else if (typeof e.message === "string" && typeof window !== "undefined" && window.opera) {
				if (!e.stacktrace) {
					return "opera9";
				}if (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
					return "opera9";
				}if (!e.stack) {
					return "opera10a";
				}if (e.stacktrace.indexOf("called from line") < 0) {
					return "opera10b";
				}return "opera11";
			} else if (e.stack) {
				return "firefox";
			}return "other";
		}, instrumentFunction: function instrumentFunction(e, t, n) {
			e = e || window;var r = e[t];e[t] = function () {
				n.call(this, printStackTrace().slice(4));return e[t]._instrumented.apply(this, arguments);
			};e[t]._instrumented = r;
		}, deinstrumentFunction: function deinstrumentFunction(e, t) {
			if (e[t].constructor === Function && e[t]._instrumented && e[t]._instrumented.constructor === Function) {
				e[t] = e[t]._instrumented;
			}
		}, chrome: function chrome(e) {
			var t = (e.stack + "\n").replace(/^\S[^\(]+?[\n$]/gm, "").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}()@$1").split("\n");t.pop();return t;
		}, safari: function safari(e) {
			return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n");
		}, ie: function ie(e) {
			var t = /^.*at (\w+) \(([^\)]+)\)$/gm;return e.stack.replace(/at Anonymous function /gm, "{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m, "").replace(t, "$1@$2").split("\n");
		}, firefox: function firefox(e) {
			return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^[\(@]/gm, "{anonymous}()@").split("\n");
		}, opera11: function opera11(e) {
			var t = "{anonymous}",
			    n = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;var r = e.stacktrace.split("\n"),
			    i = [];for (var s = 0, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);if (u) {
					var a = u[4] + ":" + u[1] + ":" + u[2];var f = u[3] || "global code";f = f.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, t);i.push(f + "@" + a + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}return i;
		}, opera10b: function opera10b(e) {
			var t = /^(.*)@(.+):(\d+)$/;var n = e.stacktrace.split("\n"),
			    r = [];for (var i = 0, s = n.length; i < s; i++) {
				var o = t.exec(n[i]);if (o) {
					var u = o[1] ? o[1] + "()" : "global code";r.push(u + "@" + o[2] + ":" + o[3]);
				}
			}return r;
		}, opera10a: function opera10a(e) {
			var t = "{anonymous}",
			    n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;var r = e.stacktrace.split("\n"),
			    i = [];for (var s = 0, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);if (u) {
					var a = u[3] || t;i.push(a + "()@" + u[2] + ":" + u[1] + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}return i;
		}, opera9: function opera9(e) {
			var t = "{anonymous}",
			    n = /Line (\d+).*script (?:in )?(\S+)/i;var r = e.message.split("\n"),
			    i = [];for (var s = 2, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);if (u) {
					i.push(t + "()@" + u[2] + ":" + u[1] + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}return i;
		}, other: function other(e) {
			var t = "{anonymous}",
			    n = /function\s*([\w\-$]+)?\s*\(/i,
			    r = [],
			    i,
			    s,
			    o = 10;while (e && e["arguments"] && r.length < o) {
				i = n.test(e.toString()) ? RegExp.$1 || t : t;s = Array.prototype.slice.call(e["arguments"] || []);r[r.length] = i + "(" + this.stringifyArguments(s) + ")";e = e.caller;
			}return r;
		}, stringifyArguments: function stringifyArguments(e) {
			var t = [];var n = Array.prototype.slice;for (var r = 0; r < e.length; ++r) {
				var i = e[r];if (i === undefined) {
					t[r] = "undefined";
				} else if (i === null) {
					t[r] = "null";
				} else if (i.constructor) {
					if (i.constructor === Array) {
						if (i.length < 3) {
							t[r] = "[" + this.stringifyArguments(i) + "]";
						} else {
							t[r] = "[" + this.stringifyArguments(n.call(i, 0, 1)) + "..." + this.stringifyArguments(n.call(i, -1)) + "]";
						}
					} else if (i.constructor === Object) {
						t[r] = "#object";
					} else if (i.constructor === Function) {
						t[r] = "#function";
					} else if (i.constructor === String) {
						t[r] = '"' + i + '"';
					} else if (i.constructor === Number) {
						t[r] = i;
					}
				}
			}return t.join(",");
		}, sourceCache: {}, ajax: function ajax(e) {
			var t = this.createXMLHTTPObject();if (t) {
				try {
					t.open("GET", e, false);t.send(null);return t.responseText;
				} catch (n) {}
			}return "";
		}, createXMLHTTPObject: function createXMLHTTPObject() {
			var e,
			    t = [function () {
				return new XMLHttpRequest();
			}, function () {
				return new ActiveXObject("Msxml2.XMLHTTP");
			}, function () {
				return new ActiveXObject("Msxml3.XMLHTTP");
			}, function () {
				return new ActiveXObject("Microsoft.XMLHTTP");
			}];for (var n = 0; n < t.length; n++) {
				try {
					e = t[n]();this.createXMLHTTPObject = t[n];return e;
				} catch (r) {}
			}
		}, isSameDomain: function isSameDomain(e) {
			return typeof location !== "undefined" && e.indexOf(location.hostname) !== -1;
		}, getSource: function getSource(e) {
			if (!(e in this.sourceCache)) {
				this.sourceCache[e] = this.ajax(e).split("\n");
			}return this.sourceCache[e];
		}, guessAnonymousFunctions: function guessAnonymousFunctions(e) {
			for (var t = 0; t < e.length; ++t) {
				var n = /\{anonymous\}\(.*\)@(.*)/,
				    r = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
				    i = e[t],
				    s = n.exec(i);if (s) {
					var o = r.exec(s[1]);if (o) {
						var u = o[1],
						    a = o[2],
						    f = o[3] || 0;if (u && this.isSameDomain(u) && a) {
							var l = this.guessAnonymousFunction(u, a, f);e[t] = i.replace("{anonymous}", l);
						}
					}
				}
			}return e;
		}, guessAnonymousFunction: function guessAnonymousFunction(e, t, n) {
			var r;try {
				r = this.findFunctionName(this.getSource(e), t);
			} catch (i) {
				r = "getSource failed with url: " + e + ", exception: " + i.toString();
			}return r;
		}, findFunctionName: function findFunctionName(e, t) {
			var n = /function\s+([^(]*?)\s*\(([^)]*)\)/;var r = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;var i = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;var s = "",
			    o,
			    u = Math.min(t, 20),
			    a,
			    f;for (var l = 0; l < u; ++l) {
				o = e[t - l - 1];f = o.indexOf("//");if (f >= 0) {
					o = o.substr(0, f);
				}if (o) {
					s = o + s;a = r.exec(s);if (a && a[1]) {
						return a[1];
					}a = n.exec(s);if (a && a[1]) {
						return a[1];
					}a = i.exec(s);if (a && a[1]) {
						return a[1];
					}
				}
			}return "(?)";
		} };

	function __BMS() {}
	var BMS = BMS ? BMS : {};

	BMS.Validators = {
		// Validation should be disabled by default - so Welcome pages do not validate in production.
		// If we want validation for the welcome page we must add a solution to turn it off in production.
		isValidationEnabled: false,
		verbose: true,

		// True when 'o' is set, the native JavaScript event is defined, and 'o' has an event phase
		isEvent: function isEvent(obj) {
			return obj && obj.type;
		},

		logAndThrow: function logAndThrow(msg, callerName) {
			// Logger is not be available in public resources (welcome page).
			if (BMS.Logger) {
				if (callerName) {
					msg = "Invalid invocation of method " + callerName + "; " + msg;
				}
				if (this.verbose) {
					BMS.Logger.error(msg);
				}
			}
			throw new Error(msg);
		},

		enableValidation: function enableValidation() {
			this.isValidationEnabled = true;
		},

		disableValidation: function disableValidation() {
			this.isValidationEnabled = false;
		},

		validateArguments: function validateArguments(validators, args, callerName) {
			if (validators.length < args.length) {
				// More arguments than validators ... accept only if last argument is an Event.
				if (validators.length !== args.length - 1 || !this.isEvent(args[args.length - 1])) {
					this.logAndThrow("Method was passed " + args.length + " arguments, expected only " + validators.length + " " + BMSJSX.Object.toJSON(validators) + ".", callerName);
				}
			}
			this.validateArray(validators, args, callerName);
		},

		validateMinimumArguments: function validateMinimumArguments(args, mandatoryArgsLength, callerName) {
			if (args.length < mandatoryArgsLength) {
				this.logAndThrow("Method passed: " + args.length + " arguments. Minimum arguments expected are: " + mandatoryArgsLength + " arguments.", callerName);
			}
		},

		/**
   * Validates each argument in the array with the matching validator. @Param array - a JavaScript array.
   * @Param validators - an array of validators - a validator can be a function or a simple JavaScript type
   * (string).
   */
		validateArray: function validateArray(validators, array, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			for (var i = 0; i < validators.length; ++i) {
				this.validateArgument(validators[i], array[i], callerName);
			}
		},

		/**
   * Validates a single argument. @Param arg - an argument of any type. @Param validator - a function or a
   * simple JavaScript type (string).
   */
		validateArgument: function validateArgument(validator, arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			switch (typeof validator === 'undefined' ? 'undefined' : _typeof(validator)) {
				// Case validation function.
				case 'function':
					validator.call(this, arg);
					break;
				// Case direct type.
				case 'string':
					if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== validator) {
						this.logAndThrow("Invalid value '" + BMSJSX.Object.toJSON(arg) + "' (" + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + "), expected type '" + validator + "'.", callerName);
					}
					break;
				default:
					// This error can be caused only if IBM MobileFirst Platform code is bugged.
					this.logAndThrow("Invalid or undefined validator for argument '" + BMSJSX.Object.toJSON(arg) + "'", callerName);
			}
		},

		/**
   * Validates that each option attribute in the given options has a valid name and type. @Param options -
   * the options to validate. @Param validOptions - the valid options hash with their validators:
   * validOptions = { onSuccess : 'function', timeout : function(value){...} }
   *
   */
		validateOptions: function validateOptions(validOptions, options, callerName) {
			this.validateObjectProperties(validOptions, options, true, callerName);
		},

		/**
   * Validates that option attribute in the given options have a valid name and type - only if they are
   * explicitly defined in validOptions. If an option attribute does not exist in validOptions, it is simply
   * ignored @Param options - the options to validate. @Param validOptions - the valid options hash with
   * their validators: validOptions = { onSuccess : 'function', timeout : function(value){...} }
   *
   */
		validateOptionsLoose: function validateOptionsLoose(validOptions, options, callerName) {
			this.validateObjectProperties(validOptions, options, false, callerName);
		},

		/**
   * Validates that each option attribute in the given options has a valid name and type. @Param options -
   * the options to validate. @Param validOptions - the valid options hash with their validators:
   * validOptions = { onSuccess : 'function', timeout : function(value){...} } @Param strict - a boolean
   * indicating whether options' properties that don't exist in validOptions are allowed
   *
   */
		validateObjectProperties: function validateObjectProperties(validOptions, options, strict, callerName) {
			if (!this.isValidationEnabled || typeof options === 'undefined') {
				return;
			}
			for (var att in options) {
				// Check that the attribute exists in the validOptions.
				if (!validOptions[att]) {
					if (strict) {
						this.logAndThrow("Invalid options attribute '" + att + "', valid attributes: " + BMSJSX.Object.toJSON(validOptions), callerName);
					} else {
						continue;
					}
				}
				try {
					// Check that the attribute type is valid.
					this.validateArgument(validOptions[att], options[att], callerName);
				} catch (e) {
					this.logAndThrow("Invalid options attribute '" + att + "'. " + (e.message || e.description), callerName);
				}
			}
		},

		/**
   * Validates that each option attribute in the given options is from the one of the validators type.
   * @Param options - the options to validate. @Param validatos - the valid types (in string format):
   * validators = ['string','null','undefined',someFunction,'boolean'...]
   *
   */
		validateAllOptionTypes: function validateAllOptionTypes(validators, options, callerName) {
			if (!this.isValidationEnabled || typeof options === 'undefined') {
				return;
			}
			var isValidAtt = false;
			for (var att in options) {
				isValidAtt = false;
				for (var i = 0; i < validators.length; ++i) {
					try {
						// Check that the attribute type is valid.
						this.verbose = false;
						this.validateArgument(validators[i], options[att], callerName);
						isValidAtt = true;
						break;
					} catch (e) {
						// do nothing
					}
				}
				this.verbose = true;
				if (!isValidAtt) {
					this.logAndThrow("Invalid options attribute '" + att + "' (" + _typeof(options[att]) + "). Please use just the following types: " + validators.join(","), callerName);
				}
			}
		},

		validateStringOrNull: function validateStringOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'undefined' && arg !== null && typeof arg !== 'string') {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'string'.", callerName);
			}
		},

		validateNumberOrNull: function validateNumberOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'undefined' && arg !== null && typeof arg !== 'number') {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'number'.", callerName);
			}
		},

		validateBooleanOrNull: function validateBooleanOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'undefined' && arg !== null && typeof arg !== 'boolean') {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'boolean'.", callerName);
			}
		},

		validateObjectOrNull: function validateObjectOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'undefined' && arg !== null && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) !== 'object') {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'object'.", callerName);
			}
		},

		validateArrayObjectOrNull: function validateArrayObjectOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}

			if (typeof arg !== 'undefined' && arg !== null && !Array.isArray(arg)) {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'array'.", callerName);
			}
		},

		validateFunctionOrNull: function validateFunctionOrNull(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'undefined' && arg !== null && typeof arg !== 'function') {
				this.logAndThrow("Invalid argument value '" + arg + "', expected null or 'function'.", callerName);
			}
		},
		/**
   * Validates that the url is a valid url
   * Throws exception if not
   * @param validOptions
   * @param options
   * @param callerName
   */
		validateURLOrNull: function validateURLOrNull(url, callerName) {
			if (!this.isValidationEnabled || typeof url === 'undefined' || url == null) {
				return;
			}
			var pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
			if (!url.match(pattern)) {
				this.logAndThrow("Invalid URL : " + url, callerName);
			}
		},
		validateDefined: function validateDefined(arg, callerName) {
			if (typeof arg === 'undefined' || arg === null) {
				this.logAndThrow("Invalid argument value '" + arg + "', expected not empty string.", callerName);
			}
		},
		isDefined: function isDefined(arg) {
			return typeof arg === 'undefined' || arg === null;
		},

		validateNotEmptyString: function validateNotEmptyString(arg, callerName) {
			if (!this.isValidationEnabled) {
				return;
			}
			if (typeof arg !== 'string' || arg.length == 0) {
				this.logAndThrow("Invalid argument value '" + arg + "', expected not empty string.", callerName);
			}
		},
		isNullOrUndefined: function isNullOrUndefined(object) {
			return object === null || typeof object === 'undefined';
		},
		isString: function isString(object) {
			return typeof object === 'string';
		},
		isBoolean: function isBoolean(object) {
			return typeof object === 'boolean';
		},
		isNumber: function isNumber(object) {
			return typeof object === 'number';
		},
		isArray: function isArray(object) {
			return Array.isArray(object);
		}
	};

	/*
  Licensed Materials - Property of IBM
 
  (C) Copyright 2015 IBM Corp.
 
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

	__BMSConfig = function __BMSConfig() {
		/*jshint strict:false, maxparams:4*/
		var baseURL;
		var applicationName;
		//var contextRoot;
		var clientApiKey;
		var bmsRegion;
		var serverOverride;
		var serverRelativeTime;
		var instanceId;

		this.__getClientApiKey = function () {
			return clientApiKey;
		};

		this.__setClientApiKey = function (apiKey) {
			BMS.Validators.validateStringOrNull(clientApiKey, '_setClientApiKey');
			clientApiKey = apiKey;
		};

		this.__getInstanceId = function () {
			return instanceId;
		};

		this.__setInstanceId = function (instId) {
			BMS.Validators.validateStringOrNull(instId, '__setInstanceId');
			instanceId = instId;
		};

		this.__getBaseURL = function () {
			if (typeof baseURL === 'undefined' || baseURL === null) {
				baseURL = this.__getContext() + '/api';
			}
			return baseURL;
		};

		this.__setBaseURL = function (url) {
			BMS.Validators.validateURLOrNull(url, '__setBaseURL');
			baseURL = url;
		};

		this.__getApplicationName = function () {
			return applicationName;
		};

		this.__setApplicationName = function (app) {
			BMS.Validators.validateDefined(app, '__setApplicationName');
			applicationName = app;
		};

		this.__getClientPlatform = function () {
			return 'web';
		};

		this.__getApplicationData = function () {
			var data = {};
			data['clientPlatform'] = this.__getClientPlatform();
			data['id'] = this.__getApplicationName();
			return data;
		};

		this.__getServerRelativeTime = function () {
			return BMS.Validators.isNullOrUndefined(serverRelativeTime) ? 0 : serverRelativeTime;
		};

		this.__setServerRelativeTime = function (time) {
			BMS.Validators.validateNumberOrNull(time, '__setServerRelativeTime');
			serverRelativeTime = time;
		};
	};

	//+++
	__BMS.prototype.Config = new __BMSConfig();
	BMS.Config = new __BMSConfig();

	__BMSLocalStorageDB = function __BMSLocalStorageDB() {
		/*jshint strict:false, maxparams:4*/

		var appNamePrefix;

		// By Default, we work with localStorage, unless it is changed during a set/get
		var storage = window.localStorage;

		/**
      * Initializes the database and verifies it is accessible
      * @returns {*}
      */
		this.init = function () {
			appNamePrefix = BMS.Config.__getApplicationName();
		};

		/**
   * Sets an item in the database
   * @param key
   * @param value
   * @param options {{session : boolean, global : boolean}}
   * @returns {*}
   */
		this.setItem = function (key, value, options) {
			var finalOptions = initOptions(options);
			var finalKey = buildKey(key, finalOptions);
			var finalValue = value ? JSON.stringify(value) : null;
			storage.setItem(finalKey, finalValue);
		};

		/**
   * Gets an item in the database
   * @param key
   * @param options {{session : boolean, global : boolean}}
   * @returns {string - JSON representation of value for given key}
   */
		this.getItem = function (key, options) {
			var finalOptions = initOptions(options);
			var finalKey = buildKey(key, finalOptions);
			var value = storage.getItem(finalKey);
			return value ? JSON.parse(value) : null;
		};

		/**
   * Removes an item in the database
   * @param key
   * @param options {{session : boolean, global : boolean}}
   * @returns {*}
   */
		this.removeItem = function (key, options) {
			var finalOptions = initOptions(options);
			var finalKey = buildKey(key, finalOptions);
			storage.removeItem(finalKey);
		};

		/**
   * Takes the options the user entered (if any) and appends them to the default
   * options, overriding the default values
   * @param userOptions
   * @returns {{global: boolean, session: boolean}}
   */
		function initOptions(userOptions) {
			var options = {
				'session': false,
				'global': false
			};
			for (var property in userOptions) {
				options[property] = userOptions[property];
			}

			// Init the storage
			storage = options.session ? window.sessionStorage : window.localStorage;

			return options;
		}

		function buildKey(key, options) {
			return options.global ? key : appNamePrefix + '.' + key;
		}
	};

	//+++
	BMS.LocalStorageDB = new __BMSLocalStorageDB();

	__BMSVarStorageDB = function __BMSVarStorageDB() {

		var appNamePrefix;
		var storage = {};

		/**
      * Initializes the database and verifies it is accessible
      * @returns {*}
      */
		this.init = function () {
			appNamePrefix = BMS.Config.__getApplicationName();
		};

		/**
   * Sets an item in the Database
   * @param key
   * @param value
   * @returns {*}
   */
		this.setItem = function (key, value) {
			var finalKey = buildKey(key);
			var finalValue = value ? JSON.stringify(value) : null;
			storage[finalKey] = finalValue;
		};

		/**
   * Gets an item in the Database
   * @param key
   * @returns {string - JSON representation of value for given key}
   */
		this.getItem = function (key) {
			var finalKey = buildKey(key);
			value = storage[finalKey];
			return value ? JSON.parse(value) : null;
		};

		/**
      * Removes an item in the database
      * @param key
      * @returns {*}
      */
		this.removeItem = function (key) {
			var finalKey = buildKey(key);
			delete storage[finalKey];
		};

		// Builds the key with the appName prefeix
		function buildKey(key) {
			return appNamePrefix + '.' + key;
		}
	};

	__BMSDAO = function __BMSDAO() {
		var dao;

		/**
   * Initializes the database and verifies it is accessible
   *
   * @returns {*}
   */
		this.init = function () {
			try {
				dao = new __BMSLocalStorageDB();
				dao.init();
				dao.setItem("testKey", "testValue");
				if (dao.getItem("testKey") == "testValue") {
					dao.removeItem("testKey");
				} else {
					throw "LocalStorage Error";
				}
			} catch (e) {
				dao = new __BMSVarStorageDB();
				dao.init();
			}
		};

		/**
   * Sets an item in the database
   *
   * @param key
   * @param value
   * @param options
   *            {{session : boolean, global : boolean}} - NOTE: When local storage
   *            is not available (e.g. Safari private mode) all data will be
   *            saved as session storage (regardless of options parameter);
   * @returns {*}
   */
		this.setItem = function (key, value, options) {
			dao.setItem(key, value, options);
		};

		/**
   * Gets an item in the database
   *
   * @param key
   * @param options
   *            {{session : boolean, global : boolean}}
   * @returns {value for given key}
   */
		this.getItem = function (key, options) {
			return dao.getItem(key, options);
		};

		/**
   * Removes an item in the database
   *
   * @param key
   * @param options
   *            {{session : boolean, global : boolean}}
   * @returns {*}
   */
		this.removeItem = function (key, options) {
			dao.removeItem(key, options);
		};
	};

	//+++
	__BMS.prototype.DAO = new __BMSDAO();
	BMS.DAO = new __BMSDAO();

	__BMSBrowserManager = function __BMSBrowserManager() {
		/*jshint strict:false, maxparams:4*/
		var uniqueId;
		var localDeviceDisplayName;

		/**
   * Unique ID taken from different parts of the browser information
   * @returns {*}
   */
		this.getBMSUniqueID = function () {
			var key = 'com.mfp.browser.uniqueid';

			// BrowserID should be saved cross applications
			var globalOptions = { 'global': true };

			var uniqueId = BMS.DAO.getItem(key, globalOptions);
			if (BMS.Validators.isNullOrUndefined(uniqueId)) {
				uniqueId = generateGUID();
				BMS.DAO.setItem(key, uniqueId, globalOptions);
			}
			return uniqueId;
		};

		this.__setLocalDeviceDisplayName = function (name) {
			localDeviceDisplayName = name;
		};

		/**
   * Browser Object that is used for registration
   * @returns {{}}
   */
		this.getDeviceData = function () {
			var data = {};
			data['id'] = this.getBMSUniqueID();
			data['platform'] = getUserAgent();
			data['hardware'] = getPlatform();
			data['deviceDisplayName'] = localDeviceDisplayName;
			return data;
		};

		function getUserAgent() {
			return window.navigator.userAgent;
		}

		function getPlatform() {
			return window.navigator.platform;
		}

		/*
  Generates a unique ID based on the random information
   */
		function generateGUID() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
			}
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		}
	};

	//+++
	__BMS.prototype.BrowserManager = new __BMSBrowserManager();
	BMS.BrowserManager = new __BMSBrowserManager();

	function setInitParams(params) {
		BMS.Validators.enableValidation();

		// assign params to initOptions inside BMS.Client class
		initOptions = params;

		// var mfpContextRoot = params['mfpContextRoot'];
		// BMS.Validators.validateDefined(mfpContextRoot, 'init');

		var appId = params['applicationName'];
		BMS.Validators.validateDefined(appId, 'init');

		var clientApiKey = params['clientApiKey'];
		BMS.Validators.validateStringOrNull(clientApiKey, 'init');

		// var bmsRegion= params['bmsregion'];
		// BMS.Validators.validateStringOrNull(bmsRegion,'init');

		// var serverOverride=params['serverOverride'];
		// BMS.Validators.validateStringOrNull(serverOverride,'init');

		var instId = params['instanceId'];
		BMS.Validators.validateStringOrNull(instId, 'init');

		// Pass to config
		//BMS.Config.__setContext(mfpContextRoot);
		BMS.Config.__setApplicationName(appId);
		BMS.Config.__setClientApiKey(clientApiKey);
		// BMS.Config.__setbmsRegion(bmsRegion);
		// BMS.Config.__setServerOverride(serverOverride);
		BMS.Config.__setInstanceId(instId);
	}
	//__________________________________________________________________________________________________
	// KEYS and MACRO PARAMETERS
	KEY_LOCAL_STORAGE_LOGS = '__BMS_WEBLOG_LOGS__', KEY_LOCAL_STORAGE_SWAP = '__BMS_WEBLOG_SWAP__', KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE = '__BMS_WEBLOG_ANALYTICS__LIFECYCLE', KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS = '__BMS_WEBLOG_ANALYTICS__NETWORKTRANS', KEY_LOCAL_STORAGE_CONFIG = '__BMS_WEBLOG_CONFIG__', KEY_REMOTE_STORAGE_CONFIG = '__BMS_WEBLOG_REMOTE_CONFIG__', DEFAULT_MAX_STORAGE_SIZE = 500000, BUFFER_TIME_IN_MILLISECONDS = 60000,

	//__________________________________________________________________________________________________
	// SERVICE PATHS AND DOMAINS
	REQ_SEND_LOGS = '/analytics-service/rest/data/events/clientlogs/', LOG_UPLOADER_APP_ROUTE = 'mobile-analytics-dashboard';

	// REGION_US_SOUTH_URL='.ng.bluemix.net',
	// REGION_UK_URL='.eu-gb.bluemix.net',
	// REGION_SYDNEY_URL='.au-syd.bluemix.net',
	//__________________________________________________________________________________________________


	//__________________________________________________________________________________________________

	//LOCAL VARIABLES

	sendLogsTimeBuffer = 0, analyticsLocalStorage = {
		appNamePrefix: '',

		init: function init(appName) {
			this.appNamePrefix = appName;
		},

		getItem: function getItem(key) {
			return localStorage.getItem(this.appNamePrefix + '.' + key);
		},

		setItem: function setItem(key, value) {
			localStorage.setItem(this.appNamePrefix + '.' + key, value);
		},

		removeItem: function removeItem(key) {
			localStorage.removeItem(this.appNamePrefix + '.' + key);
		}
	};

	var LEFT_BRACKET = '[';
	var RIGHT_BRACKET = '] '; //There's a space at the end.
	var _ANALYTICS_PKG_NAME = 'bms.analytics';

	var metadataHeader = {};
	var startupTime = 0;
	var appSessionID = generateUUID('new');
	var userID = '';
	var clientId = '';
	var serveroverride = '';
	var state = __getStateDefaults();
	var pendingTrackingIDs = {};
	var logger;
	var clientApiKey = '';
	var instanceId = '';
	var bmsRegion = '';
	var hasUsercontext = false;
	var deviceEvents = {
		ALL: 0,
		LIFECYCLE: 1,
		NETWORKTRANSACTION: 2,
		NONE: 3
	};
	var current_set_DeviceEvent = deviceEvents.ALL;
	if (!window.console) {
		// thanks a lot, IE9
		/*jshint -W020 */
		console = {
			error: function error() {},
			warn: function warn() {},
			info: function info() {},
			log: function log() {},
			debug: function debug() {},
			trace: function trace() {}
		};
	}

	//
	console.log = console.log || function () {}; // I suppose console.log is the most likely to exist.
	console.warn = console.warn || console.log;
	console.error = console.error || console.log;
	console.info = console.info || console.log;
	console.debug = console.debug || console.info;
	console.trace = console.trace || console.debug; // try to keep the verbosity down a bit

	var priorities = {
		trace: 600,
		debug: 500,
		log: 400,
		info: 300,
		warn: 200,
		error: 100,
		fatal: 50,
		analytics: 25
	};

	//BMSAnalytics Private Functions  **********
	//__________________________________________________________________________________________________

	(function () {})();

	/*
  * PRIVATE METHODS
  */
	var __usingLocalConfiguration = function __usingLocalConfiguration() {
		var configurationString = analyticsLocalStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);

		if (configurationString == null) {
			return true;
		}

		return false;
	};

	function generateUUID(newSession) {
		"use strict";

		var d = new Date().getTime();
		var uuid = '';
		var generate = function generate(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
		};
		if (newSession) {
			uuid = 'xxxxxxxx-xxxx-4567-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, generate);
		} else {
			uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, generate);
		}

		return uuid;
	};

	var getTrackingId = function getTrackingId() {
		return generateUUID();
	};

	function initXHR(XHR, analytics) {
		"use strict";

		var open = XHR.prototype.open;
		var send = XHR.prototype.send;
		XHR.prototype.open = function (method, url, async, user, pass) {
			this._url = url;
			open.call(this, method, url, async, user, pass);
		};
		XHR.prototype.send = function (data) {
			var self = this;
			if (!state.allDomains && (!metadataHeader.contextRoot || this._url.indexOf(metadataHeader.contextRoot) == -1)) {
				send.call(this, data);
				return;
			}

			var oldOnReadyStateChange;
			var url = this._url;
			var track = logOutboundRequest(this);
			if (track) {
				var duration = new Date().getTime() - startupTime;
				if (isNewSession()) {
					logAnalyticsSessionStart();
				} else if (duration > 1800000) {
					logAnalyticsSessionStop();
				}
				if (clientId != "") {
					metadataHeader.clientID = clientId;
				}
				startupTime = new Date().getTime();
				this.setRequestHeader("x-bms-analytics-tracking-id", this.trackingId);
				this.setRequestHeader("x-mfp-analytics-metadata", JSON.stringify(metadataHeader));
				this.setRequestHeader("x-mfp-analytics-api-key", clientApiKey);
			}

			function onReadyStateChange() {
				if (self.readyState == 4 /* complete */) {
						/* This is where you can put code that you want to execute post-complete*/
						/* URL is kept in this._url */
						logInboundResponse(this);
						//* console.log('analytics: Call issued to ' + this._url);
					}

				if (oldOnReadyStateChange) {
					oldOnReadyStateChange();
				}
			}

			/* Set xhr.noIntercept to true to disable the interceptor for a particular call */
			if (!this.noIntercept) {
				if (this.addEventListener) {
					this.addEventListener("readystatechange", onReadyStateChange, false);
				} else {
					oldOnReadyStateChange = this.onreadystatechange;
					this.onreadystatechange = onReadyStateChange;
				}
			}
			//console.log('send');
			send.call(this, data);
		};
	};

	var __send = function __send(keys) {
		return new Promise(function (resolve, reject) {
			var data = getLogsData(keys);
			if (data == null || data == '') {
				console.log('analytics: There are no persisted logs to send.');
				resolve('There were no persisted logs to send');
				return;
			}

			__ajax(data, REQ_SEND_LOGS).then(function (response) {
				emptyLogs(keys);
				//logInboundForSendResponse(response[0]);
				console.log('analytics: Client logs successfully sent to the server');
				resolve('Log was successfully sent');
			}).catch(function (err) {
				console.error('analytics: Call failed, server returned: ', err.statusText);
				reject('analytics: Call failed, server returned: ' + err.statusText);
			});
		});
	};

	var __ajax = function __ajax(data, path, method) {

		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			if (method == null) {
				method = 'POST';
			}

			bmsRegion = BMSClient.getRegion();
			var url = 'https://' + LOG_UPLOADER_APP_ROUTE + bmsRegion;

			//Addition
			// if(bmsRegion==0)
			// {
			// 	url='https://'+LOG_UPLOADER_APP_ROUTE+REGION_US_SOUTH_URL;
			// }
			// else if(bmsRegion==1)
			// {
			// 	url='https://'+LOG_UPLOADER_APP_ROUTE+REGION_UK_URL;
			// }
			// else if(bmsRegion==2)
			// {
			// 	url='https://'+LOG_UPLOADER_APP_ROUTE+REGION_SYDNEY_URL;;
			// }
			// else
			// {
			// }


			if (serveroverride != '') {
				url = 'http://' + serveroverride;
			}

			//xhr.open(method,path,true);
			xhr.open(method, url + path + "?instanceId=" + instanceId, true); //

			xhr.onload = function () {
				if (this.status >= 200 && this.status < 300) {
					resolve([xhr.networkMetadata, xhr.response]);
				} else {
					reject({
						status: this.status,
						statusText: xhr.statusText
					});
				}
			};
			xhr.onerror = function () {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			};
			xhr.send(data);
		});
	};

	var logOutboundRequest = function logOutboundRequest(request) {
		try {
			if (!request.trackingId) {
				request.trackingId = getTrackingId();
			} else {
				return false;
			}
			var outboundTimestamp = new Date().getTime();

			var metadata = {
				'$category': 'network',
				'$trackingid': request.trackingId,
				'$outboundTimestamp': outboundTimestamp
			};

			var logMetadata = {
				'$class': 'bms.analytics.xhrInterceptor',
				'$file': 'bmsanalytics.js',
				'$method': '	intercept',
				'$src': 'javascript'
			};

			request.networkMetadata = metadata;

			var logData = {
				'pkg': 'bms.analytics',
				'timestamp': new Date().getTime(),
				'level': 'ANALYTICS',
				'msg': 'InternalRequestSender outbound',
				'metadata': logMetadata
			};

			__persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS);
			return true;
		} catch (e) {
			// Do nothing
		}
	};

	var logInboundResponse = function logInboundResponse(request) {

		try {
			var trackingId = request.trackingId;

			if (trackingId) {
				var inboundTimestamp = new Date().getTime();
				var numBytes = 0;
				var responseText = ''; //response.responseJSON;TODO

				/*jshint maxdepth:4*/
				if (responseText) {
					numBytes = JSON.stringify(responseText).length;
				}

				var metadata = request.networkMetadata;

				if (metadata !== null) {
					var outboundTimestamp = metadata['$outboundTimestamp'];
					var roundTripTime = inboundTimestamp - outboundTimestamp;

					metadata['$inboundTimestamp'] = inboundTimestamp;
					metadata['$bytesReceived'] = numBytes;
					metadata['$roundTripTime'] = roundTripTime;
					metadata['$responseCode'] = request.status;
					var method = null;
					if (request.requestOptions != null) {
						var method = request.requestOptions.method;
					}
					metadata['$requestMethod'] = method;
					metadata['$path'] = request.responseURL;

					request.networkMetadata = metadata;
				}

				var logData = {
					'pkg': 'bms.analytics',
					'timestamp': new Date().getTime(),
					'level': 'ANALYTICS',
					'msg': 'InternalRequestSender logInboundResponse',
					'metadata': metadata
				};
				__persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS);
			}
		} catch (e) {}
	};

	var logInboundForSendResponse = function logInboundForSendResponse(metadata) {
		try {

			var logData = {
				'pkg': 'bms.analytics',
				'timestamp': new Date().getTime(),
				'level': 'ANALYTICS',
				'msg': 'InternalRequestSender logInboundResponse',
				'metadata': metadata
			};
			__persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS);
		} catch (e) {
			console.error('analytics: Failed to log event');
		}
	};

	function getLogsData(keys) {
		var persistedLogs = '';
		keys.forEach(function (key) {
			var value = analyticsLocalStorage.getItem(key);
			if (value !== null) {
				if (persistedLogs !== '') {
					persistedLogs += ',';
				}
				persistedLogs += value;
			}
		});
		if (persistedLogs == '') {
			return '';
		}

		var logdata = {
			__logdata: persistedLogs
		};
		return JSON.stringify(logdata);
	};

	var __persistLog = function __persistLog(log, key) {
		if (__fileSizeReached(key)) {
			if (key === KEY_LOCAL_STORAGE_LOGS) {
				__attemptFileSwap();
			} else {
				// No swapping for analytics
				return;
			}
		}

		var stringified = JSON.stringify(log);
		var persistedLogs = analyticsLocalStorage.getItem(key);
		console.log('__persistLog() ' + key + ': ' + stringified);

		if (persistedLogs === null) {
			persistedLogs = stringified;
		} else {
			persistedLogs += ', ' + stringified;
		}

		try {
			analyticsLocalStorage.setItem(key, persistedLogs);
		} catch (e) {
			console.log('analytics: Local storage capacity reached. Client logs will not be persisted');
		}
	};

	var __attemptFileSwap = function __attemptFileSwap() {
		try {
			var currentLogs = analyticsLocalStorage.getItem(KEY_LOCAL_STORAGE_LOGS);
			analyticsLocalStorage.setItem(KEY_LOCAL_STORAGE_SWAP, currentLogs);
			analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
		} catch (e) {
			console.log('analytics: Local storage capacity reached. BMS.Logger will delete old logs to make room for new ones.');
			analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_LOGS);
			analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_SWAP);
		}
	};

	/*
 * UTILITY METHODS
  */

	function printStackTrace(e) {
		e = e || {
			guess: true
		};
		var t = e.e || null,
		    n = !!e.guess;
		var r = new printStackTrace.implementation(),
		    i = r.run(t);
		return n ? r.guessAnonymousFunctions(i) : i;
	}
	if (typeof module !== "undefined" && module.exports) {
		module.exports = printStackTrace;
	}
	printStackTrace.implementation = function () {};
	printStackTrace.implementation.prototype = {
		run: function run(e, t) {
			e = e || this.createException();
			t = t || this.mode(e);
			if (t === "other") {
				return this.other(arguments.callee);
			} else {
				return this[t](e);
			}
		},
		createException: function createException() {
			try {
				this.undef();
			} catch (e) {
				return e;
			}
		},
		mode: function mode(e) {
			if (e["arguments"] && e.stack) {
				return "chrome";
			} else if (e.stack && e.sourceURL) {
				return "safari";
			} else if (e.stack && e.number) {
				return "ie";
			} else if (typeof e.message === "string" && typeof window !== "undefined" && window.opera) {
				if (!e.stacktrace) {
					return "opera9";
				}
				if (e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
					return "opera9";
				}
				if (!e.stack) {
					return "opera10a";
				}
				if (e.stacktrace.indexOf("called from line") < 0) {
					return "opera10b";
				}
				return "opera11";
			} else if (e.stack) {
				return "firefox";
			}
			return "other";
		},
		instrumentFunction: function instrumentFunction(e, t, n) {
			e = e || window;
			var r = e[t];
			e[t] = function () {
				n.call(this, printStackTrace().slice(4));
				return e[t]._instrumented.apply(this, arguments);
			};
			e[t]._instrumented = r;
		},
		deinstrumentFunction: function deinstrumentFunction(e, t) {
			if (e[t].constructor === Function && e[t]._instrumented && e[t]._instrumented.constructor === Function) {
				e[t] = e[t]._instrumented;
			}
		},
		chrome: function chrome(e) {
			var t = (e.stack + "\n").replace(/^\S[^\(]+?[\n$]/gm, "").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}()@$1$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}()@$1").split("\n");
			t.pop();
			return t;
		},
		safari: function safari(e) {
			return e.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n");
		},
		ie: function ie(e) {
			var t = /^.*at (\w+) \(([^\)]+)\)$/gm;
			return e.stack.replace(/at Anonymous function /gm, "{anonymous}()@").replace(/^(?=\w+Error\:).*$\n/m, "").replace(t, "$1@$2").split("\n");
		},
		firefox: function firefox(e) {
			return e.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^[\(@]/gm, "{anonymous}()@").split("\n");
		},
		opera11: function opera11(e) {
			var t = "{anonymous}",
			    n = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
			var r = e.stacktrace.split("\n"),
			    i = [];
			for (var s = 0, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);
				if (u) {
					var a = u[4] + ":" + u[1] + ":" + u[2];
					var f = u[3] || "global code";
					f = f.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, t);
					i.push(f + "@" + a + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}
			return i;
		},
		opera10b: function opera10b(e) {
			var t = /^(.*)@(.+):(\d+)$/;
			var n = e.stacktrace.split("\n"),
			    r = [];
			for (var i = 0, s = n.length; i < s; i++) {
				var o = t.exec(n[i]);
				if (o) {
					var u = o[1] ? o[1] + "()" : "global code";
					r.push(u + "@" + o[2] + ":" + o[3]);
				}
			}
			return r;
		},
		opera10a: function opera10a(e) {
			var t = "{anonymous}",
			    n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
			var r = e.stacktrace.split("\n"),
			    i = [];
			for (var s = 0, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);
				if (u) {
					var a = u[3] || t;
					i.push(a + "()@" + u[2] + ":" + u[1] + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}
			return i;
		},
		opera9: function opera9(e) {
			var t = "{anonymous}",
			    n = /Line (\d+).*script (?:in )?(\S+)/i;
			var r = e.message.split("\n"),
			    i = [];
			for (var s = 2, o = r.length; s < o; s += 2) {
				var u = n.exec(r[s]);
				if (u) {
					i.push(t + "()@" + u[2] + ":" + u[1] + " -- " + r[s + 1].replace(/^\s+/, ""));
				}
			}
			return i;
		},
		other: function other(e) {
			var t = "{anonymous}",
			    n = /function\s*([\w\-$]+)?\s*\(/i,
			    r = [],
			    i,
			    s,
			    o = 10;
			while (e && e["arguments"] && r.length < o) {
				i = n.test(e.toString()) ? RegExp.$1 || t : t;
				s = Array.prototype.slice.call(e["arguments"] || []);
				r[r.length] = i + "(" + this.stringifyArguments(s) + ")";
				e = e.caller;
			}
			return r;
		},
		stringifyArguments: function stringifyArguments(e) {
			var t = [];
			var n = Array.prototype.slice;
			for (var r = 0; r < e.length; ++r) {
				var i = e[r];
				if (i === undefined) {
					t[r] = "undefined";
				} else if (i === null) {
					t[r] = "null";
				} else if (i.constructor) {
					if (i.constructor === Array) {
						if (i.length < 3) {
							t[r] = "[" + this.stringifyArguments(i) + "]";
						} else {
							t[r] = "[" + this.stringifyArguments(n.call(i, 0, 1)) + "..." + this.stringifyArguments(n.call(i, -1)) + "]";
						}
					} else if (i.constructor === Object) {
						t[r] = "#object";
					} else if (i.constructor === Function) {
						t[r] = "#function";
					} else if (i.constructor === String) {
						t[r] = '"' + i + '"';
					} else if (i.constructor === Number) {
						t[r] = i;
					}
				}
			}
			return t.join(",");
		},
		sourceCache: {},
		ajax: function ajax(e) {
			var t = this.createXMLHTTPObject();
			if (t) {
				try {
					t.open("GET", e, false);
					t.send(null);
					return t.responseText;
				} catch (n) {}
			}
			return "";
		},
		createXMLHTTPObject: function createXMLHTTPObject() {
			var e,
			    t = [function () {
				return new XMLHttpRequest();
			}, function () {
				return new ActiveXObject("Msxml2.XMLHTTP");
			}, function () {
				return new ActiveXObject("Msxml3.XMLHTTP");
			}, function () {
				return new ActiveXObject("Microsoft.XMLHTTP");
			}];
			for (var n = 0; n < t.length; n++) {
				try {
					e = t[n]();
					this.createXMLHTTPObject = t[n];
					return e;
				} catch (r) {}
			}
		},
		isSameDomain: function isSameDomain(e) {
			return typeof location !== "undefined" && e.indexOf(location.hostname) !== -1;
		},
		getSource: function getSource(e) {
			if (!(e in this.sourceCache)) {
				this.sourceCache[e] = this.ajax(e).split("\n");
			}
			return this.sourceCache[e];
		},
		guessAnonymousFunctions: function guessAnonymousFunctions(e) {
			for (var t = 0; t < e.length; ++t) {
				var n = /\{anonymous\}\(.*\)@(.*)/,
				    r = /^(.*?)(?::(\d+))(?::(\d+))?(?: -- .+)?$/,
				    i = e[t],
				    s = n.exec(i);
				if (s) {
					var o = r.exec(s[1]);
					if (o) {
						var u = o[1],
						    a = o[2],
						    f = o[3] || 0;
						if (u && this.isSameDomain(u) && a) {
							var l = this.guessAnonymousFunction(u, a, f);
							e[t] = i.replace("{anonymous}", l);
						}
					}
				}
			}
			return e;
		},
		guessAnonymousFunction: function guessAnonymousFunction(e, t, n) {
			var r;
			try {
				r = this.findFunctionName(this.getSource(e), t);
			} catch (i) {
				r = "getSource failed with url: " + e + ", exception: " + i.toString();
			}
			return r;
		},
		findFunctionName: function findFunctionName(e, t) {
			var n = /function\s+([^(]*?)\s*\(([^)]*)\)/;
			var r = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*function\b/;
			var i = /['"]?([$_A-Za-z][$_A-Za-z0-9]*)['"]?\s*[:=]\s*(?:eval|new Function)\b/;
			var s = "",
			    o,
			    u = Math.min(t, 20),
			    a,
			    f;
			for (var l = 0; l < u; ++l) {
				o = e[t - l - 1];
				f = o.indexOf("//");
				if (f >= 0) {
					o = o.substr(0, f);
				}
				if (o) {
					s = o + s;
					a = r.exec(s);
					if (a && a[1]) {
						return a[1];
					}
					a = n.exec(s);
					if (a && a[1]) {
						return a[1];
					}
					a = i.exec(s);
					if (a && a[1]) {
						return a[1];
					}
				}
			}
			return "(?)";
		}
	};

	function __fileSizeReached(key) {
		var persistedLogs = analyticsLocalStorage.getItem(key);
		if (persistedLogs === null) {
			return false;
		}

		var m = encodeURIComponent(persistedLogs).match(/%[89ABab]/g);
		var size = persistedLogs.length + (m ? m.length : 0);

		var maxSize = __state().maxFileSize;
		if (maxSize === null || typeof maxSize === 'undefined') {
			maxSize = DEFAULT_MAX_STORAGE_SIZE;
		}

		if (size >= maxSize) {
			return true;
		}

		return false;
	};

	function __getStateDefaults() {
		var udf; // because undefined can be overridden
		return {
			enabled: true,
			stringify: true,
			pretty: false,
			stacktrace: false,
			ismsie: !!(document.all && document.querySelector && !document.addEventListener),
			callback: '',
			tag: { level: false, pkg: true },
			pkg: '',
			filters: udf,
			filtersFromServer: udf,
			level: 'trace',
			levelFromServer: udf,
			metadata: {},
			capture: udf,
			captureFromServer: udf,
			analyticsCapture: true,
			allDomains: udf,
			maxFileSize: udf,
			autoSendLogs: true
		};
	};

	function __getLogArgArray(args, priority, pkg) {

		var msgStr = __stringifyArguments(args);
		var caller = getCallerLine();
		var originMeta = {
			'$src': 'js'
		};
		if (!state.metadata.hasOwnProperty('filename') && caller != "") {
			var parsed = formatStackLine(caller);
			originMeta = {
				'$class': 'Object',
				'$file': parsed.file,
				'$method': parsed.method,
				'$line': parsed.linenumber,
				'$src': 'js'
			};
		}
		var meta = __extend({}, true, state.metadata, originMeta); //clone obj
		state.metadata = {}; //clear metadata obj

		for (var i = 0; i < args.length; i++) {

			if (args[i] instanceof Error) {
				args[i] = { '$name': args[i].toString(), '$stacktrace': printStackTrace({ e: args[i] }) };
			}
		}

		if (typeof priority === 'string') {
			priority = priority.toUpperCase();
		}

		return [priority, pkg, msgStr, meta, new Date().getTime()];
	};

	function getCallerLine() {
		var stack = printStackTrace();
		for (var i = 1; i < stack.length; ++i) {
			var line = stack[i];
			if (line.indexOf("bmsanalytics") == -1) {
				return line;
			}
		}
		return "";
	}

	function formatStackLine(stackLine) {
		var formats = [/^\x20*at\x20([^(]+)\x20\(?(.*?)(?::(\d+):(\d+))?\)$/, /^([^@]*)@(.*?)(?::(\d+):(\d+))?\)?$/, /^\x20+at\x20(.*?)(?::(\d+))?$/, /^(.*?)(?::(\d+):(\d+))?$/];
		var method = "";
		var file = "";
		var linenumber = "";
		var parsed = null;
		parsed = stackLine.match(formats[0]);
		if (parsed == null) {
			parsed = stackLine.match(formats[1]);
		}
		if (parsed != null) {
			method = parsed[1];
			file = parsed[2];
			linenumber = parsed[3];
		} else {
			parsed = stackLine.match(formats[2]);
			if (parsed == null) {
				parsed = stackLine.match(formats[3]);
			}
			if (parsed != null) {
				file = parsed[1];
				linenumber = parsed[2];
			}
		}
		return {
			method: method,
			file: file,
			linenumber: linenumber
		};
	}

	function __insideArray(needle, haystack) {
		return haystack.indexOf(needle) !== -1;
	};

	function __getKeys(obj) {
		var arr = [];
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				arr.push(key);
			}
		}
		return arr;
	};

	function __setState(options) {

		state = {
			enabled: typeof options.enabled === 'boolean' ? options.enabled : state.enabled,
			stringify: typeof options.stringify === 'boolean' ? options.stringify : state.stringify,
			pretty: typeof options.pretty === 'boolean' ? options.pretty : state.pretty,
			stacktrace: typeof options.stacktrace === 'boolean' ? options.stacktrace : state.stacktrace,
			ismsie: typeof options.ismsie === 'boolean' ? options.ismsie : state.ismsie,
			callback: options.callback || state.callback,
			tag: __extend({}, { level: false, pkg: true }, options.tag || state.tag),
			pkg: options.pkg || state.pkg,
			filters: options.filters === null || _typeof(options.filters) === 'object' ? options.filters : state.filters, // {'jsonstore': 'WARN', 'otherPkg': 'DEBUG'}
			filtersFromServer: _typeof(options.filtersFromServer) === 'object' ? options.filtersFromServer : state.filtersFromServer,
			level: options.level || state.level,
			levelFromServer: options.levelFromServer || state.levelFromServer,
			metadata: options.metadata || state.metadata,
			capture: typeof options.capture === 'boolean' ? options.capture : state.capture,
			captureFromServer: typeof options.captureFromServer === 'boolean' ? options.captureFromServer : state.captureFromServer,
			analyticsCapture: typeof options.analyticsCapture === 'boolean' ? options.analyticsCapture : state.analyticsCapture,
			allDomains: typeof options.allDomains === 'boolean' ? options.allDomains : state.allDomains,
			maxFileSize: typeof options.maxFileSize === 'number' && options.maxFileSize % 1 === 0 ? options.maxFileSize : state.maxFileSize,
			autoSendLogs: typeof options.autoSendLogs === 'boolean' ? options.autoSendLogs : state.autoSendLogs
		};

		if (typeof Storage !== 'undefined') {
			var stateString = JSON.stringify(state);

			if (__usingLocalConfiguration()) {
				analyticsLocalStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
			} else {
				analyticsLocalStorage.setItem(KEY_REMOTE_STORAGE_CONFIG, stateString);
			}
		}
	};

	function __stringify(input) {

		if (input instanceof Error) {
			return state.stacktrace ? printStackTrace({ e: input }).join('\n') : input.toString();
		} else if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && JSON && JSON.stringify) {
			try {
				return state.pretty ? JSON.stringify(input, null, ' ') : JSON.stringify(input);
			} catch (e) {
				return 'Stringify Failed: ' + e;
			}
		} else {
			return typeof input === 'undefined' ? 'undefined' : input.toString();
		}
	};

	function __stringifyArguments(args) {
		if (typeof args === 'string' || args instanceof String) {
			return args;
		}
		var len = args.length,
		    i = 0,
		    res = [];

		for (; i < len; i++) {
			res.push(__stringify(args[i]));
		}
		return res.join(' ');
	};

	//currentPriority is the priority linked to the current log msg
	//stateLevel can be a string (e.g. 'warn') or a number (200)
	function __checkLevel(currentPriority, stateLevel) {
		if (Array.isArray(stateLevel)) {
			return (//Check if current is whitelisted (state)
				stateLevel.length > 0 && !__insideArray(currentPriority, stateLevel)
			);
		} else if (typeof stateLevel === 'string') {
			stateLevel = stateLevel.toLowerCase(); //Handle WARN, wArN, etc instead of just warn
			return (//Get numeric value and compare current with state
				typeof priorities[currentPriority] === 'number' && typeof priorities[stateLevel] === 'number' && priorities[currentPriority] > priorities[stateLevel]
			);
		} else if (typeof stateLevel === 'number') {

			return (//Compare current with state
				typeof priorities[currentPriority] === 'number' && priorities[currentPriority] > stateLevel
			);
		}

		return true; //Bail out, level is some unknown type
	};

	function __checkLoggingLevel(priority, pkg) {

		var currFilters = state.filtersFromServer || state.filters;
		//console.log('&&&'+state.filtersFromServer+' '+state.filters+' '+currFilters);
		state = __state();
		if (__getKeys(currFilters).length > 0) {
			// non-empty filters object
			//console.log('&&&'+__getKeys(currFilters));
			return __checkLevel(priority, __getCurrentPackageFilterLevel(pkg));
		} else {
			//console.log('&&&'+state.levelFromServer+' '+state.level);
			return __checkLevel(priority, state.levelFromServer || state.level);
		}
		return false;
	};

	function __getCurrentPackageFilterLevel(pkg) {
		var configFilters = state.filtersFromServer || state.filters;
		if (pkg == null) {
			pkg = '';
		}
		for (var i in configFilters) {
			if (configFilters[i].name === pkg) {
				return configFilters[i].level;
			}
		}
		return null;
	};

	function __log(args, priority, deviceevents) {
		priority = priority.toLowerCase();
		//TODO check if env is IE and then set console.trace = console.debug;
		state = __state();
		var str = '',
		    pkg = state.pkg;

		state.pkg = ''; //clear pkg from state obj

		if (!state.enabled || __checkLoggingLevel(priority, pkg)) {
			state.metadata = {}; //clear metadata obj
			return;
		}

		if (state.stringify) {
			str = __stringifyArguments(args);
		}

		//Apply Package Tag
		if (state.tag.pkg && typeof pkg === 'string' && pkg.length > 0) {
			str = LEFT_BRACKET + pkg + RIGHT_BRACKET + str;
		}

		//Apply Level Tag
		if (state.tag.level) {
			str = LEFT_BRACKET + priority.toUpperCase() + RIGHT_BRACKET + str;
		}
		if (!state.stringify && str.length > 0) {
			args.unshift(str);
		}

		// Queue for later sending
		var logArgArray = __getLogArgArray(args, priority, pkg);
		var state = __state();

		//setTimeout(function () {
		if (typeof Storage !== 'undefined') {
			//
			//console.log('typeof(Storage)'+typeof(Storage));
			var level = logArgArray[0];
			var pkg = logArgArray[1];
			var msg = logArgArray[2];
			var meta = logArgArray[3];
			if (clientId != "") {
				meta["$clientId"] = clientId;
			}
			var time = logArgArray[4];

			var logData = {
				'timestamp': time,
				'level': level,
				'pkg': pkg,
				'msg': msg,
				'metadata': meta
			};

			console.log('__log()' + priority + ' ' + JSON.stringify(logData));
			if (level === 'ANALYTICS' && deviceevents == 'LIFECYCLE' && state.analyticsCapture !== false) {
				__persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE);
			} else if (level === 'ANALYTICS' && deviceevents == 'NETWORKTRANSACTION' && state.analyticsCapture !== false) {
				__persistLog(logData, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS);
			} else if (state.capture !== false) {
				__persistLog(logData, KEY_LOCAL_STORAGE_LOGS);
			}
		}
		//}, 0, logArgArray);

		//Log to the console
		// we use BMS.StaticAppProps instead of BMS.Client.getEnvironment because the former is
		// guaranteed to be available
		/*
  if (typeof console === 'object') {  // avoid infinite loop on Adobe AIR
  	console.log('+++avoid infinite loop on Adobe AIR ');
      if (typeof console[priority] === 'function') {
          (state.stringify) ? console[priority](str) : console[priority].apply(console, args);
        } else if (priority === 'fatal') {
          if (typeof console.error === 'function') {
              (state.stringify) ? console.error(str) : console.error.apply(console, args);
          }
        } else if (priority === 'trace') {
          if (typeof console.debug === 'function') {
              (state.stringify) ? console.debug(str) : console.debug.apply(console, args);
          }
        } else if (priority === 'analytics') {
          // Do nothing
      } else if (typeof console.log === 'function') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);
        } else if (state.ismsie && typeof console.log === 'object') {
          (state.stringify) ? console.log(str) : console.log.apply(console, args);
      }
    }
  */

		//The default value of state.callback is an empty string (not a function)
		if (typeof state.callback === 'function') {
			if (!state.stringify) {
				str = args;
			}
			state.callback(str, priority, pkg);
		}
	};

	function __sendAll() {
		// if(typeof(checkAutoSend) === "boolean"){
		// 	if(checkAutoSend === true){
		// 		return _processAutomaticTrigger();
		// 	}
		// }
		return __send([KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS, KEY_LOCAL_STORAGE_LOGS, KEY_LOCAL_STORAGE_SWAP]);
	};

	function __updateState(newState) {
		if (newState) {
			state = newState;
		}
	};

	function __extend() {
		for (var i = 1; i < arguments.length; i++) {
			for (var key in arguments[i]) {
				if (arguments[i].hasOwnProperty(key)) arguments[0][key] = arguments[i][key];
			}
		}return arguments[0];
	};

	function logAnalyticsCrash(errorEvt) {
		var duration = new Date().getTime() - startupTime;
		var filename = errorEvt.filename;
		var linenumber = errorEvt.lineno;
		var errorMessage = errorEvt.message;
		var method = 'none';
		var stack = [];
		if (errorEvt.error != null) {
			var errstack = errorEvt.error.stack;
			stack = errstack.split('\n');
		}
		var caller = "";
		for (var i = 1; i < stack.length; ++i) {
			var line = stack[i];
			if (line.indexOf("bmsanalytics") == -1) {
				caller = line;
				break;
			}
		}
		if (caller != "") {
			var parsed = formatStackLine(caller);
			method = parsed.method;
		}
		var type = errorEvt.type;
		var meta = {
			'$category': 'appSession',
			'$duration': duration,
			'$closedBy': 'CRASH',
			'$appSessionID': appSessionID,
			'$class': 'Object',
			'$file': filename,
			'$method': method,
			'$line': linenumber,
			'$src': 'js',
			'$stacktrace': stack,
			'$exceptionMessage': errorMessage,
			'$exceptionClass': type
		};
		state.metadata = meta;
		_pkg('bms.analytics');
		__log('appSession', 'ANALYTICS', 'LIFECYCLE');

		var meta2 = {
			'$class': 'Object',
			'$file': filename,
			'$method': method,
			'$line': linenumber,
			'$src': 'js',
			'$stacktrace': stack,
			'$exceptionMessage': errorMessage,
			'$exceptionClass': type
		};
		state.metadata = meta2;
		_pkg('bms.analytics');
		__log('analytics: detected an error (Uncaught Exception)', 'FATAL');

		//send immediately
		__sendAll();
	};

	function _logUserAnalyticsStart() {
		var meta = {
			'$category': 'initialCtx',
			'$userID': userID,
			'$appSessionID': appSessionID
		};
		state.metadata = meta;
		_pkg('bms.analytics');
		__log('appSession', 'ANALYTICS', 'LIFECYCLE');
	}

	function _logUserAnalytics() {
		var meta = {
			'$category': 'userSwitch',
			'$userID': userID,
			'$appSessionID': appSessionID
		};
		state.metadata = meta;
		_pkg('bms.analytics');
		__log('appSession', 'ANALYTICS', 'LIFECYCLE');
	};

	function logAnalyticsSessionStart() {
		appSessionID = generateUUID('new');
		_logUserAnalyticsStart();
		var meta = {
			'$category': 'appSession',
			'$appSessionID': appSessionID
		};
		state.metadata = meta;
		_pkg('bms.analytics');
		__log('appSession', 'ANALYTICS', 'LIFECYCLE');
	};

	function logAnalyticsSessionStop() {
		var duration = new Date().getTime() - startupTime;
		_logUserAnalytics();
		var meta = {
			'$category': 'appSession',
			'$duration': duration,
			'$closedBy': 'user',
			'$appSessionID': appSessionID
		};
		console.log("****logAnalyticsSessionStop " + appSessionID);
		appSessionID = generateUUID('new');
		console.log("****logAnalyticsSessionStop " + appSessionID);

		state.metadata = meta;
		_pkg('bms.analytics');
		__log('appSession', 'ANALYTICS', 'LIFECYCLE');
	};

	function isNewSession() {
		return appSessionID && appSessionID.indexOf('4567') > -1;
	};

	function emptyLogs(keys) {
		keys.forEach(function (key) {
			analyticsLocalStorage.removeItem(key);
		});
	};

	function initErrorHandler() {
		if (window.hasErrorHandler == null) {
			window.addEventListener('error', function (evt) {
				logAnalyticsCrash(evt);
			});
			window.hasErrorHandler = true;
		}
	};

	function browserName() {
		var browserName = navigator.appName;
		var nVer = navigator.appVersion;
		var nAgt = navigator.userAgent;
		var nameOffset, verOffset, ix;

		// In Opera, the true version is after "Opera" or after "Version"
		if ((verOffset = nAgt.indexOf("Opera")) != -1) {
			browserName = "Opera";
		}
		// In MSIE, the true version is after "MSIE" in userAgent
		else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
				browserName = "Microsoft Internet Explorer";
			}
			// In Chrome, the true version is after "Chrome"
			else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
					browserName = "Chrome";
				}
				// In Safari, the true version is after "Safari" or after "Version"
				else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
						browserName = "Safari";
					}
					// In Firefox, the true version is after "Firefox"
					else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
							browserName = "Firefox";
						}
						// In most other browsers, "name/version" is at the end of userAgent
						else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
								browserName = nAgt.substring(nameOffset, verOffset);
							}

		return browserName;
	}

	//deviceID, appName, apiKey,bmsregion,serveroverride;
	function _init(appname, apikey, hasusercontext, deviceevents, instanceid) {
		//,
		var dfd = BMSJQ.Deferred();
		console.log(window);

		var initOptions = {
			'applicationName': appname,
			'clientApiKey': apikey,
			'instanceId': instanceid
		};

		setInitParams(initOptions);

		// Init the DBs
		BMS.DAO.init();

		deviceID = BMS.BrowserManager.getBMSUniqueID();
		appName = BMS.Config.__getApplicationName();
		apiKey = BMS.Config.__getClientApiKey();
		// bmsregion=BMS.Config.__getbmsRegion();
		// serveroverride=BMS.Config.__getServerOverride();
		instanceId = BMS.Config.__getInstanceId();

		//**************************************
		startupTime = new Date().getTime();
		initErrorHandler();
		if (apiKey != null && apiKey != '') {
			clientApiKey = apiKey;
		}

		hasUsercontext = false;

		if (typeof hasusercontext == 'boolean') {
			hasUsercontext = hasusercontext;
		}
		console.log('***hasUsercontext' + hasUsercontext);

		if (deviceevents != null && deviceevents >= 0 && deviceevents <= 3) {
			current_set_DeviceEvent = deviceevents;
		}

		metadataHeader.contextRoot = "/analytics-service";
		metadataHeader.deviceID = "Undefined";
		if (deviceID != null && deviceID != '') {
			metadataHeader.deviceID = deviceID;
		}
		metadataHeader.mfpAppVersion = "latest";

		metadataHeader.mfpAppName = "BMSWebApp";
		if (appName != null && appName != '') {
			metadataHeader.mfpAppName = appName;
		}

		analyticsLocalStorage.init(metadataHeader.mfpAppName);
		try {
			if (typeof Storage !== 'undefined') {

				var configurationString = null;

				if (__usingLocalConfiguration()) {
					configurationString = analyticsLocalStorage.getItem(KEY_LOCAL_STORAGE_CONFIG);
				} else {
					configurationString = analyticsLocalStorage.getItem(KEY_REMOTE_STORAGE_CONFIG);
				}

				if (configurationString === null) {
					var state = __state();
					state.maxFileSize = DEFAULT_MAX_STORAGE_SIZE;
					__updateState(state);

					var stateString = JSON.stringify(state);
					analyticsLocalStorage.setItem(KEY_LOCAL_STORAGE_CONFIG, stateString);
				} else {
					var configuration = JSON.parse(configurationString);
					__updateState(configuration);
				}
			}
		} catch (err) {
			return console.error(err.message);
		}

		if (userID == '') {
			userID = metadataHeader.deviceID;
		}
		metadataHeader.os = "web"; // MFP
		metadataHeader.osVersion = navigator.platform; // human-readable o/s version; like "MacIntel"
		metadataHeader.brand = navigator.appVersion; // human-readable brand;
		metadataHeader.model = browserName(); // human-readable model; like "Chrome"
		metadataHeader.appVersionDisplay = metadataHeader.mfpAppVersion; // human readable display version
		metadataHeader.appVersionCode = metadataHeader.mfpAppVersion; // version as known to the app store
		metadataHeader.appStoreId = metadataHeader.mfpAppName; // app pkg name (e.g. com.ibm.MyApp)
		metadataHeader.appStoreLabel = metadataHeader.mfpAppName;

		console.log('_init' + logger.getLogLevel());

		initXHR(XMLHttpRequest, this);

		//********************************
		dfd.resolve();
		return dfd.promise();
	};

	// var client={
	// 	REGION_US_SOUTH:'.ng.bluemix.net',
	// 	REGION_UK:'.eu-gb.bluemix.net',
	// 	REGION_SYDNEY:'.au-syd.bluemix.net',

	// 	initialize : function(region){
	// 		bmsRegion=region;
	// 	}

	// };


	// Internal Testing
	var _setServerOverride = function _setServerOverride(serveraddr) {
		serveroverride = serveraddr;
	};
	//public analytics
	var _enable = function _enable() {
		_config({ analyticsCapture: true });
	};

	//public analytics
	var _disable = function _disable() {
		_config({ analyticsCapture: false });
	};

	//public analytics
	function _getAppName() {
		return metadataHeader.mfpAppName;
	}

	//public analytics
	var _isEnabled = function _isEnabled() {
		var currentLoggerState = logger.state();
		return currentLoggerState.analyticsCapture;
	};

	//public analytics
	function __sendAllAnalytics() {
		// if(typeof(checkAutoSend) === "boolean"){
		// 	if(checkAutoSend === true){
		// 		return _processAutomaticTrigger();
		// 	}
		// }
		if (current_set_DeviceEvent == deviceEvents.ALL) {
			console.log('send ALL analytics' + current_set_DeviceEvent);
			return __send([KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE, KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS, KEY_LOCAL_STORAGE_LOGS]);
		} else if (current_set_DeviceEvent == deviceEvents.LIFECYCLE) {
			return __send([KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE, KEY_LOCAL_STORAGE_LOGS]);
		} else if (current_set_DeviceEvent == deviceEvents.NETWORKTRANSACTION) {
			return __send([KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS, KEY_LOCAL_STORAGE_LOGS]);
		} else {
			return __send([]);
		}
	};

	//public analytics
	function _setUserIdentity(user) {
		if (hasUsercontext == true) {
			logAnalyticsSessionStop();
			userID = user;
		}
	};

	//public analytics
	var _log = function _log(msg) {
		//console.log('_customLog'+msg);
		var name = '';
		if ((typeof msg === 'undefined' ? 'undefined' : _typeof(msg)) === 'object') {
			for (var key in msg) {
				name += key + ' ';
			}
			logger.state().metadata = msg;
			logger.pkg(_ANALYTICS_PKG_NAME).analytics(name);
		} else {
			logger.pkg(_ANALYTICS_PKG_NAME).analytics(msg);
		}
	};

	//public logger Apis

	function _pkg(pkgName) {

		if (state.pkg != null) {
			state.pkg = pkgName;
		}
		return this;
	};

	function __state() {
		return state;
	};

	function capture(captureLogs) {
		_config({ capture: typeof captureLogs === "boolean" ? captureLogs : true });
	};

	function __enable(enableLogs) {
		_config({ enabled: typeof enableLogs === "boolean" ? enableLogs : true });
	};

	function __isStoringLogs() {
		var state = __state();
		console.log("__isStoringLogs" + state.capture);

		if (typeof state.capture === 'boolean') return state.capture;else return true;
	}

	function __getLogLevel() {
		var state = __state();
		return state.level;
	}

	function __setLogLevel(level) {
		state.level = level;
		//console.log('__setLogLevel'+JSON.stringify(state));
		__updateState(state);
		//console.log('__setLogLevel'+JSON.stringify(state));
	}

	function __getMaxLogStoreSize() {
		var state = __state();
		return state.maxFileSize;
	}

	function __setMaxLogStoreSize(maxstorage) {
		var state = __state();
		state.maxFileSize = DEFAULT_MAX_STORAGE_SIZE;
		if (typeof maxstorage === "number") {
			state.maxFileSize = maxstorage;
		}
		__updateState(state);
	}

	function __sendAllOtherLogs() {
		// if(typeof(checkAutoSend) === "boolean"){
		// 	if(checkAutoSend === true){
		// 		return _processAutomaticTrigger();
		// 	}
		// }
		return __send([KEY_LOCAL_STORAGE_LOGS, KEY_LOCAL_STORAGE_SWAP]); //[KEY_LOCAL_STORAGE_ANALYTICS,KEY_LOCAL_STORAGE_LOGS, KEY_LOCAL_STORAGE_SWAP]
	};

	function __resetState() {
		state = __getStateDefaults();
		analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_LOGS); //'__BMS_WEBLOG_LOGS__'
		analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_ANALYTICS_LIFECYCLE); //'__BMS_WEBLOG_ANALYTICS__LIFECYCLE'
		analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_ANALYTICS_NETWORKTRANS); //'__BMS_WEBLOG_ANALYTICS__NETWORKTRANS'
		analyticsLocalStorage.removeItem(KEY_LOCAL_STORAGE_CONFIG); //'__BMS_WEBLOG_CONFIG__'
		return this;
	};
	// logger
	logger = {
		pkg: _pkg,
		state: __state,
		capture: capture,
		enable: __enable,
		//updateConfigFromServer: _updateConfigFromServer,
		//Addition
		isStoringLogs: __isStoringLogs,
		getLogLevel: __getLogLevel,
		setLogLevel: __setLogLevel,
		getMaxLogStoreSize: __getMaxLogStoreSize,
		setMaxLogStoreSize: __setMaxLogStoreSize,
		send: __sendAllOtherLogs,

		//testing:
		__resetState: __resetState // back to the defaults
	};

	//public analytics
	function _enableAutoSend(autoSend) {
		_config({ autoSendLogs: typeof autoSend === "boolean" ? autoSend : true });
	};

	//public analytics
	function _config(options) {
		__setState(__extend({}, options || {}));
		return this;
	};

	__getKeys(priorities).forEach(function (idx) {
		logger[idx] = function () {
			__log([].slice.call(arguments), idx);
		};
	});

	//public API


	return {
		initialize: _init,
		//Client:client,
		DeviceEvents: deviceEvents,
		enable: _enable,
		disable: _disable,
		getAppName: _getAppName,
		//state: _state,
		isEnabled: _isEnabled,
		send: __sendAllAnalytics,
		setUserIdentity: _setUserIdentity,
		log: _log,
		Logger: logger,
		//_config:_config,
		//Testing
		overrideServerhost: _setServerOverride
	};
});

/***/ })
/******/ ])});;