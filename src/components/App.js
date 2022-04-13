import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
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
    if(networkData) {
      const streamz = new web3.eth.Contract(Streamz.abi, networkData.address)

      this.setState({ streamz })

      const videosCount = await streamz.methods.videoCount().call()
      this.setState({ videosCount })
      for(var i = 1; i <= videosCount; i++) {
        const video = await streamz.methods.videos(i).call()
        this.setState({
          videos: [...this.state.videos, video]
        }) 
      }
      console.log(this.state)

    } else {
      window.alert("Streamz contract not deployed to the detected network")
    }
  }

  captureFile = event => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }



  // Upload Video
  uploadVideo = title => {
    console.log("Uploading Video to IPFS...")
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      streamz: null,
      videos: [],
      videosCount: 0
    }
  }




  render() {
    return (
      <div>
        <Navbar 
          account={this.state.account} />
        <Main 
          captureFile={this.captureFile} 
          uploadVideo={this.uploadVideo} />

      </div>
    );
  }
}

export default App;
