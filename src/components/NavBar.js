import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react"
import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"



function NavBar (){
  return <div>
  <Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className="text-dark mr-3 ml-3" to="/">Home</NavLink>
      <NavLink className="text-dark mr-3 ml-3" to={`/category/Teclados`}>Teclados</NavLink>
      <NavLink className="text-dark mr-3 ml-3" to="/category/Televisores">Televisores</NavLink>
    </Nav>
    <CartWidget />
  </Navbar.Collapse>
</Navbar>
  </div>
}

export default NavBar;



