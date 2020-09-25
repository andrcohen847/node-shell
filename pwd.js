module.exports = function pwd() {
  const printWorkingDirectory = process.cwd()
  process.stdout.write(printWorkingDirectory)
  process.stdout.write('\nprompt > ');
}
