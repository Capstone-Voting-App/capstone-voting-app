import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import {  XCircleFill } from 'react-bootstrap-icons'
import { deleteIdea } from '../../store/ideas'

export const InstructorDisplayList = ({idea})=> {
const votes = useSelector(state => {
  if (state.votes[idea.ideaId] === undefined) {
    return []
  } else {
    return state.votes[idea.ideaId]
  }
})
  console.log(votes.length)
  // const ideas = useSelector(state => state.ideas ? state.ideas : []);
  const dispatch = useDispatch();
  // const effects = () => {
  //   dispatch(deleteIdea());
  // };
  // const inputs = [];
  // useEffect(effects, inputs);
 const deleteClickedIdea = () => {
   dispatch(deleteIdea(idea.ideaId))
 }

    return (

      <div className="container">
        <Row>
          <Col>
            <Button type="delete" onClick={deleteClickedIdea} className="bgColor mb-1"><XCircleFill className="bgColor"/></Button>
          </Col>
          <Col className="mb-1">
            <h5>{idea.ideaDescription}</h5>
          </Col>
          <Col>
            {votes.length}
          </Col>
        </Row>
      </div>
    )
  }


