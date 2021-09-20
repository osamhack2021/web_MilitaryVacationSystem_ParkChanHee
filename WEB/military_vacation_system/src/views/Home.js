import React, { Fragment } from 'react';

import Header from 'components/Header';
import HomeDetail from 'components/HomeDetail';
import Form from 'components/Form';
import TodoItemList from 'components/TodoItemList';

class Home extends React.Component {

    id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

    state = {
      input: '',
      todos: [
        { id: 0, text: ' 리액트 공부', checked: true },
        { id: 1, text: ' 해커톤', checked: false },
        { id: 2, text: ' 운동', checked: false }
      ]
    }

    handleChange = (e) => {
        this.setState({
          input: e.target.value // input 의 다음 바뀔 값
        });
      }
    
      handleCreate = () => {
        /* 익스프레스 통신 시작 */
        console.log("익스프레스 통신 시작")
        const post ={
          plzid : this.state.input,
        };
        
        fetch("https://web-militaryvacationsystem-parkchanhee-455px95j3p75-3001.githubpreview.dev/idplz", {
          method : "post", // 통신방법
          headers : {
            "content-type" : "application/json",
          },
          body : JSON.stringify(post),
        });
        console.log("익스프레스 통신 끝")
        /* 익스프레스 통신 끝 */

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

      render() {
        const { input, todos } = this.state;
        const {
          handleChange,
          handleCreate,
          handleKeyPress,
          handleToggle,
          handleRemove
        } = this;

        return (
            <Fragment>
                <Header />
                <HomeDetail form={(
                  <Form 
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                  />
                )}>
                    <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </HomeDetail>
            </Fragment>
        )
    };
}

export default Home;