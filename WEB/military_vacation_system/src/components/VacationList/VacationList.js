import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {ButtonGroup, ToggleButton} from 'react-bootstrap'
import './VacationList.css';

const VacationList = ({ addVac }) => {
  const [VacInfo, setVacInfo] = useState();

  //라디오
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: '보유한 휴가', value: '1' },
    { name: '신청중 휴가', value: '2' },
    { name: '사용한 휴가', value: '3' },
  ];
  //라디오
  
  useEffect(() => {
    console.log('컴포넌트가 화면에 나타남');
    axios.post("/VacRef", null, {
      params: {
        'DogNum': sessionStorage.getItem('DogNumber')
      }
    })
      .then(function (response) {
        setVacInfo(response.data);
        console.log(response.data)
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
      {/* 라디오 */}
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-danger'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      {/* 라디오 */}
        {addVac}
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