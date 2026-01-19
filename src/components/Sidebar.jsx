import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  const lessons = [
    { path: '/', name: 'Js-yə Giriş', component: 'Intro' },
    { path: '/types', name: 'Types', component: 'Types' },
    { path: '/let-const-var', name: 'Let, const and var', component: 'LetConstVar' },
    { path: '/arrays', name: 'Arrays', component: 'Arrays' },
    { path: '/objects', name: 'Objects', component: 'Objects' },
    { path: '/functions', name: 'Functions', component: 'Functions' },
    { path: '/array-methods', name: 'Arrays Methods', component: 'ArrayMethods' },
    { path: '/string-methods', name: 'String Methods', component: 'StringMethods' },
    { path: '/if-else', name: 'if Else', component: 'IfElse' },
    { path: '/switch-case', name: 'Switch Case', component: 'SwitchCase' },
    { path: '/loops', name: 'Loops', component: 'Loops' },
    { path: '/dates', name: 'Dates', component: 'Dates' },
    { path: '/interview-questions', name: 'İntervyu Sualları', component: 'InterviewQuestions' },
  ];

  return (
    <>
      <motion.aside
        className="sidebar"
        initial={{ x: -280 }}
        animate={{ 
          x: isOpen ? 0 : (typeof window !== 'undefined' && window.innerWidth < 992 ? -280 : 0)
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      >
        <div className="sidebar-content">
          <motion.div
            className="sidebar-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4 className="sidebar-title">Dərslər</h4>
              <motion.button
                className="sidebar-close d-lg-none"
                onClick={onClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--rich-gold)',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  lineHeight: 1,
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px'
                }}
                aria-label="Close menu"
              >
                ×
              </motion.button>
            </div>
          </motion.div>
          <nav className="sidebar-nav">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.path}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={lesson.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth < 992) {
                      onClose();
                    }
                  }}
                >
                  {({ isActive }) => (
                    <motion.span
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ display: 'block' }}
                    >
                      {lesson.name}
                    </motion.span>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
