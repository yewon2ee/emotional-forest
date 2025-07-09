import React, { useState, useEffect } from 'react';
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
  const [tree, setTree] = useState(null);
  const navigate = useNavigate();

  console.log("🌳 TreePage 렌더링됨");

  const fetchTree = async () => {
    try {
      const res = await axios.get('/trees');
      console.log("✅ 트리 조회 성공:", res.data);
      setTree(res.data[0]);
    } catch (err) {
      console.error('❌ 트리 조회 실패', err);
    }
  };

  const fetchPosts = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log("📌 현재 userId (localStorage):", userId);

      if (!userId) {
        console.warn("⚠️ userId가 없습니다. IntroPage에서 생성 후 TreePage로 와야 합니다.");
        alert("로그인 정보가 없어 Intro 페이지로 이동합니다.");
        navigate("/");
        return;
      }

      const res = await axios.get('/posts/posts', {
        headers: {
          "X-USER-ID": userId
        }
      });

      console.log("✅ 전체 기록 조회 성공:", res.data);
      setPosts(res.data);
    } catch (err) {
      console.error('❌ 전체 기록 조회 실패', err);
      if (err.response) {
        console.error("🔴 서버 응답 상태:", err.response.status);
        console.error("🔴 서버 응답 데이터:", err.response.data);
      }
      alert("게시글을 불러오지 못했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    fetchTree();
    fetchPosts();
  }, []);

  const handleAppleClick = () => {
    if (posts.length === 0) {
      alert("게시물이 없습니다.");
      return;
    }
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    console.log("🍎 사과 클릭 - randomPost:", randomPost);
  
    if (!randomPost || !randomPost.post_id) {
      console.error("❌ randomPost 또는 post_id가 없습니다.", randomPost);
      alert("게시글 정보를 불러오지 못했습니다.");
      return;
    }
  
    navigate(`/post/${randomPost.post_id}`);
  };
  

  const handleSort = (type) => {
    let sorted;
    if (type === "latest") {
      sorted = [...posts].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    } else if (type === "oldest") {
      sorted = [...posts].sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    } else if (type === "likes") {
      sorted = [...posts].sort((a, b) => b.like_count - a.like_count);
    }
    setPosts(sorted);
  };

  return (
    <div className="tree-page">
      <Header
        showBack={true}
        showEdit={true}
        onBackClick={() => navigate(-1)}
        onEditClick={() => navigate("/post/create", { state: { treeId: tree?.tree_id } })}
      />

      {tree ? (
        <TreeImage
          onAppleClick={handleAppleClick}
          treeId={tree.tree_id}
          latitude={tree.latitude}
          longitude={tree.longitude}
        />
      ) : (
        <p>트리 불러오는 중...</p>
      )}

      <div className="sort-buttons">
        <button onClick={() => handleSort("latest")}>최신순</button>
        <button onClick={() => handleSort("oldest")}>오래된순</button>
        <button onClick={() => handleSort("likes")}>공감순</button>
      </div>

      <div className="leaf-list-container">
        <LeafList posts={posts} treeId={tree?.tree_id} />
      </div>
    </div>
  );
};

export default TreePage;
