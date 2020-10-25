import React, {useEffect, useState} from "react";
import './NavBar.css';
import {Link, useLocation} from "react-router-dom";
import {auth} from "../../firebase";

function NavBar() {
    const location = useLocation();
    const [signup,setSignUp] = useState(<p>Sign</p>)

    useEffect(()=>{
        if (location.pathname==='/dashboard' || location.pathname==='/track-history'){
            setSignUp(
                <div className="navbar-link signup-button">
                    <p onClick={signOut}>
                        Sign Out
                    </p>
                </div>
            )
        }else {
            setSignUp(<div className="navbar-auth">
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
            </div>)
        }
    },[location.pathname])

    const signOut = (e)=>{
        auth.signOut();
    }
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

            {signup}

        </header>
    )
}

export default NavBar;