import { useState } from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  const [code, setCode] = useState(`// Your first JavaScript code
console.log("Hello, JavaScript!");

// Variables
let name = "Ali";
let age = 25;
console.log(name + " is " + age + " years old");

// Mathematical operations
let a = 10;
let b = 5;
console.log("Addition:", a + b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Subtraction:", a - b);
console.log("Modulus:", a % b);

// String operations
let firstName = "Ali";
let lastName = "Mammadov";
let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Boolean operations
let isAdult = age >= 18;
console.log("Is adult:", isAdult);

// Arrays
let fruits = ["apple", "pear", "banana"];
console.log("Fruits:", fruits);
console.log("First fruit:", fruits[0]);

// Objects
let person = {
  name: "Aysel",
  age: 20,
  city: "Baku"
};
console.log("Person:", person);
console.log("Name:", person.name);`);
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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
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
        transition={{ duration: 0.5 }}
        style={{ fontWeight: 'bold', fontSize: '2.5rem' }}
      >
        JavaScript-ə Giriş
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              JavaScript nədir?
            </h3>
            <p className="card-text lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>JavaScript</strong> dinamik, yüksək səviyyəli və interpretasiya olunan proqramlaşdırma dilidir. 
              O, 1995-ci ildə Brendan Eich tərəfindən yaradılıb və hazırda dünyada ən çox istifadə olunan proqramlaşdırma dillərindən biridir. 
              JavaScript ilk növbədə veb səhifələri interaktiv etmək üçün yaradılsa da, indi server tərəfində (Node.js), mobil tətbiqlərdə 
              (React Native), desktop tətbiqlərdə (Electron) və hətta robotika sahəsində də istifadə olunur.
            </p>
            
            <div className="row mt-4 mb-4">
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-rich-gold" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                    <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>Veb inkişaf</h5>
                    <p style={{ lineHeight: '1.8' }}>
                      JavaScript əsasən veb səhifələri interaktiv etmək üçün istifadə olunur. 
                      Brauzerdə işləyərək istifadəçi interaksiyalarını idarə edir, dinamik məzmun yaradır 
                      və real-vaxt yeniləmələri həyata keçirir. HTML və CSS ilə birlikdə veb inkişafın 
                      üç əsas texnologiyasından biridir. Modern JavaScript framework-ləri (React, Vue, Angular) 
                      ilə kompleks veb tətbiqləri yaratmaq mümkündür.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card h-100 border-amethyst-purple" style={{ borderLeft: '4px solid var(--amethyst-purple)' }}>
                  <div className="card-body" style={{ backgroundColor: 'rgba(153, 102, 204, 0.1)' }}>
                    <h5 className="text-amethyst-purple mb-3" style={{ fontWeight: '600' }}>Server tərəfi</h5>
                    <p style={{ lineHeight: '1.8' }}>
                      Node.js sayəsində JavaScript indi server tərəfində də işləyə bilir. 
                      Bu, full-stack inkişafı mümkün edir - eyni dildən istifadə edərək həm frontend, 
                      həm də backend yaza bilərsiniz. Node.js yüksək performanslı, event-driven arxitektura 
                      ilə asinxron əməliyyatları effektiv şəkildə idarə edir. Express.js, NestJS kimi framework-lər 
                      ilə güclü backend tətbiqləri yaratmaq mümkündür.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>JavaScript-in əsas xüsusiyyətləri:</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                    <li><strong>Dinamik tipləşdirmə</strong> - Dəyişən tipləri runtime-da müəyyən olunur, 
                    bu kod yazmağı asanlaşdırır, lakin diqqətli olmaq lazımdır.</li>
                    <li><strong>Prototip əsaslı OOP</strong> - Klassik OOP-dan fərqli yanaşma, 
                    prototip zənciri vasitəsilə irsiyyət həyata keçirilir.</li>
                    <li><strong>Funksional proqramlaşdırma</strong> - First-class funksiyalar, 
                    higher-order funksiyalar, closure-lar və s. dəstəklənir.</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                    <li><strong>Asinxron proqramlaşdırma</strong> - Promise, async/await ilə 
                    asinxron əməliyyatları idarə etmək asandır.</li>
                    <li><strong>Event-driven</strong> - Hadisə əsaslı arxitektura, 
                    istifadəçi interaksiyalarına reaksiya vermək üçün ideal.</li>
                    <li><strong>Universal dil</strong> - Hər yerdə işləyir: brauzer, server, 
                    mobil, desktop və s.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="alert mt-4 mb-0" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>Niyə JavaScript öyrənməliyəm?</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><strong>Veb inkişafın əsas dili</strong> - Hər veb saytda JavaScript var</li>
                <li><strong>Geniş iş bazarı</strong> - Dünyada ən çox tələb olunan dillərdən biri</li>
                <li><strong>Yüksək maaş imkanları</strong> - Təcrübəli JavaScript developer-ləri yüksək maaş alır</li>
                <li><strong>Böyük icma</strong> - Milyonlarla developer, minlərlə resurs və kitabxana</li>
                <li><strong>Çoxplatformalı</strong> - Mobil və desktop tətbiqlər yaratmaq mümkündür (React Native, Electron)</li>
                <li><strong>Asan öyrənilir</strong> - Sintaksis sadədir, lakin güclü imkanlar təqdim edir</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div className="card shadow-lg card-rich-gold" variants={itemVariants}>
          <motion.div 
            className="card-header text-white"
            style={{ backgroundColor: 'var(--rich-gold)', fontWeight: '600', fontSize: '1.25rem' }}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Code Practice - Öz kodunuzu yazın və test edin!
          </motion.div>
          <div className="card-body p-4">
            <div className="mb-3">
              <label htmlFor="code-input" className="form-label fw-bold mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                Kodunuzu yazın (console.log istifadə edin):
              </label>
              <textarea
                id="code-input"
                className="form-control font-monospace"
                rows="15"
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
                transition={{ type: "spring" }}
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
            <div className="mt-3">
              <small className="text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                <strong>İpucu:</strong> console.log() istifadə edərək nəticələri görə bilərsiniz. 
                Dəyişənlər, riyazi əməliyyatlar və string əməliyyatları ilə təcrübə edin! 
                Kodunuzu dəyişdirərək müxtəlif nəticələr əldə edin və JavaScript-in işləmə prinsipini anlayın.
              </small>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
