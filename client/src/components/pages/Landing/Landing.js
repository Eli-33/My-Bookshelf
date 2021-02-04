import React, { Component } from "react";
import Carrousel from "../../LandingJumbo/LandingJumbo";
import BrandDescription from "../../BrandDescription/BrandDescription"



class Landing extends Component {
    render() {
        return (
            <div style={{ position: "relative" }}>
                <div>
                <Carrousel />
                <div className="titleApp">
                   <div className="wrapper">LOST-IN-BOOKS</div>
                </div>
                </div>     
                <BrandDescription />
            </div>
        );
    } 
}

export default Landing;