import React, { useState } from 'react';
import BottomNav from '../components/common/BottomNav';
import Button from '../components/common/Button';
import Toggle from '../components/common/Toggle';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from '../api/instance';
import "../styles/PostCreatePage.css";

const PostCreatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const treeId = location.state?.treeId;  

  const today = new Date().toISOString().split('T')[0];
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSave = async () => {
    if (!treeId) {
      alert("트리 정보가 없습니다. 다시 시도해주세요.");
      return;
    }

    const postData = {
      tree_id: treeId, // 수정 완료
      content: content,
      is_private: isPrivate,
    };
    
    try {
      const res = await axios.post("/posts/posts", postData);
      console.log("저장 성공:", res.data);

      alert("저장되었습니다!");
      navigate("/tree");
    } catch (err) {
      console.error("저장 실패:", err);
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

        <div className='footer'>
          <div className='toggle'>
            <Toggle onToggle={setIsPrivate} />
            <span className='toggle-text'>비공개</span>
          </div>
          <Button 
            className='custom-button post-create-save-btn' 
            onClick={handleSave} 
            text="저장" 
          />
        </div>
      </div>
      <BottomNav/>
    </div>
  )
}

export default PostCreatePage;
