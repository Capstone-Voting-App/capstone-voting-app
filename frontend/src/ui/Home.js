import React from 'react'
import {Button, Col, Container, Row} from "react-bootstrap";
import { SignInModal } from './signin/SignInModal'
import { Link } from 'react-router-dom'
import { SignUpModal } from './signup/SignUpModal'


export const Home = () => {
    return (
        <>
            <Container>
                <Row className= "mt-5 mb-3 text-center">
            <h1><strong>Welcome</strong></h1>
                </Row>
                <Row className= "mt-5 mb-1">
                    <Col sm={{ span: 10, offset: 5 }}>
                        <Button size="lg" href>Sign In!</Button>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={{ span: 10, offset: 5 }}>
                            <Button size="lg">Sign Up!</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}