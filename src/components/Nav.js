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

  const connectWallet = async (e) => {
    e.preventDefault()
    const chainId = 3
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(chainId) }]
        });
        await wallet.connect()
        await props.loadBlockchainData()
      } catch (switchError) {
        if (switchError.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: web3.utils.toHex(chainId),
                chainName: 'Ropsten Test Network',
                rpcUrls: ['https://ropsten.infura.io/v3/'],
                nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' }
              },
              // {
              //   chainId: web3.utils.toHex(chainId),
              //   chainName: 'Localhost 8545',
              //   rpcUrls: ['http://127.0.0.1:8545'],
              //   nativeCurrency: { name: 'ETH', decimals: 18, symbol: 'ETH' }
              // },
            ],
          });
        }
      }
    } else {
      props.showNoWeb3Modal()
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
        <ButtonToolbar className="buttonToolbar ms-auto me-3">
          <Button className="wallet btn-sm pb-0" variant="outline-light">
            <img
              className="mb-1 me-1 rounded"
              width="17"
              height="15"
              alt=""
              src={`data:image/png;base64,${new Identicon(wallet.account, 30).toString()}`}
            />
            <a className="p-1 text-decoration-none text-white">
              {wallet.account ? wallet.account.substring(0, 6) : '0x0'}
              ...
              {wallet.account ? wallet.account.substring(38, 42) : ''}
            </a>
            |
            <a className="p-1 text-decoration-none text-white">
              <i>{web3.utils.fromWei(wallet.balance, 'ether')}</i>
            </a>
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
