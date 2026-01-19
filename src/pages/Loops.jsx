import { useState } from 'react';
import { motion } from 'framer-motion';

const Loops = () => {
  const [code, setCode] = useState(`// Loops - Repeating operations

// ========== 1. FOR LOOP ==========
console.log("=== FOR LOOP ===");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// Countdown
console.log("\\n=== Countdown ===");
for (let i = 5; i > 0; i--) {
  console.log(i);
}

// Step by step
console.log("\\n=== Step by 2 ===");
for (let i = 0; i < 10; i += 2) {
  console.log("Even number:", i);
}

// ========== 2. WHILE LOOP ==========
console.log("\\n=== WHILE LOOP ===");
let count = 0;
while (count < 3) {
  console.log("Count:", count);
  count++;
}

// ========== 3. DO-WHILE LOOP ==========
console.log("\\n=== DO-WHILE LOOP ===");
let count2 = 0;
do {
  console.log("Do-while:", count2);
  count2++;
} while (count2 < 3);

// ========== 4. FOR...OF LOOP (For arrays) ==========
console.log("\\n=== FOR...OF LOOP ===");
let fruits = ["apple", "pear", "banana"];
for (let fruit of fruits) {
  console.log("Fruit:", fruit);
}

// With index
for (let [index, fruit] of fruits.entries()) {
  console.log(index + ": " + fruit);
}

// ========== 5. FOR...IN LOOP (For objects) ==========
console.log("\\n=== FOR...IN LOOP ===");
let person = {
  name: "Ali",
  age: 25,
  city: "Baku"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// ========== 6. NESTED LOOPS ==========
console.log("\\n=== NESTED LOOPS ===");
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
}

// ========== 7. BREAK - Stop loop ==========
console.log("\\n=== BREAK ===");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // Stop loop
  }
  console.log("i:", i);
}

// ========== 8. CONTINUE - Skip to next iteration ==========
console.log("\\n=== CONTINUE ===");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number:", i);
}

// ========== 9. FOR EACH (Array method) ==========
console.log("\\n=== FOR EACH ===");
fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});

// ========== 10. REAL-WORLD EXAMPLE ==========
console.log("\\n=== REAL-WORLD EXAMPLE ===");
let products = [
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Laptop", price: 1200 }
];

let totalPrice = 0;
for (let product of products) {
  totalPrice += product.price;
  console.log(product.name + ": " + product.price + " AZN");
}
console.log("Total price:", totalPrice, "AZN");`);

  const [output, setOutput] = useState('');

  const runCode = () => {
    try {
      let result = '';
      const originalLog = console.log;
      console.log = (...args) => {
        result += args.join(' ') + '\n';
      };
      eval(code);
      console.log = originalLog;
      setOutput(result || 'Code executed successfully');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const loops = [
    { name: 'for', desc: 'Məlum sayda təkrarlama, indeks lazımdırsa', use: 'İndeks lazımdırsa' },
    { name: 'while', desc: 'Şərt doğru olduqca təkrarlama', use: 'Şərt əvvəlcə məlum deyilsə' },
    { name: 'do-while', desc: 'Əvvəlcə icra, sonra şərt yoxlama', use: 'Ən azı bir dəfə icra olmalıdır' },
    { name: 'for...of', desc: 'Massiv elementləri üzərində döngü', use: 'Massivlər üçün (müasir)' },
    { name: 'for...in', desc: 'Obyekt xassələri üzərində döngü', use: 'Obyektlər üçün' },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        Döngülər (Loops)
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Döngülər haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Döngülər</strong> eyni kod blokunu bir neçə dəfə icra etmək üçün istifadə olunur. 
              JavaScript-də müxtəlif döngü növləri var və hər birinin öz istifadə sahəsi var. 
              Düzgün döngü seçimi kodun performansını və oxunaqlığını artırır. Döngülər massivlərlə, 
              obyektlərlə işləmək, təkrarlanan əməliyyatları həyata keçirmək və məlumatları emal etmək 
              üçün əsas vasitələrdir. Müasir JavaScript-də funksional metodlar (map, filter, forEach) 
              də döngülərin alternativi kimi istifadə olunur.
            </p>

            <div className="row g-3 mt-3 mb-4">
              {loops.map((loop, index) => (
                <motion.div 
                  key={loop.name}
                  className="col-md-6 col-lg-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card h-100 border-jewel-teal" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h5 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>
                        <code>{loop.name}</code>
                      </h5>
                      <p className="small mb-2" style={{ lineHeight: '1.6' }}>{loop.desc}</p>
                      <small className="text-muted d-block">{loop.use}</small>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Döngü kontrolü:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><code>break</code> - Döngünü tamamilə dayandırır, döngüdən çıxır</li>
                  <li><code>continue</code> - Cari iterasiyanı atlayır, növbəti iterasiyaya keçir</li>
                  <li><code>return</code> - Funksiyadan çıxır (döngünü də dayandırır)</li>
                  <li><code>label</code> - Döngülərə etiket vermək, nested döngülərdə faydalıdır</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>Hansı döngünü seçməli?</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>for</strong> - İndeks lazımdırsa, məlum sayda iterasiya</li>
                  <li><strong>for...of</strong> - Massiv elementləri üçün (müasir və təmiz)</li>
                  <li><strong>for...in</strong> - Obyekt xassələri üçün</li>
                  <li><strong>while</strong> - Şərt əvvəlcə məlum deyilsə</li>
                  <li><strong>forEach</strong> - Massiv metodları ilə funksional üslub</li>
                </ul>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Sonsuz döngülərdən qorunun:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li>Həmişə döngü şərtini yoxlayın - şərt dəyişməlidir</li>
                <li>Dəyişənlərin düzgün artırıldığından əmin olun (i++, count++ və s.)</li>
                <li>Break və continue-nu düzgün istifadə edin</li>
                <li>Test edərkən sonsuz döngüləri axtarın - brauzer dona bilər</li>
                <li>While döngülərində xüsusilə diqqətli olun - şərt həmişə false olmalıdır</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Performans müqayisəsi:</h5>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead style={{ backgroundColor: 'var(--jewel-teal)', color: 'white' }}>
                    <tr>
                      <th style={{ fontWeight: '600' }}>Döngü</th>
                      <th style={{ fontWeight: '600' }}>Sürət</th>
                      <th style={{ fontWeight: '600' }}>Oxunaqlıq</th>
                      <th style={{ fontWeight: '600' }}>İstifadə</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>for</strong></td>
                      <td>Çox sürətli</td>
                      <td>Yaxşı</td>
                      <td>İndeks lazımdırsa</td>
                    </tr>
                    <tr>
                      <td><strong>for...of</strong></td>
                      <td>Sürətli</td>
                      <td>Əla</td>
                      <td>Massivlər üçün</td>
                    </tr>
                    <tr>
                      <td><strong>forEach</strong></td>
                      <td>Orta</td>
                      <td>Yaxşı</td>
                      <td>Funksional üslub</td>
                    </tr>
                    <tr>
                      <td><strong>while</strong></td>
                      <td>Sürətli</td>
                      <td>Orta</td>
                      <td>Şərt əsaslı</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="card shadow-lg card-rich-gold" variants={itemVariants}>
          <motion.div 
            className="card-header text-white"
            style={{ backgroundColor: 'var(--rich-gold)', fontWeight: '600', fontSize: '1.25rem' }}
            whileHover={{ scale: 1.01 }}
          >
            Code Practice
          </motion.div>
          <div className="card-body p-4">
            <div className="mb-3">
              <label htmlFor="code-input" className="form-label fw-bold mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                Kodunuzu yazın:
              </label>
              <textarea
                id="code-input"
                className="form-control font-monospace"
                rows="30"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                style={{ 
                  fontSize: '14px', 
                  backgroundColor: '#f8f9fa',
                  border: '2px solid var(--rich-gold)',
                  borderRadius: '8px',
                  padding: '15px'
                }}
              />
            </div>
            <motion.button 
              className="btn btn-rich-gold btn-lg mb-3" 
              onClick={runCode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: '600', padding: '12px 30px' }}
            >
              Kodu İcra Et
            </motion.button>
            {output && (
              <motion.div 
                className="alert"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ 
                  backgroundColor: 'rgba(153, 102, 204, 0.1)', 
                  borderLeft: '4px solid var(--amethyst-purple)',
                  borderRadius: '8px'
                }}
              >
                <strong className="text-amethyst-purple" style={{ fontSize: '1.1rem' }}>Nəticə:</strong>
                <pre className="mb-0 mt-2 bg-white p-3 rounded" style={{ 
                  fontSize: '14px',
                  border: '1px solid #dee2e6',
                  overflowX: 'auto'
                }}>{output}</pre>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loops;
