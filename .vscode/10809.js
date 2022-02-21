const input = require('fs').readFileSync('/dev/stdin').toString();
// const input = "baekjoon";
const result = [];
for(let i = 97; i < 123; i++){
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' ').trim());



// 'a'는  97번이고, 'z'는 122번
// indexOf는 최초값만 찾는데다가, 못찾으면 -1를 반환한다.

//처음엔 배열 26개 만들고 난리쳤는데
//다른 사람 코드보고 충격 먹음.