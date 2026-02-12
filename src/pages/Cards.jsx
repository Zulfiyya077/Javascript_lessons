import { useState } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, name: 'Notebook', price: 25, image: '📓' },
  { id: 2, name: 'Kalkulyator', price: 15, image: '🧮' },
  { id: 3, name: 'Stolüstü lampa', price: 45, image: '💡' },
];

const Cards = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Kartlar (Cards)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Məlumat:</strong> Hər kart üçün məlumat (başlıq, qiymət, şəkil) massivdə və ya API-dan gəlir.</li>
            <li><strong>Dinamik render:</strong> <code>items.map(item =&gt; &lt;div className=&quot;card&quot;&gt;...&lt;/div&gt;)</code> – hər element üçün eyni quruluş, fərqli məzmun.</li>
            <li><strong>Klik hadisəsi:</strong> Kart seçildikdə <code>onClick</code> ilə state yenilənir (məs. seçilmiş id), detallar göstərilir.</li>
            <li><strong>Vanilla JS:</strong> <code>createElement</code> ilə kart div-i, içində img, h3, p; <code>addEventListener</code> ilə klik.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – məhsul kartları</h3>
          <div className="row g-3">
            {PRODUCTS.map((p, i) => (
              <motion.div key={p.id} className="col-md-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <motion.div
                  className="card h-100 shadow-sm cursor-pointer"
                  style={{ border: selected === p.id ? '3px solid var(--jewel-teal)' : '1px solid #dee2e6', cursor: 'pointer' }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelected(selected === p.id ? null : p.id)}
                >
                  <div className="card-body text-center">
                    <div className="display-4 mb-2">{p.image}</div>
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text text-muted mb-2">{p.price} AZN</p>
                    <span className="badge bg-jewel-teal">{selected === p.id ? 'Seçildi' : 'Seç'}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
          {selected && <p className="mt-3 mb-0 text-muted">Seçilmiş: {PRODUCTS.find(p => p.id === selected)?.name}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
