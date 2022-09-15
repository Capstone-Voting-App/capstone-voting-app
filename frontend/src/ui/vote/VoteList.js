import React from 'react'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import { Button, Col, Row } from 'react-bootstrap'
import { setIdeasByProfileCohort } from '../../store/ideas'
import { HandThumbsUp} from 'react-bootstrap-icons'

export const VoteList = ({idea}, {vote})=> {

  const dispatch = useDispatch()

  const clickLike = () => {
    httpConfig.post("/apis/vote/", {voteIdeaId: idea.ideaId})
      .then(reply => {
        if (reply.status === 200) {
          dispatch(setIdeasByProfileCohort())
        }
      });
  }
  return (
    <div className="container">
      <Row>
        <Col className="mb-1 bg-light">
          <h5 className="pt-2">{idea.ideaDescription}</h5>
        </Col>
        <Col className="mb-1">
          <Button onClick={clickLike} className="bgColor"><span role="img" aria-label="thumbs up"><HandThumbsUp/></span></Button>
        </Col>
      </Row>
    </div>
  )
}

