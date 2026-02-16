import { useState } from 'react';
import { motion } from 'framer-motion';

const EventHandling = () => {
  const [log, setLog] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const addLog = (msg) => setLog((prev) => [...prev.slice(-4), `${new Date().toLocaleTimeString('az-AZ')}: ${msg}`]);

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Event Handling (Hadisə idarəetməsi)
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Nədir?</h3>
          <p className="mb-3" style={{ lineHeight: '1.8' }}>
            <strong>Event</strong> – istifadəçi və ya brauzerin yaratdığı hadisədir (klik, daxil etmə, fokus, submit və s.). <strong>Event handling</strong> – bu hadisələri dinləyib reaksiya verməkdir.
          </p>
          <ul style={{ lineHeight: '2' }}>
            <li><code>addEventListener('click', handler)</code> – hadisəni dinləmək; <code>handler</code> funksiya çağırılır.</li>
            <li><code>element.onclick = function() &#123; ... &#125;</code> – qısa yazılış; yalnız bir handler.</li>
            <li><code>event.preventDefault()</code> – form submit və ya link kimi default davranışı dayandırmaq.</li>
            <li><code>event.target</code> – hadisənin baş verdiyi element; <code>event.currentTarget</code> – listener əlavə olunan element.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
        <div className="card-body p-4">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>Praktik nümunə</h3>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <motion.button type="button" className="btn btn-jewel-teal" whileTap={{ scale: 0.95 }} onClick={() => addLog('click')}>click</motion.button>
            <motion.button type="button" className="btn btn-outline-secondary" whileTap={{ scale: 0.95 }} onDoubleClick={() => addLog('dblclick')}>double click</motion.button>
            <motion.button type="button" className="btn btn-outline-secondary" whileTap={{ scale: 0.95 }} onMouseEnter={() => addLog('mouseenter')} onMouseLeave={() => addLog('mouseleave')}>hover</motion.button>
          </div>
          <input type="text" className="form-control mb-2" placeholder="Yazın – keydown/keyup" value={inputVal} onChange={(e) => setInputVal(e.target.value)} onKeyDown={() => addLog('keydown')} onKeyUp={() => addLog('keyup')} />
          <pre className="bg-dark text-light p-2 rounded small mb-0" style={{ fontSize: '12px', maxHeight: 120, overflowY: 'auto' }}>{log.length ? log.join('\n') : 'Hadisələr burada görünəcək...'}</pre>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>HTML və JS kodu</h3>
          <pre className="bg-dark text-light p-3 rounded small mb-2" style={{ fontSize: '12px' }}>{`<button id="btn">Kliklə</button>
<script>
  document.getElementById('btn').addEventListener('click', function(e) {
    console.log('Kliklənildi', e.target);
  });
</script>`}</pre>
          <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '12px' }}>{`// Bir neçə hadisə növü:
element.addEventListener('click', fn);
element.addEventListener('keyup', fn);
element.addEventListener('submit', fn);  // form
element.addEventListener('change', fn); // input/select`}</pre>
        </div>
      </motion.div>
    </div>
  );
};

export default EventHandling;
