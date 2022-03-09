// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = ['5', '55 185', '58 183', '88 186', '60 175', '46 155'];
const buildArr = [];
let count = [];
for(let i = 1; i < input.length; i++){
  buildArr.push(input[i].split(' ').map(x=>parseInt(x)));
}

const weightArr = buildArr.sort(function(a ,b){
  if(a[0] > b[0]){
    return 1
  }
  if(a[0] < b[0]){
    return -1
  }
  return 0;
})

console.log(weightArr);

for(let i = 0; i < weightArr.length; i++){
  if(weightArr[i][1] < ){

  }
}