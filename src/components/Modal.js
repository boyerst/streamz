import React from 'react'
import './App.css'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'


function NoWeb3NotificationModal (props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Alert!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>You are not using an ethereum browser</h4>
        <p>
          lorem ipsum.........
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.hideModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}





export default NoWeb3NotificationModal