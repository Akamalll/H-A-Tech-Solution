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

  const handleWhatsAppClick = () => {
    const phoneNumber = '6282112345678'; // Ganti dengan nomor WhatsApp yang sebenarnya
    const message = 'Halo! Saya tertarik dengan layanan H&A Tech Solution. Bisa diskusi lebih lanjut?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Hubungi Kami</h2>
          <p className="section-subtitle">Siap untuk memulai proyek teknologi Anda? Mari diskusikan bersama kami dan temukan solusi terbaik untuk bisnis Anda</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Mari Berbicara</h3>
            <p>
              Kami siap membantu Anda mewujudkan visi digital bisnis Anda. Tim kami terdiri dari profesional berpengalaman yang akan memberikan solusi teknologi yang tepat sesuai kebutuhan dan anggaran Anda. Hubungi kami untuk konsultasi
              gratis dan diskusi lebih lanjut.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h4>Alamat Kantor</h4>
                <p>
                  Jl. Sudirman No. 123, Jakarta Pusat
                  <br />
                  DKI Jakarta, Indonesia 12190
                </p>
              </div>

              <div className="contact-item">
                <h4>Email</h4>
                <p>hello@hatechsolution.com</p>
              </div>

              <div className="contact-item">
                <h4>Telepon</h4>
                <p>+62 21 1234 5678</p>
              </div>

              <div className="contact-item">
                <h4>Jam Kerja</h4>
                <p>
                  Senin - Jumat: 09:00 - 18:00 WIB
                  <br />
                  Sabtu: 09:00 - 15:00 WIB
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Kirim Pesan</h3>
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
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Ceritakan proyek atau kebutuhan teknologi Anda. Kami akan membantu memberikan solusi terbaik." />
              </div>

              <button type="submit" className="btn contact-submit">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-float" onClick={handleWhatsAppClick}>
        <div className="whatsapp-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
        </div>
        <div className="whatsapp-tooltip">Chat WhatsApp</div>
      </div>
    </section>
  );
};

export default Contact;
