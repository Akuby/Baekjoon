let input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
// let input = 10;
let threeBag = 0;

while(true){
  if (input % 5 == 0){
    console.log((input / 5) + threeBag);
    break
  }

  if (input < 0){
    console.log(-1);
    break
  }
  
  threeBag++;
  input -= 3;
}


//한번에 나누지 말고 그냥 하나씩 빼주자
//5로 나눌 수 있는 수에 근접해갈 수 있도록

