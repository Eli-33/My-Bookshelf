import React, { Component } from "react";
import "./style.css";
import Carrousel from "../../LandingJumbo/LandingJumbo";
import BrandDescription from "../../BrandDescription/BrandDescription"



class Landing extends Component {
    render() {
        return (
            <div className="container-fluid p-0 m-0">
                <div className="d-flex justify-content-center backgroundImg">
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