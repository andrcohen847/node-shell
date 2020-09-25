const fs = require('fs');

module.exports = function(filePath, done) {
  fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    done(data)
  })
}
