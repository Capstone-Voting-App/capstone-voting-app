import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons'
import { InstructorTextBox } from './InstructorTextBox'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../store/auth'
import { IdeaForm } from './idea/IdeaForm'

export const Instructor = () => {
// const auth = useSelector(state => state.auth ?? null)
//   const dispatch = useDispatch()
//   const initialEffects=() => {
//   dispatch(fetchAuth())
//   }
//   React.useEffect(initialEffects, [dispatch])
  return (
    <>
      <Container>
        <h1 className="text-center my-5"><strong>Instructor Dashboard</strong></h1>
          <InstructorTextBox/>
        <Row>
          <IdeaForm/>
        </Row>
        <Row className="p-2 justify-content-around">
          {/*<Col sm={2} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Remove All</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={3} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Move to Voting</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={3} className="mb-2">*/}
          {/*  <Button size="md" type="submit">Move to Ranking</Button>*/}
          {/*</Col>*/}
          {/*<Col sm={2}>*/}
          {/*  <Button size="md" type="submit"><PlusCircleFill/></Button>*/}
          {/*</Col>*/}
        </Row>
      </Container>
    </>
  )
}