//node.js가 제공하는 내장 모듈인 http를 이용한 매우 간단한 웹서버
const http = require('http');
 
http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
}).listen(7777);  //7777포트로 접속 (localhost:7777 로 접속)