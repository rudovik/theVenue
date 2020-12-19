import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/Featured'
import VenuNfo from './components/venuNfo/VenuNfo'
import Highlight from './components/highlights/Highlights'

function App() {
  return (
    <div className='App'>
      <Header />
      <Featured />
      <VenuNfo />
      <Highlight />
    </div>
  )
}

export default App
