import React from "react";
import "../styles/IntroPage.css";
import { useNavigate } from "react-router-dom";

const IntroPage = ({ setIsMusicPlaying }) => {
  const navigate = useNavigate();

    const handleStartClick = () => {
        console.log('시작하기 버튼 클릭됨');
        const backgroundMusic = document.getElementById('backgroundMusic');
        if (backgroundMusic) {
            backgroundMusic.play().catch(error => console.error("음악 재생 오류:", error));
        }
        setIsMusicPlaying(true); // 음악 상태를 true로 변경

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
      <audio id="backgroundMusic" src="/background_music.mp3" loop style={{ display: 'none' }} />
    </div>
  );
};

export default IntroPage;
