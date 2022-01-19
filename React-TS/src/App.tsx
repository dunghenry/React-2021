import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import ProgressContextProvider from './contexts/ProgressContext';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import MovieContextProvider from './contexts/MovieContext';
import Movies from './components/Movies';
function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies/>
            <ToggleTheme />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
