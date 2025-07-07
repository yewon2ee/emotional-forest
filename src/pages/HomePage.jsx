import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import "../styles/HomePage.css"; // css import

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.450701, 126.570667), // 인하대 좌표 예시
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
