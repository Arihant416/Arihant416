import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleFab() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-fab"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0,  opacity: 1 }}
      transition={{ type: 'spring', stiffness: 180, damping: 22, delay: 1.2 }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? '☀︎' : '☽'}
    </motion.button>
  );
}
