const Spectron = require('spectron').Application;
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
// sudo testing for URI request GUI

const electronPath = path.join(__dirname, '../src/main/index.js');

const app = new Spectron({
  path: electronPath,
});

global.before(() => {
  chai.should();
  chai.use(chaiAsPromised);
});

// Should have ability to enter a valid URI
// Expect (endpoint request Bar) to equal (valid URI)

// Should have a way to submit HTTP request
// Expect

// Should have a way to choose PUT, POST, or PATCH methods in the destination panel


//  Should default to GET method in the source panel


//  Should be reusable in different panels
