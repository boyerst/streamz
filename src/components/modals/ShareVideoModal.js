import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import IPFS from '../../images/IPFS.png'



function ShareVideoModal (props) {

  return (

    <Modal
      {...props}
      size="xl"
      centered
      dialogClassName="90w"
      style={{maxWidth: "50%"}}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <small>
          <img src={IPFS} className="me-2 ms-0" width="25" height="25" alt="" />
          <input 
            onFocus={e => e.target.select()} 
            type="text" style={{minWidth: "650px"}} 
            defaultValue={`https://ipfs.infura.io/ipfs/${props.currentHash}`}
            style={{fontSize: "70%"}}
          />
          </small>
          <Button className="ms-3" onClick={ () => { navigator.clipboard.writeText(`https://ipfs.infura.io/ipfs/${props.currentHash}`) } }>
            Copy
          </Button>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}


// Add 'Copy' input w button similar to Youtube
// Automatically highlight entire URL before user clicks
// Concanceated link to just show ipfs and some of the address


export default ShareVideoModal