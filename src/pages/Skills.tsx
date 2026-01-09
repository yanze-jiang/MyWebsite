import { skills } from '../data/skills'
import './Skills.css'

const Skills = () => {
  const renderSkillLevel = (level: number) => {
    const maxLevel = 5
    const filled = Math.min(level, maxLevel)
    const empty = maxLevel - filled

    return (
      <div className="skill-level">
        {Array.from({ length: filled }).map((_, i) => (
          <span key={`filled-${i}`} className="level-dot filled"></span>
        ))}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`} className="level-dot"></span>
        ))}
      </div>
    )
  }

  return (
    <div className="skills">
      <div className="container">
        <section className="skills-header">
          <h1 className="page-title">Skills</h1>
          <p className="page-subtitle">
            Here are the technical skills and tools I'm proficient with, continuously learning and improving.
          </p>
        </section>

        {skills.length === 0 ? (
          <div className="empty-state">
            <p>No skills information available. Please add skill data to data/skills.ts</p>
          </div>
        ) : (
          <div className="skills-content">
            {skills.map((category, index) => (
              <section key={index} className="skill-category">
                <h2 className="category-title">{category.category}</h2>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        {renderSkillLevel(skill.level)}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Skills
