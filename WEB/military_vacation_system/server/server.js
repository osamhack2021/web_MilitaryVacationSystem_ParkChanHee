const express = require('express')
const cors = require("cors");
const app = express() 
const port = 3001

app.use(cors({
    origin: true,
    credentials: true
  }));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('익스프레스 3001포트')
})

app.post("/test", (req,res) =>{
    console.log('리액트에서 접근 성공!')
    const test1 = req.test;
    console.log(test1);
});


app.listen(port, ()=>{
    console.log(`익스프레스 ${port}번 포트가 켜졌습니다.`);
})