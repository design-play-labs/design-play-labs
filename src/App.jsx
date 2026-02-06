import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Subject42 from './components/Subject42'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Subject42 />
      <Contact />
      <Footer />
    </div>
  )
}
