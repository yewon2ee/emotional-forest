import React, {useState} from 'react'
import BottomNav from '../components/common/BottomNav';
import Button from '../components/common/Button';
import Toggle from '../components/common/Toggle';
import { useNavigate } from 'react-router-dom';
import "../styles/PostCreatePage.css"
const PostCreatePage = () => {
  const navigate = useNavigate();

  const today = new Date().toISOString().split('T')[0];
  const [content, setContent] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleSave = () => {
    if (!content.trim()) {
      alert('내용을 입력해주세요!');
      return;
    }
    navigate('/home');
  };

  return (
    <div className='post-create-page'>
      <div className='create-header'>
        <h3>🌿</h3>
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
            <Toggle onToggle={setIsPrivate}></Toggle>
            <span>비공개</span>
          </div>
          <Button className='btn' text='저장' onClick={handleSave}/>
        </div>
      </div>
      <BottomNav/>
    </div>
  )
}

export default PostCreatePage;