const express = require('express')
const cors = require("cors");
const mysql = require("mysql");
const app = express() 
const port = 3001

var connection = mysql.createConnection({
    host : "localhost",
    user : "root", 
    password : "0720", 
    database : "MVS", 
});
connection.connect();

app.use(cors({
    origin: true,
    credentials: true
  }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('익스프레스 3001포트')
})

app.post("/login", (req,res) =>{
    console.log('리액트에서 로그인 접근 성공!')
    const loginfo = req.body;
    connection.query("SELECT * FROM USER",
    function(err,rows,fields){
        if(err){
            console.log('데이터 가져오기 실패');
            // console.log(err);
        }else{
            console.log('데이터 가져오기 성공');
            console.log(rows);
            const resData = rows.filter((row)=>{
                return row.DogNumber == loginfo.DogNum;
            });
            res.send(resData);
        };
    });
    connection.end();
});

app.post("/test", (req,res) =>{
    console.log('리액트에서 접근 성공!')
    const test = req.body.test;
    connection.query("INSERT INTO USER (name) values (?)",[test],
    function(err,rows,fields){
        if(err){
            console.log("실패");
            // console.log(err);
        }else{
            console.log("성공");
            // console.log(rows);
        };
    });
    connection.end();
});

app.listen(port, ()=>{
    console.log(`익스프레스 ${port}번 포트가 켜졌습니다.`);
})