const { stdout } = require('process');
const request = require('request');

module.exports = function(url, done) {
  request(url, (err, response, body) => {
    if (err) throw err;
    done(body);
  })
}


