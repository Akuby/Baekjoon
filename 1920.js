// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let input = ['5','4 1 5 2 3', '5', '1 3 7 9 5']

const 이분탐색 = (list, target, start, end, mid) => {
  //목표 = target과 mid가 일치할 때까지 while을 돌린다.
  while (start <= end){ 
    mid = Math.floor((start+end)/2);
    if (list[mid] == target) {
      return 1;
    } else if (list[mid] > target){
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
}

const A = input[1].split(' ').map(x=>parseInt(x));
      M = parseInt(input[2]);
      B = input[3].split(' ').map(x=>parseInt(x));

A.sort((a, b) => a - b); //이분탐색을 위한 정렬

const result = B.map( b => 이분탐색(A, b, 0, A.length-1, 0));

console.log(result.join("\n"));
