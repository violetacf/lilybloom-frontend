import Lottie from 'lottie-react';
import underConstruction from './../../../Images/UnderConstruction.json';
import './../WhatIDo.css';

export default function TherapeuticalArts() {
  return (
    <div>
      <p>You'll find how I use art for therapy here soon.</p>
      <Lottie
        aria-label="under construction animation"
        className="under-construction"
        animationData={underConstruction}
      />
      <a href="/whatIDo">
        {' '}
        <button className="navbar-button"> Back To What I Do </button>
      </a>
    </div>
  );
}
