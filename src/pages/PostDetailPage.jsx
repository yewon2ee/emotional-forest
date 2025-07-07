import React from 'react';
import { useParams } from 'react-router-dom';

const dummyPosts = [
  { id: 1, content: "나는 오늘 개발만 했다", likes: 3, date: "2025-07-07" },
  { id: 2, content: "해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다. 해커톤을 무사히 끝내고 싶다.", likes: 10, date: "2025-07-05" },
  { id: 3, content: "끝나면 진짜 방학을 즐겨야지", likes: 5, date: "2025-07-06" }
];

const PostDetailPage = () => {
  const { id } = useParams();
  const post = dummyPosts.find(p => p.id === parseInt(id));

  if (!post) return <div>해당 글을 찾을 수 없습니다.</div>;

  return (
    <div>
      <h1>글 상세보기</h1>
      <p>{post.content}</p>
      <p>공감: {post.likes}</p>
      <p>작성일: {post.date}</p>
    </div>
  );
};

export default PostDetailPage;
