import React from 'react'
import {Button, Form, Navbar, FormControl, Nav} from 'react-bootstrap'
const NavBa = () => {
    return (
        <div>
           <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="http://localhost:3000/#home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar> 
        </div>
    )
}

export default NavBa