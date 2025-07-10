import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../api/instance';
import Header from '../components/common/Header';
import '../styles/PostDetailPage.css';

const PostDetailPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [liked, setLiked] = useState(false);
  const [cheered, setCheered] = useState(false);

  const fetchPost = async () => {
    const userId = localStorage.getItem("userId");
    if (!postId || postId === "undefined") {
      alert("잘못된 게시글 접근입니다.");
      navigate("/");
      return;
    }

    try {
      const res = await axios.get(`/posts/posts/${postId}`, {
        headers: { "X-USER-ID": userId }
      });
      setPost(res.data);
    } catch (err) {
      console.error(" 상세 글 조회 실패", err);
      alert("게시글을 불러오지 못했습니다. 다시 시도해주세요.");
    }
  };

  const handleLike = async () => {
    if (liked) return;
    try {
      await axios.post(`/posts/posts/${postId}/like`);
      setPost({ ...post, like_count: post.like_count + 1 });
      setLiked(true);
    } catch (err) {
      console.error(" 좋아요 실패", err);
    }
  };

  const handleCheer = async () => {
    if (cheered) return;
    try {
      await axios.post(`/posts/posts/${postId}/cheer`);
      setPost({ ...post, cheer_count: post.cheer_count + 1 });
      setCheered(true);
    } catch (err) {
      console.error(" 응원 실패", err);
    }
  };

  useEffect(() => { fetchPost(); }, [postId]);

  if (!post) return <div>게시글 로딩중...</div>;

  return (
    <div className="post-detail-page">
      <Header
        showBack={true}
        onBackClick={() => navigate(-1)}
      />

      <div className="post-header">
        <img src={post.user_image_url || "/default.png"} alt="character" className="post-character-img" />
        <div className="post-date-location">
          <span>{post.created_at.split('T')[0]}</span>
          <span>인하대학교</span>
        </div>
        
      </div>
      <div className="post-nickname">{post.user_name}</div>
      <div className="post-content">{post.content}</div>

      <div className="reaction-buttons">
        <button onClick={handleLike} disabled={liked}>LIKE {post.like_count}</button>
        <button onClick={handleCheer} disabled={cheered}>CHEER {post.cheer_count}</button>
      </div>
    </div>
  );
};

export default PostDetailPage;