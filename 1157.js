const input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();
//input은 소문자로 이뤄진 string
const chars = new Array(26).fill(0); //a-z까지 빈 배열 chars 생성

for (let i = 0; i < input.length; i++) {
  chars[input.charCodeAt(i) - 97]++; //문자열에서 찾은 알파벳에 해당하는 chars 인덱스 값 ++
}
const 최대빈도 = Math.max(...chars); //256
const 최대빈도인덱스 = chars.indexOf(최대빈도); //0

if (chars.indexOf(최대빈도, 최대빈도인덱스+1) != -1 && 최대빈도인덱스 != 25) { //최대빈도가 여러개일때
  console.log('?');
} else {
  console.log(String.fromCharCode(chars.indexOf(최대빈도)+65));
}

//제일 빈도가 높은 알파벳이 z인 경우, +1해서 찾아줄 수 없기 때문에 제외했다.
//근데 더 좋은 수가 있을거 같다.