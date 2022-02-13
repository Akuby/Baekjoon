let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const testCase = Number(input.shift());

//입력 이쁘게 받기
for (let i = 0; i < testCase; i++){
  const score = input[i].split(' ').map(x=>x*1),
      num = score.shift();
  let count = 0;

  //합계 구하기 by reduce()
  const a = score.reduce(function add(sum, currValue){
    return sum + currValue;
  }, 0);

  //평균 구하기
  const avg = a / num;

  //배열에서 평균 이상 나오면 count 하기
  for(let j = 0; j < num; j++){
    if (score[j]>avg){
      count++;
    }
  }

  //형식 맞춰서 출력하기
  console.log(((count / num) * 100).toFixed(3) + "%");

}

//reduce()에 대해 더 알아봐야겠다.

  