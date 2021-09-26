import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';

class Manager extends Component {
    render() {
        return (
            <Nav fill variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="#">신청 목록</Nav.Link>
                    <Nav.Item />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">휴가 상태</Nav.Link>
                    <Nav.Item />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">현황</Nav.Link>
                    <Nav.Item />
                </Nav.Item>
            </Nav>
        )
    }
}

export default Manager;