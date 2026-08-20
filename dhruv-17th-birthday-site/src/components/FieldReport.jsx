import { fieldReport } from '../data/fieldReport'
import './FieldReport.css'

export default function FieldReport() {
  return (
    <section className="field-report" aria-label="Field report">
      <p className="field-report__stamp mono">CLASSIFIED — EYES ONLY</p>
      <h2 className="field-report__title">FIELD REPORT: DHRUV</h2>

      <ol className="field-report__list">
        {fieldReport.map((entry) => (
          <li className="field-report__item" key={entry.id}>
            <span className="field-report__index mono">{entry.id}</span>
            <span className="field-report__text">{entry.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
