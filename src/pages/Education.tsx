import { cvData } from '../data/cv'
import './Home.css'

const Education = () => {
  const { education } = cvData

  return (
    <div className="home">
      <div className="container">
        {/* Education */}
        {education.length > 0 && (
          <section className="section">
            <div className="intro-text-wrapper">
              <h1 className="welcome-title">Education</h1>
            </div>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  {/* Multiple schools */}
                  {edu.schools && edu.schools.length > 0 ? (
                    edu.schools.map((school, schoolIndex) => (
                      <div key={schoolIndex} className="education-header">
                        <span className={`education-school ${school.uppercase ? 'uppercase' : ''}`}>
                          {school.name}
                        </span>
                        {school.location && (
                          <span className="education-location">{school.location}</span>
                        )}
                      </div>
                    ))
                  ) : (
                    /* Single school */
                    edu.school && (
                      <div className="education-header">
                        <span className="education-school">{edu.school}</span>
                        {edu.location && (
                          <span className="education-location">{edu.location}</span>
                        )}
                      </div>
                    )
                  )}
                  {(edu.degree || edu.period) && (
                    <div className="education-degree-row">
                      {edu.degree && <span className="education-degree">{edu.degree}</span>}
                      {edu.period && <span className="education-period">{edu.period}</span>}
                    </div>
                  )}
                  {edu.major && (
                    <div className="education-detail major-detail">
                      <div className="detail-first-line">
                        <span className="detail-bullet">•</span>
                        <span className="detail-label">Major:</span>
                        <span className="detail-value">
                          <span className="major-name-bold">{edu.major.split(' Collaborative Double Major Program')[0]}</span>
                        </span>
                      </div>
                      {edu.major.includes('Collaborative Double Major Program') && (
                        <>
                          <div className="detail-second-line major-second-line">
                            <span className="detail-value">{edu.major.split('Collaborative Double Major Program')[1] ? `Collaborative Double Major Program${edu.major.split('Collaborative Double Major Program')[1]}` : ''}</span>
                          </div>
                          <div className="detail-second-line major-second-line">
                            <span className="detail-value">
                              See program details at{' '}
                              <a 
                                href="https://www.sci.cuhk.edu.hk/academic/undergraduate-studies/programmes-offered/idadm/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="program-link"
                              >
                                https://www.sci.cuhk.edu.hk/academic/undergraduate-studies/programmes-offered/idadm/
                              </a>
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                  {edu.cgpa && (
                    <div className="education-detail">
                      <span className="detail-bullet">•</span>
                      <span className="detail-label">CGPA:</span>
                      <span className="detail-value">{edu.cgpa}</span>
                    </div>
                  )}
                  {edu.honor && (
                    <div className="education-detail">
                      <span className="detail-bullet">•</span>
                      <span className="detail-label">Honor:</span>
                      <span className="detail-value">{edu.honor}</span>
                    </div>
                  )}
                  {edu.scholarship && (
                    <div className="education-detail">
                      <span className="detail-bullet">•</span>
                      <span className="detail-label">Scholarship:</span>
                      <span className="detail-value">{edu.scholarship}</span>
                    </div>
                  )}
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div className="education-detail coursework-detail">
                      <div className="detail-first-line">
                        <span className="detail-bullet">•</span>
                        <span className="detail-label">Relevant coursework:</span>
                      </div>
                      <div className="detail-second-line">
                        <span className="detail-value">{edu.coursework.join(', ')}</span>
                      </div>
                    </div>
                  )}
                  {edu.currentlyWorkingOn && (
                    <div className="education-detail coursework-detail">
                      <div className="detail-first-line">
                        <span className="detail-bullet">•</span>
                        <span className="detail-label">Currently working on:</span>
                      </div>
                      <div className="detail-second-line">
                        <span className="detail-value">{edu.currentlyWorkingOn}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default Education
