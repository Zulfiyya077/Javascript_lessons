import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InterviewQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "JavaScript nədir və onun əsas xüsusiyyətləri nələrdir?",
      answer: "JavaScript dinamik, yüksək səviyyəli, interpretasiya olunan proqramlaşdırma dilidir. Əsas xüsusiyyətləri: dinamik tipləşdirmə, prototip əsaslı OOP, first-class funksiyalar, asinxron proqramlaşdırma, event-driven arxitektura. JavaScript həm brauzerdə (client-side), həm də server tərəfində (Node.js) işləyə bilir."
    },
    {
      id: 2,
      question: "var, let və const arasında fərq nədir?",
      answer: "var function scope-a malikdir, hoisting ilə işləyir və yenidən bəyan oluna bilər. let və const block scope-a malikdir, Temporal Dead Zone-da olur və yenidən bəyan oluna bilməz. let yenidən təyin oluna bilər, const isə sabitdir. Müasir JavaScript-də var istifadə etməməli, əvəzinə let və const istifadə etməlisiniz."
    },
    {
      id: 3,
      question: "Hoisting nədir?",
      answer: "Hoisting JavaScript-in davranışıdır, burada dəyişən və funksiya bəyannamələri scope-un yuxarısına köçürülür. var ilə bəyan olunmuş dəyişənlər undefined ilə initialize olunur, let və const isə Temporal Dead Zone-da qalır. Function declaration-lar tam hoisted olunur, function expression-lar isə yox."
    },
    {
      id: 4,
      question: "Closure nədir?",
      answer: "Closure (bağlanma) funksiyanın ətrafdakı scope-dan dəyişənlərə çatmaq qabiliyyətidir, hətta funksiya scope-dan kənarda icra olunduqda belə. Bu, private dəyişənlər yaratmağa və data encapsulation təmin etməyə imkan verir. Closure-lar callback funksiyalarda, event handler-larda və modul pattern-də geniş istifadə olunur."
    },
    {
      id: 5,
      question: "this keyword nədir və necə işləyir?",
      answer: "this JavaScript-də kontekst obyektinə istinad edir. Onun dəyəri funksiyanın çağırılma üsulundan asılıdır. Normal funksiyalarda this çağırıldığı obyektə istinad edir. Arrow funksiyalarda this lexical-dir - ətrafdakı scope-dan götürülür. call(), apply(), bind() metodları ilə this-i açıq şəkildə təyin etmək olar."
    },
    {
      id: 6,
      question: "Arrow funksiyalar ilə normal funksiyalar arasında fərq nədir?",
      answer: "Arrow funksiyalar qısa sintaksisə malikdir, lexical this binding-ə malikdir (this ətrafdakı scope-dan götürülür), arguments obyektinə malik deyil, constructor kimi istifadə oluna bilməz, generator ola bilməz. Normal funksiyalar öz this kontekstinə malikdir, arguments obyektinə malikdir və constructor kimi istifadə oluna bilər."
    },
    {
      id: 7,
      question: "Promise nədir?",
      answer: "Promise asinxron əməliyyatın nəticəsini təmsil edən obyektdir. O, üç vəziyyətə malikdir: pending (gözləyir), fulfilled (tamamlandı), rejected (rədd edildi). Promise then(), catch(), finally() metodları ilə işləyir. async/await Promise-lərin sintaktik şəkəridir."
    },
    {
      id: 8,
      question: "async/await nədir?",
      answer: "async/await Promise-ləri işlətmək üçün sintaktik şəkərdir. async funksiya həmişə Promise qaytarır. await Promise-in həll olunmasını gözləyir və yalnız async funksiya içində istifadə oluna bilər. Bu, asinxron kodu sinxron koda oxşar görünməyə imkan verir."
    },
    {
      id: 9,
      question: "Event Loop nədir?",
      answer: "Event Loop JavaScript-in asinxron kodunu idarə edən mexanizmdir. O, call stack, callback queue və microtask queue ilə işləyir. Event loop call stack boş olduqda callback queue-dan funksiyaları götürür və icra edir. Promise-lər microtask queue-ya gedir və prioritetlidir."
    },
    {
      id: 10,
      question: "Call, Apply və Bind arasında fərq nədir?",
      answer: "call() və apply() funksiyanı dərhal çağırır, this-i təyin edir. call() parametrləri ayrı-ayrı qəbul edir, apply() isə massiv qəbul edir. bind() yeni funksiya yaradır, this-i və parametrləri təyin edir, lakin dərhal çağırmır. Hər üçü this kontekstini dəyişdirmək üçün istifadə olunur."
    },
    {
      id: 11,
      question: "Map, Filter və Reduce arasında fərq nədir?",
      answer: "map() hər elementi transformasiya edir və yeni massiv qaytarır. filter() şərtə uyğun elementləri seçir və yeni massiv qaytarır. reduce() massivi bir dəyərə endirir, accumulator istifadə edir. Hər üçü non-mutating metodlardır və funksional proqramlaşdırma üslubunda geniş istifadə olunur."
    },
    {
      id: 12,
      question: "Destructuring nədir?",
      answer: "Destructuring massiv və obyektlərdən dəyərləri çıxarmaq üçün sintaksisdir. Massiv destructuring: const [a, b] = [1, 2]. Obyekt destructuring: const {name, age} = person. Default dəyərlər, rest operator və nested destructuring dəstəklənir. Bu, kodu daha qısa və oxunaqlı edir."
    },
    {
      id: 13,
      question: "Spread operator nədir?",
      answer: "Spread operator (...) massiv və obyektləri genişləndirmək üçün istifadə olunur. Massivlərdə: [...arr1, ...arr2]. Obyektlərdə: {...obj1, ...obj2}. Funksiya çağırışlarında: func(...args). O, massivləri və obyektləri kopyalamaq, birləşdirmək və funksiyalara parametr ötürmək üçün istifadə olunur."
    },
    {
      id: 14,
      question: "Rest parameters nədir?",
      answer: "Rest parameters (...) funksiyaya qeyri-müəyyən sayda parametr ötürməyə imkan verir. Parametrlər massivə çevrilir. Nümunə: function sum(...numbers). Rest parametr funksiyanın son parametri olmalıdır. Arguments obyektinə alternativdir və daha müasirdir."
    },
    {
      id: 15,
      question: "Template Literals nədir?",
      answer: "Template Literals (backticks) string yaratmaq üçün ES6 sintaksisidir. Dəyişənləri ${} ilə daxil etmək olar. Çoxsətirli string-lər asanlıqla yaradılır. Tagged templates ilə güclü funksionallıq təmin edir. Nümunə: `Hello, ${name}!`"
    },
    {
      id: 16,
      question: "Null və Undefined arasında fərq nədir?",
      answer: "undefined dəyişənin təyin olunmaması deməkdir. null qəsdən təyin edilmiş boş dəyərdir. typeof undefined 'undefined' qaytarır, typeof null isə 'object' qaytarır (JavaScript-in bug-u). Null obyektin olmadığını göstərmək üçün istifadə olunur."
    },
    {
      id: 17,
      question: "== və === arasında fərq nədir?",
      answer: "== type coercion edir - tipləri çevirərək müqayisə edir. === strict comparison-dur - tip və dəyər hər ikisi uyğun olmalıdır. Həmişə === istifadə etməlisiniz, çünki == gözlənilməz nəticələr verə bilər. Nümunə: 5 == '5' true, 5 === '5' false."
    },
    {
      id: 18,
      question: "Type coercion nədir?",
      answer: "Type coercion JavaScript-in avtomatik olaraq tipləri çevirməsidir. Bu, == operatoru, + operatoru və digər yerlərdə baş verir. Nümunələr: '5' + 3 = '53', '5' - 3 = 2. Bu gözlənilməz nəticələr yarada bilər, ona görə də === və explicit type conversion istifadə etmək daha yaxşıdır."
    },
    {
      id: 19,
      question: "Truthy və Falsy dəyərlər nədir?",
      answer: "Falsy dəyərlər: false, 0, -0, 0n, '', null, undefined, NaN. Qalanları truthy-dir. if, while kimi şərti ifadələrdə bu dəyərlər avtomatik olaraq boolean-ə çevrilir. Boolean() funksiyası və ya !! operatoru ilə explicit çevirmə edə bilərsiniz."
    },
    {
      id: 20,
      question: "IIFE (Immediately Invoked Function Expression) nədir?",
      answer: "IIFE dərhal icra olunan funksiyadır. Sintaksis: (function() {})() və ya (() => {})(). Bu, scope yaratmaq, qlobal dəyişənləri qorumaq və modul pattern yaratmaq üçün istifadə olunur. ES6-dan bəri let/const block scope ilə IIFE daha az lazımdır."
    },
    {
      id: 21,
      question: "Strict mode nədir?",
      answer: "Strict mode JavaScript-in daha təhlükəsiz versiyasıdır. 'use strict' ilə aktivləşdirilir. O, bəzi səhvləri xəta kimi göstərir, qlobal obyektləri qoruyur, undefined this-i qadağan edir. Müasir JavaScript-də modullar avtomatik olaraq strict mode-dadır."
    },
    {
      id: 22,
      question: "Prototype nədir?",
      answer: "Prototype JavaScript-də obyektlərin bir-birindən xüsusiyyətləri miras alması mexanizmidir. Hər obyektin prototype-i var. Obyekt xassəsinə çatanda, əvvəlcə obyektin özündə axtarılır, sonra prototype zəncirində. Bu, prototip əsaslı irsiyyətdir."
    },
    {
      id: 23,
      question: "Class və Prototype arasında fərq nədir?",
      answer: "ES6 class-lar prototip əsaslı irsiyyətin sintaktik şəkəridir. Class-lar daha oxunaqlıdır, lakin həqiqətdə hələ də prototype istifadə edir. Class-lar constructor, metodlar, static metodlar, getter/setter dəstəkləyir. Prototype birbaşa manipulyasiya daha güclüdür."
    },
    {
      id: 24,
      question: "Inheritance JavaScript-də necə işləyir?",
      answer: "JavaScript prototip əsaslı irsiyyət istifadə edir. Class-lar extends ilə irsiyyət yaradır. super() parent constructor-ı çağırır. Prototype zənciri vasitəsilə metodlar və xassələr miras alınır. Object.create() ilə də irsiyyət yaratmaq olar."
    },
    {
      id: 25,
      question: "Debounce və Throttle nədir?",
      answer: "Debounce funksiyanı son çağırışdan müəyyən müddət sonra icra edir. Throttle funksiyanı müəyyən intervalda maksimum bir dəfə icra edir. Debounce axtarış input-ları üçün, throttle scroll event-ləri üçün istifadə olunur. Hər ikisi performansı yaxşılaşdırır."
    },
    {
      id: 26,
      question: "Memoization nədir?",
      answer: "Memoization nəticələri cache-də saxlamaq texnikasıdır. Eyni parametrlərlə funksiya çağırıldıqda cache-dən nəticə qaytarılır. Bu, bahalı hesablamaların performansını artırır. Recursive funksiyalarda xüsusilə faydalıdır (Fibonacci, faktorial və s.)."
    },
    {
      id: 27,
      question: "Currying nədir?",
      answer: "Currying funksiyanı bir neçə arqument qəbul edən funksiyadan bir arqument qəbul edən funksiyalar zəncirinə çevirməkdir. Nümunə: const add = a => b => a + b. Bu, funksiyaların yenidən istifadəsini artırır və partial application təmin edir."
    },
    {
      id: 28,
      question: "Higher-Order Function nədir?",
      answer: "Higher-Order Function başqa funksiyaları parametr kimi qəbul edən və ya funksiya qaytaran funksiyadır. map, filter, reduce, forEach kimi array metodları higher-order funksiyalardır. Bu, funksional proqramlaşdırmanın əsas konseptidir."
    },
    {
      id: 29,
      question: "Recursion nədir?",
      answer: "Recursion funksiyanın özünü çağırmasıdır. Base case (əsas hal) olmalıdır ki, sonsuz döngü yaranmasın. Recursion mürəkkəb problemləri kiçik problemlərə bölmək üçün istifadə olunur. Nümunələr: faktorial, Fibonacci, tree traversal."
    },
    {
      id: 30,
      question: "Event Delegation nədir?",
      answer: "Event Delegation event listener-ı parent elementə qoymaq və event bubbling-dən istifadə etməkdir. Bu, performansı artırır və dinamik elementlərlə işləməyi asanlaşdırır. event.target ilə hansı child elementin kliklənildiyini müəyyən etmək olar."
    },
    {
      id: 31,
      question: "Event Bubbling və Capturing nədir?",
      answer: "Event Bubbling event-in child elementdən parent elementlərə yayılmasıdır. Event Capturing əksinədir - parent-dan child-a. addEventListener-də üçüncü parametr true olduqda capturing, false (default) olduqda bubbling aktivdir. stopPropagation() ilə yayılmanı dayandırmaq olar."
    },
    {
      id: 32,
      question: "Local Storage və Session Storage arasında fərq nədir?",
      answer: "Local Storage məlumatı brauzer bağlanana qədər saxlayır. Session Storage yalnız tab bağlanana qədər saxlayır. Hər ikisi key-value cütləri şəklində işləyir. Hər ikisi ~5-10MB limitə malikdir. setItem(), getItem(), removeItem() metodları ilə işləyir."
    },
    {
      id: 33,
      question: "Cookie, Local Storage və Session Storage arasında fərq nədir?",
      answer: "Cookie-lər server-ə göndərilir, 4KB limitə malikdir, expiry date var. Local Storage client-də qalır, ~5-10MB, expiry yoxdur. Session Storage tab bağlanana qədər, ~5-10MB. Cookie-lər HTTP request-lərdə avtomatik göndərilir, storage-lar yox."
    },
    {
      id: 34,
      question: "JSON nədir?",
      answer: "JSON (JavaScript Object Notation) məlumat mübadilə formatıdır. JSON.stringify() obyekti string-ə çevirir. JSON.parse() string-i obyektə çevirir. JSON yalnız primitiv tipləri, massivləri və obyektləri dəstəkləyir. Funksiyalar, undefined, Symbol JSON-da ola bilməz."
    },
    {
      id: 35,
      question: "AJAX nədir?",
      answer: "AJAX (Asynchronous JavaScript and XML) server ilə asinxron kommunikasiyadır. XMLHttpRequest və ya fetch API ilə həyata keçirilir. Səhifəni yeniləmədən məlumat göndərmək və almaq üçün istifadə olunur. Müasir JavaScript-də fetch API və async/await geniş istifadə olunur."
    },
    {
      id: 36,
      question: "Fetch API nədir?",
      answer: "Fetch API network request-ləri üçün müasir API-dir. Promise qaytarır. GET, POST, PUT, DELETE və digər HTTP metodlarını dəstəkləyir. Headers, body, credentials kimi seçimlər təmin edir. Response obyekti json(), text(), blob() metodlarına malikdir."
    },
    {
      id: 37,
      question: "CORS nədir?",
      answer: "CORS (Cross-Origin Resource Sharing) müxtəlif origin-lərdən resurslara çatmağa icazə verir. Browser security mexanizmidir. Server Access-Control-Allow-Origin header ilə icazə verir. Preflight request-lər OPTIONS metodundan istifadə edir. Development-da proxy istifadə oluna bilər."
    },
    {
      id: 38,
      question: "XSS (Cross-Site Scripting) nədir?",
      answer: "XSS zərərli JavaScript kodunun səhifəyə inject olunmasıdır. Reflected XSS, Stored XSS, DOM-based XSS növləri var. Qorunmaq üçün: input validation, output encoding, Content Security Policy (CSP), innerHTML əvəzinə textContent istifadə etmək."
    },
    {
      id: 39,
      question: "CSRF (Cross-Site Request Forgery) nədir?",
      answer: "CSRF istifadəçini qeydiyyatdan keçmiş səhifədə əməliyyat yerinə yetirməyə məcbur etməkdir. Qorunmaq üçün: CSRF token-lar, SameSite cookie atributu, Referer header yoxlaması. Modern framework-lər avtomatik qorunma təmin edir."
    },
    {
      id: 40,
      question: "Scope nədir?",
      answer: "Scope dəyişənlərin görünür olduğu əhatə dairəsidir. Global scope, function scope, block scope var. let və const block scope-a malikdir, var function scope-a. Scope zənciri (scope chain) dəyişən axtarışı zamanı istifadə olunur."
    },
    {
      id: 41,
      question: "Lexical Scope nədir?",
      answer: "Lexical Scope (Static Scope) funksiyanın yaradıldığı yerdəki scope-a əsaslanır, çağırıldığı yerdəki yox. JavaScript lexical scope istifadə edir. Bu, closure-ların işləməsinin əsas səbəbidir. Dynamic scope JavaScript-də yoxdur."
    },
    {
      id: 42,
      question: "Temporal Dead Zone (TDZ) nədir?",
      answer: "Temporal Dead Zone let və const dəyişənlərinin bəyannamə olunduğu yerdən əvvəlki bölgədir. Bu bölgədə dəyişənə çatmaq ReferenceError verir. var üçün TDZ yoxdur, çünki o undefined ilə initialize olunur. TDZ JavaScript-in təhlükəsizlik mexanizmidir."
    },
    {
      id: 43,
      question: "Module Pattern nədir?",
      answer: "Module Pattern private və public API yaratmaq üçün istifadə olunur. IIFE və closure-lardan istifadə edir. Private dəyişənlər və metodlar yaradır, public API qaytarır. ES6 modulları daha müasir alternativdir. Bu, qlobal namespace-i qoruyur."
    },
    {
      id: 44,
      question: "ES6 Modules nədir?",
      answer: "ES6 Modules import/export sintaksisi ilə kod modullarını təşkil edir. export default və named export var. import ilə modulları daxil etmək olar. Modullar strict mode-dadır, öz scope-una malikdir. Tree shaking ilə istifadə olunmayan kod silinir."
    },
    {
      id: 45,
      question: "Generator Function nədir?",
      answer: "Generator Function function* sintaksisi ilə yaradılır. yield ilə dəyər qaytarır və icranı dayandırır. next() ilə davam etdirilir. Iterator protokolunu implement edir. Asinxron kod üçün istifadə oluna bilər, lakin async/await daha yayılmışdır."
    },
    {
      id: 46,
      question: "Symbol nədir?",
      answer: "Symbol ES6-dan bəri primitiv tipdir, unikal identifikatorlar yaradır. Hər Symbol unikaldır, hətta eyni description ilə. Object key-ləri kimi istifadə oluna bilər. Private property-lər yaratmaq üçün istifadə olunur. Symbol.iterator, Symbol.toStringTag kimi built-in symbol-lər var."
    },
    {
      id: 47,
      question: "Proxy nədir?",
      answer: "Proxy obyekt üçün custom davranış təyin etməyə imkan verir. Get, set, has, deleteProperty kimi trap-lər var. Validation, logging, virtual property-lər yaratmaq üçün istifadə olunur. React, Vue kimi framework-lərdə reactivity sistemində istifadə olunur."
    },
    {
      id: 48,
      question: "Reflect API nədir?",
      answer: "Reflect API Proxy trap-ləri ilə işləmək üçün metodlar təmin edir. Reflect.get(), Reflect.set(), Reflect.has() və s. Obyekt əməliyyatlarını funksional şəkildə yerinə yetirməyə imkan verir. Proxy ilə birlikdə istifadə olunur."
    },
    {
      id: 49,
      question: "WeakMap və WeakSet nədir?",
      answer: "WeakMap və WeakSet zəif referanslara malikdir - obyekt key-ləri garbage collection oluna bilər. Key-lər yalnız obyekt ola bilər. Iteration metodları yoxdur. Memory leak-ləri qarşısını almaq üçün istifadə olunur. Private data saxlamaq üçün faydalıdır."
    },
    {
      id: 50,
      question: "Set və Map nədir?",
      answer: "Set unikal dəyərlər kolleksiyasıdır. Map key-value cütləri, key-lər hər hansı tip ola bilər. Hər ikisi insertion order-u saxlayır. size, has(), add()/set(), delete(), clear() metodları var. Array-dən daha sürətli lookup təmin edir."
    },
    {
      id: 51,
      question: "Array.from() nədir?",
      answer: "Array.from() array-like və ya iterable obyektləri massivə çevirir. Arguments, NodeList, String kimi obyektləri massivə çevirmək üçün istifadə olunur. İkinci parametr map funksiyası ola bilər. Array.from('hello') ['h','e','l','l','o'] qaytarır."
    },
    {
      id: 52,
      question: "Array.isArray() nədir?",
      answer: "Array.isArray() dəyərin massiv olub-olmadığını yoxlayır. typeof [] 'object' qaytarır, ona görə də Array.isArray() daha dəqiqdir. instanceof Array də istifadə oluna bilər, lakin fərqli frame-lərdə problem yarada bilər."
    },
    {
      id: 53,
      question: "Object.freeze() və Object.seal() arasında fərq nədir?",
      answer: "Object.freeze() obyekti tamamilə dondurur - xassələri dəyişdirilə bilməz, əlavə/silinə bilməz. Object.seal() obyekti möhürləyir - mövcud xassələr dəyişdirilə bilər, lakin yeni xassə əlavə oluna bilməz. Object.isFrozen() və Object.isSealed() yoxlamaq üçün istifadə olunur."
    },
    {
      id: 54,
      question: "Object.assign() nədir?",
      answer: "Object.assign() bir və ya bir neçə mənbə obyektindən target obyektə xassələri kopyalayır. Shallow copy edir. Eyni key-lər üzərində yazır. Spread operator {...obj} daha müasir alternativdir. Object.assign({}, source) yeni obyekt yaradır."
    },
    {
      id: 55,
      question: "Deep Copy və Shallow Copy arasında fərq nədir?",
      answer: "Shallow Copy yalnız top-level xassələri kopyalayır, nested obyektlər referans kopyalanır. Deep Copy bütün nested obyektləri də kopyalayır. JSON.parse(JSON.stringify()) deep copy üçün istifadə oluna bilər, lakin funksiyalar və undefined itir. StructuredClone() və ya lodash cloneDeep() daha yaxşıdır."
    },
    {
      id: 56,
      question: "NaN nədir?",
      answer: "NaN (Not a Number) etibarsız riyazi əməliyyatın nəticəsidir. NaN === NaN false-dur. isNaN() və Number.isNaN() ilə yoxlamaq olar. Number.isNaN() daha dəqiqdir. NaN hər hansı ədədə vurulanda NaN qaytarır."
    },
    {
      id: 57,
      question: "isNaN() və Number.isNaN() arasında fərq nədir?",
      answer: "isNaN() type coercion edir - dəyəri əvvəlcə ədədə çevirir. Number.isNaN() strict yoxlayır - yalnız NaN üçün true qaytarır. isNaN('abc') true, Number.isNaN('abc') false. Həmişə Number.isNaN() istifadə etməlisiniz."
    },
    {
      id: 58,
      question: "parseInt() və parseFloat() arasında fərq nədir?",
      answer: "parseInt() string-i tam ədədə çevirir, ikinci parametr radix (əsas) qəbul edir. parseFloat() string-i kəsr ədədə çevirir. parseInt('10.5') 10, parseFloat('10.5') 10.5. parseInt() üçün həmişə radix təyin edin: parseInt('10', 10)."
    },
    {
      id: 59,
      question: "typeof operator nədir?",
      answer: "typeof operator dəyişənin tipini qaytarır. 'number', 'string', 'boolean', 'undefined', 'object', 'function', 'symbol', 'bigint' qaytara bilər. typeof null 'object' qaytarır (bug). Array və Date üçün də 'object' qaytarır. Daha dəqiq yoxlama üçün Object.prototype.toString.call() istifadə edin."
    },
    {
      id: 60,
      question: "instanceof operator nədir?",
      answer: "instanceof operator obyektin müəyyən constructor-ın instance-ı olub-olmadığını yoxlayır. Prototype zəncirini yoxlayır. [] instanceof Array true. Fərqli frame-lərdə problem yarada bilər. Array.isArray() daha etibarlıdır."
    },
    {
      id: 61,
      question: "Error Handling necə işləyir?",
      answer: "try-catch-finally blokları ilə xətaları idarə etmək olar. try-da kod icra olunur, xəta baş verərsə catch bloku icra olunur. finally həmişə icra olunur. throw ilə custom xətalar yaratmaq olar. Error obyektləri message, name, stack xassələrinə malikdir."
    },
    {
      id: 62,
      question: "Custom Error yaratmaq necədir?",
      answer: "Custom Error class Error-dan extend edilir. class CustomError extends Error. constructor-da message və digər xassələr təyin olunur. throw new CustomError('message') ilə atılır. Bu, daha mənalı xəta mesajları yaratmağa imkan verir."
    },
    {
      id: 63,
      question: "Promise.all() nədir?",
      answer: "Promise.all() bir neçə Promise-i paralel icra edir. Bütün Promise-lər həll olunarsa massiv qaytarır. Hər hansı biri rədd olunarsa, ilk rejection qaytarılır. Bütün Promise-lərin həll olunmasını gözləyir. Paralel əməliyyatlar üçün ideal."
    },
    {
      id: 64,
      question: "Promise.race() nədir?",
      answer: "Promise.race() bir neçə Promise-dən ən tez həll/rədd olunanı qaytarır. İlk nəticə qalib gəlir. Timeout yaratmaq üçün istifadə oluna bilər. Hər hansı bir Promise həll/rədd olunanda dayanır."
    },
    {
      id: 65,
      question: "Promise.allSettled() nədir?",
      answer: "Promise.allSettled() bütün Promise-lərin nəticəsini gözləyir, həll və ya rədd olmasından asılı olmayaraq. Hər bir nəticə status və value/reason ilə qaytarılır. Bütün əməliyyatların tamamlanmasını gözləmək lazımdırsa istifadə olunur."
    },
    {
      id: 66,
      question: "Microtask Queue nədir?",
      answer: "Microtask Queue Promise callback-ləri və queueMicrotask() üçündür. Callback Queue-dan əvvəl icra olunur. Promise.then(), Promise.catch() microtask queue-ya gedir. Event loop microtask queue-nu tam boşaldana qədər icra edir."
    },
    {
      id: 67,
      question: "Web Workers nədir?",
      answer: "Web Workers JavaScript kodunu ayrı thread-də icra etməyə imkan verir. Main thread-i bloklamır. postMessage() ilə kommunikasiya. CPU-intensive işlər üçün istifadə olunur. DOM-a çata bilməz. Dedicated Worker və Shared Worker var."
    },
    {
      id: 68,
      question: "Service Worker nədir?",
      answer: "Service Worker brauzər və network arasında proxy kimi işləyir. Offline funksionallıq, push notification, background sync təmin edir. PWA-ların əsas komponentidir. Cache API ilə işləyir. install, activate, fetch event-ləri var."
    },
    {
      id: 69,
      question: "PWA (Progressive Web App) nədir?",
      answer: "PWA veb tətbiqlərin native app kimi işləməsidir. Service Worker, Web App Manifest, HTTPS tələb olunur. Offline işləyir, home screen-ə əlavə oluna bilir. Push notification dəstəkləyir. Modern brauzerlərdə geniş dəstəklənir."
    },
    {
      id: 70,
      question: "WebSocket nədir?",
      answer: "WebSocket full-duplex kommunikasiya protokoludur. Persistent connection yaradır. Real-time tətbiqlər üçün istifadə olunur. Chat, gaming, live updates üçün ideal. ws:// və wss:// protokolları. Event-driven API."
    },
    {
      id: 71,
      question: "REST API nədir?",
      answer: "REST (Representational State Transfer) API dizayn prinsibidir. HTTP metodları (GET, POST, PUT, DELETE) istifadə olunur. Stateless, cacheable, layered system. JSON formatında məlumat mübadiləsi. Resource-based URL-lər. Modern veb inkişafda standartdır."
    },
    {
      id: 72,
      question: "GraphQL nədir?",
      answer: "GraphQL API üçün query dilidir. Client istədiyi məlumatı dəqiq təyin edir. Over-fetching və under-fetching problemi həll edir. Single endpoint. Type system. REST-ə alternativdir. Facebook tərəfindən yaradılıb."
    },
    {
      id: 73,
      question: "Virtual DOM nədir?",
      answer: "Virtual DOM real DOM-un JavaScript təsviridir. React, Vue kimi framework-lərdə istifadə olunur. Dəyişikliklər əvvəlcə Virtual DOM-da edilir, sonra real DOM-a tətbiq olunur. Diffing alqoritmi dəyişiklikləri tapır. Performansı artırır."
    },
    {
      id: 74,
      question: "React nədir?",
      answer: "React Facebook tərəfindən yaradılmış UI library-dir. Component-based arxitektura. Virtual DOM istifadə edir. JSX sintaksisi. Unidirectional data flow. Hooks (useState, useEffect) ilə state management. Geniş ekosistem."
    },
    {
      id: 75,
      question: "Vue.js nədir?",
      answer: "Vue.js progressive JavaScript framework-dür. Template-based sintaksis. Reactive data binding. Component system. Vuex state management. Vue Router routing. Daha asan öyrənilir. Evan You tərəfindən yaradılıb."
    },
    {
      id: 76,
      question: "Angular nədir?",
      answer: "Angular Google tərəfindən yaradılmış full-featured framework-dür. TypeScript əsaslı. Dependency injection. Two-way data binding. RxJS ilə reactive programming. CLI tools. Enterprise səviyyəli tətbiqlər üçün."
    },
    {
      id: 77,
      question: "State Management nədir?",
      answer: "State Management tətbiqin vəziyyətini mərkəzləşdirilmiş şəkildə idarə etməkdir. Redux, MobX, Vuex, Zustand kimi kitabxanalar var. Single source of truth. Predictable state updates. Time-travel debugging. Complex tətbiqlər üçün faydalıdır."
    },
    {
      id: 78,
      question: "Redux nədir?",
      answer: "Redux JavaScript tətbiqləri üçün state management kitabxanasıdır. Single store. Actions, reducers, store. Immutable updates. Time-travel debugging. Middleware (Redux Thunk, Saga). React ilə geniş istifadə olunur."
    },
    {
      id: 79,
      question: "MVC, MVP, MVVM nədir?",
      answer: "MVC (Model-View-Controller), MVP (Model-View-Presenter), MVVM (Model-View-ViewModel) arxitektura pattern-ləridir. Kodun təşkili və separation of concerns üçün. MVC-də Controller, MVP-də Presenter, MVVM-də ViewModel var. Hər biri fərqli məqsədlər üçün."
    },
    {
      id: 80,
      question: "Design Patterns JavaScript-də nədir?",
      answer: "Design Patterns təkrar olunan problemlərin həll yollarıdır. Singleton, Factory, Observer, Module, Prototype pattern-ləri JavaScript-də geniş istifadə olunur. Kodun təşkili, yenidən istifadəsi və maintainability üçün. GoF pattern-ləri JavaScript-ə adaptasiya olunur."
    },
    {
      id: 81,
      question: "Observer Pattern nədir?",
      answer: "Observer Pattern bir obyektin dəyişiklikləri digər obyektlərə bildirməsi mexanizmidir. Subject və Observer-lar var. Event system, reactive programming əsasında. addEventListener, EventEmitter, RxJS observer pattern istifadə edir."
    },
    {
      id: 82,
      question: "Singleton Pattern nədir?",
      answer: "Singleton Pattern yalnız bir instance-ın mövcud olmasını təmin edir. Global state, configuration, database connection üçün istifadə olunur. Module pattern JavaScript-də singleton yaradır. Lazy initialization mümkündür."
    },
    {
      id: 83,
      question: "Factory Pattern nədir?",
      answer: "Factory Pattern obyekt yaratmaq üçün interface təmin edir. Constructor-dan gizlədir. Fərqli tip obyektlər yaratmaq üçün. new operator əvəzinə factory funksiyası. Kodun daha flexible olmasını təmin edir."
    },
    {
      id: 84,
      question: "Builder Pattern nədir?",
      answer: "Builder Pattern mürəkkəb obyektləri addım-addım yaratmağa imkan verir. Method chaining istifadə edir. Optional parametrlərlə işləmək asandır. jQuery, mongoose kimi kitabxanalarda istifadə olunur."
    },
    {
      id: 85,
      question: "Strategy Pattern nədir?",
      answer: "Strategy Pattern alqoritmləri ayrı-ayrı class-larda təşkil edir və runtime-da seçməyə imkan verir. if-else zəncirlərinin alternativi. Kodun extensibility-sini artırır. Payment method-ları, sorting alqoritmləri üçün."
    },
    {
      id: 86,
      question: "Decorator Pattern nədir?",
      answer: "Decorator Pattern obyektə dinamik olaraq funksionallıq əlavə etməyə imkan verir. Wrapper funksiyalar. Function composition. Higher-order components React-də decorator pattern istifadə edir. ES7 decorator syntax dəstəklənir."
    },
    {
      id: 87,
      question: "Adapter Pattern nədir?",
      answer: "Adapter Pattern uyğun olmayan interface-ləri uyğunlaşdırır. Legacy kod ilə işləmək üçün. Wrapper class. Third-party library-ləri inteqrasiya etmək. Kodun compatibility-sini artırır."
    },
    {
      id: 88,
      question: "Proxy Pattern nədir?",
      answer: "Proxy Pattern obyekt üçün placeholder və ya surrogate təmin edir. Access control, lazy loading, logging üçün. JavaScript Proxy API proxy pattern implement edir. Virtual proxy, protection proxy növləri var."
    },
    {
      id: 89,
      question: "Command Pattern nədir?",
      answer: "Command Pattern request-ləri obyekt kimi encapsulate edir. Undo/redo funksionallığı. Queue, log əməliyyatları. Macro recording. Request-ləri parametrləşdirmək. History management."
    },
    {
      id: 90,
      question: "Chain of Responsibility Pattern nədir?",
      answer: "Chain of Responsibility Pattern request-ləri handler-lar zəncirindən keçirir. Hər handler request-i emal edə və ya növbətiyə ötürə bilər. Middleware pattern. Express.js middleware-ləri bu pattern istifadə edir."
    },
    {
      id: 91,
      question: "Iterator Pattern nədir?",
      answer: "Iterator Pattern kolleksiyanın elementlərinə ardıcıl çatmaq üçün interface təmin edir. for...of loop iterator pattern istifadə edir. Symbol.iterator. Custom iteration davranışı. Lazy evaluation."
    },
    {
      id: 92,
      question: "Mixin Pattern nədir?",
      answer: "Mixin Pattern bir neçə obyektin funksionallığını birləşdirir. Multiple inheritance alternativi. Object.assign(), spread operator ilə. Reusable funksionallıq. Composition over inheritance."
    },
    {
      id: 93,
      question: "Revealing Module Pattern nədir?",
      answer: "Revealing Module Pattern public API-ni aydın şəkildə qaytarır. Private funksiyalar və dəyişənlər. Return obyekti public metodları ehtiva edir. Daha oxunaqlı kod. Module pattern-in variantı."
    },
    {
      id: 94,
      question: "Facade Pattern nədir?",
      answer: "Facade Pattern mürəkkəb sistem üçün sadə interface təmin edir. Subsystem-ləri gizlədir. jQuery Facade Pattern-dir - mürəkkəb DOM API-ni sadələşdirir. API design-də geniş istifadə olunur."
    },
    {
      id: 95,
      question: "Flyweight Pattern nədir?",
      answer: "Flyweight Pattern memory istifadəsini optimallaşdırmaq üçün obyektləri paylaşdırır. Eyni dəyərləri cache-də saxlayır. String pool, object pool. Performance optimization. Large number of similar objects."
    },
    {
      id: 96,
      question: "Mediator Pattern nədir?",
      answer: "Mediator Pattern obyektlər arasında kommunikasiyanı mərkəzləşdirir. Loose coupling. Event bus, message queue. Redux store mediator kimi işləyir. Component-lər bir-biri ilə birbaşa kommunikasiya etmir."
    },
    {
      id: 97,
      question: "Memento Pattern nədir?",
      answer: "Memento Pattern obyektin vəziyyətini saxlayır və bərpa etməyə imkan verir. Undo funksionallığı. State snapshots. History management. Caretaker və Originator rolları. Application state management."
    },
    {
      id: 98,
      question: "State Pattern nədir?",
      answer: "State Pattern obyektin davranışını vəziyyətindən asılı olaraq dəyişdirir. State machine. if-else zəncirlərinin alternativi. Finite state machine. Game development, workflow management."
    },
    {
      id: 99,
      question: "Template Method Pattern nədir?",
      answer: "Template Method Pattern alqoritmin strukturunu təyin edir, bəzi addımları subclass-lara buraxır. Inheritance-based. Code reuse. Framework design. Abstract base class. Hook methods."
    },
    {
      id: 100,
      question: "Visitor Pattern nədir?",
      answer: "Visitor Pattern obyekt strukturuna yeni əməliyyatlar əlavə etməyə imkan verir, struktur dəyişmədən. Double dispatch. AST traversal. Compiler design. Open/closed principle. Extensibility."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
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
        JavaScript İntervyu Sualları
      </motion.h1>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="card mb-4 shadow-lg card-jewel-teal" variants={itemVariants}>
          <div className="card-body p-4">
            <h3 className="card-title text-jewel-teal mb-4" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
              100 Ən Çox Soruşulan JavaScript Sualları
            </h3>
            <p className="lead mb-4" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Bu bölmədə JavaScript intervyularında ən çox soruşulan 100 sual və onların ətraflı cavabları 
              təqdim olunur. Suallar əsas JavaScript konseptlərindən tutmuş advanced mövzulara qədər 
              geniş spektr əhatə edir. Hər sualın cavabı praktik nümunələr və real-world ssenarilərlə 
              izah olunub. Bu sualları öyrənməklə JavaScript intervyularına yaxşı hazırlaşa bilərsiniz.
            </p>

            <div className="alert mb-4" style={{ backgroundColor: 'rgba(0, 95, 115, 0.1)', borderLeft: '4px solid var(--jewel-teal)' }}>
              <h6 className="alert-heading text-jewel-teal" style={{ fontWeight: '600' }}>İstifadə təlimatı:</h6>
              <ul className="mb-0" style={{ lineHeight: '2' }}>
                <li>Sualın üzərinə klikləyərək cavabı açıb-bağlaya bilərsiniz</li>
                <li>Hər sualın cavabı ətraflı və praktik nümunələrlə izah olunub</li>
                <li>Suallar əsas konseptlərdən tutmuş advanced mövzulara qədər sıralanıb</li>
                <li>İntervyuya hazırlaşmaq üçün bütün sualları diqqətlə oxuyun</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div style={{ marginTop: '2rem' }}>
          {questions.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              style={{
                border: '1px solid #dee2e6',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                marginBottom: '1rem',
                backgroundColor: 'white'
              }}
            >
              <h2 style={{ margin: 0 }}>
                <motion.button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{
                    backgroundColor: openIndex === index ? 'var(--jewel-teal)' : 'white',
                    color: openIndex === index ? 'white' : 'var(--text-dark)',
                    fontWeight: '600',
                    fontSize: '1.05rem',
                    border: 'none',
                    boxShadow: 'none',
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    transition: 'all 0.3s ease',
                    borderRadius: openIndex === index ? '8px 8px 0 0' : '8px'
                  }}
                >
                  <span style={{ 
                    marginRight: '15px', 
                    fontWeight: 'bold', 
                    fontSize: '1.1rem',
                    color: openIndex === index ? 'var(--rich-gold)' : 'var(--jewel-teal)',
                    minWidth: '35px'
                  }}>
                    {item.id}.
                  </span>
                  <span style={{ flex: 1 }}>{item.question}</span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      marginLeft: '10px',
                      fontSize: '1.2rem',
                      color: openIndex === index ? 'var(--rich-gold)' : 'var(--jewel-teal)'
                    }}
                  >
                    ▼
                  </motion.span>
                </motion.button>
              </h2>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    style={{
                      overflow: 'hidden'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: 'rgba(0, 95, 115, 0.05)',
                        padding: '1.5rem',
                        lineHeight: '1.8',
                        fontSize: '1rem'
                      }}
                    >
                      <div style={{
                        borderLeft: '4px solid var(--rich-gold)',
                        paddingLeft: '1rem',
                        color: 'var(--text-dark)'
                      }}>
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default InterviewQuestions;
