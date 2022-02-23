// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['5', '100', '70', '32547', '0', '123'];
input.shift();
input.map(x=>x*1);
input.sort((a,b)=>a-b); //sort내에서 a-b는 정렬의 의미
for(let i = 0; i < input.length; i++){
  console.log(input[i]);
}


//너무 원시적으로 푼 거 같다..