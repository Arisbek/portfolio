import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Projects />
      <Contact />
      <footer>Arisbek © 2024</footer>
    </div>
  );
}

export default App;