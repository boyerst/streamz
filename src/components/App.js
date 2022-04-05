import React, { Component } from 'react';
import Navbar from './Navbar';
import Web3 from 'web3';
import './App.css';
import Streamz from '../abis/Streamz.json'


class App extends Component {



  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }


  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    console.log("Account #1:", accounts[0])
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId()
    const networkData = Streamz.networks[networkId]
    const streamz = new web3.eth.Contract(Streamz.abi, networkData.address)

    this.setState ({ streamz })
    console.log(this.state)


  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      streamz: null
    }
  }




  render() {
    return (
      <div>
        <Navbar account={this.state.account} />
   

      </div>
    );
  }
}

export default App;
