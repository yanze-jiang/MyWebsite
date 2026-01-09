import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import './Portfolio.css'

const Portfolio = () => {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="portfolio">
      <div className="container">
        <section className="portfolio-header">
          <h1 className="page-title">Portfolio</h1>
          <p className="page-subtitle">
            Here are some projects I've worked on, showcasing my technical skills and practical experience.
          </p>
        </section>

        {projects.length === 0 ? (
          <div className="empty-state">
            <p>No projects to display. Please add project information to data/projects.ts</p>
          </div>
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <section className="portfolio-section">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                  {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}

            {otherProjects.length > 0 && (
              <section className="portfolio-section">
                <h2 className="section-title">Other Projects</h2>
                <div className="projects-grid">
                  {otherProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Portfolio
