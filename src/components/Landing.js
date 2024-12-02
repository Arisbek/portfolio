import React from 'react';
import avatar from '../media/avatar.png';

const Landing = () => {
  return (
    <section id="landing">
      <img src={avatar} alt="Avatar" />
      <h1>Arisbek</h1>
      <p>Software engineer.</p>
    </section>
  );
};

export default Landing;