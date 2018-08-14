const ReAxios = require('../dist/reAxios.js');

const http = new ReAxios({
  baseUrl: 'https://api.github.com/',
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