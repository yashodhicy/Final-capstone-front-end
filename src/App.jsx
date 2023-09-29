import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Houses from './components/House'
import HouseDetails from './HouseDetails'
import { getHouses } from './Redux/HouseSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  return (
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element= {<Houses />}></Route>
          <Route path='/houses/:houseId' element = { <HouseDetails />}>
          </Route>
        </Routes>
        
        
        
    </>
  )
}

export default App
