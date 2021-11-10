import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export default class Weather extends Component {

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.props.map} />
          <Card.Body>
            <Card.Title>Forecast:</Card.Title>
              <Card.Text>
                  Date: {this.props.forecast[0].date}, Weather: {this.props.forecast[0].description} 
              </Card.Text>
              <Card.Text>
                  Date: {this.props.forecast[1].date}, Weather: {this.props.forecast[1].description} 
              </Card.Text>
              <Card.Text>
                  Date: {this.props.forecast[2].date}, Weather: {this.props.forecast[2].description} 
              </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}