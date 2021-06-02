import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from 'react-google-autocomplete';
import { GoogleMapsAPI } from '../client-config';
Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();

import './styles.scss';

const containerStyle = {
    width: '400px',
    height: '400px'
};

const initialState = {
    place: ''
};

class MapLayout extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState,
            mapPosition: {
				lat: 40,
				lng: -120
			}
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;

        this.setState({
            [name]: value
        });
    }

    handeleFormSubmit = async event => {
        event.preventDefault();

        const { place } = this.state;

        
    }

    onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			mapPosition: {
				lat: latValue,
				lng: lngValue
			}
		})
	};

    render() {
        const { place, mapPosition } = this.state;

        return (
            <div className="mapWrapper">
                <div className="container">
                    <div className="item map" style={{ overflow:'hidden', position: 'relative', height: '100%' }}>
                        <Map
                            google={this.props.google}
                            mapContainerStyle={containerStyle}
                            zoom={8}
                            style={containerStyle}
                            initialCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng}}
                            disableDefaultUI
                            />
                    </div>

                    <div className="item formWrap">
                        <form onSubmit={this.handeleFormSubmit}>
                            <Autocomplete
                                style={{
                                    width: '100%',
                                    height: '40px',
                                    paddingLeft: '16px',
                                    marginTop: '2px',
                                    marginBottom: '500px'
                                }}
                                onPlaceSelected={ this.onPlaceSelected }
                                types={['(regions)']}
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyD7bdHtVT5EiOtdexPx-QZA9g5TlR786FI'
})(MapLayout);