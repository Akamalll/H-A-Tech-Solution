import React from 'react';
import './CaseStudies.css';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Modernisasi',
      company: 'RetailCorp Indonesia',
      description: 'Mengubah platform e-commerce legacy menjadi sistem modern dengan React dan Node.js, meningkatkan performa 300% dan user experience.',
      results: ['300% peningkatan performa', '50% peningkatan konversi', 'Mobile-first design'],
      image: '🛒',
    },
    {
      id: 2,
      title: 'Cloud Migration & DevOps',
      company: 'FinTech Solutions',
      description: 'Migrasi infrastruktur dari on-premise ke AWS dengan implementasi CI/CD pipeline dan monitoring yang komprehensif.',
      results: ['40% pengurangan biaya infrastruktur', '99.9% uptime', 'Automated deployment'],
      image: '☁️',
    },
    {
      id: 3,
      title: 'AI-Powered Analytics Dashboard',
      company: 'Manufacturing Co.',
      description: 'Mengembangkan dashboard analytics dengan machine learning untuk prediksi maintenance dan optimasi produksi.',
      results: ['25% pengurangan downtime', 'Real-time insights', 'Predictive maintenance'],
      image: '📊',
    },
  ];

  return (
    <section id="case-studies" className="section case-studies">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Studi Kasus</h2>
          <p className="section-subtitle">Lihat bagaimana kami membantu klien mencapai tujuan bisnis mereka</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <div key={study.id} className="case-study-card">
              <div className="case-study-header">
                <div className="case-study-image">{study.image}</div>
                <div className="case-study-info">
                  <h3 className="case-study-title">{study.title}</h3>
                  <p className="case-study-company">{study.company}</p>
                </div>
              </div>

              <p className="case-study-description">{study.description}</p>

              <div className="case-study-results">
                <h4>Hasil yang Dicapai:</h4>
                <ul>
                  {study.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>

              <button className="btn case-study-btn">Lihat Detail</button>
            </div>
          ))}
        </div>

        <div className="case-studies-cta">
          <h3>Ingin melihat lebih banyak studi kasus?</h3>
          <p>Hubungi kami untuk konsultasi gratis dan lihat bagaimana kami bisa membantu bisnis Anda.</p>
          <a href="#contact" className="btn">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
