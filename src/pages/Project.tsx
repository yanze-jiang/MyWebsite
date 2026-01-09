import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import './Home.css'
import './Portfolio.css'

const Project = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="section">
          <h1 className="welcome-title">Project</h1>
          <div className="intro-text-wrapper"></div>
          {projects.length === 0 ? (
            <div className="education-list">
              <p>No projects to display.</p>
            </div>
          ) : (
            <div className="projects-list" style={{ marginTop: '2rem' }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default Project
