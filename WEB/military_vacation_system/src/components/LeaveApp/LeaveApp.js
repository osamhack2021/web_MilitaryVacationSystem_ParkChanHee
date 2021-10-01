import React, { Component } from 'react';
import { Button, Form, Col, Row, } from 'react-bootstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

import 'components/LeaveApp/LeaveApp.css';

// date 형식 변환 for 'date의 min값'
let date = new Date();
let minDate = dateFormat(date);

function dateFormat(date) {
    let month = date.getMonth()+1;
    let day = date.getDate()+1;

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;

    return date.getFullYear() + '-' + month + '-' + day;
}

class LeaveApplication extends Component {
    state = {
        events: [{
            id: '1',
            start: '2021-10-5',
            end: '2021-10-9'
        }],
    }

    addEvents = () => {
        const { events } = this.state;

        let firstDay = document.getElementById("VacStart").value;
        let lastDay = document.getElementById("VacEnd").value;

        let temp = {
            id: '',
            start: {firstDay},
            end: {lastDay},
        };

        this.setState({
            events: [...events, temp]
        });

        console.log("이벤트 추가");
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
                <div className='col-lg-6'>
                    <Row>
                        <FullCalendar
                            defaultView="dayGridMonth"
                            plugins={[ dayGridPlugin ]}
                            events={this.state}
                        />
                    </Row>
                </div>
            </div>
        );
    };
}

export default LeaveApplication;