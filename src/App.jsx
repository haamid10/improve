
import Analytics from "./components/Analytics"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Hero/>
      <Analytics/>
    </div>
  )
}

export default App
