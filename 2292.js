const input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
// const input = 92;
// range가 *6씩 커진 후 더해진다.
let range = 1, //최소 방 수
    total = 1;

while ( true ){
  if(input <= total){
    break
  }
  total += range * 6;
  range++;
}

console.log(range);