import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProfileSettingPage.css';
import '../styles/NicknameSettingPage.css';
import instance from '../api/instance'; // axios instance import

// 로컬에서 캐릭터 정보 불러오기
// → 닉네임 입력
// → 백엔드에 회원가입 POST 요청
// → user_id 받아서 로컬 profile 업데이트
// → 홈으로 이동


const NicknameSettingPage = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [characterImg, setCharacterImg] = useState("");

  // 📝 페이지 로드 시 로컬스토리지에서 선택된 캐릭터 이미지 불러오기
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

    // POST 요청 데이터 준비
    const data = {
      name: nickname,
      profile_character_id: profile.characterId,
    };

    try {
      const response = await instance.post("/users/signup", data); // 실제 endpoint로 수정

      console.log("등록 성공:", response.data);

      // 로컬스토리지에 nickname 추가 저장
      profile.nickname = nickname;
      profile.userId = response.data.data.user_id; // 백에서 받은 user_id 저장
      localStorage.setItem("profile", JSON.stringify(profile));

      alert("프로필이 생성되었습니다! 이제 감정의 숲을 즐겨보세요 🌳");
      navigate("/home");
    } catch (error) {
      console.error("등록 실패:", error);
      alert("오류가 발생했습니다. 다시 시도해주세요.");
    }
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
