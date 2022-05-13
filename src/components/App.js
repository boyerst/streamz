import React, { Component } from 'react'
import Nav from './Nav'
import UseWalletProvider from './Nav'
import Main from './Main'
import Footer from './Footer'
import NoWeb3NotificationModal from './NoWeb3NotificationModal.js'
import Web3 from 'web3'
import './App.css'
import Streamz from '../abis/Streamz.json'
// import Spinner from 'react-bootstrap/Spinner';
import RiseLoader from "react-spinners/RiseLoader";
import { create } from 'ipfs-http-client'




const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component {


  showModal = async () => {
    this.setState({ show: true })
  }

  onHide = () => {
    this.setState({ show: false });
  }


  loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum)
    console.log(window.web3)
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
      const latest = await streamz.methods.videos(videosCount).call()
      this.setState({
        currentHash: latest.hash,
        currentTitle: latest.title
      })
      this.setState ({ loading: false})
    } else {
      window.alert("Incorrect Network Detected - Please Change.")

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

  uploadVideo = async (title) => {
    console.log("Uploading Video to IPFS...")
    // console.log(ipfs)
    const video = await ipfs.add(this.state.buffer)
    // console.log(video)
    console.log(video.path)
    this.setState({ loading: true })
    this.state.streamz.methods.uploadVideo(video.path, title).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })   
    })
    console.log(this.state)
  }
  
  changeVideo = (hash, title) => {
    this.setState({
      'currentHash': hash,
      'currentTitle': title});
  }

  disconnectWallet = async () => {
    this.setState({
      videos: [],
      currentHash: null, 
      currentTitle: null
    }) 
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      streamz: null,
      videos: [],
      videosCount: 0,
      loading: true,
      currentHash: null, 
      currentTitle: null,
      show: true
    }

  }


  render() {
    return (
      <div>
        <Nav 
          loadBlockchainData={this.loadBlockchainData}
          disconnectWallet={this.disconnectWallet}
          show={this.state.show} 
          onHide={this.onHide}
          showModal={this.showModal}
        />
        { !window.ethereum 
          && 
          <div>
            <NoWeb3NotificationModal show={this.state.show} onHide={this.onHide}/>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "650px"}} >
              <RiseLoader className="loader-icon align-items-center" size="120px"  color="#6E31E0" css={{ opacity:"0.5" }} speedMultiplier={.33}/>
            </div>
          </div>
        }
        
        { this.state.loading 
          ? 
          <div className="d-flex align-items-center justify-content-center" style={{ height: "650px"}} >
            <RiseLoader className="loader-icon align-items-center" size="120"  color="#6E31E0" css={{ opacity:"0.5" }} speedMultiplier={.33}/>
          </div>
          :
        <Main 
          videos={this.state.videos}
          captureFile={this.captureFile} 
          uploadVideo={this.uploadVideo} 
          currentTitle={this.state.currentTitle} 
          currentHash={this.state.currentHash} 
          changeVideo={this.changeVideo} 
          />
        }

        <Footer />
      </div>
    );
  }
}

export default App;
