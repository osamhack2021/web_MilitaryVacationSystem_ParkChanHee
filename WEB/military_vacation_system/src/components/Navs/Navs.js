import React from 'react';
import { Nav } from 'react-bootstrap';

import UseVac from 'components/UseVac/UseVac';
import VacationList from 'components/VacationList/VacationList';
import AddVac from 'components/AddVac/AddVac';
import VacItemList from 'components/VacationList/VacItemList';

class Navs extends React.Component {
  id = 5 // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
      input: '',
      todos: [
        { id: 0, text: ' 1차 정기 휴가(정기)', checked: true },
        { id: 1, text: ' 2차 정기 휴가(정기)', checked: false },
        { id: 2, text: ' 3차 정기 휴가(정기)', checked: false },
        { id: 3, text: ' 생활 반장 (포상)', checked: false },
        { id: 4, text: ' 외출 외박 미실시(위로)', checked: false }
      ],
      Stating : 'UseVac' 
    }

      handleChange = (e) => {
          this.setState({
            input: e.target.value // input 의 다음 바뀔 값
          });
        }
    
      handleCreate = () => {
        
        const { input, todos } = this.state;
        this.setState({
          input: '', // 인풋 비우고
          // concat 을 사용하여 배열에 추가
          todos: todos.concat({
            id: this.id++,
            text: input,
            checked: false
          })
        });
        //데이터 전송
        console.log(this.state.input)
        try{
          axios.post("/test",{
            test : this.state.input,
            result : "success"
          })
          .then(function (response) {
            // response  
          }).catch(function (error) {
              // 오류발생시 실행
          }).then(function() {
              // 항상 실행
          });
        }catch{
          console.log("실패..")
        }
      }
      
    
      handleKeyPress = (e) => {
        // 눌려진 키가 Enter 면 handleCreate 호출
        if(e.key === 'Enter') {
          this.handleCreate();
        }
      }

      handleToggle = (id) => {
        const { todos } = this.state;
    
        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index]; // 선택한 객체
    
        const nextTodos = [...todos]; // 배열을 복사
    
        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = { 
          ...selected, 
          checked: !selected.checked
        };
    
        this.setState({
          todos: nextTodos
        });
      }

      handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
          todos: todos.filter(todo => todo.id !== id)
        });
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
          handleChange,
          handleCreate,
          handleKeyPress,
          handleToggle,
          handleRemove,
          handleSelect
        } = this;

    const Contents ={
      UseVac : <UseVac/>,
      AddVac : 
          <VacationList addVac={(
            <AddVac 
              value={input}
              onKeyPress={handleKeyPress}
              onChange={handleChange}
              onCreate={handleCreate}
            />
          )}>
              <VacItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
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