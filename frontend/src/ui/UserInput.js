import React from "react";
import { Button, Container, Form, Row } from 'react-bootstrap'


export const UserInput = () => {
    return (
        <>
        <Container>
         <Form>

           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
             <Form.Label htmlFor="Ideas"><strong>Input Your Idea</strong></Form.Label>
             <Form.Control type="text" />
           </Form.Group>
         </Form>
          <Button size="lg" variant="primary" type="submit">Submit</Button>
        </Container>
        </>
    )
}