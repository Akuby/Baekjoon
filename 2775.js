const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = ['2','1','3','2','3'];
for(let i = 1; i < input.length/2; i++){
  const 층 = parseInt(input[2*i-1]);
  const 호 = parseInt(input[2*i]);
  // console.log(`${층}층의 ${호}호에는 몇 명이 살까요?`);

  //아파트 주민이 들어갈 틀을 2차원 배열로 선언해둔다.
  const 아파트 = Array.from(Array(층 + 1), () => Array(호 + 1).fill(0));

  for(let i = 1; i <= 호; i++){
    아파트[0][i] = i;
  }
  //원하는 아파트 호수가 될때까지 모든 값을 구해준다. 경우의 수가 적어서 다 구할거다.
  for(let i = 1; i <= 층; i++){
    for(let j = 1; j <= 호; j++){
      아파트[i][j] = 아파트[i-1][j] + 아파트[i][j-1];
    }    
  }

  console.log(아파트[층][호]);

}
