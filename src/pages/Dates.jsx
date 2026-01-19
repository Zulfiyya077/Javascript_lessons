import { useState } from 'react';
import { motion } from 'framer-motion';

const Dates = () => {
  const [code, setCode] = useState(`// Dates - Working with dates and time

// ========== 1. CURRENT DATE ==========
let now = new Date();
console.log("Current date:", now);
console.log("ISO format:", now.toISOString());

// ========== 2. CREATE SPECIFIC DATE ==========
// new Date(year, month, day, hour, minute, second, millisecond)
// Month: 0-11 (0 = January, 11 = December)
let newYear = new Date(2024, 0, 1); // January 1, 2024
console.log("New Year:", newYear);

let birthday = new Date(2000, 4, 15, 10, 30); // May 15, 2000, 10:30
console.log("Birthday:", birthday);

// Date from string
let dateFromString = new Date("2024-01-15");
console.log("From string:", dateFromString);

// ========== 3. DATE METHODS - GET ==========
let today = new Date();

console.log("\\n=== Date components ===");
console.log("Year:", today.getFullYear());
console.log("Month (0-11):", today.getMonth());
console.log("Month (1-12):", today.getMonth() + 1);
console.log("Day (1-31):", today.getDate());
console.log("Day of week (0-6):", today.getDay()); // 0 = Sunday
console.log("Hour (0-23):", today.getHours());
console.log("Minute (0-59):", today.getMinutes());
console.log("Second (0-59):", today.getSeconds());
console.log("Millisecond (0-999):", today.getMilliseconds());

// UTC methods
console.log("\\n=== UTC components ===");
console.log("UTC Year:", today.getUTCFullYear());
console.log("UTC Month:", today.getUTCMonth());

// ========== 4. DATE METHODS - SET ==========
let date = new Date();
date.setFullYear(2025);
date.setMonth(5); // June (0-11)
date.setDate(20);
date.setHours(15);
date.setMinutes(30);
console.log("\\nModified date:", date);

// ========== 5. DATE OPERATIONS ==========
let today2 = new Date();
let tomorrow = new Date();
tomorrow.setDate(today2.getDate() + 1); // Add 1 day
console.log("\\nToday:", today2.toDateString());
console.log("Tomorrow:", tomorrow.toDateString());

// 7 days later
let weekLater = new Date();
weekLater.setDate(weekLater.getDate() + 7);
console.log("Week later:", weekLater.toDateString());

// ========== 6. DATE FORMATTING ==========
let formatDate = new Date();

console.log("\\n=== Formatting ===");
console.log("toDateString():", formatDate.toDateString());
console.log("toTimeString():", formatDate.toTimeString());
console.log("toISOString():", formatDate.toISOString());
console.log("toLocaleDateString():", formatDate.toLocaleDateString("az-AZ"));
console.log("toLocaleTimeString():", formatDate.toLocaleTimeString("az-AZ"));
console.log("toLocaleString():", formatDate.toLocaleString("az-AZ"));

// ========== 7. DATE COMPARISON ==========
let date1 = new Date(2024, 0, 15);
let date2 = new Date(2024, 0, 20);

console.log("\\n=== Comparison ===");
console.log("date1 > date2:", date1 > date2); // false
console.log("date1 < date2:", date1 < date2); // true

// ========== 8. CALCULATE DIFFERENCE ==========
let start = new Date(2024, 0, 1);
let end = new Date(2024, 0, 15);
let difference = end - start; // In milliseconds
let daysDifference = Math.floor(difference / (1000 * 60 * 60 * 24));
console.log("\\nDays difference:", daysDifference, "days");

// ========== 9. TIMESTAMP ==========
let timestamp = Date.now(); // Current time in milliseconds
console.log("\\nTimestamp:", timestamp);
let dateFromTimestamp = new Date(timestamp);
console.log("Date from timestamp:", dateFromTimestamp);

// ========== 10. REAL-WORLD EXAMPLE ==========
function calculateAge(birthDate) {
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
}

let birth = new Date(2000, 4, 15);
console.log("\\nAge:", calculateAge(birth), "years");`);

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

  const methods = [
    { name: 'getFullYear()', desc: 'İli qaytarır (4 rəqəmli)' },
    { name: 'getMonth()', desc: 'Ayı qaytarır (0-11), +1 etmək lazımdır' },
    { name: 'getDate()', desc: 'Günü qaytarır (1-31)' },
    { name: 'getDay()', desc: 'Həftə gününü qaytarır (0-6, 0=Bazar)' },
    { name: 'getHours()', desc: 'Saati qaytarır (0-23)' },
    { name: 'getMinutes()', desc: 'Dəqiqəni qaytarır (0-59)' },
    { name: 'setFullYear()', desc: 'İli təyin edir' },
    { name: 'setMonth()', desc: 'Ayı təyin edir (0-11)' },
    { name: 'setDate()', desc: 'Günü təyin edir' },
    { name: 'toLocaleString()', desc: 'Locale formatında string qaytarır' },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        Tarix və Vaxt (Dates)
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Date obyekti haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Date</strong> obyekti JavaScript-də tarix və vaxtla işləmək üçün istifadə olunur. 
              O, Unix epoch (1 Yanvar 1970, 00:00:00 UTC) əsasında millisaniyə ilə işləyir. 
              Date obyekti çoxlu metodlara malikdir ki, tarix və vaxtı almaq, dəyişdirmək və formatlamaq üçün istifadə olunur. 
              Tarix və vaxtla işləmək veb tətbiqlərdə çox vacibdir - istifadəçi qeydiyyatı, məhsul son istifadə tarixi, 
              yaş hesablaması, tarix filtrləri və s. üçün. Müasir proyektlərdə moment.js, date-fns, dayjs kimi 
              kitabxanalar daha rahat API təqdim edir, lakin əsas Date obyektini bilmək vacibdir.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Date obyektinin üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Tarix və vaxtı idarə etmək</strong> - Yaratmaq, dəyişdirmək, müqayisə etmək</li>
                  <li><strong>Tarix əməliyyatları</strong> - Əlavə, çıxma, fərq hesablama</li>
                  <li><strong>Tarix formatlama</strong> - Müxtəlif formatlarda göstərmək</li>
                  <li><strong>Timezone dəstəyi</strong> - UTC və local time ilə işləmək</li>
                  <li><strong>Locale formatlama</strong> - Müxtəlif dillər və regionlar üçün</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>İstifadə halları:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>İstifadəçi qeydiyyatı tarixi</strong> - Qeydiyyat vaxtını saxlamaq</li>
                  <li><strong>Məhsul son istifadə tarixi</strong> - Tarix yoxlamaları</li>
                  <li><strong>Yaş hesablaması</strong> - Doğum tarixindən yaş hesablama</li>
                  <li><strong>Tarix filtrləri</strong> - Tarix aralığında axtarış</li>
                  <li><strong>Vaxtlayıcılar</strong> - setTimeout, setInterval ilə işləmək</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Əsas metodlar:</h5>
              <div className="row g-2">
                {methods.map((method, index) => (
                  <motion.div 
                    key={method.name}
                    className="col-md-6 col-lg-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                      <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                        <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}><code>{method.name}</code></h6>
                        <p className="small mb-0" style={{ lineHeight: '1.6' }}>{method.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><strong>Ay indeksləri 0-dan başlayır</strong> - 0 = Yanvar, 11 = Dekabr, 
                ona görə də <code>getMonth()</code> +1 etmək lazımdır</li>
                <li><code>getDay()</code> 0-6 qaytarır (0 = Bazar, 6 = Şənbə)</li>
                <li>Tarix müqayisəsi millisaniyə ilə işləyir - <code>date1 - date2</code> fərqi millisaniyə ilə qaytarır</li>
                <li>Timezone fərqləri nəzərə alınmalıdır - UTC və local time fərqli ola bilər</li>
                <li>Müasir proyektlərdə <code>moment.js</code>, <code>date-fns</code>, <code>dayjs</code> kimi 
                kitabxanalar daha rahat API təqdim edir</li>
                <li>Date obyekti mutable-dir - metodlar orijinal obyekti dəyişdirir</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Tarix yaratmaq üsulları:</h5>
              <div className="bg-light p-4 rounded" style={{ border: '1px solid #dee2e6' }}>
                <pre className="mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
{`new Date()                    // Current date
new Date(year, month, day)     // Specific date
new Date("2024-01-15")         // From string
new Date(timestamp)            // From timestamp
new Date(dateString)           // From ISO string`}
                </pre>
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

export default Dates;
