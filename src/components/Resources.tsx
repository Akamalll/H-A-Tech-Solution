import React from 'react';
import './Resources.css';

const Resources: React.FC = () => {
  const resources = [
    {
      id: 1,
      title: 'Documentation',
      description: 'Dokumentasi lengkap untuk semua produk dan layanan kami.',
      icon: '📚',
      link: '#',
      category: 'Technical',
    },
    {
      id: 2,
      title: 'API Reference',
      description: 'Referensi lengkap untuk integrasi API dengan sistem kami.',
      icon: '🔌',
      link: '#',
      category: 'Technical',
    },
    {
      id: 3,
      title: 'Video Tutorials',
      description: 'Video tutorial step-by-step untuk menggunakan platform kami.',
      icon: '🎥',
      link: '#',
      category: 'Learning',
    },
    {
      id: 4,
      title: 'Webinars',
      description: 'Webinar gratis tentang teknologi dan best practices.',
      icon: '🎤',
      link: '#',
      category: 'Learning',
    },
    {
      id: 5,
      title: 'Blog & Articles',
      description: 'Artikel terbaru tentang teknologi, tips, dan insights.',
      icon: '✍️',
      link: '#',
      category: 'Content',
    },
    {
      id: 6,
      title: 'Community Forum',
      description: 'Bergabung dengan komunitas pengguna dan developer.',
      icon: '👥',
      link: '#',
      category: 'Community',
    },
  ];

  const categories = ['All', 'Technical', 'Learning', 'Content', 'Community'];

  return (
    <section id="resources" className="section resources">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resources</h2>
          <p className="section-subtitle">Akses sumber daya dan dokumentasi untuk membantu Anda memaksimalkan penggunaan platform kami</p>
        </div>

        <div className="resources-categories">
          {categories.map((category) => (
            <button key={category} className="category-btn active">
              {category}
            </button>
          ))}
        </div>

        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.id} className="resource-card">
              <div className="resource-icon">{resource.icon}</div>
              <div className="resource-content">
                <span className="resource-category">{resource.category}</span>
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <a href={resource.link} className="resource-link">
                  Akses Resource →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="resources-cta">
          <h3>Butuh bantuan lebih lanjut?</h3>
          <p>Tim support kami siap membantu Anda dengan pertanyaan teknis dan implementasi.</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn">
              Hubungi Support
            </a>
            <a href="#" className="btn btn-secondary">
              Lihat FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
