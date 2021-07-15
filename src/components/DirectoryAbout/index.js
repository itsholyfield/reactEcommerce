import React from "react";
import { connect } from 'react-redux';

const DirectoryAbout = props => {
    const { currentUser } = props;
    return (
        //Dircotory About Start
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    

                    <div class="col-lg-7 col-md-6">
                        {/* <div class="section-header text-left">
                            <p>Why are you here?</p>
                            
                        </div> */}
                        <div class="about-text">
                            <h2>Why are you here?</h2>
                            <p>There is a lot of talk about electric cars (electric
                            vehicles, EVs, PHEVs, BEVs, FEV, and so on) but what
                            you really want to know is, “is an EV right for me”,
                            right?
                            </p>
                            <h2>Well you have come to the right place!</h2>
                            <p>TWe are here to help you with just that. You can take
                            a personalised consultation (hotlink) here and if
                            you have more questions, we are on hand to help.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6">
                        <div class="about-img">
                            <img alt="Image" src="img/about.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
    DirectoryAbout.defaultProps = {
        currentUser: null
    };
    
    const mapStateToProps = ({ user }) => ({
        currentUser: user.currentUser
    });
export default connect( mapStateToProps, null)(DirectoryAbout);