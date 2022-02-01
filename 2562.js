const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = Math.max(...input).toString()
console.log(answer);
console.log(input.indexOf(answer)+1);