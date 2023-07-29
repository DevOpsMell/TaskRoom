const express = require('express');

const testApp = express();
const expressLoader = require('../loaders/express');
const errorHandler = require('../middleware/error-handler');

expressLoader(testApp);
testApp.use(errorHandler)

module.exports = testApp;
