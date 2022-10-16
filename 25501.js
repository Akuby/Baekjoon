// 팰린드롬 판별

// let input = ['5', 'AAA', 'ABBA', 'ABABA', 'ABCA', 'PALINDROME']

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");


let count = 0;

function isPalindrome(str) {
  count = 0;
  return recursion(str, 0, (str.length - 1))
}

function recursion(str, l, r) {
  count++;
  if (l >= r ) { // l과 r이 만났거나 지나쳤을 때 = 성공적으로 검사가 끝났을 때
    return 1
  } else if (str[l] != str[r]) { // 글자가 다를 때
    return 0
  } else { // 계속 검사
    return recursion(str, l+1, r-1);
  }
}
input.shift();
input.forEach(el => {
  console.log(`${isPalindrome(el)} ${count}`);
});

// 감도 못잡다가 힌트 보고 깨우쳤다. isPalindrome이 recursion을 리턴하는건 좀 존멋이다.