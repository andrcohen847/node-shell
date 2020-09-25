module.exports = function date(done) {
  let time = new Date();
  done(String (time));
}
