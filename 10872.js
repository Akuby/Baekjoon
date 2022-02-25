const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
// const input = 0;
const 팩토리얼 = function(값){
  //(필수) 종료조건
  //종료조건에 걸려서, return에 자신을 호출하지 않는 경우에, 연산 시작
  if(값 <= 0){
    return 1
  }
  //return값에 자신(함수) 호출
  return 값 * 팩토리얼(값-1)
}

console.log(팩토리얼(input));