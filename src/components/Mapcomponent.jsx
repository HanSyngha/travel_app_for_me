// src/components/MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ onCountryClick }) => {
  // 각 국가의 좌표와 팝업 메시지를 정의합니다.
  const countries = [
    { name: 'United States', position: [37.0902, -95.7129], message: 'Hello from USA!' },
    { name: 'South Korea', position: [35.9078, 127.7669], message: '안녕하세요 from 대한민국!' },
    // 필요한 다른 국가들을 추가할 수 있습니다.
  ];

  return (
    <MapContainer
      center={[0, 0]} // 초기 중심 위치
      zoom={2} // 초기 줌 레벨
      style={{ height: '100vh', width: '100%' }} // 맵의 스타일
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {/* 각 국가에 대한 마커와 팝업을 추가합니다. */}
      {countries.map((country, index) => (
        <Marker key={index} position={country.position} onClick={() => onCountryClick(country.name)}>
          <Popup>{country.message}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
