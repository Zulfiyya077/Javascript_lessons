import { useState } from 'react';
import { motion } from 'framer-motion';

const Objects = () => {
  const [code, setCode] = useState(`// Objects - Key-Value pairs for structured data

// 1. Creating objects - literal method
let person = {
  name: "Ali",
  age: 25,
  city: "Baku",
  email: "ali@example.com",
  isActive: true
};

console.log("Object:", person);

// 2. Accessing properties - 2 methods
console.log("Dot notation:", person.name); // "Ali"
console.log("Bracket notation:", person["age"]); // 25

// Using variable with bracket notation
let property = "city";
console.log("With variable:", person[property]); // "Baku"

// 3. Modifying properties
person.age = 26;
person["email"] = "new@example.com";
console.log("Modified:", person);

// 4. Adding new properties
person.phone = "+994501234567";
person["profession"] = "Developer";
console.log("New properties:", person);

// 5. Deleting properties
delete person.isActive;
console.log("After delete:", person);

// 6. Object methods
let furniture = {
  type: "table",
  color: "white",
  price: 150,
  discount: function(percent) {
    return this.price * (1 - percent / 100);
  },
  // ES6 shorthand
  getInfo() {
    return this.type + " - " + this.color + " color, " + this.price + " AZN";
  }
};

console.log("Discount price:", furniture.discount(10));
console.log("Info:", furniture.getInfo());

// 7. Nested objects
let student = {
  name: "Aysel",
  age: 20,
  address: {
    street: "Nizami street",
    house: "15",
    city: "Baku"
  },
  subjects: ["Math", "Physics", "Chemistry"]
};

console.log("Student:", student);
console.log("City:", student.address.city);
console.log("First subject:", student.subjects[0]);

// 8. Object methods (Object.*)
console.log("\\n=== Object methods ===");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 9. Object copying
let personCopy = { ...person }; // Spread operator
personCopy.name = "Mammad";
console.log("Original name:", person.name);
console.log("Copy name:", personCopy.name);

// 10. Object merging
let additional = { country: "Azerbaijan", language: "Azerbaijani" };
let complete = { ...person, ...additional };
console.log("Merged:", complete);

// 11. Object.freeze() and Object.seal()
let frozen = Object.freeze({ x: 1, y: 2 });
// frozen.x = 3; // Error in strict mode
console.log("Frozen object:", frozen);

let sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 3; // OK
// sealed.c = 3; // Error - cannot add new property
console.log("Sealed object:", sealed);`);
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
        Obyektlər (Objects)
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Obyektlər haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Obyektlər</strong> JavaScript-də ən vacib məlumat strukturlarından biridir. 
              Onlar <strong>key-value</strong> (açar-dəyər) cütləri şəklində məlumat saxlamaq üçün istifadə olunur. 
              JavaScript-də demək olar ki, hər şey obyektdir - massivlər, funksiyalar, hətta primitiv tiplər də 
              obyekt kimi davranır. Obyektlər strukturlaşdırılmış məlumat saxlamaq, mürəkkəb məlumat strukturları 
              yaratmaq və kodun modulyar olmasını təmin etmək üçün istifadə olunur. JSON (JavaScript Object Notation) 
              formatı obyektlərin string təsviridir və müasir veb inkişafda çox geniş istifadə olunur.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Obyektlərin üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Strukturlaşdırılmış məlumat</strong> - Key-value cütləri ilə məlumatı 
                  məntiqi şəkildə qruplaşdırmaq</li>
                  <li><strong>Key ilə sürətli çatma</strong> - O(1) zaman mürəkkəbliyi ilə xassələrə çatmaq</li>
                  <li><strong>Mürəkkəb strukturlar</strong> - Nested obyektlər, massivlər və funksiyalar ehtiva edə bilər</li>
                  <li><strong>Metodlar və xassələr</strong> - Həm data, həm də funksionallığı birləşdirmək</li>
                  <li><strong>JSON uyğunluğu</strong> - API-lərlə asanlıqla işləmək</li>
                  <li><strong>Namespace-lər</strong> - Ad fəzaları yaratmaq, qlobal dəyişənləri azaltmaq</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>İstifadə halları:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>İstifadəçi profilləri</strong> - İstifadəçi məlumatlarını strukturlaşdırmaq</li>
                  <li><strong>Məhsul məlumatları</strong> - E-commerce tətbiqlərində məhsul kataloqu</li>
                  <li><strong>Konfiqurasiya obyektləri</strong> - Tətbiq parametrlərini saxlamaq</li>
                  <li><strong>API cavabları</strong> - Server-dən gələn məlumatları strukturlaşdırmaq</li>
                  <li><strong>Namespace-lər</strong> - Kodun təşkili və modulyarlığı</li>
                  <li><strong>State management</strong> - Tətbiqin vəziyyətini idarə etmək</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 mb-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Xassələrə çatmaq - 2 üsul:</h5>
              <div className="row g-3">
                <motion.div 
                  className="col-md-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h6 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>1. Dot Notation</h6>
                      <pre className="bg-light p-2 rounded mb-2">
{`obj.key
obj.name`}
                      </pre>
                      <small className="text-muted d-block mb-2">Statik açar adları üçün</small>
                      <p className="small mb-0">Nümunə: <code>person.name</code></p>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="col-md-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="card border-rich-gold h-100" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <h6 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>2. Bracket Notation</h6>
                      <pre className="bg-light p-2 rounded mb-2">
{`obj["key"]
obj[variable]`}
                      </pre>
                      <small className="text-muted d-block mb-2">Dinamik açar adları üçün</small>
                      <p className="small mb-0">Nümunə: <code>person["name"]</code></p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>Obyekt metodları:</h6>
              <div className="row">
                <div className="col-md-6">
                  <ul style={{ lineHeight: '2' }}>
                    <li><code>Object.keys(obj)</code> - Bütün açar adlarını massiv şəklində qaytarır</li>
                    <li><code>Object.values(obj)</code> - Bütün dəyərləri massiv şəklində qaytarır</li>
                    <li><code>Object.entries(obj)</code> - [key, value] cütlərini massiv şəklində qaytarır</li>
                    <li><code>Object.assign(target, source)</code> - Obyektləri birləşdirir</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ lineHeight: '2' }}>
                    <li><code>Object.freeze(obj)</code> - Obyekti dondurur, dəyişdirilə bilməz</li>
                    <li><code>Object.seal(obj)</code> - Obyekti möhürləyir, yeni xassə əlavə oluna bilməz</li>
                    <li><code>Object.hasOwnProperty(key)</code> - Xassənin obyektə aid olub-olmadığını yoxlayır</li>
                    <li><code>Object.create(proto)</code> - Prototip ilə yeni obyekt yaradır</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Vizual nümunə:</h5>
              <div className="bg-light p-4 rounded" style={{ border: '1px solid #dee2e6' }}>
                <pre className="mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
{`{
  "name": "Ali",        ← key: "name", value: "Ali"
  "age": 25,           ← key: "age", value: 25
  "city": "Baku"       ← key: "city", value: "Baku"
}`}
                </pre>
                <small className="text-muted mt-2 d-block">Key-value cütləri strukturlaşdırılmış məlumat yaradır</small>
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

export default Objects;
