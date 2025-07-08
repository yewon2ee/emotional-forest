import React from 'react';

const PostContent = ({ nickname, content }) => {
  return (
    <div className="post-content-box">
      <div className="post-nickname">{nickname}</div>
      <div className="post-content">{content}</div>
    </div>
  );
};

export default PostContent;
