import React from 'react'
import './App.css'
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from 'web3'
import { Button, Navbar } from 'react-bootstrap';



function Nav() {

  const wallet = useWallet()
  const web3 = new Web3(Web3.currentProvider)

  console.log(wallet)
  console.log(wallet.status)
  console.log(web3)
  console.log(wallet.account)


  const connectWallet = async (e) => {
    e.preventDefault()
    await wallet.connect()    
  }


  return (
    

    <Navbar className= "navbar-dark p-0 shadow text-monospace">
      
      <Navbar.Brand href="#!">
        Streamz
      </Navbar.Brand> 
      <Button className="ms-auto me-3" size="sm" variant="outline-light">
        {wallet.account ? wallet.account.substring(0,6) : ''}...{wallet.account ? wallet.account.substring(38,42) : '0x0'}
      </Button>

      { wallet.status === 'connected' ? (
        <Button className="nav-item" size="sm" variant="outline-light" onClick={() => wallet.reset()}> 
          Disconnect 
        </Button> 
      ):(
        <Button className="me-3" size="sm" variant="outline-light" onClick={connectWallet}>
          Connect 
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