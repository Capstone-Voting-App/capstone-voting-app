import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchIdeasByProfileCohort } from '../../store/ideas'
import { useEffect } from 'react'
import { StreamList } from './StreamList'

export const Stream = ({idea}) => {

  const ideas = useSelector(state => state.ideas ? state.ideas : []);
  const dispatch = useDispatch();
  const effects = () => {
    dispatch(fetchIdeasByProfileCohort(39));
  };
  const inputs = [];
  useEffect(effects, inputs);
  return (
    <>
      {ideas.map(idea => <StreamList idea={idea} key={idea.ideaId}/>)}
    </>
  )
}