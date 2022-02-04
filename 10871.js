const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let target = input[0].split(" ").map(x => Number(x));
let a = input[1].split(" ").map(x => Number(x));
let answer = [];

for (let i = 0; i<a.length; i++){
  if(target[1]>a[i]){
    answer.push(a[i]);
  }
}
console.log(answer);

//answer을 배열로 선언하고 join함수에 공백을 인자로 넣어주면
//공백을 기준으로 배열을 문자열로 합체시켜준다. 요 방법이 더 메모리
//소모가 적었다.