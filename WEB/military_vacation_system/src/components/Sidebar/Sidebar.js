import React from "react";
import { Form, Button } from "react-bootstrap";
import './Sidebar.css';
const Sidebar = ({ value, onChange, onCreate, onKeyPress }) => {

  const Login=()=>{
    alert()
  }
  return (
    <div className="col-2">
      <Form className="col-12 lf">
        <div className="f">
        <Form.Group className="mb-3 col-9" id="goon">
          <Form.Select className="mb1">
            <option value="1">육군</option>
            <option value="2">해군/해병</option>
            <option value="3">공군</option>
            <option value="4">국직공무원</option>
            <option value="5">공무원</option>
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