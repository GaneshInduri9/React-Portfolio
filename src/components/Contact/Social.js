import React from 'react';
import { Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
function Social(){
    return (
        <>
            <Row>
                <Col md={12} className="home-about-social" style={{marginTop:"0px", paddingTop:"0px"}}>
                <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                            href="https://github.com/GaneshInduri9"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <AiFillGithub/>
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.instagram.com/induripatel"
                        target="_blank"
                        rel="noreferrer"className="icon-colour  home-social-icons"
                        >
                            <AiFillInstagram />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/ganeshinduri9"
                        target="_blank"
                        rel="noreferrer"className="icon-colour  home-social-icons"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                </ul>
                </Col>
            </Row>
        </>
    );
}

export default Social;