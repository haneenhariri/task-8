import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Host from './components/Host/Host'
import Footer from './components/Footer/Footer'



function App(){

  return(
    <>
      <Navbar />
      <Hero />
      <Services/>
      <Host />
      <Footer/>
    </>
  )
}
export default App