/**
 * reAxios v0.0.1
 * Axios ajax library wrapped in RxJs for the cool and popular kids
 * Written by: Sandeep Vattapparambil
 * Email: sandeepv68@gmail.com
 * Website: www.sandeepv.in
 */

"use strict";

/**
 * Axios library
 */
import axios from 'axios';

/**
 * Get Oobservables from RxJs
 */
import {
    Observable
} from 'rxjs/Observable';

/**
 * @class ReAxios
 * The core reAxios class
 */

class ReAxios {
    constructor(options = {}) {
        this.options = Object.assign({}, options);
        this.http = axios.create(options);
    }

    makeRequest = (method, url, queryParams, body) => {

        let request;

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

    get = (url, queryParams) => {
        return this.makeRequest('GET', url, queryParams);
    };

    post = (url, body, queryParams) => {
        return this.makeRequest('POST', url, queryParams, body);
    };

    put = (url, body, queryParams) => {
        return this.makeRequest('PUT', url, queryParams, body);
    };

    patch = (url, body, queryParams) => {
        return this.makeRequest('PATCH', url, queryParams, body);
    };

    delete = (url, queryParams) => {
        return this.makeRequest('DELETE', url, queryParams);
    };
}

try {
    window.ReAxios = ReAxios;
} catch {}

try {
    module.exports = ReAxios;
} catch {}