import React from 'react';
import './SolutionsAndServices.css';

const SolutionsAndServices: React.FC = () => {
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
      title: 'IT Consulting',
      description: 'Konsultasi teknologi yang membantu Anda membuat keputusan IT yang tepat.',
      icon: '📊',
      features: ['Technology Audit', 'Strategy Planning', 'Vendor Selection', 'Risk Assessment'],
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description: 'Layanan pemeliharaan dan dukungan teknis untuk memastikan sistem berjalan optimal.',
      icon: '🔧',
      features: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Troubleshooting'],
    },
  ];

  return (
    <section id="solutions-and-services" className="section solutions-and-services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solusi & Layanan Kami</h2>
          <p className="section-subtitle">Solusi teknologi komprehensif dan layanan profesional untuk memenuhi kebutuhan bisnis Anda</p>
        </div>

        {/* Solutions Section */}
        <div className="content-section">
          <h3 className="content-section-title">Solusi Bisnis</h3>
          <p className="content-section-description">Solusi yang disesuaikan dengan kebutuhan spesifik perusahaan Anda untuk mencapai tujuan bisnis</p>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <div key={solution.id} className="solution-card">
                <div className="solution-icon">{solution.icon}</div>
                <h4 className="solution-title">{solution.title}</h4>
                <p className="solution-description">{solution.description}</p>

                <div className="solution-benefits">
                  <h5>Manfaat:</h5>
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

        {/* Services Section */}
        <div className="content-section">
          <h3 className="content-section-title">Layanan Profesional</h3>
          <p className="content-section-description">Layanan teknologi berkualitas tinggi yang didukung oleh tim ahli berpengalaman</p>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h4 className="service-title">{service.title}</h4>
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

        {/* Call to Action */}
        <div className="cta-section">
          <h3>Butuh Konsultasi?</h3>
          <p>Tim kami siap membantu Anda menemukan solusi terbaik untuk bisnis Anda</p>
          <button className="btn cta-btn">Hubungi Kami</button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsAndServices;
