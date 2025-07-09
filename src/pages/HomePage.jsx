import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import axios from '../api/instance';
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [tree, setTree] = useState(null); //  트리 데이터 state 추가

  useEffect(() => {
    console.log("NAVER_MAP_CLIENT_ID:", import.meta.env.VITE_NAVER_MAP_CLIENT_ID);

    const script = document.createElement("script");
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${import.meta.env.VITE_NAVER_MAP_CLIENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = async () => {
      try { 
        //  트리 조회 API 호출
        const res = await axios.get('/trees/');
        console.log("트리 조회 성공:", res.data);

        const treeData = res.data[0]; // 트리 하나만 있다고 가정
        setTree(treeData);

        // 지도 생성
        const mapOptions = {
          center: new window.naver.maps.LatLng(treeData.latitude, treeData.longitude),
          zoom: 16,
          draggable: false,
          pinchZoom: false,
          scrollWheel: false,
          disableDoubleTapZoom: true,
          disableDoubleClickZoom: true,
        };

        const map = new window.naver.maps.Map('map', mapOptions);

        // 트리 마커 추가
        const marker = new window.naver.maps.Marker({
          position: new window.naver.maps.LatLng(treeData.latitude, treeData.longitude),
          map: map,
          icon: {
            url: '/assets/tree_objects/summer.png',
            scaledSize: new window.naver.maps.Size(50, 50), // 크기 조절 가능
          },
        });

        //  마커 클릭 시 트리 페이지로 이동
        window.naver.maps.Event.addListener(marker, 'click', () => {
          navigate('/tree');
        });

      } catch (err) {
        console.error('트리 조회 실패', err);
      }
    };

    return () => {
      document.head.removeChild(script);
    };
  }, [navigate]);

  return (
    <div className="home-container">
      <div id="map" className="map"></div>

      {/* 기존 img 제거 (마커로 대체됨) */}

      <BottomNav />
    </div>
  );
};

export default HomePage;
