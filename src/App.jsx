import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
      <Router>
      <>
        <Navbar />
    </>
    </Router>
  )
}

export default App
