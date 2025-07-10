import React, { useState, useEffect } from 'react';
import BottomNav from '../components/common/BottomNav';
import { PlayIcon, PauseIcon,ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import "../styles/SettingPage.css";

const SettingPage = ({ isMusicPlaying, setIsMusicPlaying, audio }) => {
  const [user, setUser] = useState({ name: '', characterImage: null });

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile) {
      setUser({
        name: profile.nickname || '익명',
        characterImage: profile.characterImgUrl || '/assets/characters/stone.png'
      });
    }
  }, []);

  const handleMusicToggle = () => {
    if (audio) {
      if (isMusicPlaying) {
        audio.pause();
        setIsMusicPlaying(false);
      } else {
        audio.play().catch(error => console.error("음악 재생 오류:", error));
        setIsMusicPlaying(true);
      }
    }
  };

  return (
    <div className='setting-page'>
      <div className='user-info'>
        <img
          src={user.characterImage}
          alt='캐릭터 이미지'
          className='character-img'
        />
        <p className='user-name'>{user.name}</p>
      </div>

      <div className="music-card">
        <div className="music-controller">
        <ChevronLeftIcon className="music-icon side-button" /> {/* 왼쪽 화살표 */}
          {isMusicPlaying ? (
            <PauseIcon className="music-icon play-button" onClick={handleMusicToggle} />
          ) : (
            <PlayIcon className="music-icon play-button" onClick={handleMusicToggle} />
          )}
          <ChevronRightIcon className="music-icon side-button" /> {/* 오른쪽 화살표 */}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SettingPage;
