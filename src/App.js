import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const axios = require("axios").default;
function handleFront() {
    axios.get("http://127.0.0.1:8080/move/fata").then(function (response) {
        console.log(response);
    });
}
function handleBack() {
    axios.get("http://127.0.0.1:8080/move/spate").then(function (response) {
        console.log(response);
    });
}
function handleLeft() {
    axios.get("http://127.0.0.1:8080/move/stanga").then(function (response) {
        console.log(response);
    });
}
function handleRight() {
    axios.get("http://127.0.0.1:8080/move/dreapta").then(function (response) {
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
                    <Button block onClick={handleLeft}>
                        Stanga{" "}
                    </Button>
                </Col>
                <Col md={4} className="mb-3"></Col>
                <Col md={4} className="mb-3" onClick={handleRight}>
                    <Button block>Dreapta</Button>
                </Col>
                <Col md={12}>
                    <Button block onClick={handleBack}>
                        Jos
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
