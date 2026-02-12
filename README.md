# JavaScript Dərsləri (Javascript Lessons)

Azərbaycanca JavaScript öyrənmək üçün interaktiv dərslik. React + Vite ilə qurulub; hər dərsdə nəzəri izah, kod nümunələri və praktika sahəsi var.

## Texnologiyalar

- **React** + **Vite**
- **React Router** – səhifə naviqasiyası
- **Framer Motion** – animasiyalar
- **Bootstrap** (utility) – bəzi stillər

## Quraşdırma və işə salma

```bash
npm install
npm run dev
```

Brauzerdə açın: [http://localhost:5173](http://localhost:5173)

Build (production):

```bash
npm run build
```

## Dərslər (mündəricat)

| Səhifə | URL | Təsvir |
|--------|-----|--------|
| Js-yə Giriş | `/` | Dəyişənlər, operatorlar, massiv və obyekt əsasları |
| Types | `/types` | Məlumat tipləri (string, number, boolean, null, undefined və s.) |
| Let, const and var | `/let-const-var` | Dəyişən bəyanı: let, const, var fərqləri |
| Arrays | `/arrays` | Massiv yaratmaq, indekslər, əsas əməliyyatlar |
| Objects | `/objects` | Obyekt sintaksisi, xassələr, metodlar |
| Functions | `/functions` | Funksiya bəyanı, parametrlər, return |
| Array Methods | `/array-methods` | map, filter, reduce, find, forEach və s. |
| String Methods | `/string-methods` | slice, split, trim, indexOf və s. |
| if Else | `/if-else` | Şərti operatorlar, if/else, ternary |
| Switch Case | `/switch-case` | switch/case sintaksisi və nümunələr |
| Loops | `/loops` | for, while, do-while, for...of, for...in |
| Dates | `/dates` | Date obyekti, tarix və vaxt əməliyyatları |
| **DOM** | `/dom` | Document Object Model: element seçimi, məzmun/stil dəyişdirmə, hadisələr, 6 praktik nümunə |
| İntervyu Sualları | `/interview-questions` | JavaScript üzrə müsahibə sualları |

## DOM səhifəsi

DOM bölməsində:

- DOM nədir, ağac quruluşu, node növləri
- Element seçimi: `getElementById`, `querySelector`, `querySelectorAll` və s.
- Məzmun və atributlar: `innerHTML`, `textContent`, `getAttribute`, `setAttribute`, `classList`, `style`
- Element yaratmaq və hadisələr: `createElement`, `appendChild`, `addEventListener`
- 6 hazır praktik nümunə (redaktora yüklənib icra oluna bilər)
- Tətbiq ssenariləri: formlar, dinamik məzmun, hadisələr, modal/menyu və s.

## Layihə quruluşu

```
src/
├── App.jsx          # Router və marşrutlar
├── main.jsx
├── components/
│   ├── Header.jsx
│   ├── Layout.jsx
│   └── Sidebar.jsx
└── pages/
    ├── Intro.jsx
    ├── Types.jsx
    ├── DOM.jsx
    ├── ...          # digər dərs səhifələri
    └── InterviewQuestions.jsx
```

## Lisenziya

Bu layihə təhsil məqsədlidir.
