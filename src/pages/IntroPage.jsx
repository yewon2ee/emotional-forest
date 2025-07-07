import React from "react";
import "../styles/IntroPage.css";
import Button from "../components/common/Button";
import {useNavigate } from "react-router-dom";

const IntroPage = () => {

  const navigate = useNavigate ();

  const handleStartClick = () => {
    const profile = localStorage.getItem("profile"); //저장된 키명에 맞춰서 수정해야함
    if(profile){
      navigate("/home");
    }else {
      navigate("/profile")
    }
  }

  return (
    <div className="intro-container">
      <div className="overlay">
        <img src="/assets/logo/logo.png" alt="로고" className="intro-logo" />
        <p className="intro-subtitle">공간 위에 남겨진<br/>감정의 발자국</p>
        <Button text="시작하기" onClick={handleStartClick} />
      </div>
    </div>
  );
};

export default IntroPage;
