import { useState } from 'react';
import { motion } from 'framer-motion';

const StringMethods = () => {
  const [code, setCode] = useState(`// String Methods - Working with text data

let text = "JavaScript Lessons - Programming";

// ========== 1. LENGTH - Get string length ==========
console.log("Length:", text.length); // 40

// ========== 2. INDEXOF - Find index of substring ==========
console.log("'Lessons' index:", text.indexOf("Lessons")); // 11
console.log("'xyz' index:", text.indexOf("xyz")); // -1 (not found)
console.log("First 'a' index:", text.indexOf("a")); // 1
console.log("Last 'a' index:", text.lastIndexOf("a")); // 35

// ========== 3. SLICE - Extract substring ==========
console.log("Slice(0, 10):", text.slice(0, 10)); // "JavaScript"
console.log("Slice(11):", text.slice(11)); // "Lessons - Programming"
console.log("Slice(-10):", text.slice(-10)); // "gramming" (from end)

// ========== 4. SUBSTRING - Extract substring ==========
console.log("Substring(0, 10):", text.substring(0, 10)); // "JavaScript"
console.log("Substring(11):", text.substring(11)); // "Lessons - Programming"

// ========== 5. REPLACE - Replace text ==========
let newText = text.replace("Lessons", "Course");
console.log("Replace:", newText);
// Only replaces first match
let allReplaced = text.replace(/a/g, "A"); // Regex to replace all
console.log("Replace all:", allReplaced);

// ========== 6. TOUPPERCASE / TOLOWERCASE ==========
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// ========== 7. CONCAT - Concatenate strings ==========
let greeting = "Hello, ";
let name = "Ali";
let full = greeting.concat(name, "!");
console.log("Concat:", full);
// Or use + operator
console.log("+ operator:", greeting + name + "!");

// ========== 8. TRIM - Remove whitespace ==========
let withSpaces = "   JavaScript   ";
console.log("Trim:", withSpaces.trim()); // "JavaScript"
console.log("TrimStart:", withSpaces.trimStart()); // "JavaScript   "
console.log("TrimEnd:", withSpaces.trimEnd()); // "   JavaScript"

// ========== 9. SPLIT - Split into array ==========
let sentence = "apple,pear,banana";
let fruits = sentence.split(",");
console.log("Split:", fruits); // ["apple", "pear", "banana"]

// ========== 10. INCLUDES - Check if contains ==========
console.log("'JavaScript' included?", text.includes("JavaScript")); // true
console.log("'Python' included?", text.includes("Python")); // false

// ========== 11. STARTSWITH / ENDSWITH ==========
console.log("Starts with 'JavaScript'?", text.startsWith("JavaScript")); // true
console.log("Ends with 'ing'?", text.endsWith("ing")); // true

// ========== 12. REPEAT - Repeat string ==========
console.log("Repeat:", "Ha! ".repeat(3)); // "Ha! Ha! Ha! "

// ========== 13. TEMPLATE LITERALS (ES6) ==========
let name2 = "Aysel";
let age = 25;
let message = \`Hello, my name is \${name2}, I am \${age} years old.\`;
console.log("Template literal:", message);

// ========== 14. CHARAT - Get character at index ==========
console.log("Char at 0:", text.charAt(0)); // "J"
console.log("Char at 5:", text.charAt(5)); // "c"

// ========== 15. SEARCH - Search with regex ==========
console.log("Search 'Lessons':", text.search("Lessons")); // 11
console.log("Search regex:", text.search(/[A-Z]/)); // 0 (first capital)`);

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
    { name: 'length', desc: 'String uzunluğunu qaytarır', example: '"hello".length → 5' },
    { name: 'indexOf()', desc: 'Alt sətirin indeksini tapır, tapılmadıqda -1 qaytarır', example: '"hello".indexOf("l") → 2' },
    { name: 'slice()', desc: 'String-dən hissə kəsir, mənfi indekslər dəstəklənir', example: '"hello".slice(0,3) → "hel"' },
    { name: 'replace()', desc: 'Dəyəri dəyişdirir, yalnız ilk uyğunluğu dəyişdirir', example: '"Hi".replace("Hi","Hello")' },
    { name: 'toUpperCase()', desc: 'Bütün hərfləri böyük hərflərə çevirir', example: '"hello".toUpperCase() → "HELLO"' },
    { name: 'toLowerCase()', desc: 'Bütün hərfləri kiçik hərflərə çevirir', example: '"HELLO".toLowerCase() → "hello"' },
    { name: 'concat()', desc: 'String-ləri birləşdirir, + operatoruna alternativ', example: '"Hello".concat(" World")' },
    { name: 'trim()', desc: 'Başdan və sondan boşluqları silir', example: '"  hi  ".trim() → "hi"' },
    { name: 'split()', desc: 'String-i ayırıcı əsasında massivə çevirir', example: '"a,b,c".split(",") → ["a","b","c"]' },
    { name: 'includes()', desc: 'Alt sətirin olub-olmadığını yoxlayır', example: '"hello".includes("ell") → true' },
    { name: 'startsWith()', desc: 'String-in müəyyən dəyərlə başlayıb-başlamadığını yoxlayır', example: '"hello".startsWith("he") → true' },
    { name: 'endsWith()', desc: 'String-in müəyyən dəyərlə bitib-bitmədiyini yoxlayır', example: '"hello".endsWith("lo") → true' },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        String Metodları
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              String metodları haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>String metodları</strong> mətnlərlə işləmək üçün istifadə olunan funksiyalardır. 
              JavaScript-də string-lər <strong>immutable</strong>-dir (dəyişməz) - metodlar yeni string yaradır, 
              orijinalı dəyişdirmir. Bu, string-lərin performansını artırır və təhlükəsizlik təmin edir. 
              String metodları çox genişdir və mətnlərin manipulyasiyası, axtarışı, dəyişdirilməsi və 
              formatlaşdırılması üçün istifadə olunur. Müasir JavaScript-də template literals (backticks) 
              string-ləri yaratmaq və manipulyasiya etmək üçün ən yaxşı üsuldur.
            </p>

            <div className="row g-3 mt-3 mb-4">
              {methods.map((method, index) => (
                <motion.div 
                  key={method.name}
                  className="col-md-6 col-lg-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="card h-100 border-jewel-teal" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>
                        <code>{method.name}</code>
                      </h6>
                      <p className="small mb-2" style={{ lineHeight: '1.6' }}>{method.desc}</p>
                      <code className="small text-muted d-block">{method.example}</code>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li>String-lər <strong>immutable</strong>-dir - metodlar yeni string yaradır, orijinalı dəyişdirmir</li>
                <li><code>indexOf()</code> tapılmadıqda <code>-1</code> qaytarır, bu yoxlamaq üçün istifadə olunur</li>
                <li><code>slice()</code> və <code>substring()</code> oxşardır, lakin <code>slice()</code> mənfi indeksləri dəstəkləyir</li>
                <li><code>replace()</code> yalnız ilk uyğunluğu dəyişdirir - hamısını dəyişdirmək üçün regex istifadə edin</li>
                <li>Template literals (backticks) ES6-dan bəri ən yaxşı üsuldur - dəyişənləri daxil etmək və çoxsətirli string-lər üçün</li>
                <li>String-lər primitiv tiplərdir, lakin metodlara malikdirlər - JavaScript avtomatik olaraq String obyektinə çevirir</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Template Literals (ES6) - Ən yaxşı üsul:</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong className="text-danger">Köhnə üsul:</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`let message = "Hello, " + name + "!";`}
                    </pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong className="text-success">Yeni üsul (Template Literal):</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`let message = \`Hello, \${name}!\`;`}
                    </pre>
                  </div>
                </div>
              </div>
              <ul className="mt-3" style={{ lineHeight: '2' }}>
                <li>Daha oxunaqlı və qısa sintaksis</li>
                <li>Çoxsətirli string-lər asanlıqla yaradılır</li>
                <li>İfadələr daxilində istifadə oluna bilər</li>
                <li>Tagged templates ilə güclü funksionallıq</li>
              </ul>
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

export default StringMethods;
