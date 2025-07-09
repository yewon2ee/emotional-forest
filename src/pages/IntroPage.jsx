import React, { useEffect } from "react";
import "../styles/IntroPage.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/instance";

const IntroPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const initUser = async () => {
      let userId = localStorage.getItem("userId");
      if (!userId) {
        // 서버에 user 생성 요청
        try {
          const res = await axios.post("/users/signup", {
            avatar: "sunflower",
            name: "익명의 토끼",
          });
          const { user_id, avatar, name } = res.data.data;

          // 저장
          localStorage.setItem("userId", user_id);
          localStorage.setItem("profile", JSON.stringify({ avatar, name }));
          navigate("/profile");
        } catch (err) {
          console.error("유저 생성 실패", err);
        }
      } else {
        navigate("/home");
      }
    };
    initUser();
  }, [navigate]);

  return (
    <div className="intro-container">
      <div className="overlay">
        <img src="/assets/logo/logo.png" alt="로고" className="intro-logo" />
        <p className="intro-subtitle">
          공간 위에 남겨진
          <br />
          감정의 발자국
        </p>
      </div>
    </div>
  );
};

export default IntroPage;
