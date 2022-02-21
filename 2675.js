const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// let input = ['2', '3 ABC', '5 /HTP'];

for (let i = 1; i < input.length; i++) {
  let 케이스 = [];
  let answer = '';
  케이스 = input[i].split(' '); //['3', 'ABC']
  for (let j = 0; j < 케이스[1].length; j++) {
    for (let k = 0; k < parseInt(케이스[0]); k++) {
      answer += 케이스[1][j];
    }
  }
  console.log(answer);
}

//typeError는 보통 split함수에서 줄바꿈이 하나 더 들어가서 생김
//줄바꿈으로 input을 받을 때는 trim()을 이용해주자.