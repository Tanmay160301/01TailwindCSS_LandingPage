import Header from './components/Header'
import Hero from './components/Hero'
// import Feature from './components/Feature'
import Testimonials from './components/Testimonials'
import FeatureModified from './components/FeatureModified'
import CTA from './components/CTA'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <>
    <Header></Header>
    <Hero></Hero> 
    {/* <Feature></Feature> */}
    <FeatureModified></FeatureModified>
    <Testimonials></Testimonials>
    <CTA></CTA>
    <Footer></Footer>

    </>
  )
}

export default App
