let input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
let original = input,
    count = 0;

while (true) {
  count++;
  let 십의자리 = Math.floor(input / 10),
    일의자리 = input % 10;

  let 새일의자리 = (십의자리 + 일의자리) % 10;

  input = 일의자리 * 10 + 새일의자리;

  if (input == original) {
    break
  }
}

console.log(count);

//7줄에 Math.floor 안해줘서 자꾸 틀렸다.