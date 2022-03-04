const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = ['9223372036854775807', '9223372036854775808'];
const A = BigInt(input[0]);
const B = BigInt(input[1]);

console.log((A+B).toString());

//최근 추가된 데이터 타입인 BigInt에 대해 알고 있는지 확인하는 문제였다.
