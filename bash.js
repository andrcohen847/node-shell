const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const curl = require('./curl');
const date = require('./date');
const head = require('./head')

function done(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')

  switch(cmd[0]) {
    case 'pwd':
      pwd(done);
      break;
    case 'ls':
      ls(done);
      break;
    case 'cat':
      cat(cmd[1], done);
      break;
    case 'curl':
      curl(cmd[1], done);
      break;
    case 'date':
      date(done);
      break;
    case 'head':
        head(cmd[1], done);
        break;
    default:
      done(`You typed: ${cmd.join(' ')} -- that is not a valid command in my file`)
  }


});

// small inconsenquential change
