import { Col, Container,Row } from "react-bootstrap";
import HackerImg from "../../assets/about-main.svg";
import AboutCard from "./AboutCard";
function About() {
    return (
        <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                        md = {7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            Meet the <strong className="cyan">Developer</strong>
                        </h1>
                        <AboutCard/>
                    </Col>
                    <Col
                        md={5}
                        style={{ paddingTop: "50px", paddingBottom: "50px"}}
                        className="about-img"
                    >
                        <img src={HackerImg} alt="about" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default About;