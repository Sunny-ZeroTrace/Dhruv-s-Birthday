import { useState } from 'react'
import { stats } from '../data/stats'
import './Stats.css'

export default function Stats() {
  const [activeEgg, setActiveEgg] = useState(null)

  return (
    <section className="stats" aria-label="Dhruv system diagnostics">
      <h2 className="stats__title">DHRUV.EXE</h2>
      <p className="stats__subtitle mono">RUNNING DIAGNOSTIC SCAN…</p>

      <div className="stats__grid">
        {stats.map((stat, i) => {
          const clickable = Boolean(stat.easterEgg)
          const isOpen = activeEgg === stat.label
          return (
            <div
              className={`stats__card ${clickable ? 'stats__card--clickable' : ''}`}
              key={stat.label}
              style={{ '--tilt': `${i % 2 === 0 ? -1 : 1}deg` }}
            >
              {clickable ? (
                <button
                  className="stats__card-btn"
                  onClick={() => setActiveEgg(isOpen ? null : stat.label)}
                  aria-expanded={isOpen}
                >
                  <StatBody stat={stat} isOpen={isOpen} />
                </button>
              ) : (
                <StatBody stat={stat} isOpen={false} />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

function StatBody({ stat, isOpen }) {
  return (
    <>
      <span className="stats__label mono">{stat.label}</span>
      <span className="stats__value">{isOpen ? '⚠' : stat.value}</span>
      <span className="stats__note mono">{isOpen ? stat.easterEgg : stat.note}</span>
    </>
  )
}
