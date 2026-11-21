import React from 'react'
import {Form,Button,Image,Row,Col,Card,Container} from 'react-bootstrap'


function CityComponent(props) {
  const {updateCity,fetchWeather}=props;

  return (

    <Row>
      <Col md={4}></Col>
    
      <Col md={4}>
      <Card>
      <Container style={{padding:"25px"}}>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <Image src="/icons/cloud.svg" roundedCircle  style={{ width: "70px", height: "70px", objectFit: "contain" }}/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto" className="text-center">
            <h2>Find Weather of your city</h2>
          </Col>
        </Row>
        <Form onSubmit={fetchWeather}>
          <Form.Group controlId="cityInput">
            <Form.Control
            type="text"
            placeholder="city"
            onChange={(e) => updateCity(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-2">search</Button>
        </Form>
      </Container>
      </Card>
      </Col>
    <Col md={4}></Col>
    </Row>
    
  )
}

export default CityComponent
