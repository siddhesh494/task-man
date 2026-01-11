import { useState } from 'react'
import '../styles/Why.css'
import WhyShapesEllipse from '../Assets/4. Why/Why_Shapes_Ellipse.svg'
import WhyShapesRectangle from '../Assets/4. Why/Why_Shapes_Rectangle.svg'
import WhyIllustration1 from '../Assets/4. Why/Why_Illustration-1.svg'
import WhyIllustration2 from '../Assets/4. Why/Why_Illustration-2.svg'
import ArrowIcon from '../Assets/4. Why/Arrow_icon.svg'
import SignupShape from '../Assets/5. Signup/Signup_Shape.svg'

export default function Why() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      alert(`Welcome! Check your email at ${email}`)
      setEmail('')
      setIsLoading(false)
    }, 1500)
  }

  return (
    <section className="why-combined" id="why">
      {/* Background shapes from both sections */}
      <div className="why-combined-background">
        <div className="why-background">
          <img src={WhyShapesEllipse} alt="Yellow shape" className="why-shapes why-shapes-ellipse" />
          <img src={WhyShapesRectangle} alt="Dark shape" className="why-shapes why-shapes-rectangle" />
          <img src={SignupShape} alt="Decorative shape" className="signup-shape signup-shape-right" />
        </div>
      </div>

      {/* Row 1: Why Section - 2 columns */}
      <div className="why-row">
        <div className="why-left">
          <div className="why-illustration-wrapper">
            <img src={WhyIllustration1} alt="Dashboard card" className="why-illustration why-illustration-1" />
            <img src={WhyIllustration2} alt="Dashboard card 2" className="why-illustration why-illustration-2" />
          </div>
        </div>

        <div className="why-right">
          <h2 className="why-title">Why do you need task management software?</h2>
          <p className="why-description">
            Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines.
          </p>
          <a href="#" className="why-link">
            LEARN MORE <img src={ArrowIcon} alt="Arrow" className="why-arrow" />
          </a>
        </div>
      </div>

      {/* Row 2: Signup Section */}
      <div className="signup-row">
        <div className="signup-container">
          <div className="signup-right">
            <h2 className="signup-title">Get better work done</h2>
            <p className="signup-subtitle">
              See why millions of people across 195 countries use TaskMan.
            </p>
            <form className="signup-form" onSubmit={handleSignup}>
              <input
                type="email"
                placeholder="Name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="signup-input"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="signup-button"
              >
                {isLoading ? 'Loading...' : 'Try for free'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
