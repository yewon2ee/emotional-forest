import React, { useState, useEffect } from 'react';
import "../styles/CharacterSettingPage.css";
import { useNavigate } from 'react-router-dom';
import instance from "../api/instance";

const CharacterSettingPage = () => {
  const navigate = useNavigate();

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]); //  빈 배열로 초기화

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await instance.get("/users/signup/characters");
        console.log("캐릭터 목록 GET 성공:", response.data);
        setCharacters(response.data || []); // 응답 없을 시 빈 배열
      } catch (error) {
        console.error("캐릭터 목록 GET 실패:", error);
        alert("캐릭터 목록을 불러오지 못했습니다.");
        setCharacters([]); // 실패 시도 빈 배열
      }
    };

    fetchCharacters();
  }, []);

  const handleSelectCharacter = (id) => {
    setSelectedCharacter(id);
    console.log("선택된 캐릭터 id:", id);
  };

  const handleSave = () => {
    if (!selectedCharacter) {
      alert("캐릭터를 선택해주세요!");
      return;
    }

    const profile = JSON.parse(localStorage.getItem("profile")) || {};

    const selectedChar = characters.find(c => c.character_id === selectedCharacter);

    const newProfile = {
      ...profile,
      characterId: selectedCharacter,
      characterImgUrl: selectedChar ? selectedChar.image_url : profile.characterImgUrl,
    };

    localStorage.setItem("profile", JSON.stringify(newProfile));
    console.log("로컬스토리지에 캐릭터 저장 완료:", newProfile);

    navigate("/profile/nickname");
  };
  return (
    <div className="character-container">
      <h2>🌿 캐릭터 설정</h2>
      <div className="character-card">
        <div className="character-grid">
          {characters.map((char) => (
            <div
              key={char.character_id}
              className={`character-item ${selectedCharacter === char.character_id ? "selected" : ""}`}
              onClick={() => handleSelectCharacter(char.character_id)}
            >
              <img src={char.image_url} alt={char.name} />
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
