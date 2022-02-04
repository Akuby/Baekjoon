const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let str1 = '';
for (let i = 1; i<input+1; i++){
  str1 += "*";
  console.log(str1)
}