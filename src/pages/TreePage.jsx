import React from 'react'
import BottomNav from '../components/common/BottomNav';
import Header from '../components/common/Header';

const TreePage = () => {
  return (
    <div>
      <Header
        title=''
        showBack={true}
        showEdit={true}
      />
      <div>
        나무 페이지 입니다
      </div>
      <BottomNav/>
    </div>
  )
}

export default TreePage;
