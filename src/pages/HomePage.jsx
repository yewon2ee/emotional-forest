import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import "../styles/HomePage.css"; 

// 홈페이지(지도)는 지금은 고정된 하나의 나무만 보여줄거라서 
// 별도의 백엔드 연동 없이 하드코딩으로 감

const HomePage = () => {
  const navigate = useNavigate();
  console.log("컴포넌트 렌더링");

  useEffect(() => {
    console.log("NAVER_MAP_CLIENT_ID:", import.meta.env.VITE_NAVER_MAP_CLIENT_ID);


    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}`;

    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.450701, 126.653256), // 인하대 정확 좌표
        zoom: 16,
      };
      new window.naver.maps.Map('map', mapOptions);
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleTreeClick = () => {
    navigate('/tree');
  };

  return (
    <div className="home-container">
      <div id="map" className="map"></div>

      <img
        src="/assets/tree_objects/summer.png"
        alt="나무"
        onClick={handleTreeClick}
        className="tree-image"
      />

      <BottomNav />
    </div>
  );
};

export default HomePage;
