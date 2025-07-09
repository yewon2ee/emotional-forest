//라우터 설정
//리액트 라우터 돔 라이브러리에서 세가지 기능을 가져온다는 의미. 세부사항은 나중에
import React, {useState, useEffect} from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
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

// 여기서는 왜 리액트 임포트? 그리고 함수 왜 이런 모양으로 쓰는게 더 많이 쓰이는지 
// rafce
const AppRoutes = () => {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false); //보안상 처음부터 음악 설정은 안됨
    const [audio] = useState(new Audio('/background_music.mp3'));

    useEffect(() => {
        audio.loop = true; // 반복 재생 설정
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
          <Route path="/" element={<IntroPage setIsMusicPlaying={setIsMusicPlaying} />} />
          <Route path="/profile/character" element={<CharacterSettingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/my" element={<MyPage />} />
          <Route path="/profile/nickname" element={<NicknameSettingPage />} />
          <Route path="/post/create" element={<PostCreatePage />} />
          <Route path="/post/:postId" element={<PostDetailPage  />} />
          <Route path="/profile" element={<ProfileSettingPage />} />
          <Route path="/setting" element={<SettingPage isMusicPlaying={isMusicPlaying} setIsMusicPlaying={setIsMusicPlaying}/>} />
          <Route path="/tree" element={<TreePage />} />
        </Routes>
      </BrowserRouter>
    );
  };
export default AppRoutes;
