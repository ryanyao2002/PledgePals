import React from 'react'
import PropTypes from 'prop-types'
import './styles/Home.css';

const Home = props => {
    return (
        <div className="home-page">
            <div className="home-div">
                <h1>Welcome to Pledge Pals!</h1>
                <img src="../images/testimg.jpg" alt="asdf"/>
            </div>
        </div>

    )
}

Home.propTypes = {

}

export default Home
