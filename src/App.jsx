import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Houses from './components/House'
import AddHouse from './components/AddHouse'


function App() {


  return (
      <>
        <Navbar />
        <Navbar />
        <Routes>
          <Route path='/' element= {<Houses />}></Route>
          <Route path='/add' element= {<AddHouse />}></Route>
        </Routes>
        
    </>
  )
}

export default App