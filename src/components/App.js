import React, { Component } from 'react'
import Web3 from 'web3'
import { create } from 'ipfs-http-client'
import RiseLoader from "react-spinners/RiseLoader";
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'
import NoWeb3NotificationModal from './modals/NoWeb3NotificationModal'
import WrongNetworkModal from './modals/WrongNetworkModal'
import ShareVideoModal from './modals/ShareVideoModal'
import './App.css'
import Streamz from '../abis/Streamz.json'





const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })


class App extends Component {

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
      showModal1: true,
      showModal2: false,
      showModal3: false
    }
  }

  showNoWeb3Modal = async () => {
    this.setState({ showModal1: true })
  }

  hideNoWeb3Modal = () => {
    this.setState({ showModal1: false });
  }

  hideWrongNetworkModal = () => {
    this.setState({ showModal2: false });
  }

  showShareVideoModal = async () => {
    this.setState({ showModal3: true })
  }

  hideShareVideoModal = () => {
    this.setState({ showModal3: false });
  }


  loadBlockchainData = async () => {
    const web3 = new Web3(window.ethereum)
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Streamz.networks[networkId]
    if (networkData) {
      const streamz = new web3.eth.Contract(Streamz.abi, networkData.address)
      this.setState({ streamz })
      const videosCount = await streamz.methods.videoCount().call()
      this.setState({ videosCount })
      for (let i = 1; i <= videosCount; i += 1) {
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
      this.setState({ loading: false })
    } else {
      this.setState({ showModal2: true })
    }
  }



  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer.from(reader.result) })
    }
  }

  uploadVideo = async (title) => {
    this.setState({ loading: true })
    const video = await ipfs.add(this.state.buffer)
    this.state.streamz.methods.uploadVideo(video.path, title).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.loadBlockchainData()
      this.setState({ loading: false })
    })
  }


  changeVideo = (hash, title) => {
    this.setState({
      currentHash: hash,
      currentTitle: title
    });
  }

  disconnectWallet = async () => {
    this.setState({
      videos: [],
      currentHash: null,
      currentTitle: null,
      loading: true
    })
  }



  render() {
    return (
      <div>
        <Nav
          loadBlockchainData={this.loadBlockchainData}
          disconnectWallet={this.disconnectWallet}
          showNoWeb3Modal={this.showNoWeb3Modal}
        />
        <WrongNetworkModal
          show={this.state.showModal2}
          onHide={this.hideWrongNetworkModal}
        />
        <ShareVideoModal
          show={this.state.showModal3}
          onHide={this.hideShareVideoModal}
          currenthash={this.state.currentHash}
        />
        {
          !window.ethereum
          &&
          <NoWeb3NotificationModal show={this.state.showModal1} onHide={this.hideNoWeb3Modal} />
        }
        {
          this.state.loading
            ?
              <div className="d-flex align-items-center justify-content-center" style={{ height: "650px" }}>
                <RiseLoader className="loader-icon align-items-center" size="120px" color="#6E31E0" css={{ opacity: "0.5" }} speedMultiplier={0.17} />
              </div>
            :
              <Main
                videos={this.state.videos}
                captureFile={this.captureFile}
                uploadVideo={this.uploadVideo}
                currentTitle={this.state.currentTitle}
                currenthash={this.state.currentHash}
                changeVideo={this.changeVideo}
                showShareVideoModal={this.showShareVideoModal}
              />
        }
        <Footer />
      </div>
    );
  }

}




export default App
