import React, {useState} from 'react';
import { FaThumbsUp, FaRegSmile } from 'react-icons/fa';

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
      <button onClick={handleLike}><FaThumbsUp /> LIKE {likes}</button>
      <button onClick={handleCheer}><FaRegSmile /> CHEER {cheers}</button>
    </div>
  );
};

export default ReactionButtons;
