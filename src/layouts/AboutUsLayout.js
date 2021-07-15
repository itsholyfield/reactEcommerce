import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';

const AboutUsLayout = props => {
    return ( 
        <div className="fullHeight">
        {/* // <div className="wrapper"> */}
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    );
};

export default AboutUsLayout;