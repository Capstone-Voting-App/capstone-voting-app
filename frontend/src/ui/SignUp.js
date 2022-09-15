import React from "react"
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Form } from 'react-bootstrap'

export const SignUp = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 mb-3">
          <h2><strong>You're Welcome...</strong> to Capstone Voting</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
              <Form.Label column sm={1}>
                Name
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="name" placeholder="Enter First and Last Name" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={1}>
                Email
              </Form.Label>
              <Col sm={6}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={1}>
                Password
              </Form.Label>
              <Col sm={6} >
                <Form.Control type="password" placeholder="Password Must Be 8 Characters Minimum" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  )
}
