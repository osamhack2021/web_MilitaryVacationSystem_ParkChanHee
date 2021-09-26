import React from "react";
import { Form, Button } from "react-bootstrap";
import './Sidebar.css';
const Sidebar = ({ value, onChange, onCreate, onKeyPress }) => {

  return (
    <div className="col-3">
      <Form className="col-9">
        <Form.Select>
          <option value="1">육군</option>
          <option value="2">해군/해병</option>
          <option value="3">공군</option>
          <option value="4">국직공무원</option>
          <option value="5">공무원</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="DogNum">
          <Form.Control type="text" placeholder="군(순)번 입력" />
          <Form.Control type="password" placeholder="비밀번호 입력" />
        </Form.Group>
        
        <Button className="col-7" variant="secondary" type="submit">
          비밀번호 초기화
        </Button>
        <Button className="col-4" variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
}

export default Sidebar;