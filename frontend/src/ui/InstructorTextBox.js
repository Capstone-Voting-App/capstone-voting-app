import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort, setIdeasByProfileCohort } from '../store/ideas'
import * as idea from 'react-bootstrap/ElementChildren'
import { InstructorForm } from './instructor/InstructorForm'


export function InstructorTextBox () {

  const ideas = useSelector(state => state.ideas ? state.ideas : []);
  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchIdeasByProfileCohort(39));
  };
  const inputs = [];
  useEffect(effects, inputs);
  return (
    <Container>
      {/*<Form>*/}
      {/*  <Form.Group as={Row} controlId="formHorizontal" className="mb-2 border border-light border rounded bg-light">*/}
      {/*    <Col sm={10}>*/}
            {ideas.map(idea => <InstructorForm idea={idea} key={idea.ideaId}/>)}
    {/*      </Col>*/}
    {/*      <Col sm={1}>*/}
    {/*        <Form.Control type="text" placeholder="*" />*/}
    {/*      </Col>*/}
    {/*    </Form.Group>*/}
    {/*  </Form>*/}
    </Container>
  );
}
