const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const input = ['4','aba','abab','a','abcabc'];
// const input = ['3','happy','new','year'];
// const input = ['5','ab','aa','aca','ba','bb'];
// const input = ['2','yzyzy','zyzyz'];
// const input = ['1','z'];
let nonGroup = 0;

for(let i = 1; i <input.length; i++){
  console.log(`${input[i]}를 검사합니다.`)
  if(input[i].length <= 1){
    console.log('단 하나인 문자열입니다. 그룹단어입니다.');
    continue;
  }
  let alphabet = [input[i][0]];
  for(let j = 1; j < input[i].length; j++){
    console.log(`[${alphabet}]에서 ${input[i][j]}를 찾습니다.`);
    
    if(alphabet.includes(input[i][j])){
      console.log(`알파벳 배열에 ${input[i][j]}가 존재합니다.`);

      if(input[i][j] == input[i][j-1]){
        console.log('문자열이 연속됩니다.');
      }else{
        console.log('그룹단어가 아닙니다.');
        nonGroup++;
        break;
      }
    } else {
      alphabet.push(input[i][j]);
      console.log(`새 알파벳으로 ${input[i][j]} 를 추가합니다.`)
    }
  }
}

console.log(parseInt(input[0])-nonGroup);

//글자 탐지
//알파벳 배열과 비교, 
//못찾으면 배열에 추가
//찾으면 if문으로, 바로 앞 글자와 같은지 탐지
//같다면 패스,
//같지 않다면 -1
