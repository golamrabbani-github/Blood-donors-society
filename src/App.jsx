import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// All Pages
import Naveber from "./Naveber/Naveber.jsx";
import Footer from "./Footer/Footer.jsx";
import HomePage from "./Pages/Home/homePage.jsx";
import Gallery from "./Pages/Galary/gallery.jsx";
import DonorsList from "./Pages/DonorsList/donorsList";

import Aposetive from "./Pages/BloodGroup/A+/Aposetive.jsx";
import Anagetive from "./Pages/BloodGroup/A-/Anagetive.jsx";
import Bposetive from "./Pages/BloodGroup/B+/Bposetive.jsx";
import Bnagetive from "./Pages/BloodGroup/B-/Bnagetive.jsx";
import ABposetive from "./Pages/BloodGroup/AB+/ABposetive.jsx";
import ABnagetive from "./Pages/BloodGroup/AB-/ABnagetive";
import Oposetive from "./Pages/BloodGroup/O+/Oposetive.jsx";
import Onagetive from "./Pages/BloodGroup/O-/Onagetive.jsx";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: (
          <>
            <Naveber />
            <HomePage />
            <Footer />
          </>
        ),
      },
      {
        path: "/Gallery",
        element: (
          <>
            <Naveber />
            <Gallery />
          </>
        ),
      },
      {
        path: "/DonorsList",
        element: (
          <>
            <Naveber />
            <DonorsList />
          </>
        ),
      },

      //
      //
      //

      {
        path: "/A+",
        element: (
          <>
            <Naveber />
            <Aposetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/A-",
        element: (
          <>
            <Naveber />
            <Anagetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/AB+",
        element: (
          <>
            <Naveber />
            <ABposetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/AB-",
        element: (
          <>
            <Naveber />
            <ABnagetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/B+",
        element: (
          <>
            <Naveber />
            <Bposetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/B-",
        element: (
          <>
            <Naveber />
            <Bnagetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/O+",
        element: (
          <>
            <Naveber />
            <Oposetive />
            <Footer />
          </>
        ),
      },
      {
        path: "/O-",
        element: (
          <>
            <Naveber />
            <Onagetive />
            <Footer />
          </>
        ),
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      },
    ]
    // { basename: "/GolamRabbani_portfolio" }
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
