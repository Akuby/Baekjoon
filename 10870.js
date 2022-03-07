const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
// const input = 20;
const fibonacci = function (index){
  if(index == 1){
    return 1
  } else if(index == 0){
    return 0
  }
  return fibonacci(index-1) + fibonacci(index-2)
}


console.log(fibonacci(input));