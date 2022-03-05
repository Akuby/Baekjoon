const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = ['60', '100'];
// const input = ['64', '65'];
// const input = ['1', '1'];
let count= [],
    flag = 0;

for(let i = parseInt(input[0]); i <= parseInt(input[1]); i++){
  if(i == 1){
    continue
  }
  flag = 0;
  for(let j = 2; j < i; j++){

    if(i % j == 0){
      flag = 1 //flag는 i가 소수가 아닐 때 1
    }
  }

  if(flag == 0){
    count.push(i);
  }
}

if(count.length == 0){
  console.log(-1);
} else {
  const sum = count.reduce((a, el) =>{ return a + el;}, 0 );
  const min = Math.min(...count);
  console.log(`${sum}\n${min}`);
}