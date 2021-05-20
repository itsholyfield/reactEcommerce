import React from 'react';
import './styles.scss';
import Logo from './../../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <footer className="footer">
            <div className="wrap">
                © 2021 Ameh Holyfield Itodo.  All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;