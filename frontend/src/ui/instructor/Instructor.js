import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { InstructorRankResults, RankTable } from './InstructorRankResults'
import { IdeaForm } from '../idea/IdeaForm'
import { InstructorTextBox } from './InstructorTextBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import { fetchRanksByProfileCohort } from '../../store/ranks'
import { fetchProfilesByProfileCohort } from '../../store/profile'

export const Instructor = () => {

  const profiles =useSelector(state => state.profile ? state.profile : []);
  const ranks =useSelector(state => state.ranks ? state.ranks : []);
  const ideas = useSelector(state => state.ideas ? state.ideas : []);

  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchIdeasByProfileCohort(39));
    dispatch(fetchRanksByProfileCohort(39));
    dispatch(fetchProfilesByProfileCohort(39));

  };
  const inputs = [];
  useEffect(effects, inputs);
  return (
    <>
      <Container>
        <h1 className="text-center my-5"><strong>Instructor Dashboard</strong></h1>
        {ideas.length && <InstructorTextBox ideas = {ideas}/>}
        <Row>
          <IdeaForm/>
        </Row>
        <Row>
          {profiles.length && (ranks.length && (ideas.length && <RankTable profiles={profiles} ranks={ranks} ideas={ideas}/>))}
        </Row>
        <Row className="p-2 justify-content-around">
          {/*<Col sm={2} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Remove All</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={3} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Move to Voting</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={3} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Move to Ranking</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={2}>*/}
          {/*  <Button size="md" type="submit"><PlusCircleFill/></Button>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </>
  )
}