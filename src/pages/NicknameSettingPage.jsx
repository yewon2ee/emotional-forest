
import React from 'react'
import Input from "../components/common/Input";
import Header from '../components/common/Header';


const NicknameSettingPage = () => {
  //useState 는 리액트에 이값 바꾸면 화면도 바꿔주랑 
  const [nickname, setNickname] = useState("");

  return (
    <div>
      <Header
        title='숲 주민 등록'
        showBack={false}
        showEdit={false}
      />
   
      <h2>닉네임 설정</h2>
      <Input
        value={nickname}
        onChange={(e) => setNickname(e.target.value)} //걍 람다함수 감성인듯 연습해2보장 근데 나중에 
        placeholder="닉네임을 입력하세요"
      />
    </div>
  )
};

export default NicknameSettingPage;
