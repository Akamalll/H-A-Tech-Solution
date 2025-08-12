import React from 'react';
import './Solutions.css';

const Solutions: React.FC = () => {
  const solutions = [
    {
      id: 1,
      title: 'Digital Transformation',
      description: 'Membantu perusahaan bertransformasi dari sistem legacy ke teknologi modern dengan strategi yang tepat.',
      benefits: ['Increased efficiency', 'Cost reduction', 'Better customer experience', 'Competitive advantage'],
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Cloud Migration',
      description: 'Migrasi infrastruktur IT ke cloud dengan strategi yang aman dan efisien.',
      benefits: ['Scalability', 'Cost optimization', 'Enhanced security', '24/7 availability'],
      icon: '☁️',
    },
    {
      id: 3,
      title: 'Data Analytics & AI',
      description: 'Implementasi solusi analytics dan AI untuk mengoptimalkan pengambilan keputusan bisnis.',
      benefits: ['Data-driven insights', 'Predictive analytics', 'Process automation', 'ROI improvement'],
      icon: '📊',
    },
    {
      id: 4,
      title: 'Cybersecurity',
      description: 'Solusi keamanan komprehensif untuk melindungi aset digital perusahaan.',
      benefits: ['Threat prevention', 'Compliance', 'Risk management', 'Business continuity'],
      icon: '🛡️',
    },
  ];

  return (
    <section id="solutions" className="section solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solutions</h2>
          <p className="section-subtitle">Solusi bisnis yang disesuaikan dengan kebutuhan spesifik perusahaan Anda</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>

              <div className="solution-benefits">
                <h4>Manfaat:</h4>
                <ul>
                  {solution.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <button className="btn solution-btn">Lihat Solusi</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
