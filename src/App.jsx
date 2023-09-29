import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Houses from './components/House'

function App() {

  return (
      <>
        <Navbar />
        <Routes>
          <Route path='/' element= {<Houses />}></Route>
        </Routes>
        
    </>
  )
}

export default App
