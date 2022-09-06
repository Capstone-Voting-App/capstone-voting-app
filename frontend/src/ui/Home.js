import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";



export const Home = () => {
    return (
        <>
            <Container>
                <Row className= "mt-5 mb-3 text-center">
            <h1><strong>Welcome</strong></h1>
                </Row>
                <Row className= "mt-5 mb-1">
                    <Col sm={{ span: 10, offset: 5 }}>
                        <Button size="lg" type="submit">Sign In!</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={{ span: 10, offset: 5 }}>
                        <Button size="lg" type="submit">Sign Up!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}