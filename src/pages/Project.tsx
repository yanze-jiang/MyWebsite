import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import './Home.css'
import './Portfolio.css'

const Project = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <div className="page-header">
            <p className="section-label">Project</p>
            <h1 className="page-title">Selected projects</h1>
            <p className="page-subtitle">
              Course projects and toy projects that help me kill time.
            </p>
          </div>
          {projects.length === 0 ? (
            <div className="education-list">
              <p>No projects to display.</p>
            </div>
          ) : (
            <div className="projects-list">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Project
