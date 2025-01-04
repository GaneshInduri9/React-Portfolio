import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="skillset-heading">
        Days I <strong className="cyan">Code</strong>
      </h1>
      <GitHubCalendar
        username="GaneshInduri9"
        blockSize={15}
        blockMargin={5}
        color="#469EB7"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;