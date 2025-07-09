import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/instance';

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  console.log("📝 PostDetailPage 렌더링됨");
  console.log("🔎 상세조회 postId:", postId);

  const fetchPost = async () => {
    const userId = localStorage.getItem("userId");
    console.log("🔎 상세조회 userId:", userId);

    if (!postId || postId === "undefined") {
      console.error("❌ postId가 undefined입니다. navigate('/')");
      alert("잘못된 게시글 접근입니다.");
      navigate("/");
      return;
    }

    try {
      const res = await axios.get(`/posts/posts/${postId}`, {
        headers: {
          "X-USER-ID": userId
        }
      });
      console.log("✅ 상세 글 조회 성공:", res.data);
      setPost(res.data);
    } catch (err) {
      console.error("❌ 상세 글 조회 실패", err);
      if (err.response) {
        console.error("🔴 서버 응답 상태:", err.response.status);
        console.error("🔴 서버 응답 데이터:", err.response.data);
      }
      alert("게시글을 불러오지 못했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>게시글 로딩중...</div>;
  }

  return (
    <div>
      <h1>게시글 상세 페이지</h1>
      <p>작성자: {post.user_id}</p>
      <p>내용: {post.content}</p>
      <p>작성일: {post.created_at}</p>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  );
};

export default PostDetailPage;
