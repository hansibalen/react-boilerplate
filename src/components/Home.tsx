import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const useDarkTheme = parseInt(localStorage.getItem('dark-mode'));
    if (isNaN(useDarkTheme)) {
      setDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if (darkTheme) {
      localStorage.setItem('dark-mode', '1');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('dark-mode', '0');
      document.body.classList.remove('dark-mode');
    }
  }, [darkTheme]);

  function toggleTheme() {
    setDarkTheme(!darkTheme);
  }

  return (
    <div id='content'>
      <div className='container'>
        <div className='title'>
          <h1>React Boilerplate</h1>
        </div>
        <div className='description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className='theme-selection'>
        <button onClick={toggleTheme}>
          {darkTheme ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Home;
