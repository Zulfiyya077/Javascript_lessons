import { useState } from 'react';
import { motion } from 'framer-motion';

const SwitchCase = () => {
  const [code, setCode] = useState(`// switch-case statements - Multiple choices

// ========== 1. BASIC SYNTAX ==========
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
  case 7:
    dayName = "Weekend";
    break;
  default:
    dayName = "Unknown day";
}

console.log("Day:", dayName);

// ========== 2. STRING SWITCH ==========
let color = "red";
let message;

switch (color) {
  case "red":
    message = "Red - be careful!";
    break;
  case "yellow":
    message = "Yellow - get ready";
    break;
  case "green":
    message = "Green - go!";
    break;
  default:
    message = "Unknown color";
}

console.log("Color message:", message);

// ========== 3. FALL-THROUGH (Without break) ==========
let month = 12;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
  default:
    season = "Unknown month";
}

console.log("Season:", season);

// ========== 4. RETURN IN FUNCTION ==========
function getGrade(score) {
  switch (true) {
    case score >= 90:
      return "A (Excellent)";
    case score >= 80:
      return "B (Good)";
    case score >= 70:
      return "C (Average)";
    case score >= 60:
      return "D (Poor)";
    default:
      return "F (Failed)";
  }
}

console.log("Grade:", getGrade(85));

// ========== 5. REAL-WORLD EXAMPLE ==========
let userType = "premium";
let discount;

switch (userType) {
  case "premium":
    discount = 20;
    break;
  case "gold":
    discount = 15;
    break;
  case "silver":
    discount = 10;
    break;
  case "standard":
    discount = 5;
    break;
  default:
    discount = 0;
}

console.log(userType + " user - " + discount + "% discount");`);

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
        Switch-Case İfadələri
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              Switch-case haqqında
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>switch-case</strong> ifadələri bir dəyişənin müxtəlif dəyərlərini yoxlamaq üçün 
              <code>if-else</code>-ə alternativdir. Xüsusilə çoxlu seçimlər olduqda daha oxunaqlı və 
              effektiv ola bilər. Switch ifadələri <strong>strict comparison</strong> (===) istifadə edir, 
              yəni tip və dəyər hər ikisi də uyğun olmalıdır. Switch-case ifadələri kodun strukturunu 
              yaxşılaşdırır və çoxlu şərt yoxlamalarını daha təmiz şəkildə təşkil etməyə kömək edir.
            </p>

            <div className="row mt-4 mb-4">
              <div className="col-md-6">
                <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Switch-case-in üstünlükləri:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Çoxlu seçimlər üçün daha oxunaqlı</strong> - if-else zəncirindən daha təmiz görünür</li>
                  <li><strong>Kod strukturunu yaxşılaşdırır</strong> - Məntiqi qruplaşdırma</li>
                  <li><strong>Fall-through imkanı</strong> - Bir neçə case üçün eyni kod</li>
                  <li><strong>Performans</strong> - Bəzən if-else-dən daha sürətli ola bilər</li>
                  <li><strong>Oxunaqlıq</strong> - Hər case aydın şəkildə görünür</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>İstifadə halları:</h5>
                <ul style={{ lineHeight: '2', fontSize: '1rem' }}>
                  <li><strong>Menu seçimləri</strong> - İstifadəçi seçimlərinə əsasən fərqli funksiyalar</li>
                  <li><strong>Status kodları</strong> - HTTP status kodları, error kodları</li>
                  <li><strong>İstifadəçi rolları</strong> - Rollara əsasən icazələr</li>
                  <li><strong>Fəsil/ay təyini</strong> - Tarix əsaslı seçimlər</li>
                  <li><strong>Çoxlu şərt yoxlamaları</strong> - Eyni dəyişənin müxtəlif dəyərləri</li>
                </ul>
              </div>
            </div>

            <div className="alert mt-4 mb-4" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
              <h6 className="alert-heading text-rich-gold" style={{ fontWeight: '600' }}>Vacib qeydlər:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li><strong>break</strong> ifadəsi vacibdir - yoxsa növbəti case-lər də icra olunur (fall-through)</li>
                <li>Fall-through bəzən faydalıdır - bir neçə case üçün eyni kod yazmaq üçün</li>
                <li><strong>default</strong> case heç bir uyğunluq tapılmadıqda icra olunur - həmişə əlavə edin</li>
                <li>Switch <strong>strict comparison</strong> (===) istifadə edir - tip və dəyər hər ikisi uyğun olmalıdır</li>
                <li>String, number və digər primitiv tiplərlə işləyir</li>
                <li>Çox mürəkkəb şərtlər üçün if-else daha yaxşıdır</li>
              </ul>
            </div>

            <div className="mt-4 mb-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>if-else vs switch-case:</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="card border-jewel-teal h-100" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)' }}>
                      <h6 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>if-else istifadə edin:</h6>
                      <ul className="small" style={{ lineHeight: '2' }}>
                        <li>Mürəkkəb şərtlər</li>
                        <li>Range yoxlamaları </li>
                        <li>Boolean məntiq</li>
                        <li>Az sayda seçim (2-3)</li>
                        <li>Dinamik şərtlər</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-rich-gold h-100" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                    <div className="card-body" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <h6 className="text-rich-gold mb-3" style={{ fontWeight: '600' }}>switch-case istifadə edin:</h6>
                      <ul className="small" style={{ lineHeight: '2' }}>
                        <li>Çoxlu seçimlər (4+)</li>
                        <li>Dəqiq dəyər yoxlamaları</li>
                        <li>String/number müqayisələri</li>
                        <li>Fall-through lazımdırsa</li>
                        <li>Eyni dəyişənin müxtəlif dəyərləri</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-jewel-teal mb-3" style={{ fontWeight: '600' }}>Sintaksis:</h5>
              <div className="bg-light p-4 rounded" style={{ border: '1px solid #dee2e6' }}>
                <pre className="mb-0" style={{ fontSize: '14px', lineHeight: '1.8' }}>
{`switch (variable) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // default code
}`}
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

export default SwitchCase;
