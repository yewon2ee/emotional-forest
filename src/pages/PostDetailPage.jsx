import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PostContent from '../components/post/PostContent';
import ReactionButtons from '../components/post/ReactionButtons';
import BottomNav from "../components/common/BottomNav";
import Header from '../components/common/Header';
import axios from "../api/instance";
import "../styles/PostDetailPage.css";

const PostDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // 로컬에서 닉네임과 위치 불러오게함
  const profile = JSON.parse(localStorage.getItem("profile")) || {};
  const nickname = profile.nickname || "알 수 없음";
  const location = "인하대학교"; //위치는 고정으로 해둠

  const fetchPostDetail = async () => {
    try {
      const res = await axios.get (`/posts/posts/${id}`);
      console.log("글 상세 조회 성공:", res.data);

      const mappedPost = {
        id: res.data.post_id,
        content: res.data.content,
        likes: res.data.like_count,
        cheers: res.data.cheer_count,
        date: new Date(res.data.created_at).toLocaleDateString(), //포맷팅 해줘야함 예를 들어 2025-07-07 처럼 보여지기 위해서 
        /*
        nickname: `User ${res.data.user_id}`, //닉네임이 없어서 id 값으로 대체
        location: "인하대학교", //명세서에 위치가 없어서 임의로 고정
        */
        characterImage: res.data.profile_character
      };

      setPost(mappedPost);
    } catch (err) {
      console.error("상세 글 조회 실패:", err);
    }
  };

  //useEffect : 렌더링 후 백엔드에서 데이터 가져오게 함
  // 의존성 배열에 id 값을 넣음 -> 값이 바뀔때마다 useEffect 다시 실행
  useEffect(() =>{
    fetchPostDetail();
  }, [id]);

  if (!post) return <div>해당 글을 찾을 수 없습니다.</div>;

  const handleLike = () => console.log("Like 버튼 누름");
  const handleCheer = () => console.log("Cheer 버튼 누름");

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
          <span>{location}</span>
        </div>

      <div className='post-content-area'>
        <PostContent nickname={nickname} content={post.content} />

        <div className='post-btn'>
          <ReactionButtons onLike={handleLike} onCheer={handleCheer} />
        </div>
      </div>

      <BottomNav/>
    </div>
  );
};

export default PostDetailPage;