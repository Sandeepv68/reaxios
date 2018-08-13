/**
 * reAxios v0.0.1
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
"use strict";

/**
 * Axios library for ajax
 */
import axios from 'axios';

/**
 * Get Oobservables from RxJs
 */
import {
    Observable,
    of
} from 'rxjs';

/**
 * @class ReAxios
 * The core reAxios class
 */
class ReAxios {

    /**
     * The class constructor
     * @param {*} options - The options object for axios instance
     */
    constructor(options = {}) {
        this.options = Object.assign({}, options);
        this.http = axios.create(options);
    }

    /**
     * @memberof ReAxios
     * @function makeRequest
     * A function to construct a http request using any http-method and 
     * associated parameters and pass it to axios instance
     * @param {String} method - The http method
     * @param {String} url - The url to perform ajax
     * @param {Object} queryParams - The query parameters in object representation
     * @param {Object} body - The request body
     * @returns {<Observable>} - Returns the observable
     */
    makeRequest(method, url, queryParams, body) {

        /**
         * Request init
         */
        let request;

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
        return new Observable(subscriber => {
            request.then(response => {
                subscriber.next(response);
                subscriber.complete();
            }).catch(err => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }

    /**
     * @memberof ReAxios
     * @function get
     * A helper function to get a url with passed in parameters
     * @param {String} url - The url string
     * @param {Object} queryParams - The query parameters in object representation
     */
    get(url, queryParams) {
        return this.makeRequest('GET', url, queryParams);
    };

    /**
     * @memberof ReAxios
     * @function post
     * A helper function to post a url with paramerters passed in
     * @param {String} url - The url string
     * @param {Object} body - The request body
     * @param {Object} queryParams - The query parameters in object representation
     */
    post(url, body, queryParams) {
        return this.makeRequest('POST', url, queryParams, body);
    };

    /**
     * @memberof ReAxios
     * @function put
     * A helper function to put a url with paramerters passed in
     * @param {String} url - The url string
     * @param {Object} body - The request body
     * @param {Object} queryParams - The query parameters in object representation
     */
    put(url, body, queryParams) {
        return this.makeRequest('PUT', url, queryParams, body);
    };

    /**
     * @memberof ReAxios
     * @function patch
     * A helper function to patch a url with paramerters passed in
     * @param {String} url - The url string
     * @param {Object} body - The request body
     * @param {Object} queryParams - The query parameters in object representation
     */
    patch(url, body, queryParams) {
        return this.makeRequest('PATCH', url, queryParams, body);
    };

    /**
     * @memberof ReAxios
     * @function delete
     * A helper function to delete a url with paramerters passed in
     * @param {String} url - The url string
     * @param {Object} queryParams - The query parameters in object representation
     */
    delete(url, queryParams) {
        return this.makeRequest('DELETE', url, queryParams);
    };
}

/**
 * Simple UMD setup
 */

/**
 * Try adding to global window object if available
 */
try {
    window.ReAxios = ReAxios;
} catch (error) {}

/**
 * Try exporting as a module otherwise
 */
try {
    module.exports = ReAxios;
} catch (error) {}