const config = require('./base.conf');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    version: 'latest',
    maxDuration: 10800,
    idleTimeout: 900,
    commandTimeout: 600,
    chromeOptions: {
      args: ['disable-infobars']
    }
  }
];

module.exports.config = config;
