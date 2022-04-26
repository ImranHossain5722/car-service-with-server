import React from "react";
import { Navbar, Container, Nav, NavDropdown,  } from "react-bootstrap";
import { Link } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from "firebase/auth";
import logo from "../../../images/logo.png";
import auth from "../../../firebase.init"
const Header = () => {


  const [user]=useAuthState(auth)
  
  const handelSignOut =()=>{
    signOut(auth)
  }

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/"><img height={30} src={logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Service</Nav.Link>
              <Nav.Link href="home#expert">Expert</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="about">About</Nav.Link>
              {
                user && <>
                <Nav.Link as={Link} to="addservice">Add Service</Nav.Link>
                <Nav.Link as={Link} to="manage">Manage Service</Nav.Link>
                </>
              } 

              {user?<button className='btn btn primary' onClick={handelSignOut}>Sign Out</button>:
                <Nav.Link eventKey={2} as={Link} to="login">
                Login
               </Nav.Link>
              
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
