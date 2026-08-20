import { evidencePhotos } from '../data/photos'
import './EvidenceGallery.css'

export default function EvidenceGallery() {
  return (
    <section className="evidence" aria-label="Photo evidence">
      <div className="evidence__header">
        <h2 className="evidence__title">THE EVIDENCE</h2>
        <p className="evidence__subtitle">Unfortunately, we have photographic proof.</p>
      </div>

      <div className="evidence__grid">
        {evidencePhotos.map((photo) => (
          <figure
            className={`evidence__card evidence__card--${photo.size}`}
            key={photo.id}
            style={{ '--rotate': `${photo.rotate}deg` }}
          >
            {photo.sticker && (
              <span className="sticker sticker--lime evidence__sticker">{photo.sticker}</span>
            )}
            <div className="evidence__frame">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
            <figcaption className="evidence__caption">
              <span className="evidence__caption-title">{photo.title}</span>
              {photo.subtitle && (
                <span className="evidence__caption-subtitle">{photo.subtitle}</span>
              )}
              <span className="evidence__caption-meta mono">{photo.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
