import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TreeImage from '../components/tree/TreeImage';
import LeafList from '../components/tree/LeafList';
import Header from '../components/common/Header';
import '../styles/TreePage.css';
import '../styles/TreeImage.css';
import '../styles/Header.css';

const dummyPosts = [
  { id: 1, content: "나는 오늘 개발만 했다", likes: 3, date: "2025-07-07" },
  { id: 2, content: "해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다.", likes: 10, date: "2025-07-05" },
  { id: 3, content: "끝나면 진짜 방학을 즐겨야지", likes: 5, date: "2025-07-06" }
];

const TreePage = () => {
  const [posts, setPosts] = useState(dummyPosts);
  const navigate = useNavigate();

  const handleAppleClick = () => {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    alert(randomPost.content);
  };

  const handleSort = (type) => {
    let sorted;
    if (type === "latest") {
      sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (type === "oldest") {
      sorted = [...posts].sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (type === "likes") {
      sorted = [...posts].sort((a, b) => b.likes - a.likes);
    }
    setPosts(sorted);
  };

  return (
    <div className="tree-page">
      <Header
        showBack={true}
        showEdit={true}
        onBackClick={() => navigate(-1)} // 뒤로가기
        onEditClick={() => navigate("/post/create")} // 글 작성 페이지
      />

      <TreeImage onAppleClick={handleAppleClick} />

      <div className="sort-buttons">
        <button onClick={() => handleSort("latest")}>최신순</button>
        <button onClick={() => handleSort("oldest")}>오래된순</button>
        <button onClick={() => handleSort("likes")}>공감순</button>
      </div>

      <div className="leaf-list-container">
        <LeafList posts={posts} />
      </div>
    </div>
  );
};

export default TreePage;
