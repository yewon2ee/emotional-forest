import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage"
import CharacterSettingPage from "../pages/CharacterSettingPage";
import NicknameSettingPage from "../pages/NicknameSettingPage";
import ProfileSettingPage from "../pages/ProfileSettingPage"
import TreePage from "../pages/TreePage";
import PostDetailPage from "../pages/PostDetailPage";
import PostCreatePage from "../pages/PostCreatePage";
import MyPage from "../pages/MyPage";
import SettingPage from "../pages/SettingPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/character" element={<CharacterSettingPage />} />
        <Route path="/profile/nickname" element={<NicknameSettingPage />} />
        <Route path="/profile" element={<ProfileSettingPage />} />
        <Route path="/tree" element={<TreePage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
        <Route path="/post/create" element={<PostCreatePage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
