import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  { id: 1, title: 'Slayd 1', color: '#005F73', text: 'JavaScript ilə slider: indeks və görüntü idarəsi' },
  { id: 2, title: 'Slayd 2', color: '#0A9396', text: 'Prev/Next düymələri currentIndex dəyişəndə DOM yenilənir' },
  { id: 3, title: 'Slayd 3', color: '#9966CC', text: 'setInterval ilə avtomatik keçid də əlavə oluna bilər' },
];

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goNext = () => setCurrentIndex((i) => (i + 1) % SLIDES.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Slider / Carousel
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>State (vəziyyət):</strong> <code>currentIndex</code> – hazırda hansı slaydın göstərildiyi (0, 1, 2...).</li>
            <li><strong>Məzmun:</strong> Slaydlar massivdə saxlanır; ekranda <code>slides[currentIndex]</code> göstərilir.</li>
            <li><strong>Prev/Next:</strong> Düymələr <code>currentIndex</code>-i artırır/azaldır; sərhəddə (0 və ya son) indeks dövrə qaytarılır (modulo <code>% length</code>).</li>
            <li><strong>DOM:</strong> Vanilla JS-də eyni məntiq: bir <code>index</code> dəyişəni, <code>element.innerHTML</code> və ya uyğun elementin <code>style.display</code>-unu dəyişmək.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – slider</h3>
          <div className="position-relative rounded overflow-hidden" style={{ maxWidth: 600, margin: '0 auto', minHeight: 220 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={SLIDES[currentIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-4 rounded text-white d-flex flex-column justify-content-center align-items-center"
                style={{ backgroundColor: SLIDES[currentIndex].color, minHeight: 220 }}
              >
                <h4 className="mb-2">{SLIDES[currentIndex].title}</h4>
                <p className="mb-0 text-center">{SLIDES[currentIndex].text}</p>
              </motion.div>
            </AnimatePresence>
            <button type="button" className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2 rounded-circle shadow" style={{ width: 44, height: 44 }} onClick={goPrev} aria-label="Əvvəlki">‹</button>
            <button type="button" className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2 rounded-circle shadow" style={{ width: 44, height: 44 }} onClick={goNext} aria-label="Növbəti">›</button>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            {SLIDES.map((_, i) => (
              <button key={i} type="button" className="btn btn-sm rounded-pill" style={{ backgroundColor: currentIndex === i ? 'var(--jewel-teal)' : '#dee2e6', color: currentIndex === i ? 'white' : '#333', width: 10, height: 10, padding: 0 }} onClick={() => setCurrentIndex(i)} aria-label={`Slayd ${i + 1}`} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sliders;
