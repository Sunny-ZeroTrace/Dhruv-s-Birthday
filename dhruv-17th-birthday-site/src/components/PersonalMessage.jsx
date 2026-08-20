import { evidencePhotos } from '../data/photos'
import './PersonalMessage.css'

const photo = evidencePhotos.find((p) => p.id === 'silhouette')

export default function PersonalMessage() {
  return (
    <section className="personal" aria-label="Personal message">
      <div className="personal__inner">
        <h2 className="personal__title">OKAY, JOKES ASIDE.</h2>

        <div className="personal__content">
          <div className="personal__text-block">
            <p className="personal__text">
              Happy 17th, Dhruv.
              <br /><br />
              You're genuinely one of the weirdest people I've had the privilege of knowing.
              <br /><br />
              Somehow you're simultaneously 17 years old and still operating with the decision-making skills of a confused refrigerator.
              <br /><br />
              Never change.
              <br />
              Actually, maybe change a little.
              <br /><br />
              Stay weird, idiot.
              <br />
              Have a good one.
            </p>
            <p className="personal__signature mono">— Sunny</p>
          </div>

          <div className="personal__photo-frame">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
