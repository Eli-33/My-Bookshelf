import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import SearchBooks from "../../DasboardNewsCard/SearchBooks"
import { lightGreen } from "@material-ui/core/colors";


class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token =  localStorage.getItem('userToken');
        const decoded = jwt_decode(token);
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div className="container-fluid pl-0" style={{backgroundColor: lightGreen}}>
                    <Sidebar />
                    <div>
                        <h1>
                             Welcome { this.state.first_name } { this.state.last_name }
                        </h1>
                        <div className="d-flex flex-row-reverse mr-5">
                            <SearchBooks />
                        </div>
                    </div>
            </div>
        );
    }
}

export default DashBoard;