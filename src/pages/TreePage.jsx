import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TreeImage from '../components/tree/TreeImage';
import LeafList from '../components/tree/LeafList';
import Header from '../components/common/Header';
import '../styles/TreePage.css';
import '../styles/TreeImage.css';
import '../styles/Header.css';
import axios from '../api/instance';

const TreePage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // 전체 포스트
  const fetchPosts = async () => {
    try {
      const res = await axios.get('/posts/posts');
      console.log("기록 조회 성공:", res.data)
      setPosts(res.data);
    } catch (err) {
      console.error('전체 기록 조회 실패', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAppleClick = () => {
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    navigate(`/post/${randomPost.id}`);
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