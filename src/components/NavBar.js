import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
/**
 * NavBar Component
 * 
 * This component renders the navigation bar. It changes color on scroll and 
 * provides a toggle to expand or collapse the menu.
 * 
 * @returns {JSX.Element} The rendered navigation bar component.
 */
function NavBar(){
    const [expand, updateExpand] = useState(false);
    const [navBarColor, setNavBarColor] = useState(false);

    // on scroll blur the navbar.
    const scrollHandler = () => {
        if (window.scrollY >= 20){
            setNavBarColor(true);
        }
        else{
            setNavBarColor(false);
        }
    };

    window.addEventListener("scroll", scrollHandler);

    return(
        <Navbar 
            expanded={expand}
            expand = "md"
            className= {navBarColor ? "blurry" : "navbar" }
            fixed= "top"
        >
            <Container>
                <Navbar.Brand href="/" className="d-flex">
                    <img src={logo} className="img-fluid logo" alt="brand"/>
                </Navbar.Brand>
                <Navbar.Toggle 
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpand(expand ? false : "expanded");
                    }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" onClick={() => updateExpand(false)}>
                                <AiOutlineHome/> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/about" onClick={() => updateExpand(false)}>
                                <AiOutlineUser/> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/project" onClick={()=> updateExpand(false)}>
                                <AiOutlineFundProjectionScreen/> Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact" onClick={()=> updateExpand(false)}>
                                <AiOutlineMail />Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/resume" onClick={()=> updateExpand(false)}>
                                <CgFileDocument />Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;