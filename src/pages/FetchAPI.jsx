import { useState } from 'react';
import { motion } from 'framer-motion';

const FetchAPI = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDemo = async () => {
    setLoading(true);
    setError('');
    setData(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Fetch API
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Nədir?</h3>
          <p className="mb-3" style={{ lineHeight: '1.8' }}>
            <strong>Fetch API</strong> – brauzerdə HTTP sorğuları (GET, POST və s.) göndərmək üçün native JavaScript API-dır. <code>fetch(url)</code> Promise qaytarır; cavabı <code>.json()</code>, <code>.text()</code> ilə oxumaq olar.
          </p>
          <ul style={{ lineHeight: '2' }}>
            <li><code>fetch(url)</code> – GET sorğusu; default GET-dir.</li>
            <li><code>fetch(url, &#123; method: 'POST', body: JSON.stringify(obj), headers: &#123; 'Content-Type': 'application/json' &#125; &#125;)</code> – POST.</li>
            <li><code>response.ok</code> – status 200–299 olduqda true; <code>response.status</code> – HTTP status kodu.</li>
            <li><code>await response.json()</code> – cavabı JSON kimi parse etmək; <code>await response.text()</code> – mətn.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – JSONPlaceholder</h3>
          <motion.button type="button" className="btn btn-jewel-teal mb-3" disabled={loading} whileTap={{ scale: 0.98 }} onClick={fetchDemo}>{loading ? 'Yüklənir...' : 'Məlumat gətir (GET)'}</motion.button>
          {error && <div className="alert alert-danger py-2">{error}</div>}
          {data && (
            <div className="p-3 rounded bg-light">
              <strong>Post #{data.id}</strong>
              <h6 className="mt-2">{data.title}</h6>
              <p className="mb-0 small text-muted">{data.body}</p>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>JS kodu</h3>
          <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '12px' }}>{`// GET
const res = await fetch('https://api.example.com/data');
const data = await res.json();

// Xəta yoxlaması
if (!res.ok) throw new Error('Sorğu uğursuz: ' + res.status);

// POST
await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Ali', age: 25 })
});`}</pre>
        </div>
      </motion.div>
    </div>
  );
};

export default FetchAPI;
