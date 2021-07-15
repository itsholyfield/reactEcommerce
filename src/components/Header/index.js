import React from 'react';
import { connect } from 'react-redux';
// import './styles.scss';
import Logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'
import {auth} from './../../firebase/utils'
import TopBar from './../TopBar';

const Header = props => {
    const { currentUser } = props;
    return (
        <div className="header">
            <TopBar />
            <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <Link to="/" class="nav-item nav-link active">Home</Link>
                                <Link to="/consultation" class="nav-item nav-link">EE Consultation</Link>
                                <Link to="/"  class="nav-item nav-link">FAQ</Link>
                                <Link to="/about" class="nav-item nav-link">About US</Link>   
                            </div>
                            {/* <div class="logo">
                                <a href="index.html">
                                    <h1>ELECTRIC EARTH</h1>
                                    <img src={Logo} alt="Logo"/>
                                </a>
                            </div> */}
                            <div class="navbar-nav ml-auto">

                                {currentUser && (
                                    <Link to="/" class="nav-item nav-link">EV Match</Link>)}

                                {currentUser && (
                                    <Link to="/"  class="nav-item nav-link">Charging 101</Link>)}

                                {currentUser && (
                                    <Link onClick={() => auth.signOut()}>LOGOUT</Link>)}

                                {!currentUser && (
                                    <Link to="/" class="nav-item nav-link">REGISTER</Link>)}

                                {!currentUser && (
                                    <Link to="/"  class="nav-item nav-link">LOGIN</Link>)}

                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div> 
    );
};

Header.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect( mapStateToProps, null)(Header);
