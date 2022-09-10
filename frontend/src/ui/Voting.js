import { Button } from 'react-bootstrap'
import { VoteForm } from './vote/VoteForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../store/ideas'
import { useEffect } from 'react'

export const Voting = () => {

  const ideas = useSelector(state => state.ideas ? state.ideas : []);
  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchIdeasByProfileCohort(39));
  };
  const inputs = [];
  useEffect(effects, inputs);
  return (
    <>
      <h1><strong>Voting</strong></h1>
      {ideas.map(idea => <VoteForm idea={idea} key={idea.ideaId}/>)}
      {/*<div key={vote.voteIdeaId}></div>*/}
      <Button size="lg" variant="primary" type="submit">Submit Voting</Button>
    </>
  )
}