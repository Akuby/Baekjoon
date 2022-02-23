const input = require('fs').readFileSync('/dev/stdin').toString();
// const input = "UNUCIC"
const 다이얼 = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ"
};
let answer = 0;

for(let i =0; i < input.length; i++){
  for(let j = 2; j < 10; j++){
    if(다이얼[j].includes(input[i])){
      answer += j+1;
      break;
    }
  }
}

console.log(answer);

//includes라는 끔찍하고 아름다운 메서드가 있다니...
//객체로 다루고 싶어서 직접 입력했는데
//찾아보니 아스키코드로 푼 사람도 많았다.
//난 복잡한게 싫어..