import React from 'react'
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import './App.css'
import logo from '../Metamask.png'


function NoWeb3NotificationModal (props) {

  return (
    <Modal
      {...props}
      size="md"
      // aria-labelledby="contained-modal-title-vcenter"
      centered
      // dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Oh No!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>You are not using an ethereum browser</h4>
        <p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="flat" style={{background: "#6E31E0", color: "white" }} onClick={props.onHide}>
          <img src={logo} className="me-2 ms-0" width="25" height="25" alt="" />
          <a href="https://www.metamask.io" style={{color: "white", textDecoration: "none" }}>
          Download MetaMask
          </a>

        </Button>
      </Modal.Footer>
    </Modal>
  );
}





export default NoWeb3NotificationModal

