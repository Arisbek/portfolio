// src/components/Header.js
import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#landing">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div>
        <SocialIcon url="https://github.com/Arisbek" target="_blank" rel="noopener noreferrer" />
        <SocialIcon url="https://www.linkedin.com/in/aris-alikbaev/" target="_blank" rel="noopener noreferrer" />
      </div>
    </header>
  );
};

export default Header;