import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import Header from '../components/common/Header';
import "../styles/MyPage.css"

const dummyTrees = [
  { id: 1, image: "/assets/tree_objects/autumn.png", className: "tree-pos-1" },
  { id: 2, image: "/assets/tree_objects/spring.png", className: "tree-pos-2" },
  { id: 3, image: "/assets/tree_objects/summer.png", className: "tree-pos-3" },
  { id: 4, image: "/assets/tree_objects/winter.png", className: "tree-pos-4" },
];

const initialStats = {
  treeCount: 66,
  likeCount: 201,
  cheerCount: 88
};

const MyPage = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(initialStats);

  const handleTreeClick = (id) => {
    navigate(`/post/${id}`)
    console.log(`클릭한 나무의 아이디는 : ${id}`);
  };

  useEffect(() => {
    // API 연동 시 작성
  }, []);

  return (
    <div className='mypage'>
      <Header title='my forest' />

      <div className='island-area'>
        <img src='/assets/etc/grass.png' alt="잔디섬" className='island-img' />

        {dummyTrees.map(tree => (
          <img
            key={tree.id}
            src={tree.image}
            alt={`tree-${tree.id}`}
            className={`tree-img ${tree.className}`}
            onClick={() => handleTreeClick(tree.id)}
          />
        ))}
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
