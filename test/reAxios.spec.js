/**
 * reAxios test spec file 
 * Written by: Sandeep Vattapparambil
 */

/**
 * Nockjs - A standin dummy server
 */
import nock from 'nock';

/**
 * Get build distributable
 */
import reAxios from '../dist/reAxios';

/**
 * Create a server stub
 */
const mockServer = nock('http://reaxios.com', {
    reqheaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'POST, GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Accept, x-auth-token, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'
    }
});

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

    it('reAxiosInstance makes a successful GET request', async () => {

        reAxiosInstance = new reAxios({
            baseURL: 'http://reaxios.com',
        });

        const expected = {
            id: 1,
            title: 'Hello reAxios!',
            author: 'Sandeep Vattapparambil'
        };

        mockServer.persist().get('/posts/1').reply(200, expected);

        // const promise = new Promise((resolve, reject) => {
        //     reAxiosInstance.get('/posts/1').subscribe(
        //         resp => {
        //             resolve(resp);
        //         },
        //         err => {
        //             reject(err);
        //         }
        //     );
        // });
        // await expect(promise).resolves.toEqual(expected);
    });
});