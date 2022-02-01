var raw = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
var input = raw[1].split(' ').map(Number);

console.log(Math.min(...input) + " " + Math.max(...input));

//채점이 상당히 느렸다. 시간을 많이 잡아먹는 함수가 아닌지 알아봐야겠다.