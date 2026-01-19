import { useState } from 'react';
import { motion } from 'framer-motion';

const Functions = () => {
  const [code, setCode] = useState(`// Functions - Reusable code blocks

// ========== 1. FUNCTION DECLARATION ==========
// Works with hoisting - can be called anywhere
function greet(name) {
  return "Hello, " + name + "!";
}

console.log("Function Declaration:", greet("Ali"));

// ========== 2. FUNCTION EXPRESSION ==========
// Assigned to variable, no hoisting
const add = function(a, b) {
  return a + b;
};

console.log("Function Expression:", add(5, 3));

// ========== 3. ARROW FUNCTION (ES6) ==========
// Short syntax, lexical this

// Single expression - implicit return
const multiply = (a, b) => a * b;

// Multiple statements - explicit return needed
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
};

// No parameters
const message = () => "Hello, World!";

// Single parameter - parentheses optional
const square = x => x * x;

console.log("Arrow - Multiply:", multiply(4, 7));
console.log("Arrow - Divide:", divide(10, 2));
console.log("Arrow - Message:", message());
console.log("Arrow - Square:", square(5));

// ========== 4. DEFAULT PARAMETERS ==========
function register(name, age = 18, city = "Baku") {
  return name + ", " + age + " years old, from " + city;
}

console.log("Default parameters:", register("Aysel"));
console.log("Partial default:", register("Mammad", 30));

// ========== 5. REST PARAMETERS ==========
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Rest parameters:", sum(1, 2, 3, 4, 5));

// ========== 6. HIGHER-ORDER FUNCTIONS ==========
// Functions that accept other functions as parameters
function operation(a, b, func) {
  return func(a, b);
}

const subtract = (x, y) => x - y;
console.log("Higher-order:", operation(10, 3, subtract));

// ========== 7. CLOSURE (Encapsulation) ==========
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

let counter = createCounter();
console.log("Closure - 1:", counter());
console.log("Closure - 2:", counter());
console.log("Closure - 3:", counter());

// ========== 8. IIFE (Immediately Invoked Function Expression) ==========
(function() {
  console.log("IIFE executed!");
})();

// ========== 9. THIS CONTEXT ==========
let person = {
  name: "Ali",
  greet: function() {
    return "Hello, I am " + this.name;
  },
  greetArrow: () => {
    // Arrow functions don't have this!
    return "Hello, I am " + (this.name || "unknown");
  }
};

console.log("This - Normal:", person.greet());
console.log("This - Arrow:", person.greetArrow());

// ========== 10. CALLBACK FUNCTIONS ==========
function processData(data, callback) {
  let result = data * 2;
  callback(result);
}

processData(5, function(result) {
  console.log("Callback result:", result);
});

// ========== 11. RECURSIVE FUNCTIONS ==========
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("Factorial of 5:", factorial(5));`);
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
        Funksiyalar (Functions)
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Funksiyalar haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Funksiyalar</strong> JavaScript-də kod bloklarını yenidən istifadə etmək, 
              modulyar kod yazmaq və mürəkkəb məsələləri kiçik hissələrə bölmək üçün istifadə olunur. 
              JavaScript-də funksiyalar <strong>first-class citizens</strong>-dir - bu o deməkdir ki, 
              onlar dəyişənlərə təyin oluna, parametr kimi ötürülə, başqa funksiyalardan qaytarıla və 
              obyektlərin xassələri kimi istifadə oluna bilər. Bu xüsusiyyət funksional proqramlaşdırma 
              üslubunu dəstəkləyir və kodun daha modulyar və test oluna bilən olmasına kömək edir.
            </p>

            <div className="row g-3 mt-3 mb-4">
              <div className="col-md-4">
                <div className="card h-100 border-jewel-teal" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                    <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Function Declaration</h5>
                    <p className="small mb-2" style={{ lineHeight: '1.6' }}>
                      Hoisting ilə işləyir - funksiya bəyannaməsindən əvvəl çağırıla bilər. 
                      Bu, funksiyanın scope-un yuxarısına köçürülməsi deməkdir.
                    </p>
                    <code className="small d-block bg-light p-2 rounded">function name() {'{ }'}</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-rich-gold" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                    <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>Function Expression</h5>
                    <p className="small mb-2" style={{ lineHeight: '1.6' }}>
                      Dəyişənə təyin olunur, hoisting yoxdur. Funksiya yalnız təyin olunduqdan sonra 
                      istifadə oluna bilər.
                    </p>
                    <code className="small d-block bg-light p-2 rounded">const name = function() {'{ }'}</code>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 border-amethyst-purple" style={{ borderLeft: '4px solid var(--amethyst-purple)' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(153, 102, 204, 0.1)' }}>
                    <h5 className="text-amethyst-purple mb-3" style={{ fontWeight: '600' }}>Arrow Function</h5>
                    <p className="small mb-2" style={{ lineHeight: '1.6' }}>
                      Qısa sintaksis, lexical this binding. ES6-dan bəri müasir JavaScript-də 
                      standart üsuldur.
                    </p>
                    <code className="small d-block bg-light p-2 rounded">const name = () =&gt; {'{ }'}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Funksiyaların üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Kodun yenidən istifadəsi</strong> - Eyni kodu bir neçə yerdə yazmaq əvəzinə 
                  funksiya yaradıb çağıra bilərsiniz (DRY prinsipi - Don't Repeat Yourself)</li>
                  <li><strong>Modulyar və oxunaqlı kod</strong> - Mürəkkəb məsələləri kiçik funksiyalara bölmək 
                  kodu daha anlaşıqlı edir</li>
                  <li><strong>Test etmək asandır</strong> - Hər funksiyanı ayrıca test etmək olar</li>
                  <li><strong>Mürəkkəb məsələləri bölmək</strong> - Böyük problemi kiçik hissələrə bölmək</li>
                  <li><strong>Scope yaratmaq</strong> - Closure-lar vasitəsilə private dəyişənlər yaratmaq</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>Arrow funksiyaların üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Qısa və oxunaqlı sintaksis</strong> - Daha az kod, eyni funksionallıq</li>
                  <li><strong>Lexical this binding</strong> - this konteksti ətrafdakı scope-dan götürülür, 
                  bu callback funksiyalarda çox faydalıdır</li>
                  <li><strong>İmplicit return</strong> - Tək ifadə üçün return yazmağa ehtiyac yoxdur</li>
                  <li><strong>Müasir JavaScript-də standart</strong> - React, Vue kimi framework-lərdə 
                  əsasən arrow funksiyalar istifadə olunur</li>
                </ul>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Arrow funksiyalar haqqında vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li>Arrow funksiyalarda <code>this</code> yoxdur - ətrafdakı kontekstdən götürür, 
                bu obyekt metodlarında problem yarada bilər</li>
                <li>Arrow funksiyalar <code>arguments</code> obyektinə malik deyil - 
                əvəzinə rest parameters (...args) istifadə edin</li>
                <li>Constructor kimi istifadə oluna bilməz - <code>new</code> ilə çağırıla bilməz</li>
                <li>Generator funksiyalar ola bilməz - <code>yield</code> istifadə oluna bilməz</li>
                <li>Method definitions üçün arrow funksiyalar istifadə etməyin - 
                obyekt metodlarında normal funksiyalar daha yaxşıdır</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Sintaksis müqayisəsi:</h5>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <thead style={{ backgroundColor: 'var(--jewel-teal)', color: 'white' }}>
                    <tr>
                      <th style={{ fontWeight: '600' }}>Növ</th>
                      <th style={{ fontWeight: '600' }}>Sintaksis</th>
                      <th style={{ fontWeight: '600' }}>Xüsusiyyətlər</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Declaration</strong></td>
                      <td><code>function name() {'{ }'}</code></td>
                      <td>Hoisting var, hər yerdə çağırıla bilər</td>
                    </tr>
                    <tr>
                      <td><strong>Expression</strong></td>
                      <td><code>const name = function() {'{ }'}</code></td>
                      <td>Hoisting yoxdur, dəyişənə təyin olunur</td>
                    </tr>
                    <tr>
                      <td><strong>Arrow (qısa)</strong></td>
                      <td><code>const name = () =&gt; value</code></td>
                      <td>İmplicit return, lexical this</td>
                    </tr>
                    <tr>
                      <td><strong>Arrow (tam)</strong></td>
                      <td><code>const name = () =&gt; {'{'} return value; {'}'}</code></td>
                      <td>Explicit return, lexical this</td>
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
                rows="35"
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

export default Functions;
