const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const input = ['2', '6 12 10', '30 50 72'];
// const input = ['1', '2 10 19'];

for(let i = 1; i < input.length; i++){
  let HWN = input[i].split(' ');
  HWN = HWN.map(x => parseInt(x));
  
  let H = HWN[0],
      N = HWN[2];

  let 호수 = Math.ceil(N / H);
  if(호수 < 10){
    호수 = '0' + 호수.toString();
  }
  let 층수 = HWN[2] % HWN[0];
  if(층수 == 0){
    층수 = H;
  }
  console.log(층수.toString()+호수.toString());
}