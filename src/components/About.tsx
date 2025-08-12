import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Tentang H&A Tech Solution</h2>
            <p className="about-description">
              H&A Tech Solution adalah perusahaan teknologi yang berkomitmen untuk memberikan solusi digital terbaik bagi bisnis Anda. Dengan tim yang berpengalaman dan teknologi terkini, kami membantu perusahaan bertransformasi digital
              dengan cara yang efisien dan sustainable.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h3>Visi</h3>
                  <p>Menjadi mitra teknologi terpercaya yang mendorong inovasi dan pertumbuhan bisnis di era digital.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-content">
                  <h3>Misi</h3>
                  <p>Memberikan solusi teknologi yang inovatif, aman, dan scalable untuk membantu bisnis mencapai tujuan mereka.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🌟</div>
                <div className="feature-content">
                  <h3>Nilai</h3>
                  <p>Inovasi, Kualitas, Kepercayaan, Kolaborasi, dan Keunggulan dalam setiap proyek yang kami kerjakan.</p>
                </div>
              </div>
            </div>

            <div className="about-stats">
              <div className="stat">
                <h3>5+</h3>
                <p>Tahun Pengalaman</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Tim Ahli</p>
              </div>
              <div className="stat">
                <h3>100+</h3>
                <p>Proyek Selesai</p>
              </div>
              <div className="stat">
                <h3>98%</h3>
                <p>Kepuasan Klien</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <h3>Tim Kami</h3>
                <p>Tim profesional yang siap membantu Anda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
