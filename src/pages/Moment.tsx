import './Moment.css'
import outboundImage from '../pic/Outbound.jpg'
import daliImage from '../pic/dali.jpg'
import indoImage from '../pic/indo.jpg'
import taishanImage from '../pic/taishan.jpg'

const Moment = () => {
  return (
    <div className="moment">
      <div className="container">
        <section className="section">
          <h1 className="moment-title">Moment</h1>
          <div className="intro-text-wrapper"></div>
          
          <div className="moment-item">
            <div className="photo-container">
              <img src={outboundImage} alt="Outward Bound Trip" className="photo" />
            </div>
            <div className="moment-content">
              <p className="moment-text">
                <span className="moment-main">Jumping into sea</span>
                <span className="moment-meta">[Jan 2-4, 2026 Outward Bound Trip in Sai Kung]</span>
              </p>
            </div>
          </div>

          <div className="moment-item-reverse">
            <div className="moment-content">
              <p className="moment-text">
                <span className="moment-main">Drive around Erhai Lake (洱海)</span>
                <span className="moment-meta">[Aug 2025 in Dali, Yunnan]</span>
              </p>
            </div>
            <div className="photo-container">
              <img src={daliImage} alt="Dali Erhai Lake" className="photo" />
            </div>
          </div>

          <div className="moment-item">
            <div className="photo-container">
              <img src={indoImage} alt="Labuan Bajo Indonesia" className="photo" />
            </div>
            <div className="moment-content">
              <p className="moment-text">
                <span className="moment-main">Hiking in an beautiful island</span>
                <span className="moment-meta">[May 2025 Asia Field Trip in Labuan Bajo, Indonesia]</span>
              </p>
            </div>
          </div>

          <div className="moment-item-reverse">
            <div className="moment-content">
              <p className="moment-text">
                <span className="moment-main">Climbling Mount Tai (泰山)</span>
                <span className="moment-meta">[Jul 2024 in Tai'an, Shandong]</span>
              </p>
            </div>
            <div className="photo-container">
              <img src={taishanImage} alt="Mount Tai" className="photo" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Moment
