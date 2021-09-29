import React from 'react';
import './VacationList.css';

const VacationList = ({addVac, children}) => {
    return (
      <main id="VacationList" className="Vacation-list" style={{display:'none'}}>
        <div className="title">
          휴가 목록
        </div>
        <section className="form-wrapper">
          {addVac}
        </section>
        <section className="todos-wrapper">
          { children }
        </section>
      </main>
    );
  };
  
  export default VacationList; 