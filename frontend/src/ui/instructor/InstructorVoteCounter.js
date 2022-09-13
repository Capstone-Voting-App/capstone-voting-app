import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { InstructorDisplayList } from './InstructorDisplayList'
import { fetchVotesByProfileCohort } from '../../store/votes'
import { fetchRanksByProfileCohort } from '../../store/ranks'

export function InstructorVoteCounter () {

  const votes = useSelector(state => state.votes ? state.votes : []);
  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchVotesByProfileCohort(39));
    // dispatch(fetchRanksByProfileCohort(39));
  };
  const inputs = [];
  useEffect(effects, inputs);
  return (
    <Container>
      {/*<Form>*/}
      {/*  <Form.Group as={Row} controlId="formHorizontal" className="mb-2 border border-light border rounded bg-light">*/}
      {/*    <Col sm={10}>*/}
      {votes.map(vote => <InstructorDisplayList vote={vote} key={vote.voteIdeaId}/>)}
      {/*      </Col>*/}
      {/*      <Col sm={1}>*/}
      {/*        <Form.Control type="text" placeholder="*" />*/}
      {/*      </Col>*/}
      {/*    </Form.Group>*/}
      {/*  </Form>*/}
    </Container>
  );
}