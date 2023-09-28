import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Reservation from "./routes/Reservation";
import Root from "./routes/Root";
import "./App.css"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/reserve" element={<Reservation />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
