import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import "./style.css"
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

function Sidebar() {
        return (
                <aside>
                        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

                                <Link  to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                                        <div className="sidebar-brand-icon rotate-n-15">
                                                <i className="far fa-user-circle" />
                                        </div>
                                        <div>Lost-In-Books</div>
                                </Link>

                                {/* Divider */}
                                <hr className="sidebar-divider" />

                                {/* Nav Item - Dashboard */}
                               
                                <Item active={''}
                                        href={"/dashboard"}
                                        icon={<LocalLibraryIcon/>}
                                        text={<span>Library</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                                {/* Nav Item - Profile */}
                                
                                <Item active={''}
                                        href={"/profile"}
                                        icon={<AssignmentIndIcon/>}
                                        text={<span>Profile</span>}
                                 />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                                {/* Nav Item - Roster */}
                                <Item active={''}
                                        href={"/other"}
                                        icon={<MenuBookIcon/>}
                                        text={<span>My Bookshelf</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                        </ul>
                </aside>

        );
}
export default Sidebar;