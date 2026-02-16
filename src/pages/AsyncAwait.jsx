import { useState } from 'react';
import { motion } from 'framer-motion';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AsyncAwait = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const runDemo = async () => {
    setLoading(true);
    setResult('Başladı...');
    try {
      await delay(600);
      setResult('1-ci addım tamamlandı');
      await delay(600);
      setResult('2-ci addım tamamlandı');
      await delay(600);
      setResult('Hamısı tamamlandı.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Async / Await
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Nədir?</h3>
          <p className="mb-3" style={{ lineHeight: '1.8' }}>
            <strong>async/await</strong> – Promise əsaslı asinxron kodu sinxron kimi oxunaqlı yazmaq üçündür. <code>async</code> funksiya həmişə Promise qaytarır; <code>await</code> Promise bitənə qədər gözləyib nəticəni qaytarır.
          </p>
          <ul style={{ lineHeight: '2' }}>
            <li><code>async function fn() &#123; ... &#125;</code> – funksiya asinxron olur; return dəyəri avtomatik Promise olur.</li>
            <li><code>await promise</code> – yalnız <code>async</code> funksiya içində; Promise həll olanadək gözləyir, sonra dəyəri qaytarır.</li>
            <li><code>try/catch</code> – <code>await</code> zamanı xəta üçün; Promise reject olarsa catch-ə düşür.</li>
            <li>Bir neçə <code>await</code> ardıcıl yazılsa, hər biri bitəndən sonra növbəti icra olunur (ardıcıl gözləyiş).</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – ardıcıl addımlar</h3>
          <motion.button type="button" className="btn btn-jewel-teal mb-3" disabled={loading} whileTap={{ scale: 0.98 }} onClick={runDemo}>{loading ? 'Gözlə...' : 'Async demo işə sal'}</motion.button>
          <div className="p-3 rounded bg-light">{result || '—'}</div>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>JS kodu</h3>
          <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '12px' }}>{`async function getData() {
  try {
    const res = await fetch('/api/users');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

// await yalnız async içində
const run = async () => {
  await delay(1000);
  console.log('1 saniyə keçdi');
};`}</pre>
        </div>
      </motion.div>
    </div>
  );
};

export default AsyncAwait;
