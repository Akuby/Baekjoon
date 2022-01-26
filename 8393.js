const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);
let sum = 0;
for(let i=1;i<=num;sum+=i++);
console.log(sum);

//아니 대체 input에 들어올 값은 숫자 하나인데 왜왜왜 split 해줘야하는지 모르겠다.