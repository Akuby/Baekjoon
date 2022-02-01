const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const remain = [];
for (let i = 0; i < input.length; i++) {
  remain.push(Number(input[i]) % 42); 
}
console.log(Array.from(new Set(remain)).length);

//Set 객체에 대해 알아보기