import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  // Extract and flat-map categories cleanly using your exact data structure
  const iconSkills = skillCategories
    .filter(cat => cat.title !== 'CS Fundamentals')
    .flatMap(cat => cat.skills);
  
  const csFundamentals = skillCategories
    .find(cat => cat.title === 'CS Fundamentals')?.skills || [];

  return (
    <div className="section">
      {/* Child 1: Left Sticky Label Context */}
      <motion.p
        className="section-label"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        Core Technologies
      </motion.p>

      {/* Child 2: Main Right Column Content Wrapper */}
      <div className="skills-container w-full">
        {/* Core Tech Grid Matrix */}
        <div className="skills-icon-grid">
          {iconSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-icon-item flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ 
                scale: 1.12, 
                color: skill.color,
                y: -3,
                transition: { type: 'spring', stiffness: 400, damping: 12 }
              }}
            >
              <skill.Icon className="w-8 h-8 stroke-[1.5]" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted select-none">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CS Fundamentals Text Strip */}
        <div className="skills-fundamentals-row">
          {csFundamentals.map((skill, i) => (
            <motion.span
              key={skill.name}
              className="chip text-xs"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              whileHover={{ 
                color: 'var(--text)', 
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