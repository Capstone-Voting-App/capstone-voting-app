import React from "react";
import { Button, Container, Form, Row } from 'react-bootstrap'


export const UserInput = () => {
    return (
        <>
        <Container>
         <Form>
           <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
             <Form.Label htmlFor="Ideas"><h1><strong>Input Your Idea</strong></h1></Form.Label>
             <Form.Control type="text" />
           </Form.Group>
         </Form>
          <Button size="lg" type="submit">Submit</Button>
        </Container>
        </>
    )
}