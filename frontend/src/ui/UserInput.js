import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import { IdeaForm } from './idea/IdeaForm'
import { Stream } from './vote/Stream'


export const UserInput = () => {
    return (
        <>
        <Container className="my-5">
        <Row>
        <h3>Enter your idea and hit enter or click submit.</h3>
        </Row>
        <IdeaForm/>
        <Row className="justify-content-around">
            <Col className="text-center border shadow-lg border rounded mt-5 col-md-6">
        <Stream/>
            </Col>
        </Row>
        </Container>
        </>
    )
}