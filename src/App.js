import './resources/styles.css'
import { Element } from 'react-scroll'

import Header from './components/header_footer/Header'
import Featured from './components/featured/Featured'
import VenuNfo from './components/venuNfo/VenuNfo'
import Highlight from './components/highlights/Highlights'
import Pricing from './components/pricing/Pricing'
import Location from './components/location/Location'
import Footer from './components/header_footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='venuenfo'>
        <VenuNfo />
      </Element>

      <Element name='highlights'>
        <Highlight />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name='location'>
        <Location />
      </Element>

      <Footer />
    </div>
  )
}

export default App
