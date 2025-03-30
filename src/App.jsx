import { Routes, Route } from "react-router-dom"; // ✅ Remove extra Router import
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUS/AboutUs";
import Client from "./components/Client/Client";
import ConsultancyPage from "./components/ConsultancyPage/ConsultancyPage";
import Contact from "./components/Contact/Contact";
import EPCPage from "./components/EPCPage/EPCPage";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";
import TeamPage from "./components/TeamPage/TeamPage";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/client" element={<Client />}/>
        <Route path="/consultancy" element={<ConsultancyPage />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/epc" element={<EPCPage />}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/service" element={<Services/>}/>
        \<Route path="/team" element={<TeamPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
