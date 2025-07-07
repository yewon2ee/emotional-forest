import React, { useState } from 'react';
import "../styles/CharacterSettingPage.css";
import { useNavigate } from 'react-router-dom';

const CharacterSettingPage = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const characters = [
    { id: 1, name: "행복한 뉴비", img: "/assets/characters/happy_beginner.png" },
    { id: 2, name: "그냥 돌멩이", img: "/assets/characters/stone.png" },
    { id: 3, name: "친절한 골렘", img: "/assets/characters/kind_golem.png" },
    { id: 4, name: "행복한 숲지기", img: "/assets/characters/forest_keeper.png" },
    { id: 5, name: "마동석냥이", img: "/assets/characters/cat.png" },
    { id: 6, name: "츤데레숲마법사", img: "/assets/characters/magician.png" },
    { id: 7, name: "행복한 인삼", img: "/assets/characters/ginseng.png" },
    { id: 8, name: "서있는 상어", img: "/assets/characters/shark.png" },
    { id: 9, name: "뛰어다니는 사람", img: "/assets/characters/running_person.png" },
  ];

  const handleSelectCharacter = (id) => {
    setSelectedCharacter(id);
    console.log("선택된 캐릭터 id:", id);
  };

  const handleSave = () => {
    if (selectedCharacter) {
      const profile = JSON.parse(localStorage.getItem("profile")) || {};
      profile.characterId = selectedCharacter;
      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/profile/nickname");
    } else {
      alert("캐릭터를 선택해주세요!");
    }
  };

  return (
    <div className="character-container">
      <h2>🌿 캐릭터 설정</h2>
      <div className="character-card">
        <div className="character-grid">
          {characters.map((char) => (
            <div
              key={char.id}
              className={`character-item ${selectedCharacter === char.id ? "selected" : ""}`}
              onClick={() => handleSelectCharacter(char.id)}
            >
              <img src={char.img} alt={char.name} />
              <p>{char.name}</p>
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleSave}>저장하기</button>
    </div>
  );
};

export default CharacterSettingPage;
