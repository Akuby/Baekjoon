var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let i =0;
while(i<input.length){
  let answer = input[i].split(' ');
  console.log(Number(answer[0]) + Number(answer[1]))
  i++;
}
