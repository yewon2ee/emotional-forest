import React, { useEffect } from 'react';
import BottomNav from '../components/common/BottomNav';

const HomePage = () => {
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

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div id="map" style={{ width: "100%", height: "90vh" }}></div>

      <img
        src="/assets/tree_objects/summer.png"
        alt="나무"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -100%)",
          width: "80px",
        }}
      />

      <BottomNav />
    </div>
  );
};

export default HomePage;
