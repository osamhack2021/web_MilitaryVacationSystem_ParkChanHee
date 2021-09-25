import React from "react";
import './sidebar.css';
import './Form.css';

const Sidebar = ({value, onChange, onCreate, onKeyPress}) =>{
  
  return (
    <div className="sbar">
        <div className="sidebarTemplate">
        <div className="stitle">
          로그인
        </div>
        <div className="form">
            <div className="block">
                <input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="군(순)번 입력"/>
                <input value={value} onChange={onChange} onKeyPress={onKeyPress} placeholder="비밀번호 입력"/>
            </div>
            <div>
                <div className="create-button" onClick={onCreate}>
                    로그인
                </div>
                <div className="create-button" onClick={onCreate}>
                    비밀번호 초기화
                </div>
            </div>
      </div>
    </div>
    </div>
  );
}

export default Sidebar;