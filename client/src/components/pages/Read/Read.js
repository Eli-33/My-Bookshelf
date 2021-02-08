import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
// import "./style.css"

class Read extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                </div>
            </div>
        );
    } 
}

export default Read;