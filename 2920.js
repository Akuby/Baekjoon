const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = ['8','7','6','5','4','3','2','8']

input.map(x => x * 1);

let ascending = 0,
  descending = 0;


for (let i = 0; i < input.length; i++) {
  if (input[i + 1] - input[i] == 1) {
    ascending++;
  } else if (input[i] - input[i + 1] == 1) {
    descending++;
  }
}

if(ascending == 7){
  console.log('ascending');
} else if (descending == 7){
  console.log('descending');
} else {
  console.log('mixed');
}

//그냥 얍샙이처럼 문자열 통으로 비교해도 되지만
//1-8이 아닌 다른 경우의 수에도 적용할 수 있도록
//인덱스를 사용하여 문제를 풀어봤다.