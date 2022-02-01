const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const remain = [];
for (let i = 0; i < input.length; i++) {
  remain.push(Number(input[i]) % 42); //remain은 나머지로 이루어진 배열
}
Array.from(new Set(remain)); //중복 제거!!
console.log(remain.length);

//왜 틀리는지 모르겠어...