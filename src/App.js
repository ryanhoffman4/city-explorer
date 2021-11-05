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
      error: false
    }
  }

  getLocation = async (city) => {

    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${city}&format=json`;

    try {
      let response = await axios.get(url);
      console.log(response.data[0]);
      this.setState({location: response.data[0]})
      this.getmap();
    } catch (err) {
      this.setState({error: true});
    }
  }

  getmap = () => {

    const url = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=10`;

    this.setState({map: url});
  }

  render() {
    return (
      <>
        <Header></Header>
        <Main map={this.state.map} getLocation={this.getLocation} location={this.state.location}></Main>
        <Footer></Footer>
        {this.state.error && <Alert variant='danger'>There has been an error!</Alert>}
      </>
    )
  }
}