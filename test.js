/*
var a = 1;
var b = 2;

function add(x, y){
    var result = x + y;
    return result;
}

var result = add(a, b);

console.log(result);
*/

/*
//파일 읽기를 동기방식으로 테스트
const fs = require('fs');
var data = fs.readFileSync('c:/Temp/read.txt','utf-8');
console.log(data);
console.log('Done');
*/


//파일 읽기를 비동기방식으로 테스트
const fs = require('fs');   //기본제공되는 fs라이브러리를 가져옴
fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{    //익명함수(화살표함수), 함수를 정의함과 동시에 인자도 선언
    if (err) return console.log(err);
 
    console.log(data);
})
console.log('Done');