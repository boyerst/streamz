import React from 'react'
import './App.css'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from 'web3'
import { Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import {ReactComponent as Wallet } from '../wallet.svg'



function Nav() {

  const wallet = useWallet()
  const web3 = new Web3(Web3.currentProvider)

  console.log(wallet)
  console.log(wallet.status)
  console.log(web3)
  console.log(wallet.account)
  console.log(wallet.balance)


  const connectWallet = async (e) => {
    e.preventDefault()
    await wallet.connect()    
  }


  return (
    
    <Navbar className= "navbar-dark p-0 shadow text-monospace">

      <Navbar.Brand href="#!">
        Streamz
      </Navbar.Brand> 

      { wallet.status === 'connected' ? (

        <ButtonToolbar className="ms-auto me-3">
          <Button className="me-2" variant="outline-light" size="sm">
            <Wallet className="me-2" width="25" height="23" fill="white"/>
            <a>{wallet.account ? wallet.account.substring(0,6) : '0x0'}...{wallet.account ? wallet.account.substring(38,42) : ''}</a>
            &nbsp;|&nbsp;
            {web3.utils.fromWei(wallet.balance, 'ether')} ETH
          </Button>
          <Button variant="outline-light" size="sm" onClick={() => wallet.reset()}> 
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



export default () => (
  <UseWalletProvider
    chainId={1337}
    connectors={{
      // This is how connectors get configured
      provided: { provider: window.cleanEthereum },
  }}>
    <Nav />   
  </UseWalletProvider>
)