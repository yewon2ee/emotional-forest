import React , {useState} from 'react';
import CharacterGrid from '../components/character/CharacterGrid';
import "../styles/CharacterGrid.css";


const CharacterSettingPage = () => {
  //선택된 캐릭터 관리
  const [selectedCharacter , setSelectedCharacter] = useState(null);

  //예시 캐릭터 리스트
  const character = [
    {
      id: 1,
      image: "/assets/characters/cat.png",
      name: "마동석냥이",
    },
    {
      id: 2,
      image: "/assets/characters/forest_keeper.png",
      name: "행복한 숲지기",
    },
    {
      id: 3,
      image: "/assets/characters/ginseng.png",
      name: "행복을 나누는 인삼",
    },
    {
      id: 4,
      image: "/assets/characters/happy_beginner.png",
      name: "행복한 뉴비",
    },
    {
      id: 5,
      image: "/assets/characters/kind_golem.png",
      name: "친절한 골렘",
    },
    {
      id: 6,
      image: "/assets/characters/running_person.png",
      name: "뛰어다니는 사람",
    },
    {
      id: 7,
      image: "/assets/characters/shark.png",
      name: "서있는 상어",
    },
    {
      id: 8,
      image: "/assets/characters/stone.png",
      name: "그냥 돌멩이",
    },
    {
      id: 9,
      image: "/assets/characters/magician.png",
      name: "츤데레 숲마법사",
    }
  ]

  //캐릭터 선택 시 실횅될 함수
  const handleSelectCharacter = (id) => {
      setSelectedCharacter(id);
      //브라우저개발자도구 콘솔에 값 출력하는 함수 - cout 해보면서 체크하는 느낌인듯하당
      console.log("선택된 캐릭터 id:",id);
  }


  return (
    <div className="character-setting-page">
      <h2>캐릭터를 선택해보자!</h2>

      {/* 캐릭터 선택 그리드  */}
      <CharacterGrid
        characters={character}
        selectedCharacter={selectedCharacter}
        onSelect={handleSelectCharacter}
      />


      {/* 임시 버튼: 선택된 캐릭터 콘솔 확인 */}
      <button
        onClick={() =>
          console.log(
            "현재 선택된 캐릭터:",
            characters.find((char) => char.id === selectedCharacter)
          )
        }
      >
        선택된 캐릭터 확인 
      </button>
      <h3>프로필 아이콘 미리보기는 안넣엇음 아직. 안할거같아서 선택한 카드 id 로그 잘찍힘 </h3>
    </div>
  )
} 
export default CharacterSettingPage;