import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Root() {
    return (
        <>
            <Navbar />


            <Outlet />

            <Footer />
        </>
    );
}

export default Root;