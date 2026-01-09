import { Project } from '../../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card">
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>
      )}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <div className="project-description">
          {project.description.split('\n').map((line, index, array) => {
            const trimmedLine = line.trim()
            const isEmpty = trimmedLine === ''
            const isSectionTitle = trimmedLine.endsWith(':') && !trimmedLine.startsWith('•')
            const isListItem = trimmedLine.startsWith('•')
            const prevLine = index > 0 ? array[index - 1].trim() : ''
            const isAfterSectionTitle = prevLine.endsWith(':')
            
            if (isEmpty) {
              return <div key={index} className="description-spacer" />
            }
            
            if (isSectionTitle) {
              return (
                <h4 key={index} className="description-section-title">
                  {trimmedLine}
                </h4>
              )
            }
            
            if (isListItem) {
              return (
                <div key={index} className="description-list-item">
                  {trimmedLine.substring(1).trim()}
                </div>
              )
            }
            
            return (
              <p key={index} className="description-text">
                {trimmedLine}
              </p>
            )
          })}
          {(project.githubUrl || project.liveUrl) && (
            <div className="project-links-inline">
              {project.githubUrl && (
                <span>
                  GitHub: <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-inline"
                  >
                    {project.githubUrl}
                  </a>
                </span>
              )}
              {project.liveUrl && (
                <span>
                  {project.githubUrl && <br />}
                  Demo: <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-inline"
                  >
                    {project.liveUrl}
                  </a>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
