//묹자열로 넣어서 출력. 이게 Best 인듯.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for (let i = 1;i<Number(input[0])+1;i++){
  let arr1 = input[i].split(" ");
  answer += Number(arr1[0]) + Number(arr1[1]) + '\n';
}
console.log(answer);
//배열로 넣은 다음 문자열로 출력. 굳이 이렇게 두번 일을 안해도 될듯하다.
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = [];
for (let i = 1;i<Number(input[0])+1;i++){
  let arr1 = input[i].split(" ");
  answer.push(Number(arr1[0]) + Number(arr1[1]) + '\n');
}
console.log(answer.join(''));

/* for문에서 console.log 돌리니까 시간초과가 났다.
한번에 몰아서 출력해주면 좋을듯 해서 무슨 타입으로 몰아넣을까 생각해봤다.
배열 보다는 문자열이 일단 쉬울거 같아서 넣어보았더니 성공했고, 배열로도 넣어보고
싶어서 일단 해봤는데 비효율적인듯 하다.*/

