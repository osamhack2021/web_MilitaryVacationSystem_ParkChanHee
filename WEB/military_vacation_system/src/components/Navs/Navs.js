import React from 'react';
import { Nav } from 'react-bootstrap';

const handleSelect = (eventKey) => {
  switch (eventKey) {
    case '1':
      document.getElementById('LeaveApp').style.display='contents';
      document.getElementById('VacationList').style.display='none';
      break;
    case '2':
      document.getElementById('VacationList').style.display='contents';
      document.getElementById('LeaveApp').style.display='none';
      break;
    case '3':
      document.getElementById('VacationList').style.display='none';
      document.getElementById('LeaveApp').style.display='none';
      break;
    default:
      document.getElementById('VacationList').style.display='none';
      document.getElementById('LeaveApp').style.display='none';
  }

};

class Navs extends React.Component {
  render() {
    let isLogin = sessionStorage.getItem('Auth');
    return (
        <Nav fill variant="tabs" defaultActiveKey="1" onSelect={handleSelect}>
        <Nav.Item>
        {isLogin == null
          ?<Nav.Link eventKey="1" disabled>휴가 신청</Nav.Link>
          :<Nav.Link eventKey="1">휴가 신청</Nav.Link>
          }
        </Nav.Item>
        <Nav.Item>          
          {isLogin == null
          ?<Nav.Link eventKey="2" disabled>휴가 목록</Nav.Link>
          :<Nav.Link eventKey="2">휴가 목록</Nav.Link>
          }
        </Nav.Item>
        <Nav.Item>
          {isLogin == null
          ?<Nav.Link eventKey="3" disabled>현황</Nav.Link>
          :<Nav.Link eventKey="3">현황</Nav.Link>
          }
          
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