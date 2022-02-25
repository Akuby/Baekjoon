// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
let input = ['2', '1', '5'];
// let input = ['5', '1', '6'];
// let input = ['100', '99', '1000000000'];
// let input = ['10', '9', '10'];
// let input = ['2', '1', '1'];


input = input.map(x=>parseInt(x)),

      up = input[0],
      down = input[1],
      stick = input[2],
      beforeFinish = input[2] - input[0];

let n = 0;

//하루만에 올라가는 경우
//이틀만에 올라가는 경우
//나머지

console.log(n + 1);