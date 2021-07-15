import React from "react";
import { connect } from 'react-redux';

const DirectoryElectricCar = props => {
    const { currentUser } = props;
    return (
        //Dircotory About Start
        <div class="about wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row align-items-center">
                    
                    <div class="col-lg-5 col-md-6">
                        <div class="about-img">
                            <img alt="Image" src="img/about.jpg"/>
                        </div>
                    </div>
                    <div class="col-lg-7 col-md-6">
                        {/* <div class="section-header text-left">
                            <p>Why are you here?</p>
                            
                        </div> */}
                        <div class="about-text">
                            <h2>Why would you get an electric car??</h2>
                            <p>TIf you are here, you probably know this already. But
                            just in case, they are simply:
                            <br/>
                            a. nicer to drive
                            <br/>
                            b. Cheaper to drive, and
                            <br/>
                            c. good for your local environment and ultimately
                            the planet too.
                            <br/>
                            <br/>
                            <br/>
                            <strong>“But I have soo many more questions” you say?</strong>
                            </p>
                            <a class="btn" href="">To learn more, jump into our FAQs</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )}
    DirectoryElectricCar.defaultProps = {
        currentUser: null
    };
    
    const mapStateToProps = ({ user }) => ({
        currentUser: user.currentUser
    });
export default connect( mapStateToProps, null)(DirectoryElectricCar);