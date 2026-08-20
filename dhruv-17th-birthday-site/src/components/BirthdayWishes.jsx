import { wishes } from '../data/wishes'
import './BirthdayWishes.css'

export default function BirthdayWishes() {
  return (
    <section className="wishes" aria-label="Birthday wishes">
      <h2 className="wishes__title">PEOPLE WHO WERE FORCED<br />TO SAY NICE THINGS</h2>

      <div className="wishes__board">
        {wishes.map((wish) => (
          <div
            className={`wishes__card wishes__card--${wish.style}`}
            key={wish.id}
            style={{ '--rotate': `${wish.rotate}deg` }}
          >
            {wish.style === 'sticky' && <span className="wishes__pin" aria-hidden="true" />}
            <p className="wishes__text">
              {wish.text.split('\n').map((line, i) => (
                <span className="wishes__line" key={i}>{line}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
