import React, { useEffect } from 'react';
import axios from 'axios';
import './VacationList.css';

const VacationList = ({addVac, children}) => {
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    axios.post("/VacRef",null, {
      params: {
        'DogNum' : sessionStorage.getItem('DogNumber')
      }
    })
    .then(function (response) {
      console.log(response.data)
    }).catch(function (error) {
        // 오류발생시 실행
    })
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
    return (
      <main id="VacationList" className="Vacation-list" style={{ display:'contents' }}>
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