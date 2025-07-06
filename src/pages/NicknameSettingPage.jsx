import React from 'react'
import Header from '../components/common/Header';

const NicknameSettingPage = () => {
  return (
    <div>
      <Header
        title='숲 주민 등록'
        showBack={false}
        showEdit={false}
      />
      <div>
        닉네임 설정
      </div>
    </div>
  )
}

export default NicknameSettingPage;
