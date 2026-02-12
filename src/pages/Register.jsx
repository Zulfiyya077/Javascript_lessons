import { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Ad boş ola bilməz');
      return;
    }
    if (!email.trim()) {
      setError('Email boş ola bilməz');
      return;
    }
    if (password.length < 4) {
      setError('Şifrə ən azı 4 simvol olmalıdır');
      return;
    }
    if (password !== confirm) {
      setError('Şifrələr üst-üstə düşmür');
      return;
    }
    setSuccess(true);
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Qeydiyyat (Register)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>State:</strong> <code>name</code>, <code>email</code>, <code>password</code>, <code>confirm</code> – bütün inputlar state ilə idarə olunur.</li>
            <li><strong>Validasiya:</strong> Boş sahələr, qısa şifrə, şifrə təkrarı uyğunsuzluğu yoxlanır; xəta mesajı state-də göstərilir.</li>
            <li><strong>Form göndərmə:</strong> <code>onSubmit</code> içində <code>preventDefault()</code> ilə səhifə yenilənməsi dayandırılır; yalnız JS ilə işlənir.</li>
            <li><strong>Vanilla JS:</strong> Hər input üçün <code>addEventListener('input', ...)</code> və ya <code>change</code>; formda <code>submit</code> dinləyib validasiya və göndərmə.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)', maxWidth: 420 }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – qeydiyyat formu</h3>
          {success ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="alert alert-success">Qeydiyyat tamamlandı (demo).</motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Ad</label>
                <input type="text" className="form-control" placeholder="Adınız" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Şifrə</label>
                <input type="password" className="form-control" placeholder="••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Şifrə təkrar</label>
                <input type="password" className="form-control" placeholder="••••••" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
              </div>
              {error && <div className="alert alert-danger py-2">{error}</div>}
              <motion.button type="submit" className="btn btn-jewel-teal w-100" whileTap={{ scale: 0.98 }}>Qeydiyyat</motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
