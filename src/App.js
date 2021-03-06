import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import Alert from 'react-bootstrap/Alert';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      location: null,
      map: null,
      forecast: null,
      front_error: false,
      back_error: false
    }
  }

  getLocation = async (city) => {

    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${city}&format=json`;

    try {
      let response = await axios.get(url);
      console.log(response.data[0]);
      this.setState({location: response.data[0]});
      this.getmap();
      this.getforecast(city);
    } catch (err) {
      this.setState({front_error: true});
    }
  }

  getmap = () => {

    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`;

    this.setState({map: url});
  }

  getforecast = async (name) => {

    const forecast_url = `${process.env.REACT_APP_SERVER_URL}/weather?city_name=${name}&lon=${this.state.location.lon}&lat=${this.state.location.lat}`;

    try {
    let response = await axios.get(forecast_url);
    this.setState({forecast: response.data});
    console.log(this.state.forecast);
    } catch (err) {
      this.setState({back_error: true});
      console.log(err);
    }
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main map={this.state.map} getLocation={this.getLocation} location={this.state.location} forecast={this.state.forecast}></Main>
        <Footer></Footer>
        {this.state.front_error && <Alert variant='danger'>There has been a front end error!</Alert>}
        {this.state.back_error && <Alert variant='danger'>There has been a back end error!</Alert>}
      </>
    )
  }
}