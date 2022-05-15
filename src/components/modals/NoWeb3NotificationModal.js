import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import logo from '../../Metamask.png'


function NoWeb3NotificationModal (props) {


  return (

    <Modal
      {...props}
      size="md"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <small>Oh no! You are not using an web3 capable browser</small>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <h6>Click below to initialize blockchain connection...</h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="flat" className="mx-auto modal-button" onClick={props.onHide}>
          <img src={logo} className="me-2 ms-0" width="25" height="25" alt="" />
          <a href="https://www.metamask.io" rel="noopener noreferrer" target="_blank" className="metamask" >
          Download MetaMask
          </a>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}





export default NoWeb3NotificationModal

