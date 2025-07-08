import React from 'react';
import { FaThumbsUp, FaRegSmile } from 'react-icons/fa';

const ReactionButtons = ({ onLike, onCheer }) => {
  return (
    <div className="reaction-buttons">
      <button onClick={onLike}><FaThumbsUp /> LIKE</button>
      <button onClick={onCheer}><FaRegSmile /> CHEER</button>
    </div>
  );
};

export default ReactionButtons;
