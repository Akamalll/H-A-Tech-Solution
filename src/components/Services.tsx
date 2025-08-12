import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Pengembangan Web & Mobile',
      description: 'Aplikasi web dan mobile yang responsif, modern, dan user-friendly dengan teknologi terkini.',
      icon: '💻',
      features: ['React & React Native', 'Node.js & Express', 'Database Design', 'API Development'],
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      description: 'Solusi cloud yang scalable dan aman untuk mengoptimalkan infrastruktur bisnis Anda.',
      icon: '☁️',
      features: ['AWS & Azure', 'Server Management', 'Load Balancing', 'Security'],
    },
    {
      id: 3,
      title: 'Digital Transformation',
      description: 'Membantu bisnis bertransformasi digital dengan strategi dan implementasi yang tepat.',
      icon: '🚀',
      features: ['Process Automation', 'Data Analytics', 'AI Integration', 'Legacy Migration'],
    },
    {
      id: 4,
      title: 'IT Consulting',
      description: 'Konsultasi teknologi yang membantu Anda membuat keputusan IT yang tepat.',
      icon: '📊',
      features: ['Technology Audit', 'Strategy Planning', 'Vendor Selection', 'Risk Assessment'],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Layanan Kami</h2>
          <p className="section-subtitle">Solusi teknologi komprehensif untuk memenuhi kebutuhan bisnis Anda</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="btn service-btn">Pelajari Lebih Lanjut</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
