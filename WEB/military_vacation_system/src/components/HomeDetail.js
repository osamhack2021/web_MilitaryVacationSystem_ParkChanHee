import React, { Component, Fragment } from 'react';
import './TodoListTemplate.css';

const HomeDetail = ({form, children}) => {
    return (
      <main className="todo-list-template">
        <div className="title">
          오늘 할 일
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