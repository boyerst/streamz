import React, { Component } from 'react';
import './App.css';
import Identicon from 'identicon.js';


class Navbar extends Component {
  render() {
    return(
  
      <nav className="navbar navbar-expand-lg navbar-dark p-0 shadow text-monospace"> 
        
        <a className="navbar-brand" href="#!">Streamz</a>
  
          <ul className="navbar-nav px-3 ms-auto">
            <li>
            <small>
              <a 
                target="blank" 
                alt="" 
                className="text-white" 
                href={"https://etherscan.io/address/" + this.props.account}
                rel="noopener noreferrer">{this.props.account.substring(0,6)}...{this.props.account.substring(38,42)}
              </a>
            </small>
              { this.props.account
                ?
                <img 
                  alt=""
                  className='navbar-brand'
                  width='26'
                  height='33'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                />
                :
                <span></span>
              }
            </li>
              { this.props.account
                ?
              <button 
                className="btn-sm"
                id="connectButton"
                disabled
              > 
                Connect 
              </button>
              :
              <button
                className="btn-sm"
                id="connectedButton"
              >
              </button>
              }
          </ul>
      </nav>

    )
  }
}

export default Navbar;

