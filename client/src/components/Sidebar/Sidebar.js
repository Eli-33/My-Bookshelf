import React from 'react';
// import { Drawer, List, ListItem } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Item from './Item';
import "./style.css"

// function Sidebar(props) {
//         const { open, onClose } = props;
//         return (
//           <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
//             <List component="nav">
//               <ListItem button onClick={() => console.log("Featured")}>
//                 زمان باقیمانده تا شروع
//               </ListItem>
//               <ListItem button onClick={() => console.log("Venue NFO")}>
//                 توضیحات کنسرت
//               </ListItem>
//               <ListItem button onClick={() => console.log("Highlights")}>
//                 ویژه ها
//               </ListItem>
//               <ListItem button onClick={() => console.log("Pricing")}>
//                 قیمت
//               </ListItem>
//               <ListItem button onClick={() => console.log("Location")}>
//                 آدرس
//               </ListItem>
//             </List>
//           </Drawer>
//         );
//       }


function Sidebar() {
        return (
                <aside>
                        <ul className="navbar-nav sidebar sidebar-dark accordion" id="accordionSidebar">

                                <Link  to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                                        <div className="sidebar-brand-icon rotate-n-15">
                                                <i className="far fa-user-circle" />
                                        </div>
                                        <div></div>
                                </Link>

                                {/* Divider */}
                                <hr className="sidebar-divider" />

                                {/* Nav Item - Dashboard */}
                                <Item active={''}
                                        href={"/dashboard"}
                                        icon={<i className="fas fa-folder-minus" />}
                                        text={<span>Library</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                                {/* Nav Item - Profile */}
                                <Item active={''}
                                        href={"/profile"}
                                        icon={<i className="fas fa-user-alt" />}
                                        text={<span>Profile</span>}
                                 />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                                {/* Nav Item - Roster */}
                                <Item active={''}
                                        href={"/other"}
                                        icon={<i className="fas fa-calendar-week" />}
                                        text={<span>My Bookshelf</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                        </ul>
                </aside>

        );
}
export default Sidebar;