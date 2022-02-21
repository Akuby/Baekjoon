const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// let input = ['839', '237']
for (let i = 0; i < 2; i++){
  input[i] = input[i].split("").reverse().join("");
}

parseInt(input[0])>parseInt(input[1]) ? console.log(parseInt(input[0])) : console.log(parseInt(input[1]));

//reverse는 배열에 사용 가능
//문자열을 배열로 만들어주는 함수 => split()
//split("").reverse().join("")

//뭐지.. input을 정수로 받으니까 안풀린다.