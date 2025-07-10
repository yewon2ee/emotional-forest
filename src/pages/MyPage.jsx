import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import Header from '../components/common/Header';
import axios from '../api/instance';
import "../styles/MyPage.css"

const MyPage = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
        treeCount: 0,
        likeCount: 0,
        cheerCount: 0
    });

  const [myPosts, setMyPosts] = useState([]);

  const treeImages = [
    "/assets/tree_objects/autumn.png",
    "/assets/tree_objects/spring.png",
    "/assets/tree_objects/summer.png",
    "/assets/tree_objects/winter.png",
  ];

  const treePositions = [
    "tree-pos-1", "tree-pos-2", "tree-pos-3", "tree-pos-4"
  ];

  const handleTreeClick = (postId) => {
    navigate(`/post/${postId}`)
    console.log(`클릭한 나무의 아이디는 : ${postId}`);
  };

  useEffect(() => {
    const fetchMyPageData = async () => {
      try {
        const userId = localStorage.getItem("userId");
          if (!userId) {
            alert("로그인 정보가 없어 Intro 페이지로 이동합니다.");
            navigate("/");
            return;
          }

          // 유저 본인의 게시물 목록을 가져옴
          const res = await axios.get(`/myforest/`, {
            headers: {
              "X-USER-ID": userId
            }
          });
          console.log("마이페이지: 사용자 본인의 게시물 조회 성공:", res.data);

        const summary = res.data.summary;
        setStats({
          treeCount: summary.total_post_count,
          likeCount: summary.total_like_count,
          cheerCount: summary.total_cheer_count,
        });

        // 📌 tree → posts 배열
        const posts = res.data.trees[0]?.posts || [];
        setMyPosts(posts);
      } catch (err) {
        console.error('❌ MyPage 데이터 조회 실패', err);
        alert('내 정보를 불러오지 못했습니다. 다시 시도해주세요.');
      }
    };

    fetchMyPageData();
  }, [navigate]);


  return (
    <div className='mypage'>
      <Header title='my forest'/>

      <div className='island-area'>
        <img src='/assets/etc/grass.png' alt="잔디섬" className='island-img' />
                {[0,1,2,3].map((_, index) => {
                  const postId = myPosts[index];

                  return(
                    <img
                        key={index} 
                        src={treeImages[index % treeImages.length]}
                        alt={`tree-${index}`}
                        className={`tree-img ${treePositions[index % treePositions.length]}`}
                        onClick={() => {
                          if (postId) {
                            handleTreeClick(postId);
                          }
                          else{
                            alert("글을 작성해보세요");
                          }
                        }}
                    />  
                  );
                    
})}
      </div>
      <div className='stat-area'>
        <div className='stat-block'>
          <p className='stats-number'>{stats.treeCount}</p>
          <p className='stats-text'>total tree count</p>
        </div>
        <div className='stat-block'>
          <p className='stats-number'>{stats.likeCount}</p>
          <p className='stats-text'>total like count</p>
        </div>
        <div className='stat-block'>
          <p className='stats-number'>{stats.cheerCount}</p>
          <p className='stats-text'>total cheer count</p>
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default MyPage;
