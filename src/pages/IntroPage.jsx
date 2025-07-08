import React from "react";
import "../styles/IntroPage.css";
import Button from "../components/common/Button";
import {useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

//intropage- uuid 생성 후 로컬 스토리지 저장 -> 별도 api 호출 없음
//완료


const IntroPage = () => {

  const navigate = useNavigate ();

  const handleStartClick = () => {

    // UUID가 없으면 생성 후 저장
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("userId", userId);
    }
    // 프로필 존재 여부에 따라 분기
    const profile = localStorage.getItem("profile"); 
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
