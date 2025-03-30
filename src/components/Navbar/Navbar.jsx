import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Vasundhara.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/service") {
            setDropdownOpen(true);
        } else {
            setDropdownOpen(false);
        }
    }, [location.pathname]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Vasundhara Logo" className="nav-logo" onClick={closeMenu} />

                {/* Hamburger Menu */}
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
                    <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>

                    {/* Services Dropdown */}
                    <li 
                        className="nav-item dropdown" 
                        onMouseEnter={() => setDropdownOpen(true)} 
                        onMouseLeave={() => setDropdownOpen(location.pathname === "/service" ? true : false)}
                    >
                        <Link to="/service" className="dropdown-link" onClick={closeMenu}>
                            Services
                        </Link>
                        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                            <li><Link to="/epc" onClick={closeMenu}>EPC</Link></li>
                            <li><Link to="/consultancy" onClick={closeMenu}>Consultancy</Link></li>
                        </ul>
                    </li>

                    <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
                    <li><Link to="/client" onClick={closeMenu}>Client</Link></li>
                    <li><Link to="/team" onClick={closeMenu}>Team</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </nav>

            
            <div className="page-content"></div>
        </>
    );
};

export default Navbar;
