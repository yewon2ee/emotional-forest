import React, {useState, useEffect} from 'react'
import BottomNav from '../components/common/BottomNav';
import Toggle from "../components/common/Toggle";
import Button from "../components/common/Button";
import { MoonIcon, MusicalNoteIcon, SunIcon } from '@heroicons/react/24/outline';
import "../styles/SettingPage.css"

const SettingPage = ({ isMusicPlaying, setIsMusicPlaying }) => {
    const [user, setUser] = useState({ name: '', characterImage: null });

    // 음악 토글의 시각적 상태를 관리하는 state
    const [isMusicToggleOn, setIsMusicToggleOn] = useState(false);

    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"));
        if (profile) {
            setUser({
                name: profile.nickname || '익명',
                characterImage: profile.characterImgUrl || '/assets/characters/stone.png'
            });
        }
        setIsMusicToggleOn(isMusicPlaying);
    }, [isMusicPlaying]);

    const handleBackgroundMusicToggle = (newToggleState) => {
        // 토글의 시각적 상태가 변경되면 isMusicPlaying 상태를 반대로 설정
        setIsMusicPlaying(newToggleState);
        setIsMusicToggleOn(newToggleState); // 로컬 상태 업데이트
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
          <Toggle onToggle={handleBackgroundMusicToggle} isOn={isMusicToggleOn}/>
        </div>

        <div className='option-item option-night'>
          <SunIcon className='icon'/>
          <div className='option-night-text'>
            <span>자동 낮밤</span>
            <p>시간에 따라 자동으로 모드가 변경 됩니다.</p>
          </div>
        </div>
      </div>

      <div className='button-group'>
        <Button text='수정'  className="setting-button" onClick={() => console.log("수정 버튼을 클릭하였습니다")}/>
        <Button text="저장"  className="setting-button" onClick={() => console.log("저장 버튼을 클릭하였습니다")}/>
      </div>
      <BottomNav/>
    </div>
  )
}

export default SettingPage;