import React from "react";
import { PiUserListDuotone } from "react-icons/pi";
import { useSelector, useDispatch } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import userActions from "../../redux/actions/userActions";
import './style.css'
import { useNavigate } from "react-router-dom";

const NavbarMain = () => {
  const user = useSelector((store) => store.userR.user);
  const dispatch = useDispatch();

  const title =
  <span>
    <PiUserListDuotone  className="user" />
  </span>

  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(userActions.logout());
    
    navigate('/signin'); 
  };

  return (
    <>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >MyItinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/cities">Cities</Nav.Link>
              
            <NavDropdown title={title}>
            {user._id ? (
              
              
              
              <NavDropdown.Item className="btn btn-outline-light login" onClick={handleSignOut}>{" "}Log out {" "}</NavDropdown.Item>
              
              ) : (
                <>
                {console.log(user._id)}

             <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            <NavDropdown.Item href="/signin">Sign In</NavDropdown.Item>
      </>
      )}
      {/*  */}

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
  );
}

export default NavbarMain;
