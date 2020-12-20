import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/Featured'
import VenuNfo from './components/venuNfo/VenuNfo'
import Highlight from './components/highlights/Highlights'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <div className='App'>
      <Header />
      <Featured />
      <VenuNfo />
      <Highlight />
      <Pricing />
    </div>
  )
}

export default App
