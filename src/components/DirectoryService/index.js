import React from "react";
import { connect } from 'react-redux';

const DirectoryService = props => {
    const { currentUser } = props;
    return (
        //Dircotory Service
        <div class="service">
            <div class="container">
                <div class="section-header text-center">
                    <p>Electric Car Services</p>
                    <h3>Go electric as easy as 1, 2, 3</h3>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-md-6 wow fadeInUp serviceTwo" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="#" />
                                <div class="service-overlay">
                                    <p>
                                        Take your
                                        personalised
                                        consultation and
                                        check if an electric
                                        car fits your transport
                                        needs.
                                    </p>
                                </div>
                            </div>
                            <div class="service-text">
                                <h3>EE Fit</h3>
                                <a class="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp serviceTwo" data-wow-delay="0.2s">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="#" />
                                <div class="service-overlay">
                                    <p>
                                        Find an electric car
                                        that matches your
                                        needs, taste and
                                        budget.
                                    </p>
                                </div>
                            </div>
                            <div class="service-text">
                                <h3>EE Match</h3>
                                <a class="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp serviceThree" data-wow-delay="0.3s">
                        <div class="service-item">
                            <div class="service-img">
                                <img src="#"/>
                                <div class="service-overlay">
                                    <p>
                                        Learn and get
                                        comfortable with the
                                        idea of charging your
                                        car. No more smelly
                                        fuel courts.
                                    </p>
                                </div>
                            </div>
                            <div class="service-text">
                                <h3>Charging 101</h3>
                                <a class="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    )}

    DirectoryService.defaultProps = {
        currentUser: null
    };
    
    const mapStateToProps = ({ user }) => ({
        currentUser: user.currentUser
    });
export default connect( mapStateToProps, null)(DirectoryService);