import React, { useState } from 'react';
import { Form, Button, Modal } from "react-bootstrap";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './AddVac.css';

const AddVac = () => {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(1);
  const handleClose = () => {
    setShow(false);
    setNumber(1);
  }
  const handleShow = () => setShow(true);

  const increaseNumber = () => setNumber(number + 1);
  const decreaseNumber = () => {number === 1 ? alert("휴가일수는 1일보다 작을 수 없습니다.") : setNumber(number-1);}
  const AddVacation = () =>{
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        등록
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>휴가 등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="col-12">
            <Form.Group className="mb-3 col-12 mw195">
              <Form.Select className="mb1" id="VKinds">
                <option value="연가">연가</option>
                <option value="공가">공가</option>
                <option value="포상">포상</option>
                <option value="보상">보상</option>
                <option value="위로">위로</option>
              </Form.Select>
              <Form.Group className="f">
                <Form.Control className="mb1" type="text" id="VName" placeholder="휴가 이름 입력" />
                <div className="col-5 AVDiv">
                <Button className="AddVB" onClick={decreaseNumber}><FontAwesomeIcon icon={faMinus} /></Button>
                {number} 일
                <Button className="AddVB" onClick={increaseNumber}><FontAwesomeIcon icon={faPlus} /></Button>
                </div>
              </Form.Group>
              <Form.Control className="mb2" type="text" id="VCount" placeholder="내용 입력" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={AddVacation}>등록</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddVac;