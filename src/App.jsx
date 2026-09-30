import Header from './layouts/Header'
import Footer from './components/sections/Footer'

import { siteConfig } from './data/config'
import HeroMedical from './components/sections/HeroMedical' 
import Specialties from './components/sections/Specialties'
import TeamMedical from './components/sections/TeamMedical'
import Facilities from './components/sections/Facilities'
import ContactMedical from './components/sections/ContactMedical'

export default function App() {
  return (
    <div className="bg-white text-slate-900 pt-20"> 
      <Header />
      <main>
        <HeroMedical content={siteConfig.hero.content} />
        <Specialties content={siteConfig.specialties} />
        <TeamMedical content={siteConfig.team} />
        <Facilities content={siteConfig.facilities} />
        <ContactMedical content={siteConfig.contactSection} />
      </main>
      <Footer />
    </div>
  )
}