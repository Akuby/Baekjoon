let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['20', '0'];
input = input.map(x => parseInt(x));
let n = Math.max(...input),
  m = n * 2;

for(let i = 0; i <input.length; i++){ //input의 0 제거
  if(input[i] == 0){
    input.splice(i, 1);
    i--;
  }
}

isPrimeNumber = Array(m + 1).fill(true);
isPrimeNumber[0] = isPrimeNumber[1] = false; //0과 1은 소수가 아님

for (let i = 2; i <= Math.ceil(Math.sqrt(m)); i++) {
  if (isPrimeNumber[i]) {
    let num = 2;
    while (i * num <= m) {
      isPrimeNumber[i * num] = false;
      num++;
    }
  }
}
let results = 0;
for (let i = 0; i < input.length; i++) {
  results = 0;
  for (let j = input[i]+1; j <= input[i]*2; j++) {
    if (isPrimeNumber[j]) {
      results++
    }
  }
  console.log(results)
}