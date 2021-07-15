import React from 'react';
import Directory from '../../components/Directory';
import DirectoryAbout from '../../components/DirectoryAbout';
import DirectoryService from '../../components/DirectoryService';
import DirectoryElectricCar from '../../components/DirectoryElectricCar';

import './styles.scss'

const Homepage = props => {
    return (
        <section className="homepage">
            <Directory />
            <DirectoryAbout />
            <DirectoryService />
            <DirectoryElectricCar/>
        </section>
    )
}

export default Homepage;
