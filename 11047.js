const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
const target = input[0].split(' ').map(x => Number(x));
let coins = input.slice(1).map(x => Number(x))
let targetMoney = target[1];
let answer = 0;

while (targetMoney !== 0) {
  targetMoney = counting();
}

console.log(answer);

function counting (){
  for (let i = target[0]; i >= 0;i--){
    if (targetMoney < coins[i]){
      continue
    } else if (targetMoney >= coins[i]){
      answer += parseInt(targetMoney / coins[i])
      targetMoney = targetMoney % coins[i] 
    }
  }
  return targetMoney
}

//시간초과..ㅠㅠ
//값을 어떻게 input 받는지를 모르겠다.

//2차시도. 성공!!
//큰 수부터 작은 수로 i를 돌리는게 맞는 방법이었다. 이런 바보