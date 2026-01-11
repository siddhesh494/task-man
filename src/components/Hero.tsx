import { useState } from 'react'
import '../styles/Hero.css'
import HeroShapes from '../Assets/1. Hero/Hero_Shapes.svg'
import Card1 from '../Assets/1. Hero/Hero_Illustration_Card-1.svg'
import Card2 from '../Assets/1. Hero/Hero_Illustration_Card-2.svg'
import Card4 from '../Assets/1. Hero/Hero_Illustration_Card-3.svg'
import Card3 from '../Assets/1. Hero/Hero_Illustration_Card-4.svg'
import CNLogo from '../Assets/2. Logos/Cartoon_Network_logo.svg'
import BookingLogo from '../Assets/2. Logos/Booking.com_logo.svg'
import DropboxLogo from '../Assets/2. Logos/Dropbox_logo.svg'
import ToshibaLogo from '../Assets/2. Logos/Toshiba_logo.svg'
import SlackLogo from '../Assets/2. Logos/Slack_logo.svg'
import NetflixLogo from '../Assets/2. Logos/Netflix_logo.svg'
import SpotifyLogo from '../Assets/2. Logos/Spotify_logo.svg'
import CocaColaLogo from '../Assets/2. Logos/CocaCola_logo.svg'
import RedBullLogo from '../Assets/2. Logos/RedBull_logo.svg'

export default function Hero() {
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
    <section className="hero" id="hero">
      <div className="hero-background">
        <img src={HeroShapes} alt="Decorative shapes" className="shape-bg" />
      </div>

      <div className="hero-container">

        {/* left side */}
        <div className="hero-content">
          <div className="hero-logo">TaskMan</div>
          <h1 className="hero-title">Task Management And Lists Tool</h1>
          <p className="hero-subtitle">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
          </p>

          <form className="hero-form" onSubmit={handleSignup}>
            <div className="form-group">
              <input
                type="email"
                placeholder="Name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="email-input"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="cta-button"
              >
                {isLoading ? 'Starting...' : 'Try for free'}
              </button>
            </div>
          </form>

          <div className="hero-logos">
            <div className="company-logos">
              <div className="logo-item">
                <img src={CNLogo} alt="Cartoon Network" className="logo-image cartoon-image" />
              </div>
              <div className="logo-item">
                <img src={BookingLogo} alt="Booking.com" className="logo-image booking-image" />
              </div>
              <div className="logo-item">
                <img src={DropboxLogo} alt="Dropbox" className="logo-image dropbox-image" />
              </div>
              <div className="logo-item">
                <img src={ToshibaLogo} alt="Toshiba" className="logo-image toshiba-image" />
              </div>
              <div className="logo-item">
                <img src={SlackLogo} alt="Slack" className="logo-image slack-image" />
              </div>
              <div className="logo-item">
                <img src={NetflixLogo} alt="Netflix" className="logo-image netflix-image" />
              </div>
              <div className="logo-item">
                <img src={SpotifyLogo} alt="Spotify" className="logo-image spotify-image" />
              </div>
              <div className="logo-item">
                <img src={CocaColaLogo} alt="Coca-Cola" className="logo-image cocacola-image" />
              </div>
              <div className="logo-item">
                <img src={RedBullLogo} alt="Red Bull" className="logo-image redbull-image" />
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="hero-visual">
          <button className="try-free-button">Try free</button>
          <div className="hero-illustration">
            <img src={Card1} alt="Card 1" className="floating-card card-1" />
            <img src={Card2} alt="Card 2" className="floating-card card-2" />
            <img src={Card3} alt="Card 3" className="floating-card card-3" />
            <img src={Card4} alt="Card 4" className="floating-card card-4" />
          </div>
        </div>
      </div>
    </section>
  )
}
