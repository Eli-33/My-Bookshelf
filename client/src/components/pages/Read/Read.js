import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import SavedBooks from "../../SavedBooks/SavedBooks"


class Read extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                <SavedBooks status="Read"/>
                </div>
            </div>
        );
    } 
}

export default Read;