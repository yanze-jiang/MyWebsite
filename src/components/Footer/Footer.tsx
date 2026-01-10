import './Footer.css'

const Footer = () => {
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
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/robertyz666?igsh=MW5qMWU3NjJsc2JkYg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
            >
              Instagram
            </a>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
