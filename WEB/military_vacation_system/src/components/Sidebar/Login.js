import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import './Sidebar.css';
const Login = ({ value, onChange, onCreate, onKeyPress }) => {

  const Login=()=>{
    if(document.getElementById('DogNum').value==='')
      alert('군(순)번을 입력해주세요.')
    else if(document.getElementById('Pw').value==='')
      alert('비밀번호를 입력해주세요.')
    else{
        axios.post("/login",null, {
          params: {
            'Kinds' : document.getElementById('Kinds').value,
            'DogNum' : document.getElementById('DogNum').value,
            'Pw' : document.getElementById('Pw').value
          }
        })
        .then(function (response) {
          if(response.data.msg==null){
            sessionStorage.setItem('Auth', response.data.Auth)
            sessionStorage.setItem('Belong', response.data.Belong)
            sessionStorage.setItem('DogNumber', response.data.DogNumber)
            sessionStorage.setItem('Kinds', response.data.Kinds)
            sessionStorage.setItem('Name', response.data.Name)
            sessionStorage.setItem('PassWord', response.data.PassWord)
            sessionStorage.setItem('StartDate', response.data.StartDate)
            sessionStorage.setItem('EndDate', response.data.EndDate)
            sessionStorage.setItem('ClientIP', response.data.ClientIP)
            document.location.href ='/'
          }
          else
            alert(response.data.msg)
        }).catch(function (error) {
            // 오류발생시 실행
        })
    }
  }
  const LKPress = (e) => {
    if(e.key === 'Enter') {
      Login();
    }
  }
  return (
    <div className="col-2">
      <Form className="col-12 lf">
        <Form.Group className="mb-3 col-12 mw195">
          <Form.Select className="mb1" id="Kinds">
            <option value="육군">육군</option>
            <option value="해군/해병">해군/해병</option>
            <option value="공군">공군</option>
            <option value="국직공무원">국직공무원</option>
            <option value="공무원">공무원</option>
          </Form.Select>
          <Form.Control className="mb1" type="text" id="DogNum" placeholder="군(순)번 입력" onKeyPress={LKPress}/>
          <Form.Control className="mb2" type="password" id="Pw" placeholder="비밀번호 입력" onKeyPress={LKPress}/>
          <Button className="col-12 mb2" variant="primary" onClick={Login}>
            로그인
          </Button>
          <Button className="col-12" variant="secondary">
            비밀번호 초기화
          </Button>
        </Form.Group>  
          
      </Form>
    </div>
  );
}

export default Login;