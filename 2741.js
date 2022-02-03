const input = require('fs').readFileSync('/dev/stdin').toString();
let answer = '';

for (let i = 1; i <= Number(input); i++) {
    answer += i + "\n";
}
console.log(answer);

//내가 fs모듈에 대해 잘 몰라서 자꾸 틀렸다.
//아마도 받아올 값이 하나인 경우에는 배열로 들어오지 않나보다.
