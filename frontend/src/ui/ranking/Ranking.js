import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import React, { useEffect } from 'react'
import { RankForm } from './RankForm'
import { fetchRanksByProfileCohort } from '../../store/ranks'


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
          <h1><strong>Ranking</strong></h1>
          {/*<div key={vote.voteIdeaId}></div>*/}
          <RankForm ideas = {ideas} auth = {auth} />
      </>
    )
}