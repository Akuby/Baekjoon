const input = require('fs').readFileSync('/dev/stdin').toString();
// const input = '12';
let minimum = parseInt(input) - input.length*9;
let answer = 0;
if(minimum < 0){
  minimum = 0;
}

//멍청아 100의 자리수만 있냐
for(let i = minimum; i < parseInt(input); i++){
  const strI = i.toString();
  let count = 0;
  for(let j = 0; j < strI.length; j++){
    count += parseInt(strI[j]);
  }
  if(parseInt(input) === i + count){
    answer = i;
    break
  }
}

console.log(answer);