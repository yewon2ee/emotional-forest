import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileSettingPage.css'; // 기존 레이아웃 재사용
import '../styles/NicknameSettingPage.css'; // 별도 스타일 추가

const NicknameSettingPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [characterImg, setCharacterImg] = useState("");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile && profile.characterId) {
      const characterList = [
        { id: 1, img: "/assets/characters/happy_beginner.png" },
        { id: 2, img: "/assets/characters/stone.png" },
        { id: 3, img: "/assets/characters/kind_golem.png" },
        { id: 4, img: "/assets/characters/forest_keeper.png" },
        { id: 5, img: "/assets/characters/cat.png" },
        { id: 6, img: "/assets/characters/magician.png" },
        { id: 7, img: "/assets/characters/ginseng.png" },
        { id: 8, img: "/assets/characters/shark.png" },
        { id: 9, img: "/assets/characters/running_person.png" },
      ];
      const selected = characterList.find(c => c.id === profile.characterId);
      setCharacterImg(selected ? selected.img : "");
    }
  }, []);

  const handleSubmit = () => {
    if (nickname.trim() === "") {
      alert("닉네임을 입력해주세요!");
      return;
    }
    const profile = JSON.parse(localStorage.getItem("profile")) || {};
    profile.nickname = nickname;
    localStorage.setItem("profile", JSON.stringify(profile));


    alert("프로필이 생성되었습니다! 이제 감정의 숲을 즐겨보세요 🌳");
    navigate("/home");
  };

  return (
    <div className="profile-container">
      <h2>🌿 숲 주민 등록</h2>
      <div className="card nickname-card">
        {characterImg && <img src={characterImg} alt="선택된 캐릭터" className="character-img" />}
        <p className="nickname-title"></p>
        <input
          type="text"
          placeholder="이름을 정해보자!"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="nickname-input"
        />
      </div>
      <button onClick={handleSubmit} className="submit-btn">제출</button>
    </div>
    
  );
};

export default NicknameSettingPage;
