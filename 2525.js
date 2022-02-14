const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const cookTime = Number(input[1]);
let hour = Number(input[0].split(' ')[0]);
let min = Number(input[0].split(' ')[1]) + cookTime;

if (min >= 60){
  hour += parseInt(min/60);
  min = min%60;
}
hour = hour % 24
console.log(hour, min);
