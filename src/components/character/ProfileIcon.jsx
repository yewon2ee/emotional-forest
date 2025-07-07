//선택된 캐릭터를 보여주는 아이콘 - 마이페이지랑 닉네임세팅페이지에 쓰면 될듯

import React from 'react';

const ProfileIcon = ({imagel,alt,size=50}) => {
  return (
    //CSS로만 하면 “모든 ProfileIcon이 50px”
    // props로 하면 “얘는 50px, 쟤는 100px, 다른 애는 30px” 이렇게 유연하게 설정 가능.
   <img 
    src={image} //props로 받은 이미지 경로
    alt={alt}
    width={size}
    height={size}
    className="profile-icon"
   />
  );
};

export default ProfileIcon;
