/**
 * reAxios test spec file 
 * Written by: Sandeep Vattapparambil
 */

/**
 * Nockjs - A standin dummy server
 */
import * as nock from 'nock';

/**
 * Get build distributable
 */
import reAxios from '../dist/reAxios';

/**
 * Create a server stub
 */
const mockServer = nock('http://reaxios.com');

describe('Given an instance of reAxios', () => {

    let reAxiosInstance;

    afterEach(() => {
        reAxiosInstance = null;
    });

    it('reAxiosInstance should be an instance of reAxios()', () => {
        reAxiosInstance = new reAxios({
            baseURL: 'http://reaxios.com',
        });
        expect(reAxiosInstance).toBeInstanceOf(reAxios);
    });
});