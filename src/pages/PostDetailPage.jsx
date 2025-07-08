import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostContent from '../components/post/PostContent';
import ReactionButtons from '../components/post/ReactionButtons';
import BottomNav from "../components/common/BottomNav";
import Header from '../components/common/Header';
import "../styles/PostDetailPage.css";

const dummyPosts = [
  { id: 1, 
    content: "나는 오늘 개발만 했다", 
    likes: 3, 
    date: "2025-07-07",
    nickname: "돌맹이",
    location: "인하대학교",
    characterImage: "/assets/characters/stone.png"
  },
  { id: 2, 
    content: "해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다.", 
    likes: 10, 
    date: "2025-07-05",
    nickname: "돌덩이",
    location: "인하대학교 하이테크",
    characterImage: "/assets/characters/stone.png"
  },
  { id: 3, 
    content: "끝나면 진짜 방학을 즐겨야지", 
    likes: 5, 
    date: "2025-07-06",
    nickname: "돌맹",
    location: "인하대학교 5호관",
    characterImage: "/assets/characters/stone.png"
  }
];

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = dummyPosts.find(p => p.id === parseInt(id));

  if (!post) return <div>해당 글을 찾을 수 없습니다.</div>;

  const handleLike = () => alert("Like 버튼 누름");
  const handleCheer = () => alert("Cheer 버튼 누름");

  return (
    <div className='post-detail-page'>
      <Header
        showBack={true}
        showEdit={true}
        onBackClick={() => navigate(-1)}
        onEditClick={() => navigate("/post/create")}
      />

      <div className='post-header'>
        <img src={post.characterImage} alt="캐릭터" className='post-charactr' />
      
      </div>
      <div className='post-data-area'>
          <span>{post.date}</span>
          <span>📍</span>
          <span>{post.location}</span>
        </div>

      <div className='post-content-area'>
        <PostContent nickname={post.nickname} content={post.content} />

        <div className='post-btn'>
          <ReactionButtons onLike={handleLike} onCheer={handleCheer} />
        </div>
      </div>

      <BottomNav/>
    </div>
  );
};

export default PostDetailPage;
