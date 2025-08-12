import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Solusi Teknologi <span className="highlight">Terdepan</span>
          </h1>
          <p className="hero-subtitle">Kami membantu bisnis Anda bertransformasi digital dengan solusi teknologi yang inovatif, aman, dan scalable untuk masa depan yang lebih cerah.</p>
          <div className="hero-buttons">
            <a href="#services" className="btn">
              Jelajahi Layanan
            </a>
            <a href="#contact" className="btn btn-secondary">
              Hubungi Kami
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <h3>100+</h3>
              <p>Proyek Berhasil</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Klien Puas</p>
            </div>
            <div className="stat-item">
              <h3>5+</h3>
              <p>Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
