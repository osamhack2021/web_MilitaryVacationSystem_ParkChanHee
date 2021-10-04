import React from 'react';
import { Nav } from 'react-bootstrap';

import UseVac from 'components/UseVac/UseVac';
import VacationList from 'components/VacationList/VacationList';
import AddVac from 'components/AddVac/AddVac';

class Navs extends React.Component {
  id = 5 // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
      Stating : 'UseVac' 
    }

      handleSelect = (eventKey) => {
        switch (eventKey) {
          case '1':
            this.setState({Stating :'UseVac'});
            break;
          case '2':
            this.setState({Stating :'AddVac'});
            break;
          case '3':
            this.setState({Stating :'Status'});
            break;
          default:
            break;
        }
      };
  render() {
    const { input, todos, Stating } = this.state;
        const {
          handleSelect
        } = this;

    const Contents ={
      UseVac : <UseVac/>,
      AddVac : 
          <VacationList addVac={(
            <AddVac/>
          )}>
          </VacationList>,
      Status: <p>개발중</p>
    }
    let isLogin = sessionStorage.getItem('Auth');
    return (
      <div className="col-10 p05">
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
      {
        Contents[Stating]
      }
      </div>
    )
  };
}
export default Navs;