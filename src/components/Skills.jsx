import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

export default function Skills() {
  // 1. Extract non-fundamental skills for the marquee track
  const iconSkills = skillCategories
    .filter(cat => cat.title !== 'CS Fundamentals')
    .flatMap(cat => cat.skills);

  // 2. Extract system fundamentals for the static bottom grid matrix
  const csFundamentals = skillCategories
    .find(cat => cat.title === 'CS Fundamentals')?.skills || [];

  // 3. Duplicate the array exactly once for seamless infinite percentage scrolling
  const marqueeSkills = [...iconSkills, ...iconSkills];

  return (
    <div className="section border-b border-border bg-bg">
      {/* Column 1: Left Sticky Label Panel */ }
      <div className="col-span-1 text-center lg:text-left">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-medium block">
          02 // Competencies
        </span>
        <h2 className="text-3xl font-serif italic font-normal tracking-tight text-text mt-1">
          Technical <span className="font-sans not-italic font-light text-text-dim">Stack</span>
        </h2>
      </div>

      {/* Column 2: Main Right Content Column */ }
      <div className="w-full flex flex-col gap-16 overflow-hidden lg:pl-4">

        {/* INFINITE RUNTIME MARQUEE TRACK */ }
        <div className="relative w-full overflow-hidden py-4 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-bg before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-bg after:to-transparent">
          <motion.div
            className="flex gap-12 w-max items-center"
            animate={ { x: ["0%", "-50%"] } }
            transition={ {
              ease: "linear",
              duration: 24, // Subtle, readable crawl speed
              repeat: Infinity,
            } }
          >
            { marqueeSkills.map((skill, i) => (
              <div
                key={ `${skill.name}-${i}` }
                // Removes grayscale/opacity masks; scales the entire badge smoothly on hover
                className="flex items-center gap-3 transition-transform duration-300 ease-out hover:scale-105 cursor-pointer select-none origin-center"
              >
                <skill.Icon
                  className="w-6 h-6 stroke-[1.2]"
                  style={ { color: skill.color } } // Displays the true, brand color permanently
                />
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-text font-normal">
                  { skill.name }
                </span>
                <span className="text-border font-mono text-[10px] ml-4 select-none">//</span>
              </div>
            )) }
          </motion.div>
        </div>

        {/* CS FUNDAMENTALS TEXT MATRIX GRID */ }
        <div className="w-full pt-8 border-t border-border-mute text-center lg:text-left">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-6 block">
            System Infrastructure & Engineering Theory
          </p>

          {/* FIX: Changed flex wrapper to justify-center by default, shifting to justify-start on desktop panels */ }
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 max-w-md mx-auto lg:max-w-none">
            { csFundamentals.map((skill, i) => (
              <motion.div
                key={ skill.name }
                initial={ { opacity: 0, y: 8 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true } }
                transition={ { duration: 0.4, delay: i * 0.04 } }
                className="flex items-center gap-2.5 group cursor-default"
              >
                <span className="w-1 h-1 rounded-full bg-border group-hover:bg-accent transition-colors duration-300" />
                <span className="font-sans text-sm font-light text-text-dim group-hover:text-text transition-colors duration-200">
                  { skill.name }
                </span>
              </motion.div>
            )) }
          </div>
        </div>

      </div>
    </div>
  );
}