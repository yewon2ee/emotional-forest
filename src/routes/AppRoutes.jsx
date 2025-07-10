// AppRoutes.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage";
import CharacterSettingPage from "../pages/CharacterSettingPage";
import MyPage from "../pages/MyPage";
import NicknameSettingPage from "../pages/NicknameSettingPage";
import PostCreatePage from "../pages/PostCreatePage";
import PostDetailPage from "../pages/PostDetailPage";
import ProfileSettingPage from "../pages/ProfileSettingPage";
import SettingPage from "../pages/SettingPage";
import TreePage from "../pages/TreePage";

const AppRoutes = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio] = useState(new Audio('/background_music.mp3'));

  useEffect(() => {
    audio.loop = true;
    if (isMusicPlaying) {
      audio.play().catch(error => console.error("음악 재생 오류:", error));
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isMusicPlaying, audio]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage setIsMusicPlaying={setIsMusicPlaying} audio={audio} />} />
        <Route path="/profile/character" element={<CharacterSettingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/profile/nickname" element={<NicknameSettingPage />} />
        <Route path="/post/create" element={<PostCreatePage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
        <Route path="/profile" element={<ProfileSettingPage />} />
        <Route path="/setting" element={<SettingPage isMusicPlaying={isMusicPlaying} setIsMusicPlaying={setIsMusicPlaying} audio={audio} />} />
        <Route path="/tree" element={<TreePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
