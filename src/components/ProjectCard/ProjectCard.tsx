import { Project } from '../../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  index?: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const projectNumber = typeof index === 'number' ? String(index + 1).padStart(2, '0') : null
  const baseUrl = import.meta.env.BASE_URL

  return (
    <article className="project-card">
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-content">
        <div className="project-main">
          <div className="project-card-header">
            <p className="project-kicker">
              {projectNumber && <span>{projectNumber}</span>}
              {project.technologies.slice(0, 2).join(' / ')}
            </p>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
          </div>

          <p className="project-description">{project.description}</p>

          {(project.githubUrl || project.liveUrl) && (
            <div className="project-actions">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <img src={`${baseUrl}icons/github.svg`} alt="" aria-hidden="true" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Demo
                </a>
              )}
            </div>
          )}
        </div>

        <aside className="project-details" aria-label={`${project.title} details`}>
          {project.role && (
            <div className="project-detail-block">
              <h4>Role</h4>
              <p>{project.role}</p>
            </div>
          )}

          {project.impact && project.impact.length > 0 && (
            <div className="project-detail-block">
              <h4>Impact</h4>
              <ul className="project-impact">
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="project-detail-block">
            <h4>Stack</h4>
            <div className="project-technologies" aria-label="Technologies used">
              {project.technologies.map((technology) => (
                <span key={technology} className="tech-tag">{technology}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

export default ProjectCard
