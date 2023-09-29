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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Outlet />}>
        <Route path="/" element={<Root />}>

          {/* Add navigation tabs here */}
          <Route path="/reserve" element={<Reservation />} />
        </Route>
        <Route path="/login" element={ <h1>I&apos;m the login page</h1>} />
        <Route path="/signup" element={ <h1>I&apos;m the Sign up page</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
