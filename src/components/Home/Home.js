import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Type from "./Type";
import SecondHome from "./SecondHome";
import homeLogo from "../../assets/home-main.svg";
function Home(){
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hello There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                    👋🏻
                                </span>
                            </h1>
                            <h1 className="heading-name">
                                <strong className="main-name"> GANESH INDURI </strong>
                                Here
                            </h1>
                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Col>
                        <Col md={5} style={{ paddingBottom: 20 }}>
                            <img
                            src={homeLogo}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "400px"}}
                        />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <SecondHome />
        </section>
    );
}
export default Home;