module.exports = function pwd(done) {
  const printWorkingDirectory = process.cwd()
  done(printWorkingDirectory)
}
