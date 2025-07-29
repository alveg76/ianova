// src/sections/HeroSection.jsx

import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero-container">
      <div className="hero-video-wrapper">
        <video className="hero-video" autoPlay loop muted playsInline>
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      
      {/* El div .title ahora contendrá todo, incluido los botones */}
      <div className="title">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>

        {/* Contenedor para los nuevos botones */}
        <div className="hero-buttons-container">
          
          
        </div>
      </div>
    </section>
  );
}