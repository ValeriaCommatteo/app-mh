import React from "react"
import { useRef } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Search({ onSubmitProp }) {
    const inputRef = useRef(null)

const handleSubmit = (event) => {
    event.preventDefault()
    if(inputRef.current.value){
        const queryParams = `?nombre=${inputRef.current.value}`
        onSubmitProp(queryParams)
    } else {
        onSubmitProp(false)
    } 
}

return  (
    <div className="d-flex justify-content-end">
    <Form className="searchB">
        <Row >
          <Col xs="auto">
            <Form.Control type="text" placeholder="Search"/>
          </Col>
          <Col xs="auto">
            <Button className="btn btn-outline-light submit mx-4" style={{ backgroundColor: '#210062' }}>Submit</Button>
          </Col>
        </Row>
      </Form>
      </div>
  );
}

