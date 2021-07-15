import React, { Component } from 'react';
import Map from './index';

class Home extends Component {

	render() {
		return(
			<div className="mapWrapper">
				<Map
					google={this.props.google}
					center={{lat: 51.5074, lng: 0.1278}}
					height='400px'
					zoom={15}
				/>
                
			</div>
            
		);
	}
}

export default Home;
