import Header from './layouts/Header'
import Footer from './components/sections/Footer'

import { siteConfig } from './data/config' // Añadidas las llaves
import HeroMedical from './components/sections/HeroMedical' // Removidas las llaves

export default function App() {
  return (
    <div className="bg-white text-slate-900 pt-20"> 
      <Header />
      <main>
        <HeroMedical content={siteConfig.hero.content} />
      </main>
      <Footer />
    </div>
  )
}