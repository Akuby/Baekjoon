const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const ABC = String(input[0] * input[1] * input[2]);
for (let i = 0; i <= 9; i++){ //0-9를 찾을거임
  let count = 0;
  for (let j = 0; j < ABC.length; j++){//i값이 몇개인지 더할거임
    if (Number(ABC[j])===i){
      count++;
    }
  }
  console.log(count);
}