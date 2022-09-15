import { useDispatch } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import React from 'react'

export const RankList = ({idea})=> {

  return (
    <div className="container">
      <Row>
        <Col>
          <h5>{idea.ideaDescription}</h5>
        </Col>
        <Col className="md-1">
          <input type="text"/>
        </Col>
      </Row>
    </div>
  )
}