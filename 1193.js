let input = parseInt(require('fs').readFileSync('/dev/stdin').toString());
// let input = 10000000;
let groupCounter = 0;
let 분자, 분모 = 0;

while ( input > 0){ //이 부분은 서치해서 가져왔다..
  groupCounter++; //몇번째 그룹인지, 동시에 분수의 개수는 몇개인지.
  input = input - groupCounter;
}

if(groupCounter % 2 == 0){ //그룹이 짝수 그룹이라면...
  //분모는 커지고, 분자는 작아진다.
  분자 = groupCounter + input;
  분모 = groupCounter + 1 - 분자;

  console.log(`${분자}/${분모}`);
} else { //그룹이 홀수 그룹이라면...
  //분모는 작아지고, 분자는 커진다.
  분모 = groupCounter + input;
  분자 = groupCounter + 1 - 분모;

  console.log(`${분자}/${분모}`);
}