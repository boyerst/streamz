import React from 'react';
import './App.css';
import { useWallet, UseWalletProvider } from 'use-wallet'
import Web3 from 'web3';
import { Button, Navbar } from 'react-bootstrap';


function Nav() {
  return (

    <Navbar className= "navbar-dark p-0 shadow text-monospace ">
      <Navbar.Brand href="#!">Streamz</Navbar.Brand> 
      <Button className="justify-content-end" size="sm" variant="outline-secondary"> Button </Button>
    </Navbar>

  )
}



export default Nav;