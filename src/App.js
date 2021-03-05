import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
const axios = require("axios").default;
const ip = "http://192.168.43.34:8080";
function handleFront() {
  axios.get(ip + "/move/fata").then(function (response) {
    console.log(response);
  });
}
function handleBack() {
  axios.get(ip + "move/spate").then(function (response) {
    console.log(response);
  });
}
function handleLeft() {
  axios.get(ip + "move/stanga").then(function (response) {
    console.log(response);
  });
}
function handleRight() {
  axios.get(ip + "move/dreapta").then(function (response) {
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
