import { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim()) {
      setError('Email boş ola bilməz');
      return;
    }
    if (!password || password.length < 4) {
      setError('Şifrə ən azı 4 simvol olmalıdır');
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Login (Daxil ol)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>State:</strong> <code>email</code>, <code>password</code> – input dəyərləri; <code>error</code> – xəta mesajı.</li>
            <li><strong>Kontrol bağlama:</strong> <code>value=&#123;email&#125;</code> və <code>onChange=&#123;e =&gt; setEmail(e.target.value)&#125;</code> ilə inputlar state ilə sinxron olur.</li>
            <li><strong>Validasiya:</strong> <code>form onSubmit</code> zamanı boş və ya qısa şifrə yoxlanır; uyğunsuzluqda <code>error</code> doldurulur.</li>
            <li><strong>Vanilla JS:</strong> <code>getElementById</code> ilə inputlar, <code>.value</code> oxumaq, <code>addEventListener('submit', ...)</code> ilə formu dayandırmaq (<code>preventDefault</code>).</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)', maxWidth: 420 }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – login formu</h3>
          {success ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="alert alert-success">Daxil oldunuz (demo).</motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Şifrə</label>
                <input type="password" className="form-control" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              {error && <div className="alert alert-danger py-2">{error}</div>}
              <motion.button type="submit" className="btn btn-jewel-teal w-100" whileTap={{ scale: 0.98 }}>Daxil ol</motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
