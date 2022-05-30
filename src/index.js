import React from 'react';
import ReactDOM from 'react-dom';
import { UseWalletProvider } from 'use-wallet'
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render(
//   <UseWalletProvider
//     chainId={1337}
//     connectors={{
//       provided: { provider: window.cleanEthereum },
//     }}
//   >
//     <App />
//   </UseWalletProvider>, document.getElementById('root'));
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




ReactDOM.render(
  <UseWalletProvider
 
    connectors={{
      provided: { provider: window.cleanEthereum },
      injected: {
        chainId: [1337, 1]
      }
    }}
  >
    <App />
  </UseWalletProvider>, document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





// Change to this in order to pass several networks??

// ReactDOM.render(
//   <UseWalletProvider

//     connectors={{
//       injected: {
//         chainId: [1, 4, 3, 137],
//       },
//       provided: { provider: window.cleanEthereum },
//     }}
//   >
//     <App />
//   </UseWalletProvider>, document.getElementById('root'));

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
