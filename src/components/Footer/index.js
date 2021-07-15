import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <div class="footer wow fadeIn" data-wow-delay="0.3s">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-contact">
                            <h2>Office Contact</h2>
                            <p><i class="fa fa-map-marker-alt"></i>1341 Lorem Dr., Lorem, UK 28078</p>
                            <p><i class="fa fa-phone-alt"></i>+44(234)2345-234543</p>
                            <p><i class="fa fa-envelope"></i> info@electricearth.uk</p>
                            <div class="footer-social">
                                <a href=""><i class="fab fa-twitter"></i></a>
                                <a href=""><i class="fab fa-facebook-f"></i></a>
                                <a href=""><i class="fab fa-youtube"></i></a>
                                <a href=""><i class="fab fa-instagram"></i></a>
                                <a href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-link">
                            <h2>Consultation Areas</h2>
                            <a href="">EE Consultation</a>
                            <a href="">EE Match</a>
                            <a href="">Login</a>
                            <a href="">Register</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="footer-link">
                            <h2>Useful Pages</h2>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <a href="">Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3">
                        <div class="newsletter">
                            <h2>Newsletter</h2>
                            <p>
                                Sign up to recieve email updates on new services announcements, ideas, special promotions, sales and more.
                            </p>
                            <div class="form">
                                <input class="form-control" placeholder="Email here" />
                                <button class="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container footer-menu">
                <div class="f-menu">
                    <a href="">Terms of use</a>
                    <a href="">Privacy policy</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                </div>
            </div>
            <div class="container copyright">
                <div class="row">
                    <div class="col-md-12">
                        <p>&copy; <a href="#">Electric Earth</a>, All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;