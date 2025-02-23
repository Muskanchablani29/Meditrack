import React, { useState, memo, useCallback, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "./Images/meditrack.png";

const Navbar = memo(() => {
    const [darkMode, setDarkMode] = useState(() => 
        document.body.classList.contains("dark-mode")
    );
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Handle drawer state and body class
    useEffect(() => {
        if (drawerOpen) {
            document.body.classList.add("drawer-open");
        } else {
            document.body.classList.remove("drawer-open");
        }
        
        // Cleanup on unmount
        return () => {
            document.body.classList.remove("drawer-open");
        };
    }, [drawerOpen]);

    const toggleDarkMode = useCallback(() => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            document.body.classList.toggle("dark-mode", newMode);
            return newMode;
        });
    }, []);

    const toggleDrawer = useCallback((isOpen) => {
        setDrawerOpen(isOpen);
    }, []);

    // Handle escape key to close drawer
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && drawerOpen) {
                toggleDrawer(false);
            }
        };

        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [drawerOpen, toggleDrawer]);

    return (
        <>
            <nav className={`navbar glassmorphism ${darkMode ? "dark" : ""}`}>
                <div className="logo">
                    <span className="brand-name">
                        <img src={logo} alt="MediTrack Logo" loading="lazy" />
                    </span>
                </div>

                <button 
                    className="menu-button"
                    onClick={() => toggleDrawer(true)}
                    aria-label="Open menu"
                    aria-expanded={drawerOpen}
                >
                    ☰
                </button>
            </nav>

            <div 
                className={`nav-drawer modern ${drawerOpen ? "open" : ""}`}
                role="dialog"
                aria-modal="true"
                aria-label="Navigation menu"
            >
                <button 
                    className="close-button"
                    onClick={() => toggleDrawer(false)}
                    aria-label="Close menu"
                >
                    ✕
                </button>
                <div className="drawer-links">
                    <NavLink 
                        to="/home" 
                        onClick={() => toggleDrawer(false)}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/explore" 
                        onClick={() => toggleDrawer(false)}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Explore
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        onClick={() => toggleDrawer(false)}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        onClick={() => toggleDrawer(false)}
                        className={({ isActive }) => isActive ? 'active' : ''}
                    >
                        Contact
                    </NavLink>
                </div>

                <div className="drawer-auth">
                    <Link 
                        to="/login" 
                        className="auth-link" 
                        onClick={() => toggleDrawer(false)}
                    >
                        <span className="auth-icon" aria-hidden="true">👤</span>
                        <span>Sign In</span>
                    </Link>
                    <Link 
                        to="/register" 
                        className="auth-link" 
                        onClick={() => toggleDrawer(false)}
                    >
                        <span className="auth-icon" aria-hidden="true">➕</span>
                        <span>Sign Up</span>
                    </Link>
                </div>
            </div>

            <button 
                className="dark-mode-button floating"
                onClick={toggleDarkMode}
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                aria-pressed={darkMode}
            >
                <span aria-hidden="true">{darkMode ? "☀️" : "🌙"}</span>
            </button>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
