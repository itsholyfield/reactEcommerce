import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import Logo from './../../assets/logo.svg'
import { Link } from 'react-router-dom'
import {auth} from './../../firebase/utils'

const Header = props => {
    const { currentUser } = props;
    return (
        <header className="header">
            <div className="wrap">

                <div className="callToActionsOne">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}
                    
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register                            
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login                            
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="E-commerce Logo" />
                    </Link>
                </div>

                <div className="callToActionsTwo">
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.signOut()}>
                                    LOGOUT
                                </span>
                            </li>
                        </ul>
                    )}
                    
                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register                            
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login                            
                                </Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

export default connect( mapStateToProps, null)(Header);
