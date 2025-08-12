import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">Siap untuk memulai proyek teknologi Anda? Mari diskusikan bersama kami</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Mari Berbicara</h3>
            <p>Kami siap membantu Anda mewujudkan visi digital bisnis Anda. Hubungi kami untuk konsultasi gratis dan diskusi lebih lanjut.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Alamat</h4>
                  <p>
                    Jl. Sudirman No. 123, Jakarta Pusat
                    <br />
                    DKI Jakarta, Indonesia
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>hello@hatechsolution.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Telepon</h4>
                  <p>+62 21 1234 5678</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Jam Kerja</h4>
                  <p>
                    Senin - Jumat: 09:00 - 18:00
                    <br />
                    Sabtu: 09:00 - 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Masukkan nama lengkap Anda" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Masukkan email Anda" />
              </div>

              <div className="form-group">
                <label htmlFor="company">Nama Perusahaan</label>
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Masukkan nama perusahaan (opsional)" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Ceritakan proyek atau kebutuhan Anda"></textarea>
              </div>

              <button type="submit" className="btn contact-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
