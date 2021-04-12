import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import {Form, FormControl, Button} from "react-bootstrap"
import React,{useState} from "react"
import CartWidget from "./CartWidget"
import {NavLink,Link, useHistory} from "react-router-dom"



function NavBar (){
  
  const [search, setSearch] = useState();

  // function handleChange(e){
  //   setSearch(e.target.value);
  //   console.log(search);
  // }

  return <div>
  <Navbar bg="light" expand="lg">
  
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink className="text-dark mr-3 ml-3" to="/">Home</NavLink>
      <NavLink className="text-dark mr-3 ml-3" to={`/category/Teclados`}>Teclados</NavLink>
      <NavLink className="text-dark mr-3 ml-3" to="/category/Televisores">Televisores</NavLink>
      <NavLink className="text-dark mr-3 ml-3" to="/category/Auriculares">Auriculares</NavLink>
    </Nav>
    <CartWidget />
    <Form inline className="ml-5">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={event => {setSearch(event.target.value)}} />
      <Button variant="outline-success" >Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
}

export default NavBar;



