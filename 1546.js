const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const 과목수 = Number(input[0]);
const 과목점수 = input[1].split(' ');
const 최댓값 = Math.max(...과목점수);
let 조작된평균 = 0;

for(let i = 0; i < 과목점수.length; i++){
  조작된평균 = Number(과목점수[i])/최댓값*100;
}

console.log(조작된평균/과목수);

