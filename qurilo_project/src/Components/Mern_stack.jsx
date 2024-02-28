import React,{useState,DatePicker} from 'react'
import {Col,Container,Form,Row,Button,} from 'react-bootstrap';
// import 'react-date-picker/dist/DatePicker.css';
// import 'react-calendar/dist/Calendar.css';
import Upload_docs from './Uploading_docs';


const Mern_stack = () => {
    
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = (date) => {
      setSelectedDate(date);
    };

  return (
    <>
    <Container style={{padding:"5rem"}}>
    <Form>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridfirstname">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name here" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridlastname">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your last name here" />
        </Form.Group>
      </Row>

      <Row className="mb-3">

          <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email here" />
          </Form.Group>
         <Form.Group  as={Col} controlId="formDate">

         <Form.Label>Date of Birth</Form.Label>

         <Form.Control
          type="date"
          value={selectedDate}
          onChange={handleChange}
         />
         
      </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Label>Residential Address</Form.Label>

        <Row>
          <Col>
          <Form.Label>Street 1</Form.Label>
            <Form.Control  />
          </Col>
          <Col>
          <Form.Label>Street 2</Form.Label>
            <Form.Control  />
          </Col>
        </Row>  
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Same as Residential Address" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formGridAddress1">
        
        <Form.Label>Permanent Address</Form.Label>

        <Row>
          <Col>
          <Form.Label>Street 1</Form.Label>
            <Form.Control  />
          </Col>
          <Col>
          <Form.Label>Street 2</Form.Label>
            <Form.Control  />
          </Col>
        </Row>  
      </Form.Group>

    <Upload_docs/>
       

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   
        
    </Container>
    </>
  )
}

export default Mern_stack
