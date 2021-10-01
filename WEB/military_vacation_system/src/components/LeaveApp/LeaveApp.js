import React, { Component } from 'react';
import { Button, Form, Col, Row, } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import './LeaveApp.css';

// date 형식 변환 for 'date의 min값'
// 마찬가지로 말일 관련 문제 발생 가능성 존재
let date = new Date();
let minDate = dateFormat(date);

function dateFormat(date) {
    let month = date.getMonth()+1;
    let day = date.getDate()+1;

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '-' + month + '-' + day;
}

// 'id'로 사용 목적
let count = 2;

class LeaveApplication extends Component {
    state = {
        events: [{
            id: 1,
            title: '테스트',
            start: '2021-10-5',
            end: '2021-10-9'
            }]
    }

    addEvents = () => {
        const { events } = this.state;

        let firstDay = document.getElementById("VacStart");
        let lastDay = document.getElementById("VacEnd");

        // 달이 바뀔 때의 corner case 수정 필요

        if (Number(firstDay.value.slice(5,7)) > Number(lastDay.value.slice(5,7))) {
            alert("복귀일이 시작일보다 빠를 수 없습니다.");
            return;
        }

        if (Number(firstDay.value.slice(8,10)) > Number(lastDay.value.slice(8,10))) {
            alert("복귀일이 시작일보다 빠를 수 없습니다.");
            return;
        }

        let event = {
            id: count++,
            // title 추가 필요
            start: firstDay.value,
            end: lastDay.value,
        };

        this.setState({
            events: [...events, event]
        });

        firstDay.value='';
        lastDay.value='';
    }

    shouldComponentUpdate = (prevProps, nextState) => {
        if (this.state !== nextState) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div id='LeaveApp'>
                <div className='col-lg-4'>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>시작일</Form.Label>
                            <Col sm={6}>
                                <Form.Control type='date' id='VacStart' min={minDate}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={3}>복귀일</Form.Label>
                            <Col sm={6}>
                                <Form.Control type='date' id='VacEnd' min={minDate}></Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                    <Button onClick={this.addEvents}>신청</Button>
                </div>
                <div className='col-lg-8'>
                    <Row>
                        <FullCalendar
                            initialView="dayGridMonth"
                            plugins={[ dayGridPlugin ]}
                            events={this.state.events}
                        />
                    </Row>
                </div>
            </div>
        );
    };
}

export default LeaveApplication;