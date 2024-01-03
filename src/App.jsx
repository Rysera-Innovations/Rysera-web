import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from 'Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero/>
  
    </div>
  )
}

export default App
