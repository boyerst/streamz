# Streamz

Streamz is a decentralized platform for video viewing, publishing and sharing. Users can upload and download videos via IPFS - a peer-to-peer hypermedia protocol for storing data in a distributed file system. 


![](https://img.shields.io/badge/use--wallet-v0.13.6-green)
![](https://img.shields.io/badge/truffle-v5.5.6-orange)


## Getting Started

The following instructions show how to get copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

In order to run the app on your localhost, you will need to have the following installed on your OS:
  
  * [NPM](https://nodejs.org)
  * [Truffle](https://github.com/trufflesuite/truffle)
  * [Ganache](http://truffleframework.com/ganache/)

You will also need a web3 provider installed on your browser:

  * [MetaMask](https://metamask.io/)


### Installing

1. Clone the project

      ```$ git clone https://github.com/boyerst/streamz.git```

2. Install dependencies

      ```$ cd streamz```

      ```$ npm install```


3. Configure and run Ganache workspace

    * Open the Ganache GUI client that you downloaded and installed. This is start your local blockchain instance.
    * Select 'Quick Start'
    * Open settings via icon in upper right corner of the GUI
    * In the 'Server' tab, configure the following:
      - Port Number: 8545
        + *If you choose a different port you must also update truffle-config.js*
      - Network ID: 5777
    * Select 'Restart'



4. Compile and deploy the Streamz smart contract

      ```$ truffle migrate --reset```


5. Configure MetaMask

    * Unlock MetaMask
      - lkmweg
    * Select or add a Local Network connected to port 8545
    * Connect MetaMask to your local Ethereum blockchain provided by Ganache
    * Copy private key from first Ethereum account in your Ganache workspace
    * Select 'Import Account' in MetaMask and paste private key


6. Run the Front End Application

      ```$ npm run dev```


7. View the Application 
    * [Visit your localhost](http://localhost:3000)

8. Upload and Share Your Videos!





## Running the tests

  * Run a multitude of Chai assertion tests using Truffle:



      ```$ truffle test```





## Built With

* [IPFS](https://github.com/ipfs/js-ipfs/tree/master/packages/ipfs-http-client) - Client library implementing IPFS Core API
* [Solidity](https://docs.soliditylang.org/en/v0.8.14/) - Ethereum smart contract language
* [ReactJS](https://reactjs.org/docs/getting-started.html) - Application framework
* [Truffle Suite](https://trufflesuite.com/docs/) - Development environment
* [useWallet()](https://github.com/aragon/use-wallet) - Dapp to Ethereum provider connector



## Contribute

- [Run your own IPFS node via IPFS Companion](https://docs.ipfs.io/how-to/companion-node-types/#external)



