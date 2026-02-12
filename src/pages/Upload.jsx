import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const inputRef = useRef(null);

  const handleFile = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFile(f);
    setPreview(null);
    setUploaded(false);
    setProgress(0);
    if (f.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(f);
    }
  };

  const simulateUpload = () => {
    if (!file) return;
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setUploaded(true);
          return 100;
        }
        return p + 10;
      });
    }, 150);
  };

  const clearFile = () => {
    setFile(null);
    setPreview(null);
    setProgress(0);
    setUploaded(false);
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Fayl yükləmə (Upload)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Input:</strong> <code>&lt;input type=&quot;file&quot;&gt;</code> – brauzer fayl seçim pəncərəsi açır. <code>onChange</code> ilə seçilmiş fayl (<code>event.target.files[0]</code>) əldə edilir.</li>
            <li><strong>Önizləmə:</strong> Şəkil üçün <code>FileReader</code> və <code>readAsDataURL()</code> – nəticə <code>img src</code> kimi göstərilir.</li>
            <li><strong>Tərəqqi:</strong> Real upload-da <code>XMLHttpRequest</code> və ya <code>fetch</code> ilə <code>progress</code> hadisəsi dinlənilir; demoda <code>setInterval</code> ilə simulyasiya.</li>
            <li><strong>Vanilla JS:</strong> Eyni <code>input type=&quot;file&quot;</code>, <code>FileReader</code>, DOM-da progress bar və preview elementləri yenilənir.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)', maxWidth: 420 }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – fayl yükləmə</h3>
          <input ref={inputRef} type="file" className="form-control mb-3" accept="image/*,.pdf" onChange={handleFile} />
          {preview && (
            <div className="mb-3">
              <img src={preview} alt="Önizləmə" style={{ maxWidth: '100%', maxHeight: 200, objectFit: 'contain', borderRadius: 8 }} />
            </div>
          )}
          {file && !preview && <p className="text-muted small mb-2">Fayl: {file.name}</p>}
          {file && (
            <>
              <div className="progress mb-2" style={{ height: 8 }}>
                <motion.div className="progress-bar bg-success" role="progressbar" style={{ width: `${progress}%` }} />
              </div>
              <div className="d-flex gap-2">
                <motion.button type="button" className="btn btn-jewel-teal btn-sm" whileTap={{ scale: 0.98 }} onClick={simulateUpload} disabled={uploaded}>Yüklə (simulyasiya)</motion.button>
                <motion.button type="button" className="btn btn-outline-secondary btn-sm" whileTap={{ scale: 0.98 }} onClick={clearFile}>Təmizlə</motion.button>
              </div>
              {uploaded && <p className="text-success small mt-2 mb-0">Yükləndi.</p>}
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Upload;
