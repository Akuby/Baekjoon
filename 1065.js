const input = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
// let input = 110;
let count = 0;

if (input < 100) {
  count += input;
} else {
  count += 99;
  for (let i = 100; i <= input; i++) {
    let 백의자리 = Math.floor(i / 100),
      십의자리 = Math.floor((i - (백의자리 * 100)) / 10),
      일의자리 = i - (백의자리 * 100 + 십의자리 * 10);
    if (백의자리 + 일의자리 == 십의자리 * 2) {
      count += 1;
    }
  }
}

console.log(count);

//함수 문젠데 함수를 안썼다.
//한수를 구하는 함수를 만들어서 for문에 넣어야겠다.