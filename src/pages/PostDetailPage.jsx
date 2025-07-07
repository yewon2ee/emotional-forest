import React, { useState, useEffect } from 'react';
import PostContent from '../components/post/PostContent';
import ReactionButtons from '../components/post/ReactionButtons';
import '../styles/PostDetailPage.css';


const PostDetailPage = () => {
  // 게시글 데이터 상태
  const [post, setPost] = useState(null);

  //  나중에 여기서 API 호출 예정
  useEffect(() => {
    // 예시 더미 데이터
    const dummyPost = {
      id: 1,
      nickname: '마동석냥이',
      date: '2025.07.03',
      content: '오늘 근로했어 밥 먹었지',
      location: '인하대학교'
      
    };
    setPost(dummyPost);

    // 실제로는
    // axios.get(`/api/post/${postId}`)
    //   .then(res => setPost(res.data))
    //   .catch(err => console.error(err));
  }, []);

  // 좋아요, cheer 버튼 콜백
  const handleLike = () => {
    console.log('Liked!');
  };

  const handleCheer = () => {
    console.log('Cheered!');
  };

  // 데이터 로딩 중
  if (!post) return <div>Loading...</div>;

  return (
    <div className="post-detail-page">
      <div className="post-header">
        <div className="post-date-location">
          <span>{post.date}</span>
          <span>{post.location}</span>
        </div>
        <h2 className="post-nickname">{post.nickname}</h2>
      </div>

      <PostContent
        nickname={post.nickname}
        date={post.date}
        content={post.content}
      />

      <ReactionButtons onLike={handleLike} onCheer={handleCheer} />
    </div>
  );
};

export default PostDetailPage;
