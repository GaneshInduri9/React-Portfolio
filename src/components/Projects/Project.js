import { Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Leetcode150 from "../../assets/leetcode150.PNG";
import weather from "../../assets/weatherApp.PNG";
import { Col, Container} from "react-bootstrap";
function Project(){
    return(
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="cyan">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Some projects that I've worked on recently.
                </p>
                <Row className="gap-5" style={{ justifyContent: "center", paddingBottom: "10px" }} >
                    <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={weather}
                    title="Weather-App"
                    description="This is a React-based Weather Application that allows users to check the current weather conditions for a specific location. The app fetches real-time weather data from an Shecodes API and displays it in a user-friendly interface."
                    ghLink="https://github.com/GaneshInduri9/React-Weather-App"
                    demoLink="https://react-weather-8azt24bbe-ganeshs-projects-d84233cf.vercel.app/"
                    />
                    </Col>
                    <Col md={4} className="project-card">
                    <ProjectCard
                    imgPath={Leetcode150}
                    title="Leetcode-150"
                    description="LeetCode 150, is a repo that contains intuation behind the problem approach, it also has various approach from brute force to most optimal. It also covers all the edge cases, the repo gets updated every day with new problems."
                    ghLink="https://github.com/GaneshInduri9/React-Weather-App"
                    demoLink={null}
                    />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Project;