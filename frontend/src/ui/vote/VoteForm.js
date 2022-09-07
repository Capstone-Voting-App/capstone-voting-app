import React from 'react'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import { Button, Col, Row } from 'react-bootstrap'
import { setIdeasByProfileCohort } from '../../store/ideas'

export const VoteForm = ({idea})=> {

  const dispatch = useDispatch()

  const clickLike = () => {
    httpConfig.post("/apis/vote/", {voteIdeaId: idea.ideaId})
      .then(reply => {
        if (reply.status === 200) {
          console.log(reply)
          dispatch(setIdeasByProfileCohort())
        }
        console.log(reply)
      });
  }
  return (
    <div>
      <Row>
        <Col>
          <p>{idea.ideaDescription}</p>
          <Button onClick={clickLike}>{idea.voteCount}<span role="img" aria-label="heart emoji"></span></Button>
        </Col>
      </Row>
    </div>
  )
}

