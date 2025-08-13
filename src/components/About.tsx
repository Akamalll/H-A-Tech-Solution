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
              H&A Tech Solution adalah perusahaan teknologi terdepan yang berkomitmen untuk memberikan solusi digital terbaik bagi bisnis Anda. Didirikan dengan visi untuk mendorong transformasi digital di Indonesia, kami menggabungkan
              keahlian teknologi, inovasi, dan pemahaman mendalam tentang kebutuhan bisnis lokal.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <div className="feature-content">
                  <h3>Visi Kami</h3>
                  <p>Menjadi mitra teknologi terpercaya dan terdepan yang mendorong inovasi, efisiensi, dan pertumbuhan bisnis di era digital, serta berkontribusi pada kemajuan teknologi Indonesia.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">💡</div>
                <div className="feature-content">
                  <h3>Misi Kami</h3>
                  <p>Memberikan solusi teknologi yang inovatif, aman, scalable, dan cost-effective untuk membantu bisnis dari berbagai skala mencapai tujuan mereka dan bersaing di pasar global.</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🌟</div>
                <div className="feature-content">
                  <h3>Nilai-Nilai Kami</h3>
                  <p>
                    <strong>Inovasi:</strong> Selalu mencari cara baru dan lebih baik dalam menyelesaikan tantangan teknologi.
                    <br />
                    <strong>Kualitas:</strong> Berkomitmen memberikan hasil terbaik dalam setiap proyek.
                    <br />
                    <strong>Kepercayaan:</strong> Membangun hubungan jangka panjang berdasarkan kepercayaan dan transparansi.
                    <br />
                    <strong>Kolaborasi:</strong> Bekerja sama dengan klien untuk mencapai hasil optimal.
                    <br />
                    <strong>Keunggulan:</strong> Berusaha mencapai standar tertinggi dalam setiap aspek layanan.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-expertise">
              <h3>Keahlian Kami</h3>
              <div className="expertise-grid">
                <div className="expertise-item">
                  <span className="expertise-icon">💻</span>
                  <span>Web & Mobile Development</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">☁️</span>
                  <span>Cloud Solutions</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🤖</span>
                  <span>AI & Machine Learning</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🔒</span>
                  <span>Cybersecurity</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">📊</span>
                  <span>Data Analytics</span>
                </div>
                <div className="expertise-item">
                  <span className="expertise-icon">🔄</span>
                  <span>Digital Transformation</span>
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

            <div className="about-commitment">
              <h3>Komitmen Kami</h3>
              <p>
                Kami berkomitmen untuk memberikan layanan terbaik dengan pendekatan yang personal, memahami kebutuhan unik setiap klien, dan memberikan solusi yang tepat waktu dan sesuai anggaran. Tim kami terdiri dari profesional
                berpengalaman yang terus mengikuti perkembangan teknologi terbaru untuk memastikan solusi yang kami berikan selalu up-to-date dan relevan dengan kebutuhan bisnis modern.
              </p>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <h3>Tim Profesional Kami</h3>
                <p>Tim ahli teknologi yang berpengalaman dan siap membantu transformasi digital bisnis Anda</p>
                <div className="team-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">👨‍💻</span>
                    <span>Full-Stack Developers</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">👩‍💼</span>
                    <span>Solution Architects</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">👨‍🔬</span>
                    <span>Data Scientists</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">👩‍💻</span>
                    <span>DevOps Engineers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
