import React, { useState } from 'react'
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import { SignInForm } from './SignInForm'

export const SignInModal = () => {
  const button = {
    backgroundColor: "black",
    color: "#f6be00"
  }
  // const {handleShow, handleClose, show} = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={button} onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignInForm/>
        </Modal.Body>
      </Modal>
    </>
  );
}