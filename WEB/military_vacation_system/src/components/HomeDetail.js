import React from 'react';
import './TodoListTemplate.css';

const HomeDetail = ({form, children}) => {
    return (
      <main id="AddVacation" className="todo-list-template" style={{display:'none'}}>
        <div className="title">
          휴가 등록
        </div>
        <section className="form-wrapper">
          {form}
        </section>
        <section className="todos-wrapper">
          { children }
        </section>
      </main>
    );
  };
  
  export default HomeDetail; 