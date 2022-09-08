import React from 'react'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import { Button, Col, Row } from 'react-bootstrap'
import { setIdeasByProfileCohort } from '../../store/ideas'
import { HandThumbsUp, XCircleFill } from 'react-bootstrap-icons'

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
    <div className="container">
      <Row>
        <Col>
          <h5>{idea.ideaDescription}</h5>
        </Col>
        <Col className="mb-1">
          <Button onClick={clickLike}>{idea.voteCount}<span role="img" aria-label=""><HandThumbsUp/></span></Button>
        </Col>
      </Row>
    </div>
  )
}

