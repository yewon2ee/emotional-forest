import React from 'react'
import Header from '../components/common/Header';

const CharacterSettingPage = () => {
  return (
    <div>
      {/*header-title만 적용됨*/}
      <Header
        title='캐릭터 설정'
        showBack={false}
        showEdit={false}
      />
      <div>
        캐릭터 선택 페이지
      </div>
    </div>
  )
}

export default CharacterSettingPage;
