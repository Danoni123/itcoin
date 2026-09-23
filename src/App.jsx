import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Ecosystem from './components/Ecosystem.jsx'
import Tokenomics from './components/Tokenomics.jsx'
import Utility from './components/Utility.jsx'
import Roadmap from './components/Roadmap.jsx'
import Economy from './components/Economy.jsx'
import News from './components/News.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Ecosystem />
        <Tokenomics />
        <Utility />
        <Roadmap />
        <Economy />
        <News />
      </main>
      <Footer />
    </>
  )
}
