import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/TreePage.css';

const LeafList = ({ posts }) => {
  const navigate = useNavigate(); // navigate 훅 추가

  return (
    <div className="card-container">
      <div className="sort-btn"></div>
      {posts.map(post => (
        <div 
          key={post.id} 
          className="leaf-item"
          onClick={() => navigate(`/post/${post.id}`)} // 클릭 시 이동
        >
          <img src="/assets/fruit/apple.png" alt="leaf" className="leaf-icon"/>
          <span>{post.content.length > 20 ? post.content.slice(0, 20) + "…" : post.content}</span>
        </div>
      ))}
    </div>
  );
};

export default LeafList;
