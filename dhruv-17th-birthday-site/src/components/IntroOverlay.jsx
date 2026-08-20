import './IntroOverlay.css'

export default function IntroOverlay({ onEnter }) {
  return (
    <div className="intro" role="dialog" aria-modal="true" aria-labelledby="intro-title">
      <div className="intro__noise" aria-hidden="true" />
      <div className="intro__card">
        <p className="intro__eyebrow mono">SYSTEM BOOT — DO NOT SKIP</p>
        <h1 id="intro-title" className="intro__title">
          DHRUV'S<br />OFFICIAL<br />BIRTHDAY<br />EXPERIENCE<sup>™</sup>
        </h1>

        <div className="intro__rows mono">
          <div className="intro__row">
            <span>AGE:</span>
            <span className="intro__value">17</span>
          </div>
          <div className="intro__row">
            <span>STATUS:</span>
            <span className="intro__value">SUSPICIOUSLY ALIVE</span>
          </div>
          <div className="intro__row">
            <span>SOUNDTRACK:</span>
            <span className="intro__value">FYNE SHYT — GURU RANDHAWA</span>
          </div>
        </div>

        <button className="intro__button" onClick={onEnter}>
          <span>[ ENTER THE NONSENSE ]</span>
        </button>

        <p className="intro__footnote mono">WARNING: CONTAINS 100% FRIENDSHIP AND 0% BUDGET</p>
      </div>
    </div>
  )
}
