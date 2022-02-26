// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = ['4', '1', '8'];
// let input = ['100', '95', '1000000000'];
// let input = ['50', '48', '100'];

input = input.map(x=>parseInt(x)),

      goUp = input[0] - input[1],
      stick = input[2],
      beforeFinish = input[2] - input[1]; //요까지 올라가야

console.log(Math.ceil(beforeFinish / goUp)); //소수점 올림 함수 ceil

//계에에에속 틀렸다.
//가장 멍청했던건 beforeFinish 값을 잘못 줬다는 것이다.
//어차피 올라갈 높이는 미끄러질 높이보다 크고,
//다음날 도착하기만 하면 끝이니
//목표 높이에서 하루분의 미끄러질 높이를 빼 준게
//마지막날 목표로 삼을 높이가 됐어야 했다.

//수학 못하는 게 바로 이런거구나 싶다.
//쉬운 길을 돌아간다.
//길치라서.