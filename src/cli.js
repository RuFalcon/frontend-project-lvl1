import readlineSync from 'readline-sync'

function welcome() {
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
}

export { welcome }