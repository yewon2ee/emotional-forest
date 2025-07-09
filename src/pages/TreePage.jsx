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
  const [tree, setTree] = useState(null); // 🔧 트리 하나만 가져온다고 가정
  const navigate = useNavigate();
  console.log("유저아이디:",localStorage.getItem("userId"));

  //  트리 조회 함수 추가
  const fetchTree = async () => {
    try {
      const res = await axios.get('/trees');
      console.log("트리 조회 성공:", res.data);
      setTree(res.data[0]); // 트리가 1개라면 [0]만 저장
    } catch (err) {
      console.error('트리 조회 실패', err);
    }
  };

  //  게시물 조회 함수 (트리 id 기반 필터링 예정)
  const fetchPosts = async () => {
    try {
      const userId = localStorage.getItem("userId"); // 수정: userId 가져오기
      const res = await axios.get('/posts/posts', {
        headers: {
          "X-USER-ID": userId // 수정: 요청 헤더에 userId 추가
        }
      });
      console.log("기록 조회 성공:", res.data);
      setPosts(res.data);
    } catch (err) {
      console.error('전체 기록 조회 실패', err);
    }
  };

  useEffect(() => {
    fetchTree(); //  트리 먼저 가져오기
    fetchPosts(); 
  }, []);

  const handleAppleClick = () => {
    if (posts.length === 0) {
      alert("게시물이 없습니다.");
      return;
    }
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
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
        onEditClick={() => navigate("/post/create", { state: { treeId: tree?.tree_id } })} // 수정: treeId state로 전달
      />

      {tree ? ( // 트리 데이터 로딩 후 렌더링
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
