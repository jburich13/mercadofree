import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {Form, FormControl, Button} from "react-bootstrap"
import React,{useContext} from "react"
import CartWidget from "./CartWidget"
import {NavLink} from "react-router-dom"
import {FormContext} from "../components/context/FormContext"



function NavBar (){
  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }
  const {setFormValue} = useContext(FormContext);
  return <div>
  <Navbar variant="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className="text-dark mr-3 ml-3 Navbar-link" to="/">Home</NavLink>
      <NavLink className="text-dark mr-3 ml-3 Navbar-link" to={`/category/Teclados`}>Teclados</NavLink>
      <NavLink className="text-dark mr-3 ml-3 Navbar-link" to="/category/Televisores">Televisores</NavLink>
      <NavLink className="text-dark mr-3 ml-3 Navbar-link" to="/category/Auriculares">Auriculares</NavLink>
    </Nav>
    <CartWidget />
    <Form inline className="ml-5">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e=> setFormValue(capitalize(e.target.value))} />
      <Button variant="outline-success" >Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
}

export default NavBar;



