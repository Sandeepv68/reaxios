#!/usr/bin/env node
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * reAxios v0.0.1
 * Axios ajax library wrapped in RxJs for the cool and popular kids
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */



/**
 * Axios library
 */

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

/**
 * Get Oobservables from RxJs
 */


var _axios = __webpack_require__(1);

var _axios2 = _interopRequireDefault(_axios);

var _Observable = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ReAxios
 * The core reAxios class
 */

var ReAxios = function () {
    function ReAxios() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ReAxios);

        this.options = Object.assign({}, options);
        this.http = _axios2.default.create(options);
    }

    _createClass(ReAxios, [{
        key: 'makeRequest',
        value: function makeRequest(method, url, queryParams, body) {

            var request = void 0;

            switch (method) {

                case 'GET':
                    request = this.http.get(url, {
                        params: queryParams
                    });
                    break;

                case 'POST':
                    request = this.http.post(url, body, {
                        params: queryParams
                    });
                    break;

                case 'PUT':
                    request = this.http.put(url, body, {
                        params: queryParams
                    });
                    break;

                case 'PATCH':
                    request = this.http.patch(url, body, {
                        params: queryParams
                    });
                    break;

                case 'DELETE':
                    request = this.http.delete(url, {
                        params: queryParams
                    });
                    break;

                default:
                    throw new Error('Unsupported Method encountered');
            }

            return new _Observable.Observable(function (subscriber) {
                request.then(function (response) {
                    subscriber.next(response);
                    subscriber.complete();
                }).catch(function (err) {
                    subscriber.error(err);
                    subscriber.complete();
                });
            });
        }
    }, {
        key: 'get',
        value: function get(url, queryParams) {
            return this.makeRequest('GET', url, queryParams);
        }
    }, {
        key: 'post',
        value: function post(url, body, queryParams) {
            return this.makeRequest('POST', url, queryParams, body);
        }
    }, {
        key: 'put',
        value: function put(url, body, queryParams) {
            return this.makeRequest('PUT', url, queryParams, body);
        }
    }, {
        key: 'patch',
        value: function patch(url, body, queryParams) {
            return this.makeRequest('PATCH', url, queryParams, body);
        }
    }, {
        key: 'delete',
        value: function _delete(url, queryParams) {
            return this.makeRequest('DELETE', url, queryParams);
        }
    }]);

    return ReAxios;
}();

try {
    window.ReAxios = ReAxios;
} catch (error) {}

try {
    module.exports = ReAxios;
} catch (error) {}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ })
/******/ ]);
//# sourceMappingURL=reAxios.js.map