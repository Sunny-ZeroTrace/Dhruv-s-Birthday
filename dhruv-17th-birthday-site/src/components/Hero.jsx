import { heroPhoto } from '../data/photos'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero__inner">
        <p className="hero__label mono">OFFICIAL BIRTHDAY ARCHIVE™</p>

        <h1 className="hero__title">
          DHRUV IS 17.
        </h1>
        <p className="hero__subtitle">somehow.</p>

        <div className="hero__photo-wrap">
          <span className="sticker sticker--news hero__sticker-1">BREAKING NEWS</span>
          <span className="sticker sticker--lime hero__sticker-2">17???</span>

          <div className="hero__frame">
            <img
              className="hero__photo"
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              width="1080"
              height="1080"
            />
          </div>

          <span className="sticker sticker--pink hero__sticker-3">HE MADE IT</span>
          <span className="sticker sticker--outline hero__sticker-4">WHO APPROVED THIS</span>

          <div className="hero__meta mono">
            <span>AGE: 17</span>
            <span>STATUS: STILL ALIVE</span>
            <span>COMMON SENSE: NOT FOUND</span>
            <span>OS: QUESTIONABLE</span>
          </div>
        </div>

        <p className="hero__scroll mono" aria-hidden="true">↓ SCROLL FOR EVIDENCE ↓</p>
      </div>
    </section>
  )
}
