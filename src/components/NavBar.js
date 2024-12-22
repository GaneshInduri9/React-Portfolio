import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/GI_transparent_v2.png";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
  AiOutlineMail,
  AiOutlineSun,
  AiOutlineMoon,
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
    const [darkmode, setDrakmode] = useState(true);

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
            fixed= "top">
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
                                    <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} onClick={() => updateExpand(false)}>
                                    <AiOutlineUser style={{marginBottom: "3px"}}/> About
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} onClick={()=> updateExpand(false)}>
                                    <AiOutlineFundProjectionScreen style={{marginBottom: "3px"}}/> Projects
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} onClick={()=> updateExpand(false)}>
                                    <AiOutlineMail style={{marginBottom:"3px"}}/>Contact
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} onClick={()=> updateExpand(false)}>
                                    <CgFileDocument style={{marginBottom: "3px"}}/>Resume
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={darkmode ? "darkmode" : "lightmode"}>
                                <Nav.Link onClick={() => setDrakmode((prevMode) => !prevMode)}>
                                {darkmode ? (<AiOutlineSun style={{ marginRight: "5px" }} />) : (<AiOutlineMoon style={{ marginRight: "5px" }} />)}Mode
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    );
}
export default NavBar;