import React from 'react'
import Header from '../components/common/Header';

const ProfileSettingPage = () => {
  return (
    <div>
      {/*header-title만 적용됨*/}
      <Header
        title='숲 주민 등록'
        showBack={false}
        showEdit = {false}
      />
      <div>
        프로필 시작 페이지 
      </div>
    </div>
  )
}

export default ProfileSettingPage;
