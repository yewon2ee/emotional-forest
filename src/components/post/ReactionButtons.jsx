// 좋아요 / cheer 리액션 버튼
import React, {useState} from 'react';

const ReactionButtons = ({ onLike, onCheer }) => {
    // 각 버튼의 상태를 useState로 관리 
    const [likes, setLikes] = useState(0);
    const [cheers, setCheers] = useState(0);
  
    const handleLike = () => {
      setLikes(likes + 1);
      onLike(); // 부모에게도 알림
    };
  
    const handleCheer = () => {
      setCheers(cheers + 1);
      onCheer(); // 부모에게도 알림
    };
  
    return (
      <div className="reaction-buttons">
        <button onClick={handleLike}>👍 {likes}</button>
        <button onClick={handleCheer}>💙 {cheers}</button>
      </div>
    );
  };
  
  export default ReactionButtons;