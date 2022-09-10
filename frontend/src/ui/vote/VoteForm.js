import React from 'react'
import { useDispatch, useStore } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import { Button, Col, Row } from 'react-bootstrap'
import { setIdeasByProfileCohort } from '../../store/ideas'
import { HandThumbsUp} from 'react-bootstrap-icons'
import { setVotes } from '../../store/votes'

export const VoteForm = ({idea}, {vote})=> {

  const dispatch = useDispatch()

  const clickLike = () => {
    httpConfig.post("/apis/vote/", {voteIdeaId: idea.ideaId})
      .then(reply => {
        if (reply.status === 200) {
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
          <Button onClick={clickLike}><span role="img" aria-label="thumbs up"><HandThumbsUp/></span></Button>
        </Col>
      </Row>
    </div>
  )
}

