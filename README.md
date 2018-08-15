![logo](public/reAxios.png)
# reAxios v0.0.1

[![GitHub license](https://img.shields.io/github/license/SandeepVattapparambil/reaxios.svg?style=flat-square)](https://github.com/SandeepVattapparambil/reaxios/blob/master/LICENSE) ![travisci](https://api.travis-ci.org/SandeepVattapparambil/reaxios.svg?branch=master) [![CircleCI](https://circleci.com/gh/SandeepVattapparambil/reaxios.svg?style=svg)](https://circleci.com/gh/SandeepVattapparambil/reaxios) [![Known Vulnerabilities](https://snyk.io/test/github/SandeepVattapparambil/reaxios/badge.svg?targetFile=package.json)](https://snyk.io/test/github/SandeepVattapparambil/reaxios?targetFile=package.json) [![CodeFactor](https://www.codefactor.io/repository/github/sandeepvattapparambil/reaxios/badge/master)](https://www.codefactor.io/repository/github/sandeepvattapparambil/reaxios/overview/master) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/a6988d53e74246649974096fcdbe55bb)](https://www.codacy.com/project/sandeepv68/reaxios/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SandeepVattapparambil/reaxios&amp;utm_campaign=Badge_Grade_Dashboard) [![codecov](https://codecov.io/gh/SandeepVattapparambil/reaxios/branch/master/graph/badge.svg)](https://codecov.io/gh/SandeepVattapparambil/reaxios) [![GitHub issues](https://img.shields.io/github/issues/SandeepVattapparambil/reaxios.svg?style=flat-square)](https://github.com/SandeepVattapparambil/reaxios/issues) [![GitHub forks](https://img.shields.io/github/forks/SandeepVattapparambil/reaxios.svg?style=flat-square)](https://github.com/SandeepVattapparambil/reaxios/network) [![GitHub stars](https://img.shields.io/github/stars/SandeepVattapparambil/reaxios.svg?style=flat-square)](https://github.com/SandeepVattapparambil/reaxios/stargazers) [![Twitter](https://img.shields.io/twitter/url/https/github.com/SandeepVattapparambil/reaxios.svg?style=flat-square)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2FSandeepVattapparambil%2Freaxios)


A simple reactive **observable** wrapper for the popular [Axios](https://www.npmjs.com/package/axios) library. Axios is a **Promise** based HTTP client for the browser and node.js. reAxios wraps axios inside an RxJs observable and exposes it. All the axios features and options are supported through reAxios.

### Why RxJs and Observables ?
**RxJs** is a JavaScript library to perform **Reactive programming**. RxJs is the JavaScript implementation of **ReactiveX**. ReactiveX is a combination of the best ideas from the Observer pattern, the Iterator pattern, and functional programming. There are many advantages for reactive programming:
- **Functional** -
Avoid intricate stateful programs, using clean input/output functions over observable streams.

- **Less is more** -
ReactiveX's operators often reduce what was once an elaborate challenge into a few lines of code.

- **Async error handling** -
Traditional try/catch is powerless for errors in asynchronous computations, but ReactiveX is equipped with proper mechanisms for handling errors.

- **Concurrency made easy** -
Observables and Schedulers in ReactiveX allow the programmer to abstract away low-level threading, synchronization, and concurrency issues.

- And the popular kids are doing observables nowadays, its the new **cool**

### Getting started
Follow these steps to grab a copy of **reAxios** and use it in your project. The `reaxios` package will have two build distributables, a regular build and minified compressed build. By default package managers are set to use the minified version

| **build** | **asset** | **size** |
| --- | --- | --- |
| compressed | reAxios.min.js | 3KB |
| uncompressed | reAxios.js | 12KB |

#### Dependecy
This library is dependent on the following Npm packages:
- [rxjs](https://www.npmjs.com/package/rxjs)
- [axios](https://www.npmjs.com/package/axios)

>**Note** Missing dependency will cause errors.

#### Installation
**reAxios** is a UMD module, which means it can be run across all javascript environments ranging from browsers to servers(node). reAxios can be used on browsers in conjunction with RxJs and axios, or in node-like browser environments as in ReactJS, AngularJS, VueJS or MarkoJS or it can be used in NodeJS apps.

Using npm
```sh
npm i --save reaxios
```
#### Usage
```js
//In your Node.js app
const ReAxios = require('reaxios');

//Or using ES6 - ES7 import statement
import reAxios from 'reaxios';

//ReAxios can take all the axios configuration parameters here
const reAxios = new ReAxios({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
});

//GET request
reAxios.get('/').subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```
**Output**
```js
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```
#### Changelog
- **v0.0.1**
    - es6 code base
    - UMD build, can be used on browser and server side
    - 100% code coverage
    - Tests using jest
    - Vulnerabilities check added
    - Travis CI added
    - Circle CI added

#### API Documentation
Various apis provided by reAxios are documented here.

##### reAxios.get()
The default HTTP GET method of Axios wrapped in an observable.
```js
reAxios.get(url, queryParams)
```
##### Paraneters
| **Parameter** | **Type** | **Description** |
| -- | -- | -- |
| **url** | *String* | The url to be fetched |
| **queryParams** | *Object* | The query parameters to be passed along with the url |

example:
```js
reAxios.get(url, queryParams).subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```

##### reAxios.post()
The default HTTP POST method of Axios wrapped in an observable.
```js
reAxios.post(url, body, queryParams)
```
##### Paraneters
| **Parameter** | **Type** | **Description** |
| -- | -- | -- |
| **url** | *String* | The url to be fetched |
| **body** | *Object* | The request body |
| **queryParams** | *Object* | The query parameters to be passed along with the url |

example:
```js
reAxios.post(url, body, queryParams).subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```

##### reAxios.put()
The default HTTP PUT method of Axios wrapped in an observable.
```js
reAxios.put(url, body, queryParams)
```
##### Paraneters
| **Parameter** | **Type** | **Description** |
| -- | -- | -- |
| **url** | *String* | The url to be fetched |
| **body** | *Object* | The request body |
| **queryParams** | *Object* | The query parameters to be passed along with the url |

example:
```js
reAxios.put(url, body, queryParams).subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```

##### reAxios.patch()
The default HTTP PATCH method of Axios wrapped in an observable.
```js
reAxios.patch(url, body, queryParams)
```
##### Paraneters
| **Parameter** | **Type** | **Description** |
| -- | -- | -- |
| **url** | *String* | The url to be fetched |
| **body** | *Object* | The request body |
| **queryParams** | *Object* | The query parameters to be passed along with the url |

example:
```js
reAxios.patch(url, body, queryParams).subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```

##### reAxios.delete()
The default HTTP DELETE method of Axios wrapped in an observable.
```js
reAxios.delete(url, queryParams)
```
##### Paraneters
| **Parameter** | **Type** | **Description** |
| -- | -- | -- |
| **url** | *String* | The url to be fetched |
| **queryParams** | *Object* | The query parameters to be passed along with the url |

example:
```js
reAxios.delete(url, queryParams).subscribe(
  response => {
    console.log(response.data);
  },
  err => {
    console.error(err);
  }
);
```

>**Note** All advanced RxJs operations can be performed on the observables returned by reAxios.

#### Continuous Integration (CI)
Continuous Integration services monitor repositories for changes, then automatically run unit tests on your behalf, typically in a containerized environment. To test this setup works in a continuous integration environment, an integration was done with Travis CI & CircleCI. According to the Travis Node.js Documentation, Travis automatically runs npm install and npm test. The only additional thing I had to add to the Travis configuration was to run npm run build before running the tests. The working Travis config looks like this:
```yml
language: node_js

node_js:
  - stable
  
install:
  - npm install
  - npm install -g codecov

script:
  - npm run build-dev
  - npm run build-prod
  - npm test
  - jest ./test/reAxios.spec.js 
  - codecov
```
CircleCI is similar to Travis-CI, but is more extensible and has much more control over the build process. The CircleCI config looks like this:
```yml
# Javascript Node CircleCI 2.0 configuration file
# Check https://circleci.com/docs/2.0/language-javascript/ for more details
version: 2
jobs:
  build:
    docker:
      # specify the version you desire here
      - image: circleci/node:7.10
      # Specify service dependencies here if necessary
      # CircleCI maintains a library of pre-built images
      # documented at https://circleci.com/docs/2.0/circleci-images/
      # - image: circleci/mongo:3.4.4
    working_directory: ~/repo
    steps:
      - checkout
      # Download and cache dependencies
      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          # fallback to using the latest cache if no exact match is found
          - v1-dependencies-
      - run: npm install
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
      # run tests!
      - run: npm run build-dev
      - run: npm run build-prod
      - run: npm test
```

#### Tests
This library uses Jest framework for unit testing. All unit tests are available in the test folder. Tests can be run by the command:
```sh
npm test
```

#### Contributing
Please read [CONTRIBUTING.md](https://github.com/SandeepVattapparambil/reaxios/blob/master/CONTRIBUTING.md) for details on contributing to the project and [CODE_OF_CONDUCT.md](https://github.com/SandeepVattapparambil/reaxios/blob/master/CODE_OF_CONDUCT.md) for the process for submitting pull requests to us.

#### Versioning
We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags](https://github.com/SandeepVattapparambil/reaxios/releases) on this repository.

#### Author
reAxios is written by [Sandeep Vattapparambil](https://github.com/SandeepVattapparambil/)

#### License
The MIT License

Copyright (c) 2018- Sandeep Vattapparambil, http://www.sandeepv.in

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#### Acknowledgements
Made with :heart: by [Sandeep Vattapparambil](https://github.com/SandeepVattapparambil/)