import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Row } from 'react-bootstrap'
import { X, XCircleFill } from 'react-bootstrap-icons'
import { useEffect } from 'react'
import { deleteIdea } from '../../store/ideas'

export const InstructorForm = ({idea})=> {

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
            <Button type="delete" onClick={deleteClickedIdea}><XCircleFill/></Button>
          </Col>
          <Col className="mb-1">
            <h5>{idea.ideaDescription}</h5>
          </Col>
        </Row>
      </div>
    )
  }


