import React from 'react'
import BottomNav from '../components/common/BottomNav';
import Toggle from "../components/common/Toggle";
import Button from "../components/common/Button";
import { MoonIcon, MusicalNoteIcon, SunIcon } from '@heroicons/react/24/outline';
import "../styles/SettingPage.css"

const SettingPage = () => {
  // 더미 데이터 값 -> 백엔드와 연결 후 변경
  const user ={
    name: '홍길동',
    characterImage: '/assets/characters/stone.png'
  };

  return (
    <div className='setting-page'>
      <div className='user-info'>
        <img
          src = {user.characterImage}
          alt='캐릭터 이미지'
          className='character-img'
        />
        <p className='user-name'>{user.name}</p>
      </div>

      <div className='setting-option'>
        <div className='option-item'>
          <MoonIcon className='icon'/>
            <span>다크모드</span>
          <Toggle/>
        </div>

        <div className='option-item'>
          <MusicalNoteIcon className='icon' />
          <span>배경음악</span>
          <Toggle/>
        </div>

        <div className='option-item option-night'>
          <SunIcon className='icon'/>
          <div className='option-night-text'>
            <span>자동 낮밤</span>
            <p>시간에 따라 자동으로 모드가 변경 됩니다.</p>
          </div>
        </div>
      </div>

      {/*alert문은 백엔드와 연결하고 console.log로 수정하기*/}
      <div className='button-group'>
        <Button text='수정'  className="setting-button" onClick={() => alert("수정 버튼을 클릭하였습니다")}/>
        <Button text="저장"  className="setting-button" onClick={() => alert("저장 버튼을 클릭하였습니다")}/>
      </div>
      
      <BottomNav/>
    </div>
  )
}

export default SettingPage;
