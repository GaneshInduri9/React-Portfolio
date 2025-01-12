import { Col, Container,Row } from "react-bootstrap";
import HackerImg from "../../assets/about-main.svg";
import AboutCard from "./AboutCard";
import Techstack from "./TechStack";
import Toolstack from "./ToolStack";
import Github from "./GitHub";
import Particle from "../Particle";
function About() {
    return (
        <Container fluid className="about-section">
            <Particle/>
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
                <h1 className="skillset-heading">
                    Professional <strong className="cyan">Skillset </strong>
                </h1>
                <Techstack />
                <h1 className="skillset-heading">
                    <strong className="cyan">Tools</strong> I use
                </h1>
                <Toolstack/>
                <Github />
            </Container>
        </Container>
    );
}

export default About;