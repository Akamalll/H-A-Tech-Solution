import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>H&A Tech Solution</h3>
              <p>Solusi teknologi terdepan untuk bisnis Anda</p>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                📘
              </a>
              <a href="#" className="social-link">
                🐦
              </a>
              <a href="#" className="social-link">
                💼
              </a>
              <a href="#" className="social-link">
                📷
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Layanan</h4>
            <ul>
              <li>
                <a href="#services">Pengembangan Web & Mobile</a>
              </li>
              <li>
                <a href="#services">Cloud Solutions</a>
              </li>
              <li>
                <a href="#services">Digital Transformation</a>
              </li>
              <li>
                <a href="#services">IT Consulting</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Perusahaan</h4>
            <ul>
              <li>
                <a href="#about">Tentang Kami</a>
              </li>
              <li>
                <a href="#case-studies">Studi Kasus</a>
              </li>
              <li>
                <a href="#testimonials">Testimoni</a>
              </li>
              <li>
                <a href="#contact">Kontak</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Kontak</h4>
            <div className="footer-contact">
              <p>📍 Jl. Sudirman No. 123, Jakarta Pusat</p>
              <p>📧 hello@hatechsolution.com</p>
              <p>📞 +62 21 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 H&A Tech Solution. Semua hak dilindungi.</p>
            <div className="footer-bottom-links">
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
