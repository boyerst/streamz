import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import IPFS from '../../images/IPFS.png'



function ShareVideoModal (props) {

  return (

    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         <small>
         <img src={IPFS} className="me-2 ms-0" width="25" height="25" alt="" />
          <input onFocus={e => e.target.select()} type="text" style={{minWidth: "450px"}} value={`https://ipfs.infura.io/ipfs/${props.currentHash}`}/>
         </small>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}


// Add IPFS logo
// Add 'Copy' input w button similar to Youtube
// Automatically highlight entire URL before user clicks
// Concanceated link to just show ipfs and some of the address


export default ShareVideoModal