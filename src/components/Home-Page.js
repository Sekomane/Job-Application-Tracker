import React from "react";
import "../styles/styles.css"

const Home = () =>{
    return(
        <div className="home-container">
            <nav className="navbar">
                <ul className="nav-links">
                    <li> <a href="#home"> Home</a> </li>
                    <li> <a href="#About"> About</a> </li>
                    <li> <a href="#Contact-Us"> Contact </a> </li>
                    <li> <a href="#Services"> Services</a> </li>
                    <li> <a href="#Applications"> Job Application</a> </li>
                    <li> <a href="#Login"> Login</a> </li>
                    <li> <a href="#Sign Up"> Sign-up</a> </li>
                </ul>
            </nav>
            
            <h1 className="header">
                <p className="slogan">Job Application Tracker</p>
            </h1>

        </div>




    );
}

export default Home;