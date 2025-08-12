import React from 'react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, RetailCorp Indonesia',
      content: 'H&A Tech Solution membantu kami mentransformasi platform e-commerce kami dengan hasil yang luar biasa. Tim mereka sangat profesional dan memahami kebutuhan bisnis kami.',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      id: 2,
      name: 'Ahmad Rahman',
      position: 'CTO, FinTech Solutions',
      content: 'Migrasi ke cloud yang dilakukan H&A Tech Solution sangat smooth dan efisien. Mereka tidak hanya mengerjakan proyek, tapi juga memberikan edukasi kepada tim kami.',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      id: 3,
      name: 'Lisa Chen',
      position: 'Operations Manager, Manufacturing Co.',
      content: 'Dashboard analytics yang dikembangkan sangat membantu dalam pengambilan keputusan. ROI yang kami dapatkan melebihi ekspektasi.',
      rating: 5,
      avatar: '👩‍🏭',
    },
  ];

  const renderStars = (rating: number) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Apa Kata Klien Kami</h2>
          <p className="section-subtitle">Testimoni dari klien yang telah mempercayai kami</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>

              <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>

              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="testimonials-cta">
          <h3>Bergabunglah dengan Klien Puas Kami</h3>
          <p>Mulai perjalanan transformasi digital Anda bersama kami</p>
          <a href="#contact" className="btn">
            Mulai Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
