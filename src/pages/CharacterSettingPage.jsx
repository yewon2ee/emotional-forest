import React, { useState, useEffect } from 'react';
import "../styles/CharacterSettingPage.css";
import { useNavigate } from 'react-router-dom';
import instance from "../api/instance";

// 캐릭터 세팅 페이지
// - 캐릭터 목록 GET (users/signup/characters)
// - 선택 PATCH (users/signup/characters)
// - 로컬스토리지 저장 + 닉네임 세팅 페이지 이동

const CharacterSettingPage = () => {
  const navigate = useNavigate();

  // 선택된 캐릭터 id를 저장하는 state
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  // 백엔드에서 불러온 전체 캐릭터 목록 state
  const [characters, setCharacters] = useState([]);

  // 페이지 로드 시 캐릭터 목록 GET 호출 + 연결 테스트
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await instance.get("/users/signup/characters");
        console.log("캐릭터 목록 GET 성공:", response.data.data);
        setCharacters(response.data.data); // characters state에 백엔드에서 받은 데이터 저장
      } catch (error) {
        console.error(" 캐릭터 목록 GET 실패:", error);
        alert("캐릭터 목록을 불러오지 못했습니다.");
      }
    };

    // 백엔드 연결 테스트 함수
    const testBackendConnection = async () => {
      try {
        const res = await instance.get("/users/signup/characters");
        console.log("백엔드 연결 테스트 성공:", res.data);
      } catch (error) {
        console.error(" 백엔드 연결 테스트 실패:", error);
      }
    };

    fetchCharacters();
    testBackendConnection();
  }, []);

  // 캐릭터 선택 시 state에 저장
  const handleSelectCharacter = (id) => {
    setSelectedCharacter(id);
    console.log("선택된 캐릭터 id:", id);
  };

  // 저장하기 버튼 클릭 시 PATCH 호출 + localStorage 저장 + 닉네임 페이지 이동
  const handleSave = async () => {
    if (!selectedCharacter) {
      alert("캐릭터를 선택해주세요!");
      return;
    }

    try {
      const body = {
        profile_character_id: selectedCharacter
      };

      const response = await instance.patch("/users/signup/characters", body);
      console.log("캐릭터 선택 PATCH 성공:", response.data);

      // localStorage에 선택된 캐릭터 저장
      const profile = JSON.parse(localStorage.getItem("profile")) || {};
      profile.characterId = selectedCharacter;

      // 선택된 캐릭터의 이미지 URL도 저장 (닉네임 페이지에서 보여주기 위함)
      const selectedChar = characters.find(c => c.character_id === selectedCharacter);
      if (selectedChar) {
        profile.characterImgUrl = selectedChar.image_url;
      }

      localStorage.setItem("profile", JSON.stringify(profile));

      // 닉네임 세팅 페이지로 이동
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
