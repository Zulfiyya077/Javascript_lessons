import { useState } from 'react';
import { motion } from 'framer-motion';

const DOM = () => {
  const examples = {
    basic: `// Nümunə 1: Element seçimi və mətn dəyişdirmə
let title = document.getElementById('dom-demo-title');
let text = document.getElementById('dom-demo-text');
let output = document.getElementById('dom-demo-output');

if (title) title.textContent = 'Başlıq JavaScript ilə dəyişdirildi!';
if (text) text.innerHTML = 'Mətn <strong>HTML ilə</strong> dəyişdirildi.';

if (output) {
  output.innerHTML = '';
  let p = document.createElement('p');
  p.textContent = 'Yeni element - ' + new Date().toLocaleTimeString('az-AZ');
  p.style.color = 'var(--jewel-teal)';
  output.appendChild(p);
}
console.log('DOM əməliyyatları icra olundu!');`,
    querySelector: `// Nümunə 2: querySelector və querySelectorAll
let area = document.getElementById('dom-practice-area');
let firstP = area ? area.querySelector('p');
let allParagraphs = area ? area.querySelectorAll('p');

console.log('İlk p element:', firstP ? firstP.tagName : 'yox');
console.log('Bütün p sayı:', allParagraphs ? allParagraphs.length : 0);

let title = document.getElementById('dom-demo-title');
if (title) title.textContent = 'querySelector nümunəsi - ' + (allParagraphs ? allParagraphs.length : 0) + ' p tapıldı';`,
    styles: `// Nümunə 3: Stil və classList
let title = document.getElementById('dom-demo-title');
let text = document.getElementById('dom-demo-text');
let output = document.getElementById('dom-demo-output');

if (title) {
  title.style.color = '#9966CC';
  title.style.fontSize = '1.5rem';
  title.classList.add('fw-bold');
}
if (text) {
  text.style.backgroundColor = 'rgba(212, 175, 55, 0.2)';
  text.style.padding = '12px';
  text.style.borderRadius = '8px';
}
if (output) {
  output.innerHTML = '<span style="color:green">Stil və classList tətbiq olundu.</span>';
}
console.log('Stillər tətbiq olundu');`,
    createElements: `// Nümunə 4: createElement, appendChild - dinamik siyahı
let output = document.getElementById('dom-demo-output');
if (!output) { console.log('output tapılmadı'); throw new Error('output yox'); }

output.innerHTML = '';
let ul = document.createElement('ul');
ul.style.listStyle = 'none';
ul.style.paddingLeft = '0';
['Alma', 'Armud', 'Banan', 'Üzüm'].forEach(function(meyve, i) {
  let li = document.createElement('li');
  li.textContent = (i + 1) + '. ' + meyve;
  li.style.padding = '6px 0';
  li.style.borderBottom = '1px solid #dee2e6';
  ul.appendChild(li);
});
output.appendChild(ul);
console.log('4 elementli siyahı yaradıldı');`,
    attributes: `// Nümunə 5: getAttribute, setAttribute
let btn = document.getElementById('dom-demo-btn');
let text = document.getElementById('dom-demo-text');
let output = document.getElementById('dom-demo-output');

if (btn) {
  btn.setAttribute('title', 'Bu düymə DOM ilə dəyişdirildi');
  let id = btn.getAttribute('id');
  console.log('Düymə id:', id);
}
if (text) text.setAttribute('data-info', 'custom-data-123');
if (output) {
  let data = text ? text.getAttribute('data-info') : '';
  output.innerHTML = '<p>data-info atributu: ' + data + '</p>';
}
console.log('Atributlar oxundu və yazıldı');`,
    events: `// Nümunə 6: addEventListener (klik sayacı)
let btn = document.getElementById('dom-demo-btn');
let output = document.getElementById('dom-demo-output');
if (!output) throw new Error('output yox');

let count = 0;
if (btn) {
  btn.onclick = function() {
    count++;
    output.innerHTML = '<p>Düyməyə ' + count + ' dəfə kliklənildi.</p>';
    console.log('Klik sayı:', count);
  };
  output.innerHTML = '<p>Düyməyə klikləyin – sayac işləyir.</p>';
}
console.log('Klik hadisəsi əlavə olundu');`,
  };

  const defaultCode = examples.basic;
  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  const loadExample = (key) => setCode(examples[key] || code);

  const runCode = () => {
    try {
      let result = '';
      const originalLog = console.log;
      console.log = (...args) => {
        result += args.join(' ') + '\n';
      };
      eval(code);
      console.log = originalLog;
      setOutput(result || 'Kod uğurla icra olundu.');
    } catch (error) {
      setOutput(`Xəta: ${error.message}`);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
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
        DOM (Document Object Model)
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Nədir DOM */}
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              DOM nədir?
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              <strong>Document Object Model (DOM)</strong> – brauzerin HTML sənədini ağac (tree) quruluşunda
              obyektlər kimi təqdim etməsidir. JavaScript bu obyektlər vasitəsilə səhifənin strukturunu,
              məzmununu və stillərini oxuya, dəyişə və dinamik əlavə edə bilir. Yəni DOM, HTML ilə
              JavaScript arasında körpüdür.
            </p>
            <p className="mb-3" style={{ lineHeight: '1.8' }}>
              Brauzer HTML faylını oxuyanda onu <strong>parse</strong> edir və hər teqi (tag) bir <strong>node</strong> (node) kimi
              yaddaşa yığır. Bu node-lar ata-uşaq münasibətində olur – məsələn <code>&lt;body&gt;</code> içindəki <code>&lt;div&gt;</code>,
              onun içindəki <code>&lt;p&gt;</code> və s. Beləliklə bütün səhifə bir <strong>ağac (tree)</strong> quruluşunda təmsil olunur.
              JavaScript-də <code>document</code> bu ağacın köküdür; <code>document.body</code>, <code>document.head</code> və
              digər elementlərə birbaşa daxil oluruq. DOM-u dəyişdikdə brauzer səhifəni yenidən çəkir (reflow/repaint), ona görə
              çox tez-tez DOM əməliyyatları performansı azalda bilər – buna görə də React kimi kitabxanalar virtual DOM istifadə edir.
            </p>
            <div className="row g-3 mb-4">
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)', borderLeft: '4px solid var(--jewel-teal)' }}>
                  <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>DOM-un rolu</h6>
                  <ul className="mb-0 small" style={{ lineHeight: '1.9' }}>
                    <li>Səhifə elementlərini seçmək</li>
                    <li>Mətn və HTML dəyişdirmək</li>
                    <li>Atributları əlavə/sil dəyişdirmək</li>
                    <li>Stil (CSS) tətbiq etmək</li>
                    <li>Klik, fokus kimi hadisələri dinləmək</li>
                    <li>Yeni elementlər yaratmaq və səhifəyə əlavə etmək</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-3 rounded" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderLeft: '4px solid var(--rich-gold)' }}>
                  <h6 className="text-rich-gold mb-2" style={{ fontWeight: '600' }}>DOM ağacı</h6>
                  <pre className="mb-0 small font-monospace" style={{ fontSize: '12px', lineHeight: '1.6' }}>{`document (root)
  └── html
        ├── head
        │     ├── meta, title, link...
        │     └── ...
        └── body
              ├── header, main, div...
              └── script`}</pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Node növləri */}
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              DOM node növləri
            </h3>
            <p className="mb-4" style={{ lineHeight: '1.8' }}>
              DOM-dakı hər şey bir <strong>node</strong>-dur. Əsas növlər:
            </p>
            <div className="table-responsive">
              <table className="table table-bordered table-hover">
                <thead style={{ backgroundColor: 'var(--jewel-teal)', color: 'white' }}>
                  <tr>
                    <th style={{ fontWeight: '600' }}>Node tipi</th>
                    <th style={{ fontWeight: '600' }}>Sabit</th>
                    <th style={{ fontWeight: '600' }}>Təsvir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>ELEMENT_NODE</code></td>
                    <td>1</td>
                    <td>HTML elementləri: div, p, button, span və s.</td>
                  </tr>
                  <tr>
                    <td><code>TEXT_NODE</code></td>
                    <td>3</td>
                    <td>Element içindəki mətn</td>
                  </tr>
                  <tr>
                    <td><code>COMMENT_NODE</code></td>
                    <td>8</td>
                    <td>HTML şərhləri</td>
                  </tr>
                  <tr>
                    <td><code>DOCUMENT_NODE</code></td>
                    <td>9</td>
                    <td>Sənədin özü (document)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Element seçimi */}
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Element seçimi
            </h3>
            <p className="mb-4" style={{ lineHeight: '1.8' }}>
              Elementləri tapmaq üçün ən çox istifadə olunan metodlar:
            </p>
            <div className="row g-3">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                  <div className="card-body">
                    <code className="d-block mb-2">getElementById('id')</code>
                    <small className="text-muted">Bir element – id ilə. Tez və sadə.</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                  <div className="card-body">
                    <code className="d-block mb-2">querySelector('selector')</code>
                    <small className="text-muted">CSS seçicisi – ilk uyğun element.</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: '4px solid var(--jewel-teal)' }}>
                  <div className="card-body">
                    <code className="d-block mb-2">querySelectorAll('selector')</code>
                    <small className="text-muted">Bütün uyğun elementlər – NodeList.</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                  <div className="card-body">
                    <code className="d-block mb-2">getElementsByClassName('class')</code>
                    <small className="text-muted">Sinif adına görə – HTMLCollection.</small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderLeft: '4px solid var(--rich-gold)' }}>
                  <div className="card-body">
                    <code className="d-block mb-2">getElementsByTagName('tag')</code>
                    <small className="text-muted">Teq adına görə – məs: 'div', 'p'.</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="alert mt-4 mb-3" style={{ backgroundColor: 'rgba(153, 102, 204, 0.08)', borderLeft: '4px solid var(--amethyst-purple)' }}>
              <strong className="text-amethyst-purple">Müasir üslub:</strong> Çox vaxt <code>querySelector</code> və <code>querySelectorAll</code> istifadə olunur, çünki CSS seçiciləri (class, tag, atribut) ilə çevik işləyir.
            </div>
            <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>Praktik nümunə – seçicilər</h6>
            <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '12px' }}>{`document.getElementById('myId');           // bir element, id ilə
document.querySelector('.my-class');       // ilk uyğun .my-class
document.querySelector('div.box');         // div.box – ilk uyğun
document.querySelectorAll('li');            // bütün li – NodeList (forEach işlədir)
document.querySelectorAll('.item').length; // uyğun elementlərin sayı`}</pre>
          </div>
        </motion.div>

        {/* Məzmun və atributlar */}
        <motion.div className="card mb-4 shadow-lg card-rich-gold" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Məzmun və atributlar
            </h3>
            <ul style={{ lineHeight: '2.2' }}>
              <li><code>element.innerHTML</code> – daxildəki HTML (string). HTML interpretasiya olunur. <strong>İstifadəçi məlumatı ilə ehtiyatlı olun (XSS).</strong></li>
              <li><code>element.textContent</code> – yalnız mətn, HTML etiketləri göstərilmir. Təhlükəsiz (XSS üçün yaxşıdır).</li>
              <li><code>element.innerText</code> – görünən mətn (CSS və visibility təsir edir).</li>
              <li><code>element.getAttribute('name')</code> – atributun qiymətini oxumaq.</li>
              <li><code>element.setAttribute('name', 'value')</code> – atribut təyin etmək.</li>
              <li><code>element.classList.add/remove/toggle('class')</code> – CSS siniflərini idarə etmək.</li>
              <li><code>element.style.property</code> – inline stil (məs: element.style.color = 'red').</li>
            </ul>
            <h6 className="text-rich-gold mb-2 mt-3" style={{ fontWeight: '600' }}>Praktik fərq: innerHTML vs textContent</h6>
            <div className="row g-2">
              <div className="col-md-6">
                <pre className="bg-dark text-light p-2 rounded small mb-0" style={{ fontSize: '11px' }}>{`el.innerHTML = '<b>Qalın</b> mətn';
// Nəticə: Qalın mətn (bold)`}</pre>
              </div>
              <div className="col-md-6">
                <pre className="bg-dark text-light p-2 rounded small mb-0" style={{ fontSize: '11px' }}>{`el.textContent = '<b>Qalın</b> mətn';
// Nəticə: <b>Qalın</b> mətn (etiqet görünür)`}</pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Yaradılma və hadisələr */}
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Element yaratmaq və hadisələr
            </h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>Yaratmaq və əlavə etmək</h6>
                <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '13px' }}>{`let div = document.createElement('div');
div.textContent = 'Yeni element';
div.className = 'my-class';
document.getElementById('parent').appendChild(div);`}</pre>
              </div>
              <div className="col-md-6 mb-3">
                <h6 className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>Hadisə dinləmə</h6>
                <pre className="bg-dark text-light p-3 rounded small mb-0" style={{ fontSize: '13px' }}>{`element.addEventListener('click', function() {
  console.log('Kliklənildi!');
});
// və ya: element.onclick = function() { ... };`}</pre>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tətbiq ssenariləri */}
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              DOM harada tətbiq olunur?
            </h3>
            <div className="row g-3">
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Formlar</h6>
                  <small>Input dəyərini <code>element.value</code> ilə oxumaq, xəta mesajı göstərmək, düyməni disable etmək.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Dinamik məzmun</h6>
                  <small>API-dan gələn məlumatı <code>createElement</code> və <code>appendChild</code> ilə siyahı/kart kimi göstərmək.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Hadisələr</h6>
                  <small>Klik, submit, keyup ilə istifadəçi əməllərinə reaksiya vermək – <code>addEventListener</code>.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Modal və menyu</h6>
                  <small>Gizlətmək/göstərmək üçün <code>classList.toggle</code> və ya <code>style.display</code>.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Sayğac və timer</h6>
                  <small>Vaxtı və ya sayı yeniləmək – müəyyən elementin <code>textContent</code>-ini dəyişmək.</small>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-3 h-100 rounded" style={{ backgroundColor: 'rgba(0, 95, 115, 0.08)' }}>
                  <h6 className="text-jewel-teal mb-2">Single Page App</h6>
                  <small>React/Vue əvəzinə vanilla JS-də səhifə hissələrini əvəz etmək (innerHTML və ya replaceChildren).</small>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Praktik nümunələr - nümunə seçimi */}
        <motion.div className="card mb-4 shadow-lg border-0" variants={itemVariants} style={{ borderLeft: '4px solid var(--rich-gold)' }}>
          <div className="card-body p-4">
            <h3 className="text-rich-gold mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Praktik nümunələr – nümunəni editora yüklə
            </h3>
            <p className="mb-4" style={{ lineHeight: '1.8' }}>
              Aşağıdakı düymələrdən birini seçin: nümunə kod aşağıdakı redaktora yüklənəcək. Sonra <strong>Kodu İcra Et</strong> basın və nəticəni praktika sahəsində görün.
            </p>
            <div className="row g-2">
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('basic')}>
                  <strong>1.</strong> Element seçimi və mətn dəyişdirmə
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('querySelector')}>
                  <strong>2.</strong> querySelector / querySelectorAll
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('styles')}>
                  <strong>3.</strong> Stil və classList
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('createElements')}>
                  <strong>4.</strong> createElement – dinamik siyahı
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('attributes')}>
                  <strong>5.</strong> getAttribute / setAttribute
                </motion.button>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <motion.button type="button" className="btn btn-outline-primary w-100 text-start" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => loadExample('events')}>
                  <strong>6.</strong> addEventListener – klik sayacı
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Praktika sahəsi */}
        <motion.div className="card mb-4 shadow-lg border-0" variants={itemVariants} style={{ borderLeft: '4px solid var(--amethyst-purple)' }}>
          <div className="card-body p-4">
            <h3 className="text-amethyst-purple mb-3" style={{ fontSize: '1.5rem', fontWeight: '600' }}>
              Praktika sahəsi
            </h3>
            <p className="mb-3" style={{ lineHeight: '1.8' }}>
              Aşağıdakı qutuda göstərilən elementlərə <code>id</code> verilib. Yuxarıdakı <strong>Praktik nümunələr</strong> bölməsindən nümunə seçib redaktora yükləyə bilərsiniz və ya öz kodunuzu yaza bilərsiniz. <code>document.getElementById('dom-demo-title')</code>, <code>dom-demo-text</code>, <code>dom-demo-output</code>, <code>dom-demo-btn</code> ilə bu elementlərə təsir edin. <strong>Kodu İcra Et</strong> basın – nəticə həm bu sahədə, həm də &quot;Console çıxışı&quot; blokunda görünəcək.
            </p>
            <div
              id="dom-practice-area"
              className="p-4 rounded border mb-4"
              style={{
                backgroundColor: 'rgba(0, 95, 115, 0.06)',
                borderColor: 'var(--jewel-teal)',
                minHeight: '140px'
              }}
            >
              <h4 id="dom-demo-title" className="text-jewel-teal mb-2" style={{ fontWeight: '600' }}>
                DOM praktika sahəsi
              </h4>
              <p id="dom-demo-text" className="mb-3" style={{ lineHeight: '1.7' }}>
                Bu mətn JavaScript ilə dəyişdirilə bilər. <code>getElementById</code>, <code>textContent</code>, <code>innerHTML</code> sınayın.
              </p>
              <button type="button" id="dom-demo-btn" className="btn btn-jewel-teal btn-sm me-2">
                Düymə (id: dom-demo-btn)
              </button>
              <div id="dom-demo-output" className="mt-3" style={{ minHeight: '24px' }} />
            </div>
          </div>
        </motion.div>

        {/* Kod editoru */}
        <motion.div className="card shadow-lg card-rich-gold" variants={itemVariants}>
          <motion.div
            className="card-header text-white"
            style={{ backgroundColor: 'var(--rich-gold)', fontWeight: '600', fontSize: '1.25rem' }}
            whileHover={{ scale: 1.01 }}
          >
            DOM ilə kod yazın
          </motion.div>
          <div className="card-body p-4">
            <div className="mb-3">
              <label htmlFor="dom-code-input" className="form-label fw-bold mb-3" style={{ fontSize: '1.1rem', color: 'var(--text-dark)' }}>
                Elementlər: <code>dom-demo-title</code>, <code>dom-demo-text</code>, <code>dom-demo-output</code>, <code>dom-demo-btn</code>
              </label>
              <textarea
                id="dom-code-input"
                className="form-control font-monospace"
                rows={18}
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
                <strong className="text-amethyst-purple" style={{ fontSize: '1.1rem' }}>Console çıxışı:</strong>
                <pre className="mb-0 mt-2 bg-white p-3 rounded" style={{ fontSize: '14px', border: '1px solid #dee2e6', overflowX: 'auto' }}>
                  {output}
                </pre>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DOM;
