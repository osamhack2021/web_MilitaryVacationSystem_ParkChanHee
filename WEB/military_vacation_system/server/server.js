const express = require('express')
const cors = require("cors");
const mysql = require("mysql");
const app = express()
const port = 3001
let requestIp = require('request-ip');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0720",
    database: "MVS",
});
connection.connect();

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
    res.send('익스프레스 3001포트')
})

app.post("/login", (req, res) => {
    const loginfo = req.query;
    connection.query('SELECT COUNT(*) AS result FROM USER WHERE DogNumber = ?', loginfo.DogNum, (err, data) => {
        if (!err) {
            if (data[0].result < 1) {
                res.send({ 'msg': '등록되지 않은 군(순)번입니다.' })
            } else {
                const logquery = `SELECT * FROM USER WHERE DogNumber = ? AND PassWord = ? AND Kinds = ?`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [loginfo.DogNum, loginfo.Pw, loginfo.Kinds]
                connection.query(logquery, params, (err, data) => {
                    if (!err) {
                        try {
                            if (data[0] == null)
                                res.send({ 'msg': '비밀번호를 다시 확인해주십시오.' })
                            else {
                                data[0].ClientIP = requestIp.getClientIp(req);
                                console.log(data[0])
                                res.send(data[0])
                            }
                        } catch {
                            console.error();
                        }
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

app.post("/VacRef", (req, res) => {
    connection.query('SELECT * FROM VACATION WHERE DogNumber = ?', req.query.DogNum, (err, data) => {
        if (!err) {
            try {
                res.send(data)
            } catch {
                console.error();
            }
        } else {
            res.send(err)
        }
    })
});

app.listen(port, () => {
    console.log(`익스프레스 ${port}번 포트가 켜졌습니다.`);
})