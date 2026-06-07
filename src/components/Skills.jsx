import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <div className="section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.p>

      {skillCategories.map((cat, ci) => (
        <motion.div
          key={cat.title}
          className="skill-category"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: ci * 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="skill-category-title">{cat.title}</p>
          <div className="skill-grid">
            {cat.skills.map(({ name, Icon, color }) => (
              <div key={name} className="skill-item">
                {Icon ? (
                  <span className="skill-icon" style={{ color }}>
                    <Icon />
                  </span>
                ) : (
                  /* CS fundamentals — coloured dot instead */
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: color, display: 'inline-block' }} />
                )}
                <span className="skill-name">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
