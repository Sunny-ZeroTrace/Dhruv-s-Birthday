import { forwardRef } from 'react'
import './AudioController.css'

const AudioController = forwardRef(function AudioController(
  { isPlaying, hasError, onToggle, onError },
  ref
) {
  return (
    <div className="audio-controller">
      <audio
        ref={ref}
        src="/audio/fyne-shyt.mp3"
        loop
        preload="none"
        onError={onError}
      />
      <button
        className="audio-controller__btn"
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={hasError ? "Dhruv's anthem unavailable" : isPlaying ? "Turn off Dhruv's anthem" : "Turn on Dhruv's anthem"}
        disabled={hasError}
      >
        <span className="audio-controller__label mono">♫ DHRUV'S ANTHEM</span>
        <span className="audio-controller__state mono">
          {hasError ? 'N/A' : isPlaying ? 'ON' : 'OFF'}
        </span>
      </button>
    </div>
  )
})

export default AudioController
