// src/App.js

import React from 'react';
import MapComponent from './components/MapComponent';

const App = () => {
  const handleCountryClick = (countryName) => {
    alert(`Clicked on ${countryName}`);
    // 클릭한 국가에 대한 추가적인 작업을 수행할 수 있습니다.
  };

  return (
    <div className="App">
      <h1>World Map App</h1>
      <MapComponent onCountryClick={handleCountryClick} />
    </div>
  );
};

export default App;
