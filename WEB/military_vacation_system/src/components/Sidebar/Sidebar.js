import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';
import './Sidebar.css';
const Sidebar = ({ value, onChange, onCreate, onKeyPress }) => {

  const Login=()=>{
    try{
      axios.post("/login",{
        Kinds : document.getElementById('Kinds').value,
        DogNum : document.getElementById('DogNum').value,
        Pw : document.getElementById('Pw').value
      })
      .then(function (response) {
        console.log(response.data);
        alert(response.data[0].Name+"님 반갑습니다.");  
      }).catch(function (error) {
          // 오류발생시 실행
      })
    }catch{
      console.log("실패..")
    }
  }
  return (
    <div className="col-2">
      <Form className="col-12 lf">
        <div className="f">
        <Form.Group className="mb-3 col-9">
          <Form.Select className="mb1" id="Kinds">
            <option value="육군">육군</option>
            <option value="해군/해병">해군/해병</option>
            <option value="공군">공군</option>
            <option value="국직공무원">국직공무원</option>
            <option value="공무원">공무원</option>
          </Form.Select>
          <Form.Control className="mb1" type="text" id="DogNum" placeholder="군(순)번 입력" />
          <Form.Control className="mb2" type="password" id="Pw" placeholder="비밀번호 입력" />
        
        </Form.Group>
          <Button className="col-2 w60" variant="primary" onClick={Login}>
            로그인
          </Button>
          </div>
          <Button className="col-12 mw195" variant="secondary" type="submit">
            비밀번호 초기화
          </Button>
      </Form>
    </div>
  );
}

export default Sidebar;