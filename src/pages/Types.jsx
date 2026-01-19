import { useState } from 'react';
import { motion } from 'framer-motion';

const Types = () => {
  const [code, setCode] = useState(`// JavaScript Data Types - Type checking

// 1. NUMBER - Integers and floating point numbers
let integer = 42;
let float = 3.14;
let negative = -10;
let infinity = Infinity;
let notANumber = NaN; // "Not a Number"

console.log("Integer:", integer, "Type:", typeof integer);
console.log("Float:", float, "Type:", typeof float);
console.log("Infinity:", infinity, "Type:", typeof infinity);
console.log("NaN:", notANumber, "Type:", typeof notANumber);

// Number operations
let a = 10;
let b = 3;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);

// 2. STRING - Text data
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = \`\${singleQuote} \${doubleQuote}!\`; // Template literal

console.log("Single quote:", singleQuote, "Type:", typeof singleQuote);
console.log("Double quote:", doubleQuote, "Type:", typeof doubleQuote);
console.log("Template literal:", templateLiteral);

// String concatenation
let firstName = "Ali";
let lastName = "Mammadov";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// 3. BOOLEAN - Logical values
let isTrue = true;
let isFalse = false;
let comparison = 10 > 5; // true
let equality = 5 === 5; // true

console.log("True:", isTrue, "Type:", typeof isTrue);
console.log("False:", isFalse, "Type:", typeof isFalse);
console.log("10 > 5:", comparison);
console.log("5 === 5:", equality);

// 4. UNDEFINED - Not assigned value
let undefinedVar;
console.log("Undefined:", undefinedVar, "Type:", typeof undefinedVar);

// 5. NULL - Empty value (intentionally assigned)
let nullVar = null;
console.log("Null:", nullVar, "Type:", typeof nullVar); // Note: typeof null returns "object" (JS bug)

// 6. OBJECT - Complex data structures
let person = {
  name: "Aysel",
  age: 28,
  city: "Baku"
};
console.log("Object:", person, "Type:", typeof person);

// 7. ARRAY - List of values (actually an object)
let fruits = ["apple", "pear", "banana"];
console.log("Array:", fruits, "Type:", typeof fruits);
console.log("Is array?", Array.isArray(fruits)); // true

// 8. FUNCTION - Reusable code blocks
function greet() {
  return "Hello!";
}
console.log("Function:", greet, "Type:", typeof greet);

// 9. SYMBOL - Unique identifiers (ES6)
let sym1 = Symbol("description");
let sym2 = Symbol("description");
console.log("Symbol 1:", sym1, "Type:", typeof sym1);
console.log("Symbol 2:", sym2);
console.log("Are equal?", sym1 === sym2); // false - each Symbol is unique

// Type checking examples
console.log("\\n=== Type Checking ===");
console.log("typeof 42:", typeof 42);
console.log("typeof 'hello':", typeof "hello");
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // Returns "object" (bug!)
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []); // Returns "object"
console.log("typeof function(){}:", typeof function(){});`);
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

  const typeCards = [
    { name: 'Number', color: 'jewel-teal', desc: 'Tam və kəsr ədədlər, riyazi əməliyyatlar üçün istifadə olunur' },
    { name: 'String', color: 'rich-gold', desc: 'Mətn məlumatları, tək, cüt və ya backtick dırnaqları ilə yaradılır' },
    { name: 'Boolean', color: 'amethyst-purple', desc: 'Məntiqi dəyərlər - true və ya false, şərti ifadələrdə istifadə olunur' },
    { name: 'Undefined', color: 'jewel-teal', desc: 'Təyin olunmamış dəyər, dəyişən yaradılıb dəyər verilməyəndə' },
    { name: 'Null', color: 'rich-gold', desc: 'Boş dəyər, qəsdən təyin edilir, obyektin olmadığını göstərir' },
    { name: 'Object', color: 'amethyst-purple', desc: 'Mürəkkəb məlumat strukturları, key-value cütləri şəklində' },
    { name: 'Symbol', color: 'jewel-teal', desc: 'Unikal identifikatorlar, ES6-dan bəri mövcuddur' },
  ];

  return (
    <div className="container-fluid">
      <motion.h1 
        className="mb-4 text-jewel-teal"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        JavaScript Tipləri
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              JavaScript-də əsas tiplər
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              JavaScript <strong>dinamik tipləşdirmə</strong> istifadə edir. Bu o deməkdir ki, 
              dəyişənin tipi runtime-da (kod icra olunarkən) müəyyən olunur və hətta dəyişə bilər. 
              Bu, JavaScript-i çevik edir, lakin bəzən gözlənilməz nəticələr yarana bilər. 
              JavaScript-də 7 əsas primitiv tip və 1 obyekt tipi var. Primitiv tiplər dəyər əsaslı 
              (value-based) kopyalanır, obyektlər isə referans əsaslı (reference-based) kopyalanır.
            </p>

            <div className="row g-3 mt-3 mb-4">
              {typeCards.map((type, index) => (
                <motion.div 
                  key={type.name}
                  className="col-md-6 col-lg-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`card h-100 border-${type.color}`} style={{ borderLeft: `4px solid var(--${type.color})` }}>
                    <div className="card-body" style={{ backgroundColor: `rgba(${type.color === 'jewel-teal' ? '0, 95, 115' : type.color === 'rich-gold' ? '212, 175, 55' : '153, 102, 204'}, 0.1)` }}>
                      <h5 className={`text-${type.color} mb-3`} style={{ fontWeight: '600' }}>
                        <code>{type.name}</code>
                      </h5>
                      <p className="small mb-0" style={{ lineHeight: '1.6' }}>{type.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Primitiv tiplər:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Number</strong> - Rəqəmsal dəyərlər (tam və kəsr ədədlər)</li>
                  <li><strong>String</strong> - Mətn məlumatları</li>
                  <li><strong>Boolean</strong> - Məntiqi dəyərlər (true/false)</li>
                  <li><strong>Undefined</strong> - Təyin olunmamış dəyər</li>
                  <li><strong>Null</strong> - Boş dəyər</li>
                  <li><strong>Symbol</strong> - Unikal identifikatorlar (ES6)</li>
                  <li><strong>BigInt</strong> - Çox böyük tam ədədlər (ES2020)</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>Obyekt tipləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Object</strong> - Key-value cütləri</li>
                  <li><strong>Array</strong> - Sıralı elementlər toplusu</li>
                  <li><strong>Function</strong> - Kod blokları</li>
                  <li><strong>Date</strong> - Tarix və vaxt</li>
                  <li><strong>RegExp</strong> - Regular expressions</li>
                  <li><strong>Map, Set</strong> - ES6 kolleksiyaları</li>
                </ul>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><code>typeof null</code> "object" qaytarır - bu JavaScript-in məşhur bug-udur, 
                həqiqətən null obyekt deyil</li>
                <li><code>typeof</code> operatoru dəyişənin tipini yoxlamaq üçün istifadə olunur, 
                lakin həmişə dəqiq nəticə vermir</li>
                <li>Massivlər əslində obyekt tipindədir, lakin <code>Array.isArray()</code> ilə 
                düzgün yoxlamaq olar</li>
                <li>Primitiv tiplər dəyər əsaslı (value) kopyalanır - kopya dəyişdikdə orijinal dəyişmir</li>
                <li>Obyektlər referans əsaslı (reference) kopyalanır - kopya dəyişdikdə orijinal da dəyişir</li>
                <li>Type coercion - JavaScript avtomatik olaraq tipləri çevirir, bu gözlənilməz nəticələr yarada bilər</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Type checking nümunələri:</h5>
              <div className="bg-light p-4 rounded" style={{ border: '1px solid #dee2e6' }}>
                <pre className="mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
{`typeof 42          // "number"
typeof "hello"     // "string"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug!)
typeof {}          // "object"
typeof []          // "object"
typeof function(){} // "function"

// Better type checking
Array.isArray([])           // true
Array.isArray({})           // false
Object.prototype.toString.call(null)  // "[object Null]"
Object.prototype.toString.call([])    // "[object Array]"`}
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

export default Types;
