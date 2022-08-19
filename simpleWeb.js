let express = require("express");   //express 라이브러리 가져옴
const fs = require('fs');           //fs 라이브러리 가져옴
let app     = express();
 
app.get("/", (req, res) => {
  res.send("Hello World");
});
 

app.listen(8888);   //8888포트로 기다려(localhost:8888 로 접속)

console.log("Running...");

app.get("/save", (req, res) => {        //http://127.0.0.1:8888/save?data=hello로 접속
    var data = req.param('data');
    fs.writeFileSync("C:/Temp/data.txt", data)  //data.txt에 hello 저장됨
    res.send(data);
  });

  app.get("/get", (req, res) => {
    var data = fs.readFileSync("c:/Temp/index.html", 'utf8');
    res.send(data);
  });

  app.use('/public', express.static(__dirname + '/public'));

//post 방식일 경우 
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(bodyParser.text());
  
app.post("/save", (req, res) => {
    var data = req.body.data;
    res.send(data);
  });

app.post("/calc", (req, res) => {
    var data = req.body;
    var result = eval(data);
    res.send(String(result));
    });
  