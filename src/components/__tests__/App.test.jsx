import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import App from "../../App";

describe("App", () => {
  test("renders without errors", () => {
    const tree = renderer
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route
          errorElement={<div>This is the error page</div>}
          path="/"
          element={<div>MainLayout</div>}
        >
          <Route path="/" element={<div>Root</div>}>
            {/* Add navigation tabs here */}
            <Route path="/" element={<div>Houses</div>}></Route>
            <Route path="/add" element={<div>AddHouse</div>} />
            <Route path="/houses/:houseId" element={<div>HouseDetails</div>} />
            <Route path="/delete" element={<div>DeleteHouse</div>} />
            <Route path="/reserve" element={<div>Reservation</div>} />
          </Route>
          <Route path="/login" element={<div>Signin</div>} />
          <Route path="/signup" element={<div>Signup</div>} />
        </Route>
      )
    );

    render(<RouterProvider router={router}><App /></RouterProvider>);
    // Add your assertions here
    expect(tree).toMatchSnapshot();
  });
});