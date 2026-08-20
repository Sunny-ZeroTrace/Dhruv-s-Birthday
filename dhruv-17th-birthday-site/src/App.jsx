import { useRef, useState, useCallback } from 'react'
import IntroOverlay from './components/IntroOverlay'
import AudioController from './components/AudioController'
import Hero from './components/Hero'
import Stats from './components/Stats'
import EvidenceGallery from './components/EvidenceGallery'
import FieldReport from './components/FieldReport'
import BirthdayWishes from './components/BirthdayWishes'
import PersonalMessage from './components/PersonalMessage'
import FinalSection from './components/FinalSection'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const audioRef = useRef(null)

  const handleEnter = useCallback(() => {
    setEntered(true)
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.6
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true))
    }
  }, [])

  const handleToggle = useCallback(() => {
    const audio = audioRef.current
    if (!audio || hasError) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true))
    }
  }, [isPlaying, hasError])

  return (
    <>
      {!entered && <IntroOverlay onEnter={handleEnter} />}

      <AudioController
        ref={audioRef}
        isPlaying={isPlaying}
        hasError={hasError}
        onToggle={handleToggle}
        onError={() => setHasError(true)}
      />

      <main>
        <Hero />
        <Stats />
        <EvidenceGallery />
        <FieldReport />
        <BirthdayWishes />
        <PersonalMessage />
        <FinalSection />
      </main>
    </>
  )
}
