//reAxios (c) 2018, Sandeep Vattapparambil
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("reAxios", [], factory);
	else if(typeof exports === 'object')
		exports["reAxios"] = factory();
	else
		root["reAxios"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/reAxios.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/reAxios.js":
/*!************************!*\
  !*** ./src/reAxios.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * reAxios v0.0.2
 * Axios ajax library wrapped in RxJs for the cool and popular kids
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

/**ECMAScript 5's strict mode is a way to opt in to a restricted variant of JavaScript, 
 * thereby implicitly opting-out of "sloppy mode". Strict mode isn't just a subset: 
 *  it intentionally has different semantics from normal code. 
 *  Browsers not supporting strict mode will run strict mode code with 
 *  different behavior from browsers that do, so don't rely on strict mode without 
 *  feature-testing for support for the relevant aspects of strict mode. 
 * Strict mode code and non-strict mode code can coexist, so scripts can opt into strict mode 
 * incrementally.
 * Strict mode makes several changes to normal JavaScript semantics:
 * Eliminates some JavaScript silent errors by changing them to throw errors.
 * Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: 
 *  strict mode code can sometimes be made to run faster than identical code that's not strict mode.
 *  Prohibits some syntax likely to be defined in future versions of ECMAScript.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode | Strict Mode}
 **/


/**
 * Axios library for ajax
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Get Observables from RxJs
 */


var _axios = __webpack_require__(/*! axios */ "axios");

var _axios2 = _interopRequireDefault(_axios);

var _rxjs = __webpack_require__(/*! rxjs */ "rxjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ReAxios
 * The core reAxios class
 */
var ReAxios = function () {

    /**
     * The class constructor
     * @param {*} options - The options object for axios instance
     */
    function ReAxios() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ReAxios);

        this.options = Object.assign({}, options);
        this.http = _axios2.default.create(options);
    }

    /**
     * @memberof ReAxios
     * @inner
     * @function makeRequest
     * A function to construct a http request using any http-method and 
     * associated parameters and pass it to axios instance
     * @param {String} method - The http method
     * @param {String} url - The url to perform ajax
     * @param {Object} queryParams - The query parameters in object representation
     * @param {Object} body - The request body
     * @returns {<Observable>} - Returns the observable
     */


    _createClass(ReAxios, [{
        key: 'makeRequest',
        value: function makeRequest(method, url, queryParams, body) {

            /**
             * Request init
             */
            var request = void 0;

            /**
             * Select a method and construct appropriate request
             */
            switch (method) {

                /**
                 * GET Method
                 */
                case 'GET':
                    request = this.http.get(url, {
                        params: queryParams
                    });
                    break;

                /**
                 * POST Method
                 */
                case 'POST':
                    request = this.http.post(url, body, {
                        params: queryParams
                    });
                    break;

                /**
                 * PUT Method
                 */
                case 'PUT':
                    request = this.http.put(url, body, {
                        params: queryParams
                    });
                    break;

                /**
                 * PATCH Method
                 */
                case 'PATCH':
                    request = this.http.patch(url, body, {
                        params: queryParams
                    });
                    break;

                /**
                 * DELETE Method
                 */
                case 'DELETE':
                    request = this.http.delete(url, {
                        params: queryParams
                    });
                    break;

                /**
                 * Unsupported methods
                 */
                default:
                    throw new Error('Unsupported Method encountered');
            }

            /**
             * Return the observable
             */
            return new _rxjs.Observable(function (subscriber) {
                request.then(function (response) {
                    subscriber.next(response);
                    subscriber.complete();
                }).catch(function (err) {
                    subscriber.error(err);
                    subscriber.complete();
                });
            });
        }

        /**
         * @memberof ReAxios
         * @inner
         * @function get
         * A helper function to get a url with passed in parameters
         * @param {String} url - The url string
         * @param {Object} queryParams - The query parameters in object representation
         */

    }, {
        key: 'get',
        value: function get(url, queryParams) {
            return this.makeRequest('GET', url, queryParams);
        }
    }, {
        key: 'post',


        /**
         * @memberof ReAxios
         * @inner
         * @function post
         * A helper function to post a url with paramerters passed in
         * @param {String} url - The url string
         * @param {Object} body - The request body
         * @param {Object} queryParams - The query parameters in object representation
         */
        value: function post(url, body, queryParams) {
            return this.makeRequest('POST', url, queryParams, body);
        }
    }, {
        key: 'put',


        /**
         * @memberof ReAxios
         * @inner
         * @function put
         * A helper function to put a url with paramerters passed in
         * @param {String} url - The url string
         * @param {Object} body - The request body
         * @param {Object} queryParams - The query parameters in object representation
         */
        value: function put(url, body, queryParams) {
            return this.makeRequest('PUT', url, queryParams, body);
        }
    }, {
        key: 'patch',


        /**
         * @memberof ReAxios
         * @inner
         * @function patch
         * A helper function to patch a url with paramerters passed in
         * @param {String} url - The url string
         * @param {Object} body - The request body
         * @param {Object} queryParams - The query parameters in object representation
         */
        value: function patch(url, body, queryParams) {
            return this.makeRequest('PATCH', url, queryParams, body);
        }
    }, {
        key: 'delete',


        /**
         * @memberof ReAxios
         * @inner
         * @function delete
         * A helper function to delete a url with paramerters passed in
         * @param {String} url - The url string
         * @param {Object} queryParams - The query parameters in object representation
         */
        value: function _delete(url, queryParams) {
            return this.makeRequest('DELETE', url, queryParams);
        }
    }]);

    return ReAxios;
}();

exports.default = ReAxios;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ })

/******/ });
});
//# sourceMappingURL=reAxios.js.map