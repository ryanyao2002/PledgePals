import React from 'react'
import PropTypes from 'prop-types'
import "./styles/Navbar.css"
import {Link} from 'react-router-dom'

const Navbar = props => {
    return (
        <div className="nav_container">
            <Link to="/" className="heading title">Pledge Pals</Link>
            <div className="authLinks">
                <Link className="navButton requestbutton" to = "/requests">Requests</Link>
                <Link className="navButton loginButton" to = "/login">Login</Link>
                <Link className="navButton registerButton" to = "/register">Sign Up</Link>
            </div>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar
