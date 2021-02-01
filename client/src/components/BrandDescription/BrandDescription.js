import React, { Component } from "react";


class BrandDescription extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row m-0 p-0">
                    <div className="cardBackground card col-md-9 col-xs-12">
                        <div className="card-body">
                            <h5 className="card-title">About App</h5>
                            <p className="card-text">You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.

This App let you to login and be a member and have your own bookshelf also enjoy reading your favourite books and can save the books to read it later.

Welcome to an online reading environment, where you and your friends can read together about latest books and their stories.

Enjoy now more than a million e-books on all your digital devices. Without any commitment to stay. Happy reading in an environment specific to your free time!</p>
                        </div>
                    </div>

                    <div className="cardBackground card col-md-3 col-xs-12 text-center">
                        <div className="card-body">
                            <h5 className="card-title">Follow Me!</h5>
                            <a href="/">
                                <span className="fa-stack facebookLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-facebook-f fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack twitterLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-twitter fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack instagramLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-instagram fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack linkedinLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-linkedin-in fa-stack-1x"></i>
                                </span>
                            </a>
                            <a href="/">
                                <span className="fa-stack googleLogo">
                                    <i className="far fa-circle fa-stack-2x"></i>
                                    <i className="fab fa-google fa-stack-1x"></i>
                                </span>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandDescription;