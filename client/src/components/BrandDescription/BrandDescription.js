import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./style.css";
import contatMeIcon from '../../images/contactIcon1.jpg';
import InfoIcon from '../../images/infoIcon2.png';


class BrandDescription extends Component {
    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper">
                    <div className="cn_wrapper">
                       <div className="row">
                          <Col size="lg-4">
                            <Zoom duration={500} delay={500}>
                              <div className="cn_item">
                                <div className="cn_outer">
                                    <div className="cn_inner">
                                        <div className="cn_icon_sqare bck_black"></div>
                                        <div className="cn_icon" style={{background:`url(${contatMeIcon})`}}></div>
                                        <div className="cn_title">Contact Me!</div>
                                        <div className="cn_desc">
                                           <a href='https://github.com/Eli-33'>
                                           <GitHubIcon style={{color: "#4DB6AC"}}/></a>
                                           <a href='https://www.linkedin.com/in/elahe-jamshidi-araghi-a155aa99/'>
                                           <LinkedInIcon style={{color: "#4DB6AC"}}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                     </Col>  
                      <Col size="md-4"/>
                      <Col size="lg-4">
                        <Zoom duration={500}>
                            <div className="cn_item">
                                <div className="cn_outer">
                                    <div className="cn_inner">
                                        <div className="cn_icon_sqare bck_black"></div>
                                        <div className="cn_icon" style={{background:`url(${InfoIcon})`}}></div>
                                        <div className="cn_title">About App</div>
                                        <div className="cn_desc">Do you like to read? If the answer is yes, then you’re at the right place.
                                         The books you always wanted to read or heard about them from your friends,
                                         search for those books and you will get surprisingly insightful recommendations.
                                         This App let you to login, be a member
                                         and have your own bookshelf. In your bookshelf, track the books you're reading, have read and wanna read.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                      </Col>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


export default BrandDescription;
