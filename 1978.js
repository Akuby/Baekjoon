const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = ['4', '1 3 5 7']; //3
// const input = ['4', '1 2 4 6']; //1
const nums = input[1].split(' ');
let count = 0,
    flag = 0;

for(let i = 0; i < nums.length; i++){
  let target = parseInt(nums[i]);
  if(target == 1){
    continue
  }
  flag = 0;
  for(let j = 2; j < target; j++){
    if(target % j == 0){
      flag = 1; //flag 는 소수가 아닐 때 1
    }
  }
  if(flag == 0) {
    count++;
  }
}

console.log(count);
