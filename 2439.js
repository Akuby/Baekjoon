const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let answer = new Array(input).fill(" ");
for(let i = input - 1; i >=0; i--){
  answer[i] = "*";
  console.log(answer.join(""));
}