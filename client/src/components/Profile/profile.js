import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
// import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar"

class Profile extends Component {
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
            <div className='container-fluid pl-0 m-0'>
                <Sidebar />
                <div className="d-flex flex-row-reverse mt-5 mr-5">
                    <div className='col-xs-12 col-sm-12 col-md-9 jumbotron jumbotron-fluid cardBackground'>
                        <div className='col-sm-8 mx-auto'>
                            <h1 className='text-center'>PROFILE</h1>
                        </div>
                        <table className='table col-md-6 mx-auto'>
                            <tbody>
                                <tr>
                                    <td>First Name</td>
                                    <td>{this.state.first_name}</td>
                                </tr>
                                <tr>
                                    <td>Last Name</td>
                                    <td>{this.state.last_name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{this.state.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;