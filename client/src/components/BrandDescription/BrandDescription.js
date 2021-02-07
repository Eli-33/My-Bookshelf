import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
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
                                        <GitHubIcon/>
                                         <a href="https://github.com/Eli-33"/>
                                       <LinkedInIcon/>
                                       <a href="https://www.linkedin.com/in/elahe-jamshidi-araghi-a155aa99/"/>
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

        );
    }
}


export default BrandDescription;