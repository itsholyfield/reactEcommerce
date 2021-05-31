import React from 'react';
import './styles.scss'
import MapBanner from '../../assets/mapBanner.png';
import UserformBanner from '../../assets/rightBanner.png';

import FormInput from './../Forms/FormInput';
import Button from './../Forms/Button';

const AreaSecurity = props => {
    return (
        <div className="areasSecurity">
            <div className="mapLayout">
                <div className="userForm"
                    style={{
                            backgroundImage: `url(${MapBanner})`
                        }}>
                </div>
                <div className="mapBanner">
                    <h3>My Google Maps Demo</h3>

                    <div className="map">

                    </div>
                </div>


            </div>

        </div>
    )
}