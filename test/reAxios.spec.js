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
 * Describe the tests
 */
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

        /**
         * Create a server stub
         */
        const mockServer = nock('http://reaxios.com').persist();

        mockServer.get('/posts/1').reply(200, expected);

        const promise = new Promise((resolve, reject) => {
            reAxiosInstance.get('/posts/1').subscribe(
                resp => {
                    resolve(resp.data);
                },
                err => {
                    reject(err);
                }
            );
        });
        await expect(promise).resolves.toEqual(expected);
    });
});