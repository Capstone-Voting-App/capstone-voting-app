import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import React, { useEffect } from 'react'
import { RankForm } from './RankForm'
import { fetchRanksByProfileCohort } from '../../store/ranks'
import Logo from '../../DeepDiveLogo.jpg'
import { Container, Row } from 'react-bootstrap'



export const Ranking = () => {


    const ideas = useSelector(state => state.ideas ? state.ideas : []);
    const auth = useSelector(state => state.auth ? state.auth : null)
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchIdeasByProfileCohort(39));
        dispatch(fetchRanksByProfileCohort(39));
    };
    const inputs = [];
    useEffect(effects, inputs);
    if (ideas.length < 1 || auth === null) {
      return <></>
    }

    return (
      <>
        <Container className="border border-light border rounded my-3 shadow-lg">
        <Row className="align-content-center row">
          <img src={Logo} alt="logo" className="w-25 mt-5 mx-auto border border rounded border-opacity-50 shadow-lg bgColor"/>
          <h1 className="mt-5"><strong>Ranking</strong></h1>
          <h5>Rank the choices from 1 to {ideas.length}, with 1 being the most desirable and {ideas.length} being the least. </h5>
          <h5 className="mb-5"><em>Attempting to assign a value larger than {ideas.length} will fail to submit.</em></h5>
        </Row>
      </Container>
          {/*<div key={vote.voteIdeaId}></div>*/}
          <RankForm ideas = {ideas} auth = {auth} />
      </>
    )
}