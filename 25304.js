// 영수증에 적힌,
// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.
// let input = ['250000', '4', '20000 5', '30000 2', '10000 6', '5000 8']

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = parseInt(input[0]);

input = input.slice(2, input.length);

let sum = 0;
input.forEach(el => {
  let tempArr = el.split(' ').map(e => parseInt(e));
  sum += tempArr[0] * tempArr[1];
});

total == sum ? console.log("Yes") : console.log("No");

// 처음에 input 받아올 때 trim() 메소드 안넣어줬더니 틀렸었다. 어질어질