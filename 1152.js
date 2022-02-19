const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(input);
if (input[0] == ''){
  console.log("0");
} else {
  console.log(input.length);
}

// 단어가 없을 때의 케이스가 예외 