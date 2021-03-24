import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {useState} from "react";
const axios = require("axios").default;
const ip = "http://192.168.43.16:8080";


function App() {
    const [unghi , setUnghi] = useState(0);

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
        if(unghi >= -1)
        setUnghi(unghi - 1);
    }
    function handleRight() {
        axios.get(ip + "/move/dreapta").then(function (response) {
            console.log(response);
        });
        if(unghi <= 1)
        setUnghi(unghi + 1);
    }
    function handleCenter() {
        axios.get(ip + "/move/centru").then(function (response) {
            console.log(response);
        });
        setUnghi(0);
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
    function handleFront_power() {
        axios.get(ip + "/move/fatatesla").then(function (response) {
            console.log(response);
        });
    }
    function handleBack_power(){
        axios.get(ip + "/move/spatetesla").then(function(response){
            console.log(response);
        });
    }
    function dealFata(){
        axios.get(ip + "/move/dealfata").then(function(response){
            console.log(response);
        });
    }
    function dealSpate(){
        axios.get(ip + "/move/dealspate").then(function(response){
            console.log(response);
        });
    }
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

                <Col md={6} className="mt-5">
                    <Button onClick={handleFront_power} block>
                        FataTesla
                    </Button>
                </Col>
                <Col md={6} className="mt-5">
                    <Button onClick={handleBack_power} block>
                        SpateTesla
                    </Button>
                </Col>
                <Col md = {12}>
                    <h1>{unghi}</h1>
                </Col>
                <Col md={6} className="mt-5">
                    <Button onClick={dealFata} block>
                        FataDeal
                    </Button>
                </Col>
                <Col md={6} className="mt-5">
                    <Button onClick={dealSpate} block>
                        SpateDeal
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
