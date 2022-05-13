import React, { Component, Container } from 'react'
import { Navbar } from 'react-bootstrap';
import './App.css'


class Footer extends Component {
  render() {
    return (
      <Navbar className="shadow-lg navbar-dark footer bg-gradient">
        <Navbar.Brand className="footer-content">
          Created by &copy;Sopro
        </Navbar.Brand>
      </Navbar>
    )
  }
}























export default Footer