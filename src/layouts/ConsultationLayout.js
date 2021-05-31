import React from 'react';
import AreasCodeForm from '../components/AreasCodeForm';
import MapLayout from '../components/MapLayout';

const ConsultationLayout = props => {
    return ( 
        <div>
            <AreasCodeForm {...props} />
            <div className="areaCodeForm">
                {props.children}
            </div>
            <MapLayout {...props} />
            <div className="mapLayout">
                {props.children}
            </div>
        </div> 
    );
};

export default ConsultationLayout;