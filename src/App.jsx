import Header from './components/Header'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="bg-white text-slate-900 pt-20"> 
      <Header />
      <main>
        {/* Aquí inyectaremos HeroMedical y el resto */}
      </main>
      <Footer />
    </div>
  )
}