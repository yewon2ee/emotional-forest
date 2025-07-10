//각 캐릭터 카드를 나타내는 컴포넌트
//props: 이미지, 이름,선택 여부, onClick (클릭시 실행되는 함수)

import React from 'react';


const CharacterCard = ({ image, name, isSelected, onClick }) => {
  return (
    <div 
      className={`character-card ${isSelected ? 'selected' : ''}`} 
      onClick={onClick}
    >

    {/*캐릭터 이미지 (alt{name}은 이미지안뜨면 보여줄 텍스트겸라벨*/}
      <img src={image} alt={name} className="character-image" />
     
    {/*캐릭터 이름*/}
      <p className="character-name">{name}</p>
    </div>
  );
};

export default CharacterCard;
