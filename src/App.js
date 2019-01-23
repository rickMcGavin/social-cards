import React from 'react';

import Container from "./components/container";


function App() {
  return (
    <div className="App container">
      {/* I wanted container to hold the container 
      class and be the flex box I did something 
      incorrectly here */}
      <Container />
    </div>
  );
}

export default App;
