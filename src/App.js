import './resources/styles.css'
import Header from './components/header_footer/Header'
import Featured from './components/featured/Featured'

function App() {
  return (
    <div
      className='App'
      style={{ height: '1500px', background: 'cornflowerblue' }}
    >
      <Header />
      <Featured />
    </div>
  )
}

export default App
