export const itemIn = (index = 0, shouldReduceMotion = false) => ({
  initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.42, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] },
});
