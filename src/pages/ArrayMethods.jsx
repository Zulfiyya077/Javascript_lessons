import { useState } from 'react';
import { motion } from 'framer-motion';

const ArrayMethods = () => {
  const [code, setCode] = useState(`// Array Methods - Working with arrays

// ========== 1. PUSH / POP - Add/remove from end ==========
let fruits = ["apple", "pear"];
fruits.push("banana"); // Add to end
console.log("Push:", fruits);

let last = fruits.pop(); // Remove from end
console.log("Pop:", fruits, "Removed:", last);

// ========== 2. UNSHIFT / SHIFT - Add/remove from beginning ==========
fruits.unshift("pomegranate"); // Add to beginning
console.log("Unshift:", fruits);

let first = fruits.shift(); // Remove from beginning
console.log("Shift:", fruits, "Removed:", first);

// ========== 3. MAP - Transform each element ==========
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
console.log("Map - Squares:", squares); // [1, 4, 9, 16, 25]

let names = ["ali", "aysel", "mammad"];
let uppercase = names.map(name => name.toUpperCase());
console.log("Map - Uppercase:", uppercase);

// ========== 4. FILTER - Filter elements ==========
let even = numbers.filter(n => n % 2 === 0);
console.log("Filter - Even numbers:", even); // [2, 4]

let long = names.filter(name => name.length > 4);
console.log("Filter - Long names:", long);

// ========== 5. FIND - Find first match ==========
let found = numbers.find(n => n > 3);
console.log("Find:", found); // 4

// ========== 6. REDUCE - Reduce to single value ==========
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("Reduce - Sum:", sum); // 15

let product = numbers.reduce((result, num) => result * num, 1);
console.log("Reduce - Product:", product); // 120

// ========== 7. FOREACH - Execute for each element ==========
console.log("\\n=== ForEach ===");
numbers.forEach((num, index) => {
  console.log(index + ": " + num);
});

// ========== 8. SOME / EVERY - Condition check ==========
let hasLarge = numbers.some(n => n > 4);
console.log("Some - Has > 4?", hasLarge); // true

let allPositive = numbers.every(n => n > 0);
console.log("Every - All positive?", allPositive); // true

// ========== 9. SORT - Sort array ==========
let mixed = [3, 1, 4, 1, 5];
let sorted = [...mixed].sort((a, b) => a - b);
console.log("Sort - Ascending:", sorted);

let namesSorted = [...names].sort();
console.log("Sort - Names:", namesSorted);

// ========== 10. SLICE - Extract portion ==========
let sliced = numbers.slice(1, 4);
console.log("Slice(1,4):", sliced); // [2, 3, 4]

// ========== 11. SPLICE - Modify array ==========
let test = [1, 2, 3, 4, 5];
test.splice(2, 1, 99); // Remove 1 element at index 2, add 99
console.log("Splice:", test); // [1, 2, 99, 4, 5]

// ========== 12. CONCAT - Concatenate arrays ==========
let merged = numbers.concat([6, 7, 8]);
console.log("Concat:", merged);

// ========== 13. INCLUDES - Check if contains ==========
console.log("Includes 10?", numbers.includes(10)); // false
console.log("Includes 5?", numbers.includes(5)); // true

// ========== 14. INDEXOF - Find index ==========
console.log("Index of 5:", numbers.indexOf(5)); // 4
console.log("Index of 10:", numbers.indexOf(10)); // -1

// ========== 15. FLAT - Flatten nested arrays ==========
let nested = [1, [2, 3], [4, [5, 6]]];
let flattened = nested.flat(2);
console.log("Flat:", flattened); // [1, 2, 3, 4, 5, 6]

// ========== 16. CHAINING METHODS ==========
let result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);
console.log("Chained:", result);`);
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
    { name: 'push()', desc: 'Sona element əlavə edir', mutating: true },
    { name: 'pop()', desc: 'Sondan element silir və qaytarır', mutating: true },
    { name: 'shift()', desc: 'Başdan element silir və qaytarır', mutating: true },
    { name: 'unshift()', desc: 'Başa element əlavə edir', mutating: true },
    { name: 'map()', desc: 'Hər elementi transformasiya edir, yeni massiv qaytarır', mutating: false },
    { name: 'filter()', desc: 'Şərtə uyğun elementləri filtrləyir, yeni massiv qaytarır', mutating: false },
    { name: 'find()', desc: 'İlk uyğun elementi tapır və qaytarır', mutating: false },
    { name: 'reduce()', desc: 'Massivi bir dəyərə endirir, accumulator istifadə edir', mutating: false },
    { name: 'forEach()', desc: 'Hər element üçün funksiya çağırır, heç nə qaytarmır', mutating: false },
    { name: 'some()', desc: 'Ən azı bir element şərti ödəyirmi? Boolean qaytarır', mutating: false },
    { name: 'every()', desc: 'Bütün elementlər şərti ödəyirmi? Boolean qaytarır', mutating: false },
    { name: 'sort()', desc: 'Massivi sıralayır, orijinalı dəyişdirir', mutating: true },
    { name: 'slice()', desc: 'Massivdən hissə kəsir, yeni massiv qaytarır', mutating: false },
    { name: 'splice()', desc: 'Massivi dəyişdirir, elementləri silir və əlavə edir', mutating: true },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        Array Metodları
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Array metodları haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Array metodları</strong> massivlərlə işləmək üçün istifadə olunan funksiyalardır. 
              Onlar iki qrupa bölünür: <strong>mutating</strong> (dəyişdirən) və <strong>non-mutating</strong> 
              (dəyişdirməyən) metodlar. Müasir JavaScript-də funksional proqramlaşdırma üslubunda 
              <code>map</code>, <code>filter</code>, <code>reduce</code> kimi metodlar çox istifadə olunur. 
              Bu metodlar kodun daha oxunaqlı, test oluna bilən və funksional olmasına kömək edir. 
              Metodların zəncirlənməsi (chaining) ilə mürəkkəb əməliyyatları asanlıqla həyata keçirmək mümkündür.
            </p>

            <div className="alert mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Mutating vs Non-Mutating:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><strong>Mutating metodlar</strong> (push, pop, sort, splice) - orijinal massivi dəyişdirir, 
                bu bəzən gözlənilməz nəticələr yarada bilər</li>
                <li><strong>Non-mutating metodlar</strong> (map, filter, slice) - yeni massiv yaradır, 
                orijinal massiv dəyişmir, bu daha təhlükəsizdir</li>
                <li>Müasir JavaScript-də non-mutating metodlara üstünlük verin - kodun proqnozlaşdırıla bilənliyini artırır</li>
                <li>Mutating metodlar lazım olduqda istifadə edin, lakin diqqətli olun</li>
              </ul>
            </div>

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
                  <div className={`card h-100 ${method.mutating ? 'border-danger' : 'border-success'}`} 
                       style={{ borderLeft: `4px solid ${method.mutating ? '#dc3545' : '#28a745'}` }}>
                    <div className="card-body" 
                         style={{ backgroundColor: method.mutating ? 'rgba(220, 53, 69, 0.1)' : 'rgba(40, 167, 69, 0.1)' }}>
                      <h6 className={`mb-2 ${method.mutating ? 'text-danger' : 'text-success'}`} style={{ fontWeight: '600' }}>
                        <code>{method.name}</code>
                        {method.mutating && <span className="badge bg-danger ms-2">Mutating</span>}
                        {!method.mutating && <span className="badge bg-success ms-2">Non-Mutating</span>}
                      </h6>
                      <p className="small mb-0" style={{ lineHeight: '1.6' }}>{method.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Ən çox istifadə olunan metodlar:</h5>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h6 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>map()</h6>
                      <pre className="small bg-light p-2 rounded mb-2">
{`arr.map(x => x * 2)`}
                      </pre>
                      <small className="text-muted">Hər elementi dəyişdirir, yeni massiv qaytarır</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-rich-gold h-100" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <h6 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>filter()</h6>
                      <pre className="small bg-light p-2 rounded mb-2">
{`arr.filter(x => x > 2)`}
                      </pre>
                      <small className="text-muted">Elementləri filtrləyir, yeni massiv qaytarır</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-amethyst-purple h-100" style={{ borderLeft: '4px solid var(--amethyst-purple)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(153, 102, 204, 0.1)' }}>
                      <h6 className="text-amethyst-purple mb-3" style={{ fontWeight: '600' }}>reduce()</h6>
                      <pre className="small bg-light p-2 rounded mb-2">
{`arr.reduce((a,b) => a+b)`}
                      </pre>
                      <small className="text-muted">Bir dəyərə endirir, accumulator istifadə edir</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>Metod zəncirlənməsi (Method Chaining):</h6>
              <p className="mb-2">Metodları bir-birinin ardınca çağırmaq mümkündür, çünki non-mutating metodlar yeni massiv qaytarır:</p>
              <pre className="bg-light p-3 rounded mb-0" style={{ fontSize: '14px' }}>
{`let result = numbers
  .filter(n => n > 2)    // [3, 4, 5]
  .map(n => n * 2)       // [6, 8, 10]
  .reduce((sum, n) => sum + n, 0);  // 24`}
              </pre>
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

export default ArrayMethods;
