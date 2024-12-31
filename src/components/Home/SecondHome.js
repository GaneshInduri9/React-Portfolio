import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import avatar from "../../assets/myAvatar_circle.svg";
function SecondHome(){
    return(
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize : "2.6em"}}>
                            LET ME <span className="cyan"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            Started with 'Hello, World!', and now I'm somewhere between 
                            'Why isn't this working?' and 'Oh, it works… but why?🤷‍♂️
                            <br />
                            <br />My programming repertoire includes...
                            <i>
                                <b className="cyan"> Javascript, Java, C. </b>
                            </i>
                            <br />
                            <br />
                            I am passionate about building new &nbsp;
                            <i>
                                <b className="cyan">Web Technologies and Products </b> and 
                                also in areas related to{" "}
                                <b className="cyan">Artificial Intelligence.</b>
                            </i>
                            <br />
                            <br />
                            I also enjoy applying my passion for product development 
                            with <b className="cyan">React.js</b> and
                            <i>
                                <b className="cyan">
                                    {" "}
                                    other modern JavaScript libraries and frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="cyan"> Next.js whenever I can</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={avatar} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>YOU CAN FIND ME HERE</h1>
                        <p>
                            Feel free to <span className="cyan">connect </span>with me
                        </p>
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
            </Container>
        </Container>
    );
}

export default SecondHome;