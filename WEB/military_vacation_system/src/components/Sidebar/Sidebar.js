import React from "react";
import { Form, Button, Badge } from "react-bootstrap";
import { render } from "react-dom";
import './Sidebar.css';
class Sidebar extends React.Component  {
  
  Logout = () => {
      sessionStorage.clear();
      document.location.href ='/'
  }
  render(){
    const {
      Logout
    } = this;
    let loginfo = {
      Auth : sessionStorage.getItem('Auth'),
      Belong : sessionStorage.getItem('Belong'),
      DogNumber : sessionStorage.getItem('DogNumber'),
      Kinds : sessionStorage.getItem('Kinds'),
      Name : sessionStorage.getItem('Name'),
      PassWord : sessionStorage.getItem('PassWord'),
      StartDate : sessionStorage.getItem('StartDate'),
      EndDate : sessionStorage.getItem('EndDate'),
      ClientIP : sessionStorage.getItem('ClientIP')
    }
    //계급 구하기
    let Today = new Date();
    let year = Today.getFullYear();
    let month = Today.getMonth() + 1;
    let Sday = loginfo.StartDate.split('-');
    let classes = "";
    if(loginfo.Kinds.includes('군')){
      if((year-Sday[0])*12+(month-Sday[1])>14)
        classes = "병장";
      else if((year-Sday[0])*12+(month-Sday[1])>8)
        classes = "상등병";
      else if((year-Sday[0])*12+(month-Sday[1])>3)
        classes = "일등병";
      else
        classes = "이등병";
    }

    return (
      <div className="col-2">
        <Form className="col-12 lf">
          <div className="UInfo mb2"><Badge pill bg="info">
              NM
            </Badge>{loginfo.Name}  ({classes})<br/>
            <Badge pill bg="info">
              DN
            </Badge>{loginfo.DogNumber}
            <Badge pill bg="info">
              IP
            </Badge>{loginfo.ClientIP}
            </div>
            <Button className="col-12 mw195 mb2" variant="primary" onClick={Logout}>
              로그아웃
            </Button>
            <Button className="col-12 mw195" variant="secondary">
              비밀번호 초기화
            </Button>
        </Form>
      </div>
    );
  }
}
export default Sidebar;