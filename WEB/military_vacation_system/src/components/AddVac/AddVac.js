import React from 'react';
import './AddVac.css';

const AddVac = ({value, onChange, onCreate, onKeyPress}) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        등록
      </div>
    </div>
  );
};

export default AddVac;