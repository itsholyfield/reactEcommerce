import React from 'react';
import AreasCodeForm from '../../components/AreasCodeForm';
import MapLayout from '../../components/MapLayout';
import './styles.scss'

const Consultation = props => {
    return (
        <section className="consultation">
            <AreasCodeForm />
            <MapLayout />
        </section>
    )
}

export default Consultation;
