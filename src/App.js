import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line, YAxis, Legend } from "recharts";
import {useState} from "react";
const axios = require("axios").default;
const ip = "http://178.138.32.130:8080";

function App() {
    const [data, setData] = useState([]);
    const [unghi , setUnghi] = useState(0);
    function addResponseToData(response) {
    let start = response.indexOf("mq8 = ");
    start += 7;
    let number = 0;
    while(response[start] >= '0' && response[start] <= '9')
    {
        number = number * 10 + response[start] - '0';
        start ++;
    }
    let mq8 = number;

    // 
    start = response.indexOf("mq4 = ");
    start += 7;
    number = 0;
    while(response[start] >= '0' && response[start] <= '9')
    {
        number = number * 10 + response[start] - '0';
        start ++;
    }
    let mq4 = number;
    data.push({mq4: mq4, mq8: mq8});
    setData(data);
    }
    function handleFront() {
        axios.get(ip + "/move/fata").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
    }
    function handleBack() {
        axios.get(ip + "/move/spate").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
    }
    function handleLeft() {
        axios.get(ip + "/move/stanga").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
        if(unghi >= -1)
        setUnghi(unghi - 1);
    }
    function handleRight() {
        axios.get(ip + "/move/dreapta").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
        if(unghi <= 1)
        setUnghi(unghi + 1);
    }
    function handleCenter() {
        axios.get(ip + "/move/centru").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
        setUnghi(0);
    }
    function handleOpen() {
        console.log(data);
        axios.get(ip + "/gheara/open").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
    }
    function handleClose() {
        axios.get(ip + "/gheara/close").then(function (response) {
            console.log(response);
            addResponseToData(response);
        });
    }
    function handleFront_power() {
        axios.get(ip + "/move/fatatesla").then(function (response) {
            console.log(response);
            addResponseToData(response);

        });
    }
    function handleBack_power(){
        axios.get(ip + "/move/spatetesla").then(function(response){
            console.log(response);
            addResponseToData(response);

        });
    }
    function dealFata(){
        axios.get(ip + "/move/dealfata").then(function(response){
            console.log(response);
            addResponseToData(response);

        });
    }
    function dealSpate(){
        axios.get(ip + "/move/dealspate").then(function(response){
            console.log(response);
            addResponseToData(response);

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
            <LineChart
                width={800}
                height={800}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                <CartesianGrid stroke='#f5f5f5' verticalFill={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.3)']} horizontalFill={['#ccc', '#fff']} />
            <Legend />
            <XAxis dataKey="name" axisLine={{ stroke: 'red' }} />
            <YAxis domain={[1, 'auto']} ticks={[0.01, 0.1, 1, 10, 100, 1000]} />
            <Tooltip />
            <Line type='monotone' dataKey='pressure' stroke='#FF0000' />

            <Line type='monotone' dataKey='temperature' stroke='#ff7300' />

            </LineChart>
        </Container>
    );
}

export default App;
