process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim()

  const printWorkingDirectory = process.cwd()

 if (cmd === 'pwd') {
  process.stdout.write(printWorkingDirectory)

 }

  // process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');

});

