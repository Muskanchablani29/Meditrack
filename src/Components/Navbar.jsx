import React, { useState, memo, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { logout, deleteAccount } from "../Reducers/authReducers";
import "./Navbar.css";
import logo from "./Images/meditrack.png";

const handleEscape = (e, drawerOpen, toggleDrawer) => {
    if (e.key === 'Escape' && drawerOpen) {
        toggleDrawer(false);
    }
};

const CustomNavLink = memo(({ to, onClick, children }) => (
    <RouterNavLink 
        to={to} 
        onClick={onClick}
        className={({ isActive }) => isActive ? 'active' : ''}
    >
        {children}
    </RouterNavLink>
));

CustomNavLink.displayName = 'CustomNavLink';

const Navbar = memo(() => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const dispatch = useDispatch();
    
    // Get authentication state from Redux
    const user = useSelector((state) => state.auth.user); 
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    useEffect(() => {
        document.body.classList.toggle("drawer-open", drawerOpen);
        return () => document.body.classList.remove("drawer-open");
    }, [drawerOpen]);

    const toggleDrawer = useCallback((isOpen) => {
        setDrawerOpen(isOpen);
    }, []);

    useEffect(() => {
        const escapeHandler = (e) => handleEscape(e, drawerOpen, toggleDrawer);
        window.addEventListener('keydown', escapeHandler);
        return () => window.removeEventListener('keydown', escapeHandler);
    }, [drawerOpen, toggleDrawer]);

    const handleLogout = () => {
        dispatch(logout()); // Dispatch logout action
        setShowMenu(false);
        toggleDrawer(false);
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account permanently? This action cannot be undone.")) {
            dispatch(deleteAccount());
            setShowMenu(false);
            toggleDrawer(false);
        }
    };

    const navLinks = [
        { to: "/home", text: "Home" },
        { to: "/explore", text: "Explore" },
        { to: "/about", text: "About" },
        { to: "/contact", text: "Contact" }
    ];

    return (
        <>
            <nav className="navbartop glassmorphism">
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
                    {navLinks.map(({ to, text }) => (
                        <CustomNavLink 
                            key={to}
                            to={to} 
                            onClick={() => toggleDrawer(false)}
                        >
                            {text}
                        </CustomNavLink>
                    ))}
                </div>

                <div className="drawer-profile">
                    {isLoggedIn ? (
                        <div className="user-menu">
                            <button 
                                className="username-button" 
                                onClick={() => setShowMenu(!showMenu)}
                            >
                                <span className="profile-icon" aria-hidden="true">👤</span>
                                {user?.username || "User"}
                            </button>
                            {showMenu && (
                                <div className="user-dropdown">
                                    <Link 
                                        to="/profile" 
                                        className="profile-option"
                                        onClick={() => {
                                            setShowMenu(false);
                                            toggleDrawer(false);
                                        }}
                                    >
                                        My Profile
                                    </Link>
                                    <button className="logout-button" onClick={handleLogout}>
                                        Logout
                                    </button>
                                    <button className="delete-account-button" onClick={handleDeleteAccount}>
                                        Delete Account
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link 
                            to="/SignUp" 
                            className="profile-link" 
                            onClick={() => toggleDrawer(false)}
                        >
                            <span className="profile-icon" aria-hidden="true">👤</span>
                            <span>Profile</span>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;
