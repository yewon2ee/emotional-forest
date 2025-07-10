import React from 'react';

const LeafItem = ({ post, onClick }) => {
  // 20글자까지만 미리보기 (원하면 숫자 조정) -> 삼항 연산자 사용
  // 글자수가 20글자보다 길면 true -> ... , 아니면 false -> 내용 보여줌
  const preview =
    post.content.length > 20
      ? `${post.content.slice(0, 20)}…` //20번째 전까지 문자열을 자름
      : post.content;

  return (
    <div className="post-list" onClick={onClick}>
      <div className="post">
        {preview}
      </div>
    </div>
  );
};

export default LeafItem;