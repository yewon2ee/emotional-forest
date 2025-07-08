import React, { useState, useEffect } from 'react';
import "../styles/CharacterSettingPage.css";
import { useNavigate } from 'react-router-dom';
import instance from "../api/instance";

const CharacterSettingPage = () => {
  const navigate = useNavigate();

  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await instance.get("/users/signup/characters");
        console.log("캐릭터 목록 GET 성공:", response.data);
        setCharacters(response.data); // 수정: data.data → data
      } catch (error) {
        console.error("캐릭터 목록 GET 실패:", error);
        alert("캐릭터 목록을 불러오지 못했습니다.");
      }
    };

    const testBackendConnection = async () => {
      try {
        const res = await instance.get("/users/signup/characters");
        console.log("백엔드 연결 테스트 성공:", res.data);
      } catch (error) {
        console.error("백엔드 연결 테스트 실패:", error);
      }
    };

    fetchCharacters();
    testBackendConnection();
  }, []);

  const handleSelectCharacter = (id) => {
    setSelectedCharacter(id);
    console.log("선택된 캐릭터 id:", id);
  };

  const handleSave = async () => {
    if (!selectedCharacter) {
      alert("캐릭터를 선택해주세요!");
      return;
    }

    try {
      const body = { profile_character_id: selectedCharacter };
      const response = await instance.patch("/users/signup/characters", body);
      console.log("캐릭터 선택 PATCH 성공:", response.data);

      const profile = JSON.parse(localStorage.getItem("profile")) || {};
      profile.characterId = selectedCharacter;

      const selectedChar = characters.find(c => c.character_id === selectedCharacter);
      if (selectedChar) {
        profile.characterImgUrl = selectedChar.image_url;
      }

      localStorage.setItem("profile", JSON.stringify(profile));
      navigate("/profile/nickname");

    } catch (error) {
      console.error("캐릭터 선택 PATCH 실패:", error);
      alert("캐릭터 저장에 실패했습니다. 다시 시도해주세요.");
    }
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
