const { stdout } = require('process');
const request = require('request');

module.exports = function(url) {
  request(url, (err, response, body) => {
    if (err) throw err;
    process.stdout.write(body);
    process.stdout.write("\nprompt > ");
  })
}


