const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = ['161', '181', '762', '375']
const x = input[0],
      y = input[1],
      rectX = input[2],
      rectY = input[3];
      
const answer = []
answer.push(x, y, (rectX-x), (rectY-y))

console.log(Math.min(...answer));