import React from 'react'
import "../styles/ProfileSettingPage.css";
import { useNavigate } from 'react-router-dom';

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
