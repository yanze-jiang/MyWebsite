import { Link } from 'react-router-dom'
import mePhoto from '../pic/Me.jpg'
import wuhanPhoto from '../pic/WH.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <section className="hero-section">
          <div className="hero-copy">
            <p className="eyebrow">AI & Data Science Student @CUHK</p>
            <h1 className="hero-title">
              <span>Yanze Jiang</span>
              <span className="hero-title-sub">江彥澤 / Robert</span>
            </h1>
            <p className="hero-summary">
              I am a third-year Collaborative Double Major student at CUHK and CUHK-Shenzhen,
              focusing on AI, Large Language Models and Data Science.
            </p>
            <ul className="hero-bullets">
              <li>
                First cohort of{' '}
                <a
                  href="https://www.sci.cuhk.edu.hk/academic/undergraduate-studies/programmes-offered/idadm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IDADM
                </a>
              </li>
              <li>Fifth cohort of Co-op@CUHK</li>
            </ul>
            <div className="hero-actions">
              <Link to="/project" className="button button-primary">View Projects</Link>
              <Link to="/contact" className="button button-secondary">Contact Me</Link>
            </div>
            <dl className="hero-metrics" aria-label="Profile highlights">
              <div>
                <dt>3.83/4.00</dt>
                <dd>Current CGPA</dd>
              </div>
              <div>
                <dt>Dean's List</dt>
                <dd>2023-24 and 2024-25</dd>
              </div>
              <div>
                <dt>Top 0.5% in Gaokao</dt>
                <dd>Hubei Province / Science Track</dd>
              </div>
            </dl>
          </div>
          <div className="hero-photo">
            <img src={mePhoto} alt="Yanze Jiang" />
          </div>
        </section>

        <section className="origin-section">
          <div className="origin-image">
            <img src={wuhanPhoto} alt="Wuhan riverfront" />
          </div>
          <div className="origin-copy">
            <p className="section-label">Born and raised</p>
            <h2 className="section-heading">From Wuhan to Hong Kong and Shenzhen.</h2>
            <p>
              I am from Wuhan (武漢), a city in central China located where the Yangtze and Han
              rivers meet. I grew up with its riverbanks, breakfast culture, historic streets,
              and direct, energetic pace.
            </p>
            <div className="inline-links">
              <Link to="/education" className="text-link">Education background</Link>
              <Link to="/moment" className="text-link">Personal moments</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
