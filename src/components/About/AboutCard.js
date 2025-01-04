import React from "react";
import Card from "react-bootstrap/Card";
import { FaBook, FaRunning, FaLaptop } from "react-icons/fa";
function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi, I'm <span className="cyan">Ganesh</span>, a passionate 
                        software developer from <span className="cyan">Hyderabad</span>, India.
                        <br />
                        I currently work at Comcast as a Development Engineer.
                        <br/>
                        I hold an Bachelor of Technology from Veltech University.
                        <br/>
                        <br/>
                        When I'm not coding, some other activities that I love to do:
                    </p>
                    <ul>
                        <li className="about-activity">
                            <FaRunning /> Running, I put a miliage around 8Ok per week.
                        </li>
                        <li className="about-activity">
                            <FaBook /> Reading books, the most recent one is <span className="cyan">Can't Hurt Me.</span>
                        </li>
                        <li className="about-activity">
                            <FaLaptop/> Gaming
                        </li>
                    </ul>

                    <p style={{ color: "rgba(149, 204, 222, 0.8)", textAlign :"justify" }}>
                        You may not be the best at something, it maybe learning,
                        <br/>
                        running or anything but it's very important to look them
                        <br/>
                        in the eyes and face'em
                    </p>
                    <footer className="blockquote-footer">David Goggins</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}
export default AboutCard;