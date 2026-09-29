import Header from './layouts/Header'
import HeroSection from './components/sections/HeroSection'
import PracticeAreas from './components/sections/PracticeAreas'
import TeamSection from './components/sections/TeamSection'
import SuccessCases from './components/sections/SuccessCases'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 pt-15"> {/* pt-15 evita que el Header fijo tape el Hero */}
      <Header />
      <main>
        <HeroSection />
        <PracticeAreas />
        <TeamSection />
        <SuccessCases />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
