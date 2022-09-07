import { Button, Col, Container, Row } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { InstructorTextBox } from './InstructorTextBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../store/ideas'
import { IdeaForm } from './idea/IdeaForm'
import { VoteForm } from './vote/VoteForm'
import { useEffect } from 'react'

export const Instructor = () => {

  const ideas = useSelector(state => state.ideas ? state.ideas : []);
  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchIdeasByProfileCohort());
  };
  const inputs = [];
  useEffect(effects, inputs);


  return (
    <>
      <Container>
        <h1 className="text-center my-5"><strong>Instructor Dashboard</strong></h1>
          <IdeaForm/>
        <Row className="p-2 justify-content-around">
          <Col sm={2} className="mb-2">
            <Button size="md" type="submit">Remove All</Button>
          </Col>
          <Col sm={3} className="mb-2">
            <Button size="md" type="submit">Move to Voting</Button>
          </Col>
          <Col sm={3} className="mb-2">
            <Button size="md" type="submit">Move to Ranking</Button>
          </Col>
          <Col sm={2}>
            <Button size="md" type="submit"><PlusCircleFill/></Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}