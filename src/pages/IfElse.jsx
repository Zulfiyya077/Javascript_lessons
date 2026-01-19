import { useState } from 'react';
import { motion } from 'framer-motion';

const IfElse = () => {
  const [code, setCode] = useState(`// if-else statements - Conditional logic

// ========== 1. SIMPLE IF ==========
let age = 18;

if (age >= 18) {
  console.log("Adult - you can get a driver's license");
}

// ========== 2. IF-ELSE ==========
let score = 75;

if (score >= 50) {
  console.log("Passed!");
} else {
  console.log("Failed!");
}

// ========== 3. IF-ELSE IF-ELSE ==========
let grade = 85;

if (grade >= 90) {
  console.log("Grade: A (Excellent)");
} else if (grade >= 80) {
  console.log("Grade: B (Good)");
} else if (grade >= 70) {
  console.log("Grade: C (Average)");
} else if (grade >= 60) {
  console.log("Grade: D (Poor)");
} else {
  console.log("Grade: F (Failed)");
}

// ========== 4. NESTED IF ==========
let weather = "sunny";
let temperature = 25;

if (weather === "sunny") {
  if (temperature > 20) {
    console.log("Perfect weather for the beach!");
  } else {
    console.log("Sunny but cold");
  }
} else {
  console.log("Better stay home");
}

// ========== 5. LOGICAL OPERATORS ==========
let name = "Ali";
let age2 = 25;

// AND (&&) - Both must be true
if (name.length > 3 && age2 >= 18) {
  console.log("Name is long and adult");
}

// OR (||) - At least one must be true
let day = "sunday";
if (day === "saturday" || day === "sunday") {
  console.log("Weekend!");
}

// NOT (!) - Inversion
let isActive = false;
if (!isActive) {
  console.log("User is not active");
}

// ========== 6. TERNARY OPERATOR ==========
let status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Nested ternary
let message = grade >= 90 ? "Excellent!" : grade >= 70 ? "Good" : "Needs improvement";
console.log("Message:", message);

// ========== 7. COMPARISON OPERATORS ==========
let a = 5;
let b = "5";

console.log("a == b:", a == b);   // true (type coercion)
console.log("a === b:", a === b); // false (strict comparison)
console.log("a != b:", a != b);   // false
console.log("a !== b:", a !== b);  // true

// ========== 8. REAL-WORLD EXAMPLE ==========
let user = {
  name: "Aysel",
  age: 20,
  balance: 150,
  premium: false
};

if (user.age >= 18 && user.balance > 100) {
  if (user.premium) {
    console.log("Premium user - 20% discount!");
  } else {
    console.log("Standard user - 10% discount!");
  }
} else {
  console.log("No discount");
}`);

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

  const operators = [
    { symbol: '==', name: 'Bərabərdir', desc: 'Type coercion ilə müqayisə', example: '5 == "5" → true' },
    { symbol: '===', name: 'Ciddi bərabərdir', desc: 'Tip və dəyər müqayisəsi', example: '5 === "5" → false' },
    { symbol: '!=', name: 'Bərabər deyil', desc: 'Type coercion ilə müqayisə', example: '5 != "6" → true' },
    { symbol: '!==', name: 'Ciddi bərabər deyil', desc: 'Tip və ya dəyər fərqlidir', example: '5 !== "5" → true' },
    { symbol: '>', name: 'Böyükdür', desc: 'Rəqəmsal müqayisə', example: '10 > 5 → true' },
    { symbol: '<', name: 'Kiçikdir', desc: 'Rəqəmsal müqayisə', example: '5 < 10 → true' },
    { symbol: '>=', name: 'Böyük və ya bərabər', desc: 'Rəqəmsal müqayisə', example: '10 >= 10 → true' },
    { symbol: '<=', name: 'Kiçik və ya bərabər', desc: 'Rəqəmsal müqayisə', example: '5 <= 10 → true' },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        if-else İfadələri
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Şərti ifadələr haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>if-else</strong> ifadələri proqramlaşdırmada ən vacib konseptlərdən biridir. 
              Onlar şərtlərə əsasən kod bloklarını icra etməyə imkan verir. JavaScript-də müxtəlif 
              şərti ifadə növləri var: <code>if</code>, <code>if-else</code>, <code>if-else if-else</code>, 
              və <code>ternary operator</code>. Şərti ifadələr proqramın dinamik davranışını təmin edir, 
              müxtəlif ssenarilərə uyğun reaksiya verməyə imkan verir. Düzgün istifadə olunduqda, 
              kodun oxunaqlığını və təhlükəsizliyini artırır.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>if-else-in üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Dinamik davranış</strong> - Şərtlərə əsasən fərqli kod bloklarını icra etmək</li>
                  <li><strong>Məntiqi qərarlar</strong> - Proqramın qərar qəbul etmə qabiliyyəti</li>
                  <li><strong>İstifadəçi interaksiyaları</strong> - İstifadəçi hərəkətlərinə reaksiya vermək</li>
                  <li><strong>Xəta yoxlamaları</strong> - Şərtlərə əsasən xətaları idarə etmək</li>
                  <li><strong>Şərti məzmun</strong> - UI-da şərtlərə əsasən məzmun göstərmək</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>İstifadə halları:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Form validasiyası</strong> - İstifadəçi məlumatlarını yoxlamaq</li>
                  <li><strong>İstifadəçi rolları</strong> - Rollara əsasən icazələri idarə etmək</li>
                  <li><strong>Qiymət hesablamaları</strong> - Şərtlərə əsasən endirimlər, vergilər</li>
                  <li><strong>Şərti UI göstərmə</strong> - React, Vue kimi framework-lərdə</li>
                  <li><strong>Xəta idarəetməsi</strong> - Try-catch bloklarında</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Müqayisə operatorları:</h5>
              <div className="row g-2">
                {operators.map((op, index) => (
                  <motion.div 
                    key={op.symbol}
                    className="col-md-6 col-lg-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                      <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                        <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}><code>{op.symbol}</code></h6>
                        <p className="small mb-1"><strong>{op.name}</strong></p>
                        <p className="small text-muted mb-1">{op.desc}</p>
                        <code className="small d-block">{op.example}</code>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><code>==</code> vs <code>===</code>: Həmişə <code>===</code> istifadə edin (ciddi müqayisə) - 
                type coercion gözlənilməz nəticələr verə bilər</li>
                <li>Truthy və Falsy dəyərlər: <code>0</code>, <code>""</code>, <code>null</code>, 
                <code>undefined</code>, <code>NaN</code>, <code>false</code> falsy-dir, qalanları truthy-dir</li>
                <li>Ternary operator qısa ifadələr üçün yaxşıdır, mürəkkəb məntiq üçün if-else istifadə edin</li>
                <li>Nested if-lərdən qaçının - kodun oxunaqlığını azaldır, əvəzinə early return istifadə edin</li>
                <li>Logical operators (&&, ||) qısa dövrə (short-circuit) işləyir - ilk nəticə məlum olduqda dayanır</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Sintaksis nümunələri:</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong>Sadə if və if-else:</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`if (condition) {
  // code
}

if (condition) {
  // code
} else {
  // code
}`}
                    </pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong>Ternary operator:</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`condition ? value1 : value2

// Example
let status = age >= 18 
  ? "Adult" 
  : "Minor";`}
                    </pre>
                  </div>
                </div>
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

export default IfElse;
