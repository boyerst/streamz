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
    console.log("Connect button")
    if (window.ethereum) {
      await wallet.connect()
      await props.loadBlockchainData()  
    } else {
      console.log("Route to modal")
      props.showNoWeb3Modal()
    }
  }


  const disconnectWallet = async (e) => {
    e.preventDefault()
    await wallet.reset(wallet.account)
    await props.disconnectWallet()  
  }


  return (  
    <Navbar className= "navbar-dark bg-gradient p-1 shadow-lg text-monospace">

      <Navbar.Brand href="#!">
        Streamz 
      </Navbar.Brand> 
      { wallet.status === 'connected' ? (
        <ButtonToolbar className="ms-auto me-3">
          <Button className="wallet btn-sm me-2 pb-0" variant="outline-light">
            <Wallet className="pe-2 pb-1" width="25" height="25"/>
            <a>{wallet.account ? wallet.account.substring(0,6) : '0x0'}...{wallet.account ? wallet.account.substring(38,42) : ''}</a>
            &nbsp;|&nbsp;
            {web3.utils.fromWei(wallet.balance, 'ether')} ETH
          </Button>
          <Button className="disconnect btn-sm pb-.25" variant="outline-light" onClick={disconnectWallet}> 
            Disconnect 
          </Button>
        </ButtonToolbar> 
      ):(
        <Button className="connect btn-sm ms-auto me-3" variant="outline-light" onClick={connectWallet}>
          Connect Wallet
        </Button>  
      )}
    </Navbar>
  )
}



export default Nav