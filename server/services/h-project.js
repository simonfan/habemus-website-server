// third-party
const Bluebird = require('bluebird');

const PrivateHProject = require('habemus-project-client/private');

module.exports = function (app, options) {
  
  return new Bluebird((resolve, reject) => {
    resolve(new PrivateHProject({
      serverURI: options.hProjectURI,
    }));
  });
};
