const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// let input = ['2100000000', '9', '10'];
let 고정비용 = parseInt(input[0]),
    가변비용 = parseInt(input[1]),
    가격 = parseInt(input[2]);
if(가격 <= 가변비용){
  console.log(-1);
} else{
  console.log(parseInt((고정비용 / (가격 - 가변비용)+1)));
}

//오랜만의 수학...