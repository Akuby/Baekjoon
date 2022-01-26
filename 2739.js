let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let num = Number(input[0]);

for (let i=1;i<10;i++){
    console.log(num + ' * ' + i + ' = ' + (num*i));
}

/*
다른 사람들의 코드를 보니
백틱을 사용하여 문자열과 변수를 같이 출력했다.
백틱으로 감싸주고 ${}에 변수를 입력하면 된다.
보통 문자열이 출력하기 복잡한데 매우 편리해보인다.

5번째 줄 :
console.log(`${num} * ${i} = ${num*i}`);
*/