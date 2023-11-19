
import Analytics from "./components/Analytics"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from "./components/Newsletter"
const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
