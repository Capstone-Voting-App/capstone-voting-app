import {Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../store/ideas'
import React, { useEffect } from 'react'
import { RankList } from './ranking/RankList'


export const Ranking = () => {

    const ideas = useSelector(state => state.ideas ? state.ideas : []);
    const dispatch = useDispatch();
    const effects = () => {
        dispatch(fetchIdeasByProfileCohort(39));
    };
    const inputs = [];
    useEffect(effects, inputs);
    return (
      <>
          <h1><strong>Ranking</strong></h1>
          {ideas.map(idea => <RankList idea={idea} key={idea.ideaId}/>)}
          {/*<div key={vote.voteIdeaId}></div>*/}
          <Button size="lg" variant="primary" type="submit">Submit Voting</Button>
      </>
    )
}