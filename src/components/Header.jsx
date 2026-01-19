import { motion } from 'framer-motion';

const Header = ({ onMenuClick, isMenuOpen }) => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--jewel-teal)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <motion.button
          className="menu-toggle d-lg-none"
          onClick={onMenuClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            background: 'transparent',
            border: '2px solid var(--rich-gold)',
            borderRadius: '6px',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            minWidth: '40px',
            minHeight: '40px',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          aria-label="Toggle menu"
        >
          <motion.span
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'var(--rich-gold)',
              borderRadius: '2px',
              display: 'block'
            }}
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 7 : 0
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'var(--rich-gold)',
              borderRadius: '2px',
              display: 'block'
            }}
            animate={{
              opacity: isMenuOpen ? 0 : 1
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'var(--rich-gold)',
              borderRadius: '2px',
              display: 'block'
            }}
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -7 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="mb-0" style={{ 
            color: 'var(--rich-gold)', 
            fontSize: '1.75rem', 
            fontWeight: '700',
            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}>
            JavaScript Dərsləri
          </h1>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="d-none d-md-block"
        style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: '0.95rem'
        }}
      >
        Öyrən, Təcrübə Et, Mükəmmələş
      </motion.div>
    </motion.header>
  );
};

export default Header;
