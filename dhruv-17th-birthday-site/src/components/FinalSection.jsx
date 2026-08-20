import { finalPhoto } from '../data/photos'
import './FinalSection.css'

export default function FinalSection() {
  return (
    <section className="final" aria-label="Closing">
      <div className="final__photo-frame">
        <img src={finalPhoto.src} alt={finalPhoto.alt} loading="lazy" />
      </div>

      <h2 className="final__title">HAPPY 17TH,<br />DHRUV.</h2>
      <p className="final__made-it">You made it.</p>
      <p className="final__line mono">17 looks good on you, idiot.</p>

      <div className="final__footer mono">
        <span>MADE WITH 0 MONEY</span>
        <span>100% FRIENDSHIP</span>
        <span>QUESTIONABLE AMOUNTS OF CSS</span>
      </div>

      <p className="final__heart" aria-hidden="true">❤️</p>
    </section>
  )
}
