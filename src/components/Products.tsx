import React from 'react';
import './Products.css';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Cloud Management Platform',
      description: 'Platform manajemen cloud yang terintegrasi untuk mengelola semua infrastruktur cloud Anda dari satu dashboard.',
      features: ['Multi-cloud support', 'Auto-scaling', 'Cost optimization', 'Security monitoring'],
      price: 'Mulai dari $99/bulan',
      image: '☁️',
    },
    {
      id: 2,
      name: 'AI Analytics Suite',
      description: 'Suite analytics berbasis AI yang membantu Anda menganalisis data dan membuat keputusan yang lebih baik.',
      features: ['Machine Learning', 'Real-time insights', 'Custom dashboards', 'Predictive analytics'],
      price: 'Mulai dari $199/bulan',
      image: '🤖',
    },
    {
      id: 3,
      name: 'Enterprise Security Suite',
      description: 'Solusi keamanan enterprise yang komprehensif untuk melindungi bisnis Anda dari ancaman cyber.',
      features: ['Threat detection', 'Firewall management', 'Vulnerability scanning', '24/7 monitoring'],
      price: 'Mulai dari $299/bulan',
      image: '🔒',
    },
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Products</h2>
          <p className="section-subtitle">Solusi teknologi terdepan untuk mengoptimalkan bisnis Anda</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              <div className="product-features">
                <h4>Fitur Utama:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-price">{product.price}</div>
              <button className="btn product-btn">Pelajari Lebih Lanjut</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
