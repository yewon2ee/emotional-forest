//글 상세 내용
import React from 'react';
//닉네임, 작성 날짜, 내용 

const PostContent = ({nickname,date,content}) => {
  return (
    <div className = "post-content">
        <p className = "post-nickname">{nickname}</p>
        <p className = "post-date">{date}</p>
        <p className = "post-content">{content}</p>
    </div>
  )
}

export default PostContent;
