let input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
const original = input;
let first = 0;
let second = 0;

if (input < 10){
  first = 0;
  second = input;
}

while (input == original){
  first = input/10;
  second = input%10;

  let cal = first + second;
  let calSec = cal%10;

  input = second * 10 + calSec

}


