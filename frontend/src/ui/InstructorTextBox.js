import { Button, Col, Form, Row } from 'react-bootstrap'
import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'

export function InstructorTextBox () {
  return (
      <Form>
        <Form.Group as={Row} controlId="formHorizontal" className="mb-2 border border-light border rounded bg-light">
          <Col sm={1}>
            <Button variant="danger" type="delete" size="md"><XCircleFill/></Button>
          </Col>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Best Idea Ever:)" />
          </Col>
          <Col sm={1}>
            <Form.Control type="text" placeholder="*" />
          </Col>
        </Form.Group>
      </Form>
  );
}
