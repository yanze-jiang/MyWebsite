import './Footer.css'

const Footer = () => {
  const baseUrl = import.meta.env.BASE_URL

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/yanze-jiang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <img src={`${baseUrl}icons/linkedin.svg`} alt="" aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/yanze-jiang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <img src={`${baseUrl}icons/github.svg`} alt="" aria-hidden="true" />
            </a>
            <a 
              href="https://www.instagram.com/robertyz666?igsh=MW5qMWU3NjJsc2JkYg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <img src={`${baseUrl}icons/instagram.svg`} alt="" aria-hidden="true" />
            </a>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Yanze Jiang. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
