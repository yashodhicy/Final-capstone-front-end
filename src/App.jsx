import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Reservation from "./routes/Reservation";
import Root from "./routes/Root";
import "./App.css";
import Houses from "./components/House";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getHouses } from "./Redux/HouseSlice";
import HouseDetails from "./HouseDetails";
import Signup from "./routes/auth/Signup";
import Signin from "./routes/auth/Signin";
import AddHouse from "./components/AddHouse";
import DeleteHouse from "./components/Delete";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        errorElement={<div>This is the error page</div>}
        path="/"
        element={<Outlet />}
      >
        <Route path="/" element={<Root />}>
          {/* Add navigation tabs here */}
          <Route path="/" element={<Houses />}></Route>
          <Route path="/add" element={<AddHouse />} />
          <Route path="/houses/:houseId" element={<HouseDetails />} />
          <Route path="/delete" element={<DeleteHouse />} />
          <Route path="/reserve" element={<Reservation />} />
        </Route>
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
