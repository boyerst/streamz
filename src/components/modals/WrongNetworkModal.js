import React from 'react'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import logo from '../../images/metamask.png'



function WrongNetworkModal(props) {

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
          <img className="me-2 ms-0" src={logo} width="25" height="25" alt="" />
          Please Change to the Ethereum Network
        </h6>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
}





export default WrongNetworkModal
