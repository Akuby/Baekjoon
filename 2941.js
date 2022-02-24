// const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let input = 'dz=ak';
let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for(let alphabet of croatia){
  input = input.split(alphabet).join("a");
}

console.log(input);