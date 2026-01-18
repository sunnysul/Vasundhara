import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUS/AboutUs";
import Client from "./components/Client/Client";
import ConsultancyPage from "./components/ConsultancyPage/ConsultancyPage";
import Contact from "./components/Contact/Contact";
import EPCPage from "./components/EPCPage/EPCPage";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import TeamPage from "./components/TeamPage/TeamPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <AboutUs /> },
        { path: "client", element: <Client /> },
        { path: "consultancy", element: <ConsultancyPage /> },
        { path: "contact", element: <Contact /> },
        { path: "epc", element: <EPCPage /> },
        { path: "gallery", element: <Gallery /> },
        { path: "service", element: <Services /> },
        { path: "team", element: <TeamPage /> }
      ]
    }
  ],
  {
    basename: "/Vasundhara"
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
