import React from 'react';
import './Pricing.css';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      price: '$99',
      period: '/bulan',
      description: 'Cocok untuk bisnis kecil yang baru memulai',
      features: ['Basic cloud management', 'Email support', '5GB storage', 'Basic analytics', 'Mobile app access'],
      popular: false,
      buttonText: 'Mulai Sekarang',
    },
    {
      id: 2,
      name: 'Professional',
      price: '$299',
      period: '/bulan',
      description: 'Solusi lengkap untuk bisnis yang sedang berkembang',
      features: ['Advanced cloud features', 'Priority support', '50GB storage', 'AI analytics', 'Custom integrations', 'Advanced security', 'Team collaboration'],
      popular: true,
      buttonText: 'Pilih Professional',
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '$599',
      period: '/bulan',
      description: 'Solusi enterprise untuk perusahaan besar',
      features: ['Full cloud suite', '24/7 dedicated support', 'Unlimited storage', 'Custom AI models', 'White-label solutions', 'Advanced compliance', 'Custom development', 'SLA guarantee'],
      popular: false,
      buttonText: 'Hubungi Sales',
    },
  ];

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">Pilih paket yang sesuai dengan kebutuhan bisnis Anda</p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Paling Populer</div>}

              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>{plan.buttonText}</button>
            </div>
          ))}
        </div>

        <div className="pricing-cta">
          <h3>Butuh solusi custom?</h3>
          <p>Hubungi tim kami untuk konsultasi dan solusi yang disesuaikan dengan kebutuhan spesifik Anda.</p>
          <a href="#contact" className="btn">
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
