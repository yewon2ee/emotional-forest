import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileSettingPage.css';
import '../styles/NicknameSettingPage.css';
import instance from '../api/instance';

const NicknameSettingPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [characterImg, setCharacterImg] = useState("");

  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    if (profile && profile.characterImgUrl) {
      setCharacterImg(profile.characterImgUrl);
    }
  }, []);

  const handleSubmit = async () => {
    if (nickname.trim() === "") {
      alert("닉네임을 입력해보자!");
      return;
    }

    const profile = JSON.parse(localStorage.getItem("profile")) || {};

    const data = {
      name: nickname,
      profile_character_id: profile.characterId,
    };

    try {
      const response = await instance.post("/users/signup", data);
      console.log("✅ 회원가입 응답:", response);

      const userId = response.data?.user_id;
      if (!userId) {
        throw new Error("응답에서 user_id를 찾을 수 없습니다.");
      }

      localStorage.setItem("userId", userId);
      profile.nickname = nickname;
      profile.userId = userId;
      localStorage.setItem("profile", JSON.stringify(profile));

      alert("프로필이 생성되었습니다! 이제 감정의 숲을 즐겨보세요 🌳");
      navigate("/home");
    } catch (error) {
      console.error("❌ 등록 실패:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="profile-container">
      <h2 className="nickname-title">🌿 숲 주민 등록</h2>
      <div className="card nickname-card">
        {characterImg && (
          <img src={characterImg} alt="선택된 캐릭터" className="character-img" />
        )}
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
