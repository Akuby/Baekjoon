const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let result = 0;

let [A, B, C] = input.map(Number).sort((a,b)=>a-b);
if (A==B&&B==C){
  result = 10000 + A*1000;
} else if(A==B || B==C){
  result = 1000 + B*100;
} else {
  result = C * 100;
}

console.log(result);

//배열로 선언
//sort함수 사용법 알아보기