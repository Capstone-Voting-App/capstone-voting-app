import { Button } from 'react-bootstrap'
import {PlusCircleFill} from 'react-bootstrap-icons'

export const Instructor = () => {
  return (
    <>
      <h1><strong>Instructor Dashboard</strong></h1>
      <Button size="lg" variant="primary" type="submit">Remove All</Button>
      <Button size="lg" variant="primary" type="submit">Move to Ranking</Button>
      <Button size="lg" variant="primary" type="submit">Recall Deleted</Button>
      <Button size="lg" variant="primary" type="submit"><PlusCircleFill/></Button>
    </>
  )
}