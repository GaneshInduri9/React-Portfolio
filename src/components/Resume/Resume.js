import { useState, useEffect } from "react";
import resumePdf from "../../assets/Ganesh_Resume.pdf"
import { Document,Page,pdfjs } from "react-pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "react-bootstrap";
import { Container, Row } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function Resume(){
    const [screenWidth, setWidth] = useState(1150);

    useEffect(() =>{
        setWidth(window.innerWidth);
    },[]);

    return (
        <div>
            <Container fluid className="resume-section">
                <Row className="resume">
                    <Document file={resumePdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={screenWidth > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

                <Row style={{ justifyContent: "center", position: "relative" }}>
                    <Button
                    variant="primary"
                    href={resumePdf}
                    target="_blank"
                    className="resume-button"
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );

}

export default Resume;