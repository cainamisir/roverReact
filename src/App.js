import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const axios = require("axios").default;
const ip = "http://127.0.0.1:8080";
function handleFront() {
    axios.get(ip + "/move/fata").then(function (response) {
        console.log(response);
    });
}
function handleBack() {
    axios.get(ip + "/move/spate").then(function (response) {
        console.log(response);
    });
}
function handleLeft() {
    axios.get(ip + "/move/stanga").then(function (response) {
        console.log(response);
    });
}
function handleRight() {
    axios.get(ip + "/move/dreapta").then(function (response) {
        console.log(response);
    });
}
function handleCenter() {
    axios.get(ip + "/move/centru").then(function (response) {
        console.log(response);
    });
}
function handleOpen() {
    axios.get(ip + "/gheara/open").then(function (response) {
        console.log(response);
    });
}
function handleClose() {
    axios.get(ip + "/gheara/close").then(function (response) {
        console.log(response);
    });
}
function App() {
    return (
        <Container className="mt-5">
            <Row>
                <Col md={12} style={{ width: "100%" }} className="mb-3">
                    <Button block onClick={handleFront}>
                        {" "}
                        Sus{" "}
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button block onClick={handleLeft} className="btn-warning">
                        Stanga{" "}
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button block onClick={handleCenter} className="btn-danger">
                        Centru{" "}
                    </Button>
                </Col>
                <Col md={4} className="mb-3">
                    <Button block className="btn-warning" onClick={handleRight}>
                        Dreapta
                    </Button>
                </Col>
                <Col md={12} className="mb-5">
                    <Button block onClick={handleBack}>
                        Jos
                    </Button>
                </Col>
                <Col md={6} className="mt-5">
                    <Button onClick={handleOpen} block>
                        Open
                    </Button>
                </Col>
                <Col md={6} className="mt-5">
                    <Button onClick={handleClose} block>
                        Close
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
