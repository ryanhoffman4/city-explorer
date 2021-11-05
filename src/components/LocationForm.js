import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class LocationForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
    }
  }

  handleChange = (event) => {
    this.setState({cityName: event.target.value})
  }   
    
  handleClick = () => {
    this.props.getLocation(this.state.cityName);
  }

  render() {
    return (
      <>
        <Form>
          <Row>
            <Col>
              <Form.Label>City Name:</Form.Label>
            </Col>
            <Col>
              <Form.Control placeholder="Enter a City" onChange={this.handleChange} value={this.state.cityName} />
            </Col>
            <Col>
              <Button onClick={this.handleClick}>Explore!</Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }
}