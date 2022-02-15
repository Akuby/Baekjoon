const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const targetNum = input[0].split(' ')[1];
const cards = input[1].split(' ').map(x => x * 1);

let maxNum = 0;

for (let i = 0; i < cards.length-2; i++) {
  for (let j = i + 1; j < cards.length-1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let cardSum = cards[i] + cards[j] + cards[k];
      if (cardSum > maxNum && cardSum <= targetNum) {
        maxNum = cardSum;
      }
    }
  }
}

console.log(maxNum);