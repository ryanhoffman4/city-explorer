import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class LocationCard extends Component {

  render() {
    return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={this.props.map} />
        <Card.Body>
          <Card.Title>{this.props.location.display_name}</Card.Title>
            <Card.Text>
                Longitude: {this.props.location.lon}
            </Card.Text>
            <Card.Text>
                Latitude: {this.props.location.lat}
            </Card.Text>
        </Card.Body>
      </Card>
    </>
  )}
}