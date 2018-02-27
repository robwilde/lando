'use strict';

const CliTest = require('command-line-test');
const path = require('path');
// Load in the .env file

exports.runCommand = function(cmd = [], options = {}) {
  require('dotenv').config();
  const cliTest = new CliTest();
  return cliTest.execFile(
    path.resolve(__dirname, '..', '..', 'bin', 'lando.js'),
    cmd,
    // Inject the current process's env vars into the child process
    // and any overrides we set during the test.
    Object.assign({env: process.env}, options)
  );
};
