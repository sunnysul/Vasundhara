import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/Vasundhara.png";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation(); // Get the current route

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Vasundhara Logo" className="nav-logo" />
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>

                    {/* Services with Dropdown */}
                    <li 
                        className="nav-item dropdown" 
                        onMouseEnter={() => setDropdownOpen(true)} 
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link 
                            to="/service" 
                            className="dropdown-toggle" 
                            onClick={() => setDropdownOpen(true)} // Keep dropdown open on click
                        >
                            Services
                        </Link>
                        {(dropdownOpen || location.pathname === "/service") && (
                            <ul className="dropdown-menu">
                                <li><Link to="/epc">EPC</Link></li>
                                <li><Link to="/consultancy">Consultancy</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/client">Client</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            {/* Wrapper to ensure content doesn't touch navbar */}
            <div className="page-content">
                {/* This wrapper should be used in your App.js */}
            </div>
        </>
    );
};

export default Navbar;
