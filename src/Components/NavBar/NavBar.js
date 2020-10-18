import React from "react";
import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
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

            <div className="navbar-auth">
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
            </div>
        </header>
    )
}

export default NavBar;