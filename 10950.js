let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1;i<=input[0];i++){
  let num = input[i].split(' ');
  console.log(Number(num[0])+Number(num[1]));
}

//입력 어떻게 받지..
//처음부터 완벽한 데이터로 받지 않아도 괜찮다.
//for문 안에서 split 한다던가. 한 가지 방법만 생각하지 말 것.

//마지막에 콘솔에 찍을 때 Number로 감싸주지 않으면 
//윗줄에서 뭘 했든 아무 소용 없다.