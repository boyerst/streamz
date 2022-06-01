import React from 'react';
import ReactDOM from 'react-dom';
import { UseWalletProvider } from 'use-wallet'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(
  <UseWalletProvider
    autoConnect={true}
    connectors={{
      provided: { provider: window.cleanEthereum },
      injected: {
        chainId: [1337, 1]
      }
    }}
  >
    <App />
  </UseWalletProvider>, document.getElementById('root'));


reportWebVitals();




