const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['11', '10987654321']

let answer = 0;
for(let i = 0; i < input[1].length; i++){
  answer += parseInt(input[1][i]);
}

console.log(answer);
