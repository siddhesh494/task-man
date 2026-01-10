import '../styles/Benefits.css'
import TrackIcon from '../Assets/3. Benefits/Benefits_Icon_Track.svg'
import PrioritizeIcon from '../Assets/3. Benefits/Benefits_Icon_Priotitize.svg'
import CollaborateIcon from '../Assets/3. Benefits/Benefits_Icon_Collaborate.svg'

interface Benefit {
  id: number
  icon: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    id: 1,
    icon: TrackIcon,
    title: 'Keep tasks in one place',
    description: 'Save time, avoid losing work and information, delegate, and track tasks to stay on schedule'
  },
  {
    id: 2,
    icon: PrioritizeIcon,
    title: 'Prioritize your work',
    description: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
  },
  {
    id: 3,
    icon: CollaborateIcon,
    title: 'Improve collaboration',
    description: 'Tracking tasks allows everyone to understand which are more important or require more time, so'
  }
]

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="benefits-container">
        <h2 className="section-title">Key benefits of using task management software</h2>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                <img src={benefit.icon} alt={benefit.title} />
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
