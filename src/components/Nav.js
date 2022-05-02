import React from 'react'
import './App.css'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'
import { Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import { ReactComponent as Wallet } from '../wallet.svg'



function Nav(props) {

  const wallet = useWallet()
  const web3 = new Web3(Web3.currentProvider)



  const connectWallet = async (e) => {
    e.preventDefault()
    await wallet.connect()
    await props.loadBlockchainData()  
  }


  const disconnect = async () => {
    await props.disconnect()  
  }

  return (  
    <Navbar className= "navbar-dark p-0 shadow text-monospace">

      <Navbar.Brand href="#!">
        Streamz
      </Navbar.Brand> 

      { wallet.status === 'connected' ? (
        <ButtonToolbar className="ms-auto me-3">
          <Button className="btn-sm me-2" variant="outline-light">
            <Wallet className="pe-2" width="25" height="25" fill="white" />
            <a>{wallet.account ? wallet.account.substring(0,6) : '0x0'}...{wallet.account ? wallet.account.substring(38,42) : ''}</a>
            &nbsp;|&nbsp;
            {web3.utils.fromWei(wallet.balance, 'ether')} ETH
          </Button>
{/*          <Button className="btn-sm" variant="outline-light" onClick={() => wallet.reset()}> 
            Disconnect 
          </Button>*/}
          <Button className="btn-sm" variant="outline-light" onClick={disconnect}> 
            Disconnect 
          </Button>

        </ButtonToolbar> 
      ):(
        <Button className="ms-auto me-3" size="sm" variant="outline-light" onClick={connectWallet}>
          Connect Wallet
        </Button>  
      )}

    </Navbar>
  )
}



export default Nav