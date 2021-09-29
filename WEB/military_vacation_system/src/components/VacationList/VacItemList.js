import React, { Component } from 'react';
import GetVacations from './GetVacations';

class VacItemList extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }

  render() {
    const { todos, onToggle, onRemove } = this.props;

    const todoList =todos.map(
      (todos) => (
        <GetVacations
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

export default VacItemList;