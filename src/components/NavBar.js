import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import React from "react"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"



class NavBar extends React.Component{
render(){
  return <div>
  <Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"> <Link to="/">Home</Link> </Nav.Link>
      <Nav.Link href="#link"> <Link to="/category">Categorias</Link> </Nav.Link>
    </Nav>
    <CartWidget />
  </Navbar.Collapse>
</Navbar>
  </div>
}
}

export default NavBar;



