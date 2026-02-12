import { useState } from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, name: 'Köməkçi', price: 12 },
  { id: 2, name: 'Çanta', price: 35 },
  { id: 3, name: 'Qələm', price: 2 },
];

const Shopping = () => {
  const [cart, setCart] = useState([]);

  const add = (p) => {
    setCart((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...prev, { ...p, qty: 1 }];
    });
  };

  const remove = (id) => {
    setCart((prev) => prev.filter((x) => x.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Alış-veriş (Shopping / Səbət)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>Səbət state:</strong> <code>cart</code> – massiv, hər element &#123; id, name, price, qty &#125;. Məhsul əlavə edəndə ya yeni element daxil edilir, ya mövcudun <code>qty</code> artırılır.</li>
            <li><strong>Əlavə et:</strong> <code>add(product)</code> – cart-da bu id varsa qty+1, yoxdursa <code>[...cart, &#123; ...product, qty: 1 &#125;]</code>.</li>
            <li><strong>Sil:</strong> <code>remove(id)</code> – <code>cart.filter(item =&gt; item.id !== id)</code>.</li>
            <li><strong>Cəmi:</strong> <code>cart.reduce((sum, item) =&gt; sum + item.price * item.qty, 0)</code>.</li>
            <li><strong>Vanilla JS:</strong> Eyni məntiq; səbət massivi və funksiyalar; DOM-da siyahı <code>innerHTML</code> və ya <code>createElement</code> ilə yenilənir.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə – məhsullar və səbət</h3>
          <div className="row">
            <div className="col-md-7">
              <div className="row g-3">
                {PRODUCTS.map((p) => (
                  <motion.div key={p.id} className="col-12 col-sm-6" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <div className="card shadow-sm border">
                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                          <h6 className="mb-0">{p.name}</h6>
                          <small className="text-muted">{p.price} AZN</small>
                        </div>
                        <motion.button type="button" className="btn btn-jewel-teal btn-sm" whileTap={{ scale: 0.95 }} onClick={() => add(p)}>Səbətə əlavə et</motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="col-md-5 mt-4 mt-md-0">
              <div className="card bg-light">
                <div className="card-body">
                  <h5 className="card-title">Səbət</h5>
                  {cart.length === 0 ? (
                    <p className="text-muted mb-0">Səbət boşdur.</p>
                  ) : (
                    <>
                      <ul className="list-group list-group-flush mb-3">
                        {cart.map((item) => (
                          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center px-0">
                            <span>{item.name} × {item.qty}</span>
                            <span>{item.price * item.qty} AZN <motion.button type="button" className="btn btn-link btn-sm text-danger p-0 ms-1" onClick={() => remove(item.id)}>×</motion.button></span>
                          </li>
                        ))}
                      </ul>
                      <p className="mb-0 fw-bold">Cəmi: {total} AZN</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Shopping;
