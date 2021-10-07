import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import './VacationList.css';

const VacationList = ({ addVac }) => {
  const [VacInfo, setVacInfo] = useState();
  const [vacationinfo, setvacationinfo] = useState();

  //라디오
  const [radioValue, setRadioValue] = useState('1');
  
  const radios = [
    { name: '등록된 휴가', value: '1' },
    { name: '신청중 휴가', value: '2' },
    { name: '사용한 휴가', value: '3' },
  ];
  //라디오
  
  useEffect(() => {
    axios.post("/VacRef", null, {
      params: {
        'DogNum': sessionStorage.getItem('DogNumber')
      }
    })
      .then(function (response) {
        setVacInfo(response.data.filter(vack => vack.States === 0));
        setvacationinfo(response.data);
      }).catch(function (error) {
        // 오류발생시 실행
      })
    return () => {
      console.log('컴포넌트가 화면에서 사라짐');
    };
  }, []);
  return (
    <main id="VacationList" className="Vacation-list" style={{ display: 'contents' }}>
      <div className="title">
        휴가 목록
      </div>
      <section className="form-wrapper">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx === 1 ? 'outline-warning' : (idx === 2 ?'outline-danger':'outline-success')}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value)
              setVacInfo(vacationinfo.filter(vack => vack.States === idx))
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
        {addVac}
      </ButtonGroup>
        
      </section>
      <section className="todos-wrapper">
        {VacInfo && VacInfo.map((item, index) => {
          return (
            <div className="Vac-item" key={index}>
              <div className="Vac-text Vfont">
                <div> {item.Name} </div>
                <div> &#40; {item.Kinds} &#41; </div>
                <div> {item.Count}일 </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default VacationList;