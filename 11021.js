const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i = 1;i<Number(input[0])+1;i++){
  let arr1 = input[i].split(" ");
  answer += "Case #" + i + ": " + (Number(arr1[0]) + Number(arr1[1])) + '\n';
}
console.log(answer);