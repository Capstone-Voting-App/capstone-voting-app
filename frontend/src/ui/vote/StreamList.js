import React from 'react'
import { useDispatch } from 'react-redux'
import { httpConfig } from '../utils/http-config'
import { Button, Col, Row } from 'react-bootstrap'
import { setIdeasByProfileCohort } from '../../store/ideas'
import { HandThumbsUp} from 'react-bootstrap-icons'

export const StreamList = ({idea})=> {

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
        <Col>
          <h3>{idea.ideaDescription}</h3>
        </Col>

      </Row>
    </div>
  )
}

