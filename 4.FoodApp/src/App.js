import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./pages/Grocery";
import { Suspense, lazy } from "react";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const Grocery = lazy(() => import("./pages/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
