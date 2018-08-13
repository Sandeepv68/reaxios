const ReAxios = require('../dist/reAxios.min.js');

const http = new ReAxios({
  // all regular axios request configuration options are valid here
  // check https://github.com/axios/axios#request-config
  baseUrl: 'https://jsonplaceholder.typicode.com',
});

// plain GET request
http.get('/posts').subscribe(
  response => {
    console.log(response); // no need to 'response.data'
  },
  err => {
    console.error(err);
  }
);