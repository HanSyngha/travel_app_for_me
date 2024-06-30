// src/App.js

import React from 'react';
import MapComponent from './components/MapComponent';

const App = () => {
  const handleCountryClick = (countryName) => {
    alert(`Clicked on ${countryName}`);
  };

  return (
    <div className="App">
      <h1>World Map App</h1>
      <MapComponent onCountryClick={handleCountryClick} />
    </div>
  );
};

export default App;
