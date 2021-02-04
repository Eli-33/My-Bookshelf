import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import "./style.css";

class BrandDescription extends Component {
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper">
                    <div className="cn_wrapper">
                        <Zoom duration={500}>
                            <div className="cn_item">
                                <div className="cn_outer">
                                    <div className="cn_inner">
                                        <div className="cn_icon_sqare bck_black"></div>
                                        <div className="cn_icon"></div>
                                        <div className="cn_title">Contact Me!</div>
                                        <div className="cn_desc">
                                            links here
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Zoom>
                        <Zoom duration={500}>
                            <div className="cn_item">
                                <div className="cn_outer">
                                    <div className="cn_inner">
                                        <div className="cn_icon_sqare bck_black"></div>
                                        <div className="cn_icon"></div>
                                        <div className="cn_title">About App</div>
                                        <div className="cn_desc">You’re in the right place. Tell us what titles you’ve enjoyed in the past,
                                         and we’ll give you surprisingly insightful recommendations.This App let you to login and be a member
                                         and have your own bookshelf also enjoy reading your favourite books and can save the books to read it later.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>


//             <div className="container-fluid d-flex justify-content-center p-0 m-0">
//                 <div className="row m-0 p-0">
//                     <div className="cardBackground card col-md-9 col-xs-12">
//                         <div className="card-body">
//                             <h5 className="card-title">About App</h5>You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.

// This App let you to login and be a member and have your own bookshelf also enjoy reading your favourite books and can save the books to read it later.

// Welcome to an online reading environment, where you and your friends can read together about latest books and their stories.

// Enjoy now more than a million e-books on all your digital devices. Without any commitment to stay. Happy reading in an environment specific to your free time!
//                             <p className="card-text"></p>
//                         </div>
//                     </div>

//                     <div className="cardBackground card col-md-3 col-xs-12 text-center">
//                         <div className="card-body">
//                             <h5 className="card-title">Follow Me!</h5>
//                             <a href="/">
//                                 <span className="fa-stack facebookLogo">
//                                     <i className="far fa-circle fa-stack-2x"></i>
//                                     <i className="fab fa-facebook-f fa-stack-1x"></i>
//                                 </span>
//                             </a>
//                             <a href="/">
//                                 <span className="fa-stack twitterLogo">
//                                     <i className="far fa-circle fa-stack-2x"></i>
//                                     <i className="fab fa-twitter fa-stack-1x"></i>
//                                 </span>
//                             </a>
//                             <a href="/">
//                                 <span className="fa-stack instagramLogo">
//                                     <i className="far fa-circle fa-stack-2x"></i>
//                                     <i className="fab fa-instagram fa-stack-1x"></i>
//                                 </span>
//                             </a>
//                             <a href="/">
//                                 <span className="fa-stack linkedinLogo">
//                                     <i className="far fa-circle fa-stack-2x"></i>
//                                     <i className="fab fa-linkedin-in fa-stack-1x"></i>
//                                 </span>
//                             </a>
//                             <a href="/">
//                                 <span className="fa-stack googleLogo">
//                                     <i className="far fa-circle fa-stack-2x"></i>
//                                     <i className="fab fa-google fa-stack-1x"></i>
//                                 </span>
//                             </a>

//                         </div>
//                     </div>
//                 </div>
//             </div>
        );
    }
}

export default BrandDescription;