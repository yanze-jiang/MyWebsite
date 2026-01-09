import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="intro-text-wrapper">
          <h1 className="welcome-title">You can contact me via</h1>
        </div>

        <div className="contact-content-new">
          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-card-icon">📞</div>
              <h3 className="contact-card-label">Phone</h3>
              <div className="contact-card-value">
                <a href="tel:+8615871774202" className="contact-link">
                  +86 158-7177-4202
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">✉️</div>
              <h3 className="contact-card-label">Email</h3>
              <div className="contact-card-value">
                <a href="mailto:robertyanzejiang@outlook.com" className="contact-link">
                  robertyanzejiang@outlook.com
                </a>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">📍</div>
              <h3 className="contact-card-label">Address</h3>
              <div className="contact-card-value">
                <div className="address-text">
                  No. 2001 Longxiang Avenue<br />
                  Longgang District, Shenzhen<br />
                  Guangdong Province, China
                </div>
              </div>
            </div>
            
            <div className="contact-card">
              <div className="contact-card-icon">🔗</div>
              <h3 className="contact-card-label">Social</h3>
              <div className="contact-card-social">
                <a 
                  href="https://github.com/yanze-jiang" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span className="social-icon">🐙</span>
                  <span className="social-text">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/yanze-jiang/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span className="social-icon">💼</span>
                  <span className="social-text">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
