import React, { Component } from 'react';
import './App.css';

class Navbar extends Component {
  render() {
    return(
  
      <nav className="navbar navbar-expand-lg navbar-dark p-0 shadow text-monospace"> 
        <a className="navbar-brand" href="#!">Streamz</a>
        <div className="navbar-nav ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!">{this.props.account}</a>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default Navbar;