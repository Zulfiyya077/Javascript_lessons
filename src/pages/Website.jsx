import { useState } from 'react';
import { motion } from 'framer-motion';

const SECTIONS = [
  { id: 'hero', name: 'Hero', desc: 'Əsas başlıq və CTA düyməsi' },
  { id: 'features', name: 'Xüsusiyyətlər', desc: 'Xidmət və məhsul blokları' },
  { id: 'about', name: 'Haqqımızda', desc: 'Şirkət məlumatı' },
  { id: 'contact', name: 'Əlaqə', desc: 'Form və kontakt məlumatı' },
];

const Website = () => {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Veb sayt (Landing / Bölmələr)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Bölmələr (sections):</strong> Hero, Xüsusiyyətlər, Haqqımızda, Əlaqə – hər biri <code>id</code> ilə; menyu linkləri <code>#section-id</code> və ya klikdə scroll/aktiv bölmə dəyişir.</li>
            <li><strong>Navbar:</strong> Menyu itemlərinə klikdə <code>activeSection</code> state yenilənir və ya <code>element.scrollIntoView(&#123; behavior: 'smooth' &#125;)</code> ilə həmin bölməyə gedilir.</li>
            <li><strong>Dinamik məzmun:</strong> State əsasında uyğun bölmə göstərilir və ya bütün bölmələr DOM-da olur, scroll/visibility ilə idarə olunur.</li>
            <li><strong>Vanilla JS:</strong> <code>querySelectorAll('section')</code>, <code>addEventListener</code> ilə link klikləri, <code>scrollIntoView</code> və ya scroll position ilə aktiv bölmənin müəyyən edilməsi.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – bölməli landing</h3>
          <nav className="d-flex flex-wrap gap-2 mb-4">
            {SECTIONS.map((s) => (
              <motion.button key={s.id} type="button" className="btn btn-sm" style={{ backgroundColor: activeSection === s.id ? 'var(--jewel-teal)' : '#e9ecef', color: activeSection === s.id ? 'white' : '#333' }} whileTap={{ scale: 0.98 }} onClick={() => setActiveSection(s.id)}>{s.name}</motion.button>
            ))}
          </nav>
          <div className="border rounded overflow-hidden" style={{ minHeight: 280 }}>
            {activeSection === 'hero' && (
              <motion.section key="hero" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5 text-center" style={{ backgroundColor: 'rgba(0, 95, 115, 0.15)' }}>
                <h2 className="text-jewel-teal mb-2">Xoş gəlmisiniz</h2>
                <p className="text-muted mb-4">Bu hero bölməsidir – əsas mesaj və CTA.</p>
                <motion.button type="button" className="btn btn-jewel-teal" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>Başlayın</motion.button>
              </motion.section>
            )}
            {activeSection === 'features' && (
              <motion.section key="features" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5">
                <h4 className="text-jewel-teal mb-3">Xüsusiyyətlər</h4>
                <div className="row g-3">
                  {['Sürət', 'Etibarlılıq', 'Dəstək'].map((f, i) => (
                    <div key={i} className="col-md-4">
                      <div className="p-3 border rounded text-center"><strong>{f}</strong></div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}
            {activeSection === 'about' && (
              <motion.section key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5" style={{ backgroundColor: '#f8f9fa' }}>
                <h4 className="text-jewel-teal mb-2">Haqqımızda</h4>
                <p className="mb-0">Şirkət haqqında mətn, missiya və viziya. Bu bölmə JS ilə aktiv edildikdə göstərilir.</p>
              </motion.section>
            )}
            {activeSection === 'contact' && (
              <motion.section key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-5">
                <h4 className="text-jewel-teal mb-3">Əlaqə</h4>
                <p className="text-muted small mb-2">Email: info@example.az</p>
                <input type="text" className="form-control form-control-sm mb-2" placeholder="Adınız" />
                <input type="email" className="form-control form-control-sm mb-2" placeholder="Email" />
                <motion.button type="button" className="btn btn-jewel-teal btn-sm" whileTap={{ scale: 0.98 }}>Göndər</motion.button>
              </motion.section>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Website;
