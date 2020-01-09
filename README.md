# Unit Testing Practice with Jest

This repo contains simple tests for JavaScript functions, including promises and async-await.

## Jest vs. Jasmine
Most of the information here is taken from the [Jest docs](https://jestjs.io/docs/en/getting-started).

If you want to use Jasmine instead, the [Jasmine docs](https://jasmine.github.io/setup/nodejs.html) are very similar.

The syntax is also very similar.

### Jest Test - sum.test.js
```javascript
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1,2)).toBe(3);
});
```

### Jasmine Test - sum.spec.js
```javascript
describe("sum", function() {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1,2).toBe(3);
  });
});
```

## Initializing the project

### Install Jest CLI
```bash
npm install jest --global
```

### Add Jest to a Project
```bash
npm install --save-dev jest
```
```bash
jest --init
```
The ``jest --init`` command creates a jest config file. It also prompts you to choose node or a browser for running your tests.

### Create Test Suites
Each module should get a test suite. A test suite is a file named like this: ``my-module-name.test.js``

A suite can have 1 or more tests.

### Run Tests
To run all test suites every time you save a change:
```bash
jest --watchAll
```
To run only test suites for files with uncommitted changes:
```bash
jest --watch
```

### Skip Some Tests
To skip a test in a test suite, just add ``skip`` like this:
```javascript
test.skip("adds 1 + 2 to equal 3", () => {
  expect(sum(1,2)).toBe(3);
});
```

To run just one test, use ``only``:
```javascript
test.only("adds 1 + 2 to equal 3", () => {
  expect(sum(1,2)).toBe(3);
});
```
*NOTE:* ``skip`` and ``only`` work at the test suite level. So if you only run one test in Test Suite A, the runner will still run all of your tests in Test Suite B and Test Suite C.

### Get a Code Coverage Report
```bash
jest --coverage
```
