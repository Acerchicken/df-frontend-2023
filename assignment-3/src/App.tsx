import React, { useState } from 'react';
import './App.css';
import Footer from './Layouts/Footer';
import Body from './Layouts/Body';
import Header from './Layouts/Header';

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleModeToggle = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Header handleModeToggle={handleModeToggle} />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
