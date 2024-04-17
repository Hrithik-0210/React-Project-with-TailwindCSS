import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import Footer from "./Component/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import About from "./Component/About";
import Cart from "./Component/Cart";
import RestaurantMenu from "./Component/RestaurantMenu";
import LoginPage from "./Component/LoginPage";
import Profile from "./Component/ProfileClass";
import { Shimmer } from "./Component/Shimmer";

const Instamart = lazy(() => import("./Component/Instamart"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {/* <First1 /> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />,
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  // {
  //   path: "/about",
  //   element: <About />,
  // },
  // {
  //   path: "/cart",
  //   element: <Cart />,
  // },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
