const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
for(let i = 0; i<input.length-1;i++){
  let c = input[i].split(" ");
  if(Number(c[0])>Number(c[1])){
    console.log("Yes");
  } else {
    console.log("No");
  }
}