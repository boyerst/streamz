import React from 'react'
import './App.css'
import { useWallet } from 'use-wallet'
import Web3 from 'web3'
import { Button, ButtonToolbar, Navbar } from 'react-bootstrap';
import Identicon from 'identicon.js'
import IPFS from '../images/IPFS.png'




function Nav(props) {


  const wallet = useWallet()
  const web3 = new Web3(Web3.currentProvider)


  // const connectWallet = async (e) => {
  //   e.preventDefault()
  //   if (window.ethereum) {
  //     await wallet.connect()
  //     await props.loadBlockchainData()
  //   } else {
  //     props.showNoWeb3Modal()
  //   }
  // }


  const connectWallet = async (e) => {
    e.preventDefault()
    const chainId = 1337
    console.log("Nav.js networkId:", window.ethereum.networkVersion)
    console.log("Nav.js chainId:", chainId)
    console.log("Nav.js chainIdtoHex:", web3.utils.toHex(chainId))
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: web3.utils.toHex(chainId) }]
      });
      await wallet.connect()
      console.log("wallet.connect() connected")
      await props.loadBlockchainData()
      console.log("loadBlockchainData executed")
    } catch (switchError) {
      if (switchError.code === 4902) {
        console.log("switchError")
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: web3.utils.toHex(chainId),
              chainName: 'Localhost 8545',
              rpcUrls: ['http://127.0.0.1:8545'],
              nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' }
            },
          ],
        });
      }
    }
  }



  const disconnectWallet = async (e) => {
    e.preventDefault()
    await wallet.reset(wallet.account)
    await props.disconnectWallet()
  }


  return (
    <Navbar className="navigation navbar-dark bg-gradient p-1 shadow-lg text-monospace">
      <Navbar.Brand className="title" href="#!" style={{ fontSize: "40px" }}>
        <img src={IPFS} className="me-2 mb-1" width="40" height="40" alt="" />
        StreamZ
      </Navbar.Brand>

      { wallet.status === 'connected' ? (
        <ButtonToolbar className="ms-auto me-3">
          <Button className="wallet btn-sm me-2 pb-0" variant="outline-light">
            <img
              className="mb-1 me-1 rounded"
              width="17"
              height="15"
              alt=""
              src={`data:image/png;base64,${new Identicon(wallet.account, 30).toString()}`}
            />
            <a>
              {wallet.account ? wallet.account.substring(0, 6) : '0x0'}
              ...
              {wallet.account ? wallet.account.substring(38, 42) : ''}
            </a>
            &nbsp;|&nbsp;
            {web3.utils.fromWei(wallet.balance, 'ether')}
            ETH
          </Button>
          <Button className="disconnect btn-sm pb-.25" variant="outline-light" onClick={disconnectWallet}>
            Disconnect
          </Button>
        </ButtonToolbar>
      ) : (
        <Button className="connect btn-sm ms-auto me-3" variant="outline-light" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </Navbar>
  )
}





export default Nav
