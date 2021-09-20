import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList =todos.map(
      (todos) => (
        <TodoItem
          {...todos}
          onToggle={onToggle}
          onRemove={onRemove}
          key={todos.id}
        />
      )
    );

    return (
      <div>
        {todoList}    
      </div>
    );
  }
}

export default TodoItemList;