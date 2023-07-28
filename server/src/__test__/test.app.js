const express = require('express');

const testApp = express();
const expressLoader = require('../loaders/express');

expressLoader(testApp);

module.exports = testApp;
