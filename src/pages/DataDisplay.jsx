import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MOCK_USERS = [
  { id: 1, name: 'Aysel', email: 'aysel@mail.az', role: 'Admin' },
  { id: 2, name: 'Rəşad', email: 'rashad@mail.az', role: 'İstifadəçi' },
  { id: 3, name: 'Leyla', email: 'leyla@mail.az', role: 'Editor' },
];

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(MOCK_USERS);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Data göstərmə (Data Display)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Məlumat mənbəyi:</strong> API (<code>fetch</code>), lokal massiv və ya state. Məlumat adətən massiv/obyekt kimi saxlanır.</li>
            <li><strong>Yüklənmə vəziyyəti:</strong> <code>loading</code> true/false – yüklənərkən &quot;Loading...&quot; göstərmək.</li>
            <li><strong>Cədvəl/siyahı:</strong> <code>data.map(item =&gt; &lt;tr&gt;...&lt;/tr&gt;)</code> ilə hər element üçün sətir yaradılır.</li>
            <li><strong>Vanilla JS:</strong> <code>fetch()</code> ilə məlumat alıb, <code>createElement</code> və <code>appendChild</code> ilə cədvəl qurmaq.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – istifadəçi cədvəli</h3>
          {loading ? (
            <p className="mb-0 text-muted">Yüklənir...</p>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead style={{ backgroundColor: 'var(--jewel-teal)', color: 'white' }}>
                  <tr>
                    <th>ID</th>
                    <th>Ad</th>
                    <th>Email</th>
                    <th>Rol</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, i) => (
                    <motion.tr key={user.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default DataDisplay;
