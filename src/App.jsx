import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#09090b]">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
