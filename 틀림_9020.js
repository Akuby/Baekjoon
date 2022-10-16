// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const input = ['4', '20', '50', '70', '76'];
input.map(x => parseInt(x));
input.shift();
// console.log(input)
const n = 2,
      m = Math.max(...input);

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

for(let i = 0; i<input.length; i++){
  let answer = [];
  for(let j = 2; j <= input[i] / 2; j++){
    if(isPrimeNumber[j]){ //소수
      let rest = input[i] - j;
      if(isPrimeNumber[rest]){
        answer.push(j, rest);
      }
    }
  }
  console.log(answer[answer.length-2],answer[answer.length-1]);
}

//맞왜틀????
