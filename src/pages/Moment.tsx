import './Moment.css'
import outboundImage from '../pic/Outbound.jpg'
import daliImage from '../pic/dali.jpg'
import indoImage from '../pic/indo.jpg'
import taishanImage from '../pic/taishan.jpg'

const moments = [
  {
    title: 'Jumping into the sea (Outward Bound Training)',
    meta: 'Sai Kung · Jan 2026',
    image: outboundImage,
    alt: 'Outward Bound Trip in Sai Kung'
  },
  {
    title: 'Driving around Erhai Lake (洱海)',
    meta: 'Dali, Yunnan · Aug 2025',
    image: daliImage,
    alt: 'Erhai Lake in Dali'
  },
  {
    title: 'Hiking on Padar Island (Asia Field Trip)',
    meta: 'Labuan Bajo, Indonesia · May 2025',
    image: indoImage,
    alt: 'Island hiking in Labuan Bajo, Indonesia'
  },
  {
    title: 'Climbing Mount Tai (泰山)',
    meta: "Tai'an, Shandong · Jul 2024",
    image: taishanImage,
    alt: 'Mount Tai in Shandong'
  }
]

const Moment = () => {
  return (
    <div className="moment">
      <div className="container">
        <section className="section">
          <div className="page-header">
            <p className="section-label">Moments</p>
            <h1 className="page-title">Snapshots outside coursework</h1>
            <p className="page-subtitle">
              A few trips, field experiences, and places that shaped my life beyond projects and lectures.
            </p>
          </div>

          <div className="moment-gallery">
            {moments.map((moment) => (
              <article className="moment-card" key={moment.title}>
                <div className="moment-image">
                  <img src={moment.image} alt={moment.alt} />
                </div>
                <div className="moment-card-content">
                  <h2>{moment.title}</h2>
                  <p>{moment.meta}</p>
                </div>
              </article>
            ))}
          </div>

          <blockquote className="moment-quote">
            <p>Do not go gentle into that good night,</p>
            <p>Rage, rage against the dying of the light.</p>
            <cite>— Dylan Thomas</cite>
          </blockquote>
        </section>
      </div>
    </div>
  )
}

export default Moment
