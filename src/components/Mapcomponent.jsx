// src/components/MapComponent.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ onCountryClick }) => {
  const countries = [
    { name: 'United States', position: [37.0902, -95.7129], message: 'Hello from USA!' },
    { name: 'South Korea', position: [35.9078, 127.7669], message: '안녕하세요 from 대한민국!' },
    // 필요한 다른 국가들을 추가할 수 있습니다.
  ];

  // 지도의 최대 경계를 설정합니다.
  const bounds = [
    [-90, -180],
    [90, 180]
  ];

  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '100vh', width: '100%' }}
      worldCopyJump={true}  // 지도 반복을 막습니다.
      maxBounds={bounds}    // 지도 경계를 설정합니다.
      maxBoundsViscosity={1.0}  // 경계를 넘으려는 시도를 방지합니다.
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />

      {countries.map((country, index) => (
        <Marker key={index} position={country.position} onClick={() => onCountryClick(country.name)}>
          <Popup>{country.message}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
