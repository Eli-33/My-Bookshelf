import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./style.css";
import logo from '../../images/logo3.png'
import MenuIcon from '@material-ui/icons/Menu';


class Navbar extends Component {
   

  

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('usertoken');
        this.props.history.push('/');
    }
   
    
    render() {
        const loginRegLink = (
            <ul className='navbar-nav list-group list-group-horizontal'>
                <li>
                    <Link className='btn btn-sm active mr-1 mb-1' to='/login'>
                        Login
                    </Link>
                </li>
                <li>
                    <Link className='btn btn-sm active' to='/register'>
                        Register
                    </Link>
                </li>
            </ul>
        )
        const userLink = (
            <ul className='navbar-nav list-group list-group-horizontal'>
                <li>
                    <Link className='btn btn-sm active mr-1 mb-1' to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='btn btn-sm active mr-1 mb-1' to='/dashboard'>
                        Dashboard
                    </Link>
                </li>
                <li>
                    {/* <a href="/" rel='noopener noreferrer' onClick={this.logOut.bind(this)}>
                        Logout
                    </a> */}
                    <button className="btn btn-sm active" id="logoutBtn" data-toggle="modal" data-target="#logoutModal" onClick={this.logOut.bind(this)}>
                        <div>Logout</div>
                    </button>
                </li>
            </ul>

        )
     

        return (
            <nav className='navbar navbar-expand-md'>
                 <img src={logo} alt="LOGO"/>
                <div className='collapse navbar-collapse d-flex justify-content-end' id='navbar1'>
                    {localStorage.usertoken ? userLink : loginRegLink}
                </div>
            </nav>
        )
    }


}

export default withRouter(Navbar);