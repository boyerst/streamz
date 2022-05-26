import React from 'react'
import { Button } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import '../App.css'
import IPFS from '../../images/IPFS.png'



function ShareVideoModal(props) {

  return (

    <Modal
      {...props}
      dialogClassName={"shareVideoModal"}
      size="l"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <div className="form-control">
            <small>
              <img src={IPFS} className="me-2 ms-0" width="25" height="25" alt="" />
              <input
                className="shareVideoInput"
                onFocus={e => e.target.select()}
                type="text"
                defaultValue={`https://ipfs.infura.io/ipfs/${props.currenthash}`}
              />
            </small>
            <Button className="ms-3" size="sm" onClick={() => { navigator.clipboard.writeText(`https://ipfs.infura.io/ipfs/${props.currenthash}`) }}>
              Copy
            </Button>
          </div>
        </Modal.Title>
      </Modal.Header>
    </Modal>
  );
}


// Add 'Copy' input w button similar to Youtube
// Automatically highlight entire URL before user clicks
// Concanceated link to just show ipfs and some of the address


export default ShareVideoModal