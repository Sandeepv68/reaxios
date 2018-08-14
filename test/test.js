/**
 * Manual testing
 */
const ReAxios = require('../dist/reAxios.js');

const http = new ReAxios({
  baseURL: 'https://api.github.com/',
});

// plain GET request
http.get('/').subscribe(
  response => {
    console.log(response);
  },
  err => {
    console.error(err);
  }
);