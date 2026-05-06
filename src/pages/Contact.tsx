import './Contact.css'

const Contact = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <div className="contact">
      <div className="container">
        <section className="section">
          <div className="page-header">
            <p className="section-label">Contact</p>
            <h1 className="page-title">Reach me via 👆</h1>
            <p className="page-subtitle">
              Welcome to connect with me!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-cards">
              <div className="contact-card">
                <h3 className="contact-card-label">Email</h3>
                <div className="contact-card-value">
                  <div className="email-entry">
                    <span className="email-type">Personal</span>
                    <a href="mailto:robertyanzejiang@outlook.com" className="contact-link">
                      robertyanzejiang@outlook.com
                    </a>
                  </div>
                  <div className="email-entry">
                    <span className="email-type">School</span>
                    <a href="mailto:yanzejiang@link.cuhk.edu.cn" className="contact-link">
                      yanzejiang@link.cuhk.edu.cn
                    </a>
                  </div>
                  <div className="email-entry">
                    <span className="email-type">School</span>
                    <span className="contact-link">yanzejiang@link.cuhk.edu.hk</span>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-card-label">Phone</h3>
                <div className="contact-card-value">
                  <div className="contact-entry">
                    <span className="contact-type">Chinese Mainland</span>
                    <a href="tel:+8615871774202" className="contact-link">
                      +86 158-7177-4202
                    </a>
                  </div>
                  <div className="contact-entry">
                    <span className="contact-type">Hong Kong</span>
                    <a href="tel:+85259504201" className="contact-link">
                      +852 5950-4201
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <h3 className="contact-card-label">Social Media</h3>
                <div className="contact-card-social">
                  <a
                    href="https://www.linkedin.com/in/yanze-jiang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={`${baseUrl}icons/linkedin.svg`} alt="" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/yanze-jiang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={`${baseUrl}icons/github.svg`} alt="" aria-hidden="true" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.instagram.com/robertyz666?igsh=MW5qMWU3NjJsc2JkYg%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <img src={`${baseUrl}icons/instagram.svg`} alt="" aria-hidden="true" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <blockquote className="contact-quote">
            <p>“Just stop your crying, it’s a sign of the times,</p>
            <p>Welcome to the final show.”</p>
            <cite>— Harry Styles</cite>
          </blockquote>
        </section>
      </div>
    </div>
  )
}

export default Contact
