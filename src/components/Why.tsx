import '../styles/Why.css'
import WhyShapesEllipse from '../Assets/4. Why/Why_Shapes_Ellipse.svg'
import WhyShapesRectangle from '../Assets/4. Why/Why_Shapes_Rectangle.svg'
import WhyIllustration1 from '../Assets/4. Why/Why_Illustration-1.svg'
import WhyIllustration2 from '../Assets/4. Why/Why_Illustration-2.svg'
import ArrowIcon from '../Assets/4. Why/Arrow_icon.svg'

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="why-left">
        <div className="why-background">
          <img src={WhyShapesEllipse} alt="Yellow shape" className="why-shapes why-shapes-ellipse" />
          <img src={WhyShapesRectangle} alt="Dark shape" className="why-shapes why-shapes-rectangle" />
        </div>

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
    </section>
  )
}
