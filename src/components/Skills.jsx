import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  // Separate icon-based tech from text-based fundamentals
  const iconSkills = skillCategories
    .filter(cat => cat.title !== 'CS Fundamentals')
    .flatMap(cat => cat.skills);
  
  const csFundamentals = skillCategories
    .find(cat => cat.title === 'CS Fundamentals')?.skills || [];

  return (
    <div className="section">
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        Core Technologies
      </motion.p>

      <div 
        className="skills-container" 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '4rem', 
          margin: '3rem 0' 
        }}
      >
        {/* ── 1. The Clean Icon Grid ── */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2.5rem', 
            maxWidth: '650px' 
          }}
        >
          {iconSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              title={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.03 }}
              style={{
                fontSize: '2.2rem', // Sleek, manageable size
                color: 'var(--text-muted, #444)', // Very dim initially
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              whileHover={{ 
                scale: 1.15, // Subtle, professional pop (no more 1.5x)
                color: skill.color, // Color illumination
                y: -4, // Tiny lift
                transition: { type: 'spring', stiffness: 400, damping: 12 } 
              }}
            >
              <skill.Icon />
            </motion.div>
          ))}
        </div>

        {/* ── 2. CS Fundamentals (Text Only) ── */}
        <div 
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem' 
          }}
        >
          {csFundamentals.map((skill, i) => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + (i * 0.05) }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-secondary, #777)',
                cursor: 'default'
              }}
              whileHover={{ 
                color: 'var(--text-primary, #fff)', // Just lights up, no movement
                transition: { duration: 0.2 }
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}