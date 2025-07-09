import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/TreePage.css';

const LeafList = ({ posts, treeId }) => { //  treeId props 추가
  const navigate = useNavigate();

  // 해당 트리에 달린 posts만 필터링
  const filteredPosts = posts.filter(post => post.tree_id === treeId);

  return (
    <div className="card-container">
      {filteredPosts.length === 0 ? (
        <p>이 트리에 게시물이 없습니다.</p>
      ) : (
        filteredPosts.map(post => (
          <div 
            key={post.post_id}
            className="leaf-item"
            onClick={() => navigate(`/post/${post.post_id}`)}
          >
            
            <span>
              {post.content.length > 20 
                ? post.content.slice(0, 20) + "…" 
                : post.content}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default LeafList;
