import { useState } from 'react';
import { motion } from 'framer-motion';

const LetConstVar = () => {
  const [code, setCode] = useState(`// var, let, const - Variable declarations

// ========== VAR (Old way - don't use anymore) ==========
var oldWay = "var has function scope";
console.log("var:", oldWay);

if (true) {
  var varVariable = "var is visible outside block";
  var redeclared = "var can be redeclared";
  var redeclared = "Look, I redeclared it!";
}
console.log("Outside block:", varVariable); // Works!
console.log("Redeclared:", redeclared);

// ========== LET (Modern way - for variable values) ==========
let newWay = "let has block scope";
console.log("let:", newWay);

if (true) {
  let letVariable = "let is only visible in this block";
  console.log("Inside block:", letVariable);
  // let redeclared = "Error!"; // Error - cannot redeclare
}
// console.log(letVariable); // Error - not visible outside block

// let can be reassigned
let number = 10;
number = 20; // OK
console.log("Reassigned:", number);

// ========== CONST (Modern way - for constant values) ==========
const constant = "const cannot be changed";
console.log("const:", constant);

// const constant = "Redeclare"; // Error - cannot redeclare
// constant = "Reassign"; // Error - cannot reassign

// CONST with objects
const person = {
  name: "Ali",
  age: 25
};
// person = {}; // Error - object itself cannot be changed
person.age = 26; // OK - object properties can be changed
person.city = "Baku"; // OK - new property can be added
console.log("Object:", person);

// CONST with arrays
const fruits = ["apple", "pear"];
// fruits = []; // Error
fruits.push("banana"); // OK
console.log("Array:", fruits);

// ========== HOISTING DIFFERENCES ==========
console.log("\\n=== Hoisting ===");
// var is hoisted and initialized with undefined
console.log("var hoisted:", hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";

// let and const are hoisted but in Temporal Dead Zone
// console.log(hoistedLet); // Error - cannot access before initialization
let hoistedLet = "I'm hoisted but in TDZ";

// ========== SCOPE EXAMPLES ==========
function testScope() {
  var functionScoped = "I'm function scoped";
  let blockScoped = "I'm block scoped";
  const alsoBlockScoped = "I'm also block scoped";
  
  if (true) {
    var stillFunctionScoped = "Still accessible in function";
    let onlyInBlock = "Only in this block";
    console.log("Inside if:", functionScoped, blockScoped, onlyInBlock);
  }
  
  console.log("In function:", functionScoped, blockScoped);
  // console.log(onlyInBlock); // Error - not accessible
}

testScope();`);
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
        Let, const və var
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Dəyişən bəyannamələri
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              JavaScript-də dəyişənlər bəyan etmək üçün üç əsas açar söz var: 
              <code>var</code>, <code>let</code> və <code>const</code>. 
              Müasir JavaScript-də <code>var</code> istifadə etməməli, 
              əvəzinə <code>let</code> və <code>const</code> istifadə etməlisiniz. 
              Bu açar sözlər arasında əsas fərq onların scope (əhatə dairəsi), hoisting davranışı 
              və yenidən bəyan/yenidən təyin imkanlarıdır. Düzgün seçim kodun təhlükəsizliyini 
              və oxunaqlığını artırır.
            </p>

            <div className="table-responsive mt-4 mb-4">
              <table className="table table-bordered table-hover">
                <thead style={{ backgroundColor: 'var(--jewel-teal)', color: 'white' }}>
                  <tr>
                    <th style={{ fontWeight: '600' }}>Xüsusiyyət</th>
                    <th style={{ fontWeight: '600', backgroundColor: 'rgba(220, 53, 69, 0.8)' }}>var</th>
                    <th style={{ fontWeight: '600', backgroundColor: 'rgba(40, 167, 69, 0.8)' }}>let</th>
                    <th style={{ fontWeight: '600', backgroundColor: 'rgba(0, 123, 255, 0.8)' }}>const</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Scope (Əhatə dairəsi)</strong></td>
                    <td>Function scope</td>
                    <td>Block scope</td>
                    <td>Block scope</td>
                  </tr>
                  <tr>
                    <td><strong>Yenidən bəyan</strong></td>
                    <td className="table-danger">Bəli</td>
                    <td className="table-success">Xeyr</td>
                    <td className="table-success">Xeyr</td>
                  </tr>
                  <tr>
                    <td><strong>Yenidən təyin</strong></td>
                    <td className="table-danger">Bəli</td>
                    <td className="table-success">Bəli</td>
                    <td className="table-success">Xeyr</td>
                  </tr>
                  <tr>
                    <td><strong>Hoisting</strong></td>
                    <td>Bəli (undefined ilə)</td>
                    <td>Bəli (TDZ*)</td>
                    <td>Bəli (TDZ*)</td>
                  </tr>
                  <tr>
                    <td><strong>İstifadə</strong></td>
                    <td className="table-danger">Köhnə üsul</td>
                    <td className="table-success">Dəyişən dəyərlər</td>
                    <td className="table-success">Sabit dəyərlər</td>
                  </tr>
                </tbody>
              </table>
              <small className="text-muted">*TDZ = Temporal Dead Zone - dəyişənə bəyannamədən əvvəl çatmaq mümkün deyil</small>
            </div>

            <div className="row mt-4 mb-4">
              <motion.div 
                className="col-md-4 mb-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card h-100 border-danger" style={{ borderLeft: '4px solid #dc3545' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(220, 53, 69, 0.1)' }}>
                    <h5 className="text-danger mb-3" style={{ fontWeight: '600' }}>VAR - İstifadə etməyin!</h5>
                    <ul style={{ lineHeight: '2', fontSize: '0.95rem' }}>
                      <li>Function scope - blokdan kənarda görünür</li>
                      <li>Yenidən bəyan oluna bilər</li>
                      <li>Hoisting problemi - undefined ilə initialize olunur</li>
                      <li>ES5-dən qalma köhnə üsul</li>
                      <li>Scope qarışıqlığı yaradır</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="col-md-4 mb-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card h-100 border-success" style={{ borderLeft: '4px solid #28a745' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)' }}>
                    <h5 className="text-success mb-3" style={{ fontWeight: '600' }}>LET - Dəyişən dəyərlər üçün</h5>
                    <ul style={{ lineHeight: '2', fontSize: '0.95rem' }}>
                      <li>Block scope - yalnız blokda görünür</li>
                      <li>Yenidən bəyan oluna bilməz</li>
                      <li>Yenidən təyin oluna bilər</li>
                      <li>ES6-dan bəri mövcuddur</li>
                      <li>Temporal Dead Zone (TDZ)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="col-md-4 mb-3"
                whileHover={{ scale: 1.02 }}
              >
                <div className="card h-100 border-info" style={{ borderLeft: '4px solid #17a2b8' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(23, 162, 184, 0.1)' }}>
                    <h5 className="text-info mb-3" style={{ fontWeight: '600' }}>CONST - Sabit dəyərlər üçün</h5>
                    <ul style={{ lineHeight: '2', fontSize: '0.95rem' }}>
                      <li>Block scope - yalnız blokda görünür</li>
                      <li>Yenidən bəyan oluna bilməz</li>
                      <li>Yenidən təyin oluna bilməz</li>
                      <li>Obyekt/massiv xassələri dəyişdirilə bilər</li>
                      <li>Referans sabitdir, dəyər deyil</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>Best Practice - Ən yaxşı təcrübələr:</h6>
              <ol className="mb-0" style={{ lineHeight: '2' }}>
                <li><strong>Həmişə <code>const</code> ilə başlayın</strong> - Əgər dəyər dəyişməli olarsa, 
                sonra <code>let</code>-ə keçin. Bu, kodunuzun daha təhlükəsiz olmasına kömək edir.</li>
                <li><strong>Heç vaxt <code>var</code> istifadə etməyin</strong> - Köhnə kodda görsəniz də, 
                yeni kodda istifadə etməyin. Scope qarışıqlığı yaradır.</li>
                <li><strong><code>const</code> obyekt və massivlərlə də işləyir</strong> - Yalnız referans sabitdir, 
                obyektin və ya massivin xassələri dəyişdirilə bilər.</li>
                <li><strong>Block scope-dan istifadə edin</strong> - <code>let</code> və <code>const</code> block scope-a 
                malikdir, bu daha təhlükəsiz və proqnozlaşdırıla biləndir.</li>
                <li><strong>Temporal Dead Zone (TDZ) haqqında bilin</strong> - <code>let</code> və <code>const</code> 
                hoisted olunur, lakin TDZ-dədir - bəyannamədən əvvəl istifadə oluna bilməz.</li>
              </ol>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Scope nümunələri:</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong className="text-danger">var - Function Scope:</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`function example() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - işləyir!
}`}
                    </pre>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded mb-3" style={{ border: '1px solid #dee2e6' }}>
                    <strong className="text-success">let/const - Block Scope:</strong>
                    <pre className="mb-0 mt-2" style={{ fontSize: '13px' }}>
{`function example() {
  if (true) {
    let x = 10;
  }
  console.log(x); // Error!
}`}
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

export default LetConstVar;
