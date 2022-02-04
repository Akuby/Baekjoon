const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i = 1;i<Number(input[0])+1;i++){
  let arr1 = input[i].split(" ");

  let num1 = Number(arr1[0]);
  let num2 = Number(arr1[1]);

  answer += `Case #${i}: ${num1} + ${num2} = ${num1+num2}\n`;
}
console.log(answer);

//넣어줄 문자열이 많아져서 백틱을 사용했다.