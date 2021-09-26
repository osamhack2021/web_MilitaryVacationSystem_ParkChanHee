import React from 'react';

import { Nav } from 'react-bootstrap';

const handleSelect = (eventKey) => {
  switch (eventKey) {
    case '1':
      document.getElementById('AddVacation').style.display='none';
      break;
    case '2':
      document.getElementById('AddVacation').style.display='contents';
      break;
    case '3':
      document.getElementById('AddVacation').style.display='none';
      break;
    default:
      document.getElementById('AddVacation').style.display='none';
  }

};

class Navs extends React.Component {
  render() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="1" onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey="1">휴가 신청</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2">휴가 등록</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3">현황</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="4" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    )
  };
}
export default Navs;