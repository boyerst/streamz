import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import logo from '../../images/Metamask.png'



function WrongNetworkModal (props) {

  return (

    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <small>Wrong Network</small>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <h6>
          <img src={logo} className="me-2 ms-0" width="25" height="25" alt="" />
          Please Change to the Ethereum Network
        </h6>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
  );
}





export default WrongNetworkModal