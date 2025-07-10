import React, { useState, useEffect } from 'react';
import BottomNav from '../components/common/BottomNav';
import Toggle from '../components/common/Toggle';
import { useNavigate } from 'react-router-dom';
import axios from '../api/instance';
import "../styles/PostCreatePage.css";

const PostCreatePage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    const fetchTree = async () => {
      console.log(" fetchTree 실행됨");

      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("로그인 정보가 없습니다. 다시 시도해주세요.");
        navigate("/");
        return;
      }
  
      try {
        const res = await axios.get('/trees/');
        console.log(" 글쓰기용 트리 조회 성공:", res.data);

        if (Array.isArray(res.data) && res.data.length > 0) {
          const tree = res.data[0];
          console.log(" 선택된 tree_id:", tree.tree_id);
          setTreeData(tree);
        } else {
          console.warn(" 트리 응답이 배열이 아님 또는 비어있음:", res.data);
          alert("트리 정보가 없습니다. 다시 시도해주세요.");
          navigate("/tree");
        }
      } catch (err) {
        console.error(" 트리 조회 실패:", err);
        alert("트리 정보를 불러올 수 없습니다.");
        navigate("/tree");
      }
    };

    fetchTree();
  }, [navigate]);

  const today = new Date().toISOString().split('T')[0];

  const handleSave = async () => {
    if (!treeData) {
      alert("트리 정보가 없습니다. 다시 시도해주세요.");
      return;
    }

    const userId = localStorage.getItem("userId");

    const postData = {
      tree_id: treeData.tree_id,
      content: content,
      post_latitude: treeData.latitude,
      post_longitude: treeData.longitude,
      is_private: isPrivate,
    };

    console.log(" 저장 요청 데이터:", postData);

    try {
      const res = await axios.post("/posts/posts", postData, {
        headers: {
          "X-USER-ID": userId,
        },
      });
      console.log(" 저장 성공:", res.data);
      alert("저장되었습니다!");
      navigate("/tree");
    } catch (err) {
      console.error(" 저장 실패:", err.response || err);
      alert("저장에 실패했습니다. 다시 시도해주세요.");
    }
  };
  return (
    <div className='post-create-page'>
      <img src="/assets/etc/leaf2.png" alt="leaf icon" className="leaf-icon" />
  
      <div className='create-header'>
        <div className='create-date-area'>
          <span>{today}</span>
          <span>인하대학교</span>
        </div>
  
        <textarea
          className="content-input"
          placeholder="이곳에서의 감정을 기록하세요"
          maxLength={100}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
  
        {/*  토글 + 저장 버튼 한 줄 배치 */}
        <div className='footer-buttons-container'>
          <div className='toggle-container'>
            <Toggle onToggle={setIsPrivate} />
            <span className='toggle-text'>비공개</span>
          </div>
  
          <button
            className='post-create-save-btn'
            onClick={handleSave}
          >
            저장
          </button>
        </div>
      </div>
  
      <BottomNav />
    </div>
  );
};

export default PostCreatePage;