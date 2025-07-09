import React from "react";
import "../styles/IntroPage.css";
import { useNavigate } from "react-router-dom";

const IntroPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      // ✅ 회원정보 없으면 캐릭터 세팅 페이지로 이동
      console.log("회원정보 없음 → 캐릭터 세팅 페이지로 이동");
      navigate("/profile/character");
    } else {
      // ✅ 회원정보 있으면 홈으로 이동
      console.log("회원정보 있음 → 홈으로 이동");
      navigate("/home");
    }
  };

  return (
    <div className="intro-container">
      <div className="overlay">
        <img src="/assets/logo/logo.png" alt="로고" className="intro-logo" />
        <p className="intro-subtitle">
          공간 위에 남겨진
          <br />
          감정의 발자국
        </p>
        <button className="start-btn" onClick={handleStartClick}>
          시작하기
        </button>
      </div>
    </div>
  );
};

export default IntroPage;
