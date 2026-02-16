import { useState } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState(null);
  const [op, setOp] = useState(null);
  const [justResult, setJustResult] = useState(false);
  const [opJustPressed, setOpJustPressed] = useState(false);

  const digit = (d) => {
    if (opJustPressed) {
      setDisplay(d === '.' ? '0.' : d);
      setOpJustPressed(false);
      return;
    }
    if (justResult) {
      setDisplay(d === '0' ? '0' : d);
      setJustResult(false);
      return;
    }
    setDisplay((v) => {
      if (d === '.') return v.includes('.') ? v : (v === '0' ? '0.' : v + '.');
      if (v === '0') return d;
      return v + d;
    });
  };
  const clear = () => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
    setJustResult(false);
    setOpJustPressed(false);
  };
  const operation = (nextOp) => {
    const num = parseFloat(display) || 0;
    if (prev == null) {
      setPrev(num);
      setOp(nextOp);
      setOpJustPressed(true);
      setJustResult(false);
    } else {
      let result;
      if (op === '+') result = prev + num;
      else if (op === '-') result = prev - num;
      else if (op === '×') result = prev * num;
      else if (op === '÷') result = num === 0 ? 'Error' : prev / num;
      else result = num;
      setDisplay(String(result));
      setPrev(nextOp === '=' ? null : result);
      setOp(nextOp === '=' ? null : nextOp);
      setJustResult(nextOp === '=');
      setOpJustPressed(nextOp !== '=');
    }
  };

  const handleKey = (key) => {
    if (key === 'C') clear();
    else if (key === '.') digit('.');
    else if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key)) digit(key);
    else if (['+', '-', '×', '÷'].includes(key)) operation(key);
    else if (key === '=') operation('=');
  };

  return (
    <div className="container-fluid">
      <motion.h1 className="mb-4 text-jewel-teal" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} style={{ fontWeight: 'bold', fontSize: '2.5rem' }}>
        Kalkulyator
      </motion.h1>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>JS ilə necə qurulur?</h3>
          <ul style={{ lineHeight: '2' }}>
            <li><strong>State:</strong> <code>display</code> – ekrandakı rəqəm (string), <code>prev</code> – əvvəlki ədəd, <code>op</code> – seçilmiş operator (+, -, ×, ÷).</li>
            <li><strong>Rəqəm daxili:</strong> Düymə klikində <code>display</code> yenilənir (əlavə et və ya &quot;0&quot;ı əvəz et).</li>
            <li><strong>Operator:</strong> +, -, ×, ÷ seçildikdə cari <code>display</code> ədəd kimi saxlanır, növbəti rəqəm daxil edilir; &quot;=&quot; basanda <code>prev op display</code> hesablanır.</li>
            <li><strong>Vanilla JS:</strong> Eyni məntiq; dəyişənlər və <code>element.textContent</code> / <code>element.value</code> ilə ekran yenilənir.</li>
          </ul>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ borderLeft: '4px solid var(--rich-gold)', maxWidth: 320 }}>
        <div className="card-body p-3">
          <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Praktik nümunə</h3>
          <div className="bg-dark text-end text-white rounded p-3 mb-3 font-monospace" style={{ fontSize: '1.75rem', minHeight: 50 }}>{display}</div>
          <div className="row g-2">
            {['7', '8', '9', '÷', '4', '5', '6', '×', '1', '2', '3', '-', '0', '.', 'C', '=', '+'].map((b) => (
              <div key={b} className="col-3">
                <motion.button type="button" className="btn w-100 py-3 rounded" style={{ backgroundColor: ['+', '-', '×', '÷', '='].includes(b) ? 'var(--rich-gold)' : b === 'C' ? '#6c757d' : '#495057', color: '#fff' }} whileTap={{ scale: 0.95 }} onClick={() => handleKey(b)}>{b}</motion.button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div className="card mb-4 shadow-lg card-jewel-teal" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="card-body p-4">
          <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.25rem', fontWeight: '600' }}>Praktik nümunə – HTML və JS kodu</h3>
          <p className="mb-2 small text-muted">HTML (əsas quruluş):</p>
          <pre className="bg-dark text-light p-3 rounded small mb-4" style={{ fontSize: '12px', overflowX: 'auto' }}>{`<div class="calculator">
  <div class="display" id="display">0</div>
  <div class="buttons">
    <button data-key="7">7</button>
    <button data-key="8">8</button>
    <button data-key="+">+</button>
    <button data-key="-">-</button>
    <button data-key="=">=</button>
    <!-- ... digər düymələr -->
  </div>
</div>`}</pre>
          <p className="mb-2 small text-muted">JavaScript (əsas məntiq):</p>
          <pre className="bg-dark text-light p-3 rounded small" style={{ fontSize: '12px', overflowX: 'auto' }}>{`let display = document.getElementById('display');
let prev = null, op = null;

function digit(d) {
  display.textContent = display.textContent === '0' ? d : display.textContent + d;
}
function operation(nextOp) {
  let num = parseFloat(display.textContent) || 0;
  if (prev == null) { prev = num; op = nextOp; display.textContent = '0'; }
  else {
    let result = op === '+' ? prev + num : op === '-' ? prev - num
      : op === '×' ? prev * num : num === 0 ? 'Error' : prev / num;
    display.textContent = result;
    prev = nextOp === '=' ? null : result;
    op = nextOp === '=' ? null : nextOp;
  }
}
document.querySelectorAll('[data-key]').forEach(btn => {
  btn.addEventListener('click', () => {
    let k = btn.getAttribute('data-key');
    if (k === 'C') { display.textContent = '0'; prev = op = null; }
    else if (/[0-9.]/.test(k)) digit(k);
    else operation(k);
  });
});`}</pre>
        </div>
      </motion.div>
    </div>
  );
};

export default Calculator;
