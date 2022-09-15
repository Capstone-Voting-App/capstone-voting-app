import React from "react"
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export const SignIn = () => {
  return (
    <>
      <Container>
        <Row className="mt-5 mb-3">
          <h2><strong>You're Welcome...</strong> to Capstone Voting</h2>
        </Row>
        <Row>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10} >
                <Form.Control type="password" placeholder="Password Must Be 8 Characters Minimum" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10 }}>
                <Button type="submit">Sign In!</Button>
              </Col>
            </Form.Group>
          </Form>
        </Row>
      </Container>
    </>
  )
}