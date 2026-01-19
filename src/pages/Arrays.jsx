import { useState } from 'react';
import { motion } from 'framer-motion';

const Arrays = () => {
  const [code, setCode] = useState(`// Arrays - Data structures for ordered collections

// 1. Creating arrays - different methods
let fruits = ["apple", "pear", "banana"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null, { name: "test" }];
let empty = [];
let newArray = new Array(5); // Empty array with 5 slots

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);
console.log("Empty:", empty);
console.log("New array:", newArray);

// 2. Accessing elements - by index
console.log("First fruit:", fruits[0]); // "apple"
console.log("Last fruit:", fruits[fruits.length - 1]); // "banana"
console.log("Length:", fruits.length); // 3

// 3. Modifying elements
fruits[1] = "pomegranate";
console.log("Modified:", fruits);

// 4. Adding elements
fruits[3] = "orange"; // New index
fruits.push("strawberry"); // Add to end
fruits.unshift("watermelon"); // Add to beginning
console.log("After adding:", fruits);

// 5. Removing elements
let removed = fruits.pop(); // Remove from end
console.log("Removed:", removed);
console.log("After pop:", fruits);

let firstRemoved = fruits.shift(); // Remove from beginning
console.log("First removed:", firstRemoved);
console.log("After shift:", fruits);

// 6. Looping through arrays
console.log("\\n=== For loop ===");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}

// 7. For...of loop
console.log("\\n=== For...of loop ===");
for (let fruit of fruits) {
  console.log(fruit);
}

// 8. Array methods
let numbers2 = [10, 20, 30, 40, 50];
console.log("\\n=== Array methods ===");
console.log("Index of 30:", numbers2.indexOf(30)); // 2
console.log("Includes 30?", numbers2.includes(30)); // true
console.log("Slice(1, 4):", numbers2.slice(1, 4)); // [20, 30, 40]
console.log("Concat:", fruits.concat(["pineapple", "mango"]));

// 9. Array length manipulation
let arr = [1, 2, 3];
arr.length = 5; // Extend array
console.log("Extended:", arr); // [1, 2, 3, undefined, undefined]
arr.length = 2; // Truncate array
console.log("Truncated:", arr); // [1, 2]

// 10. Multi-dimensional arrays
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("\\nMatrix:", matrix);
console.log("Element [1][2]:", matrix[1][2]); // 6`);
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

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        Massivlər (Arrays)
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Massivlər haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Massivlər</strong> eyni tip və ya müxtəlif tipli məlumatları sıralı şəkildə 
              saxlamaq üçün istifadə olunan məlumat strukturlarıdır. JavaScript-də massivlər 
              dinamikdir - onların ölçüsü dəyişə bilər və müxtəlif tipli elementlər ehtiva edə bilər. 
              Massivlər obyektlərdir, lakin xüsusi metodlara malikdirlər. Onlar sıfırdan başlayan 
              indekslərə malikdir və elementlərə çatmaq üçün O(1) zaman mürəkkəbliyinə malikdirlər.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Massivlərin üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Çoxlu məlumatı bir yerdə saxlamaq</strong> - Eyni tip məlumatları 
                  strukturlaşdırılmış şəkildə saxlamaq</li>
                  <li><strong>Elementlərə indekslə çatmaq</strong> - O(1) zaman mürəkkəbliyi ilə 
                  elementlərə çatmaq</li>
                  <li><strong>Çoxlu faydalı metodlar</strong> - push, pop, map, filter, reduce və s.</li>
                  <li><strong>Dinamik ölçü</strong> - Elementlər əlavə/silinə bilər, ölçü avtomatik dəyişir</li>
                  <li><strong>Müxtəlif tipli elementlər</strong> - Eyni massivdə müxtəlif tipli dəyərlər ola bilər</li>
                  <li><strong>İterasiya</strong> - For, for...of, forEach ilə asanlıqla döngü yaratmaq</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>İstifadə halları:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>İstifadəçi siyahıları</strong> - Veb tətbiqlərdə istifadəçi məlumatlarını saxlamaq</li>
                  <li><strong>Məhsul kataloqu</strong> - E-commerce saytlarında məhsul siyahıları</li>
                  <li><strong>Rəqəmlər toplusu</strong> - Riyazi hesablamalar üçün</li>
                  <li><strong>Hadisələr siyahısı</strong> - Tarixçə, log və s.</li>
                  <li><strong>Hər hansı sıralı məlumat</strong> - Sıralı olan hər hansı məlumat toplusu</li>
                  <li><strong>Multi-dimensional data</strong> - Matrislər, cədvəllər və s.</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Massiv yaratmaq - 3 əsas üsul:</h5>
              <div className="row g-3">
                <motion.div 
                  className="col-md-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h6 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>1. Literal üsul</h6>
                      <pre className="bg-light p-2 rounded small mb-2">
{`let arr = [1, 2, 3];`}
                      </pre>
                      <small className="text-muted d-block">Ən çox istifadə olunan üsul</small>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card border-rich-gold h-100" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <h6 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>2. Constructor</h6>
                      <pre className="bg-light p-2 rounded small mb-2">
{`let arr = new Array(1, 2, 3);`}
                      </pre>
                      <small className="text-muted d-block">Az istifadə olunur</small>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card border-amethyst-purple h-100" style={{ borderLeft: '4px solid var(--amethyst-purple)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(153, 102, 204, 0.1)' }}>
                      <h6 className="text-amethyst-purple mb-3" style={{ fontWeight: '600' }}>3. Boş massiv</h6>
                      <pre className="bg-light p-2 rounded small mb-2">
{`let arr = [];`}
                      </pre>
                      <small className="text-muted d-block">Sonra doldurulur</small>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li>Massiv indeksləri <strong>0-dan başlayır</strong> - ilk element arr[0], ikinci arr[1] və s.</li>
                <li>Son elementə çatmaq üçün: <code>arr[arr.length - 1]</code> istifadə edin</li>
                <li>Massivlər əslində <strong>obyektlərdir</strong> - <code>typeof []</code> "object" qaytarır, 
                lakin <code>Array.isArray()</code> ilə yoxlamaq olar</li>
                <li>Boş yerlər yarada bilərsiniz: <code>[1, , 3]</code> - bu "sparse array"dir</li>
                <li>Massivlər <strong>referans əsaslı</strong> kopyalanır - <code>let arr2 = arr</code> referans kopyalayır, 
                dəyər deyil. Dəyər kopyalamaq üçün <code>[...arr]</code> və ya <code>arr.slice()</code> istifadə edin</li>
                <li>Massiv ölçüsünü dəyişdirmək: <code>arr.length = 5</code> massivi genişləndirir və ya kəsir</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Vizual nümunə:</h5>
              <div className="bg-light p-4 rounded" style={{ border: '1px solid #dee2e6' }}>
                <div className="d-flex gap-2 align-items-center mb-3">
                  <span className="badge" style={{ backgroundColor: 'var(--jewel-teal)', padding: '8px 12px', fontSize: '0.9rem' }}>0</span>
                  <span className="badge" style={{ backgroundColor: 'var(--jewel-teal)', padding: '8px 12px', fontSize: '0.9rem' }}>1</span>
                  <span className="badge" style={{ backgroundColor: 'var(--jewel-teal)', padding: '8px 12px', fontSize: '0.9rem' }}>2</span>
                  <span className="badge" style={{ backgroundColor: 'var(--jewel-teal)', padding: '8px 12px', fontSize: '0.9rem' }}>3</span>
                </div>
                <div className="d-flex gap-2 align-items-center mb-2">
                  <code style={{ fontSize: '1.1rem' }}>["apple", "pear", "banana", "orange"]</code>
                </div>
                <small className="text-muted">İndeks: 0-dan başlayır, uzunluq: 4</small>
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
                rows="25"
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

export default Arrays;
