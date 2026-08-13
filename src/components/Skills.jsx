import { useReducedMotion } from 'framer-motion';
import { skillCategories } from '../data/skills';

function SkillPill({ skill, hidden = false }) {
  const Icon = skill.Icon;
  const monogram = skill.name
    .split(/\s|\//)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className="skill-flow-pill"
      aria-hidden={hidden || undefined}
      title={hidden ? undefined : skill.name}
    >
      <span className="skill-flow-icon">
        {Icon ? (
          <Icon style={{ color: skill.color }} aria-hidden="true" />
        ) : (
          <span className="skill-flow-monogram" aria-hidden="true">{monogram}</span>
        )}
      </span>
      <span>{skill.name}</span>
    </span>
  );
}

function SkillGroup({ skills, copies = 1, hidden = false }) {
  return (
    <div className="skill-flow-group" aria-hidden={hidden || undefined}>
      {Array.from({ length: copies }, (_, copyIndex) => (
        skills.map((skill) => (
          <SkillPill
            key={`${copyIndex}-${skill.name}`}
            skill={skill}
            hidden={hidden || copyIndex > 0}
          />
        ))
      ))}
    </div>
  );
}

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="section skill-flow-section border-b border-border bg-bg">
      <h2 className="section-kicker section-numbered-title">03 Skills</h2>

      <div className="skill-flow" aria-label="Technical skills">
        {skillCategories.map((category, categoryIndex) => (
          <article
            key={category.title}
            className="skill-flow-lane"
          >
            <div className="skill-flow-meta">
              <span>{String(categoryIndex + 1).padStart(2, '0')}</span>
              <h3>{category.title}</h3>
            </div>

            <div className={`skill-flow-window ${shouldReduceMotion ? 'is-static' : ''}`}>
              <div
                className={`skill-flow-track ${categoryIndex % 2 === 0 ? 'moves-left' : 'moves-right'}`}
                style={{ '--skill-flow-duration': `${28 + categoryIndex * 3}s` }}
              >
                <SkillGroup skills={category.skills} copies={shouldReduceMotion ? 1 : 2} />
                {!shouldReduceMotion && (
                  <SkillGroup skills={category.skills} copies={2} hidden />
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
