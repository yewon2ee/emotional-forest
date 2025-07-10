import React from 'react'
import "../styles/ProfileSettingPage.css";
import { useNavigate } from 'react-router-dom';

//프로필 세팅 페이지 
// 중간 허브 페이지여서 클릭시 캐릭터 세팅 페이지로 이동됨
// 백엔드 요청할 거 없음 네비게이트만 수행

const ProfileSettingPage = () => {
  const navigate = useNavigate ();

  const handleProfileClick = () => {
    navigate("/profile/character");
  };
  return (
    <div className="profile-container">
      <h2>🌿 숲 주민 등록</h2>
      <div className="card">
        <div className="profile-select" onClick={handleProfileClick}>
          눌러서<br/>프로필을<br/>골라보자!
        </div>
        <div className="dashed-line"></div>
      </div>
    </div>
  );
};

export default ProfileSettingPage;
