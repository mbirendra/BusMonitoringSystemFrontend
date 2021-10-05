import React, {Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class GoogleMap extends Component {
    render(){
    return (
        <div className="map">
        <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
      </div>
    );
    }
}
export default GoogleApiWrapper({
    apiKey: ("AIzaSyDfJ_2dgnukhgVEcaapeLE4wBxy3hRHUSk")
  })(GoogleMap)
