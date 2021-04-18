import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 
import './Navber.css';

 const Navber = () => {
  
   
    return (
         
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link class="nav-link active "  to="/">Home</Link>
          <Link class="nav-link active " to="/About">About Us</Link>
          <Link class="nav-link active  " to="/service">Service</Link>
          <Link class="nav-link active " to="/contact">Contact</Link>
          <Link style={{textDecoration:'none',color:'white'}} class="nav-link active" to="/Login">LogIn</Link> 
          <Link style={{textDecoration:'none',color:'white'}} class="nav-link active" to="/Admin">Dashboard</Link>
        </Nav>
             
          <Button variant="outline-info">GET AN APPOINTMENT</Button>
          </Navbar.Collapse>

      </Navbar>
    
         
    );
};

export default Navber;