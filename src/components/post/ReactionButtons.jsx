// 좋아요 / cheer 리액션 버튼
import React, {useState} from 'react';

const ReactionButtons = ({ onLike, onCheer }) => {
    // 각 버튼의 상태를 useState로 관리 
    const [likes, setLikes] = useState(0);
    const [cheers, setCheers] = useState(0);

    const [liked, setLiked] = useState(false);
    const [cheered, setCheered] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      onLike?.();
    } else {
      setLikes(likes - 1);
    }
    setLiked(!liked);
  };

  const handleCheer = () => {
    if (!cheered) {
      setCheers(cheers + 1);
      onCheer?.();
    } else {
      setCheers(cheers - 1);
    }
    setCheered(!cheered);
  };
  
    return (
      <div className="reaction-buttons">
        <button className="like-btn" onClick={handleLike} >LIKE {likes}</button>
        <button className="cheer-btn" onClick={handleCheer} >CHEER {cheers}</button>
      </div>
    );
  };
  
  export default ReactionButtons;