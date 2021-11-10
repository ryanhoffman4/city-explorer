import React, { Component } from 'react';
import LocationForm from './LocationForm';
import LocationCard from './LocationCard';
import Weather from './Weather';


export default class Main extends Component {

  render() {
    return (
      <>
        <LocationForm getLocation={this.props.getLocation}/>
        {this.props.map && <LocationCard location={this.props.location} map={this.props.map}/>}
        {this.props.forecast && <Weather forecast={this.props.forecast}/>}
      </>
    )
  }
}