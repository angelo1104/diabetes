import React, {useEffect} from "react";
import './NavBar.css';
import {Link, useLocation} from "react-router-dom";

function NavBar() {
    const location = useLocation();

    useEffect(()=>{
        console.log(location.pathname)
    },[location.pathname])

    return (
        <header className="navbar">
            <div className="navbar-link">
                <a href="#hello">
                    What?
                </a>
            </div>
            <div className="navbar-link">
                <a href="#hello">
                    Why?
                </a>
            </div>
            <div className="navbar-link">
                <a href="#hello">
                    How?
                </a>
            </div>

            {location.pathname!=='/dashboard' && <div className="navbar-auth">
                <div className="navbar-link">
                    <Link to={'/login'}>
                        Login
                    </Link>
                </div>
                <div className="navbar-link signup-button">
                    <Link to={'/signup'}>
                        Sign Up
                    </Link>
                </div>
            </div>}

            {
                location.pathname === '/dashboard' &&  <div className="navbar-link signup-button">
                    <Link to={'/signup'}>
                        Sign Out
                    </Link>
                </div>
            }
        </header>
    )
}

export default NavBar;