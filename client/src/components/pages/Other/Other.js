import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import SavedBooks from "../../SavedBooks/SavedBooks"
import "./style.css"

class Roster extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    <SavedBooks />
                </div>
            </div>
        );
    } 
}

export default Roster;