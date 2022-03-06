const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = ['3', '16'];
const n = parseInt(input[0]),
      m = parseInt(input[1]);

isPrimeNumber = Array(m + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false;

for(i = 2;i <= Math.ceil(Math.sqrt(m)); i++){
  if(isPrimeNumber[i]){
    let num = 2;
    while(i * num <= m){
      isPrimeNumber[i * num] = false;
      num++;
    }
  }
}

const results = [];
for(let i = n; i <= m; i++){
  if(isPrimeNumber[i]){
    results.push(i);
  }
}

console.log(results.join('\n'));

//완전히 내 것으로 만들기