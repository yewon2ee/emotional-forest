//여러 캐릭터 카드 그리드로 배열
//props: 캐릭터스- 캐릭터 목록 배열, 셀렉캐릭터- 현재 선택된 캐릭터 아이디
//온 셀렉트-캐릭터클릭시 나 이거 골랏어 하고 부모 컴포넌트(캐릭터 세팅페이지 이런데)로 보냄


import React from 'react';
import CharacterCard from './characterCard';

const CharacterGrid = ({characters,selectedCharacter, onSelect}) => {
    return(
        <div className="character-grid">
                {characters.map((char)=>(
                    //각 캐릭터(char)마다 캐릭터 이름이나 이미지 경로를 캐릭터 그리드로 보내는 과정
                    <CharacterCard
                        key={char.id} //리액트에서 리스트 랜더링 할때 꼭 필요하대 
                        image={char.image}
                        name={char.name}
                        isSelected={selectedCharacter === char.id} //같으면 트루. 선택캐 테두리 진하게 카드에서 해야해서 사용
                        onClick={()=>onSelect(char.id)} //캐릭터 클릭시 온셀렉 함수 실행하면서 선택된 캐릭터의 아이디를 부모에 전달
                    />
                ))}
        </div>
    )



}

export default CharacterGrid;
