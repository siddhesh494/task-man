import { useState } from 'react'
import '../styles/Signup.css'
import WhyShapes from '../Assets/4. Why/Why_Shapes.svg'
import WhyIllustration2 from '../Assets/4. Why/Why_Illustration-2.svg'

export default function Signup() {
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
    <></>
  )
}
