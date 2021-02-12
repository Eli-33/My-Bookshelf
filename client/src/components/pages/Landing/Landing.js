import React, { Component } from "react";
import Carrousel from "../../LandingJumbo/LandingJumbo";
import BrandDescription from "../../BrandDescription/BrandDescription"
import './style.css'
class Landing extends Component {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <div>
                <Carrousel />
                <div className="titleApp">
                   <div className="wrapper">LOST-IN-BOOKS
                   <p>Find Your True Self</p>

                   </div>
                </div>
                </div>     
                <BrandDescription />
            </div>
        );
    } 
}

export default Landing;
