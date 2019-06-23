import React from "react";
import Accordion from "react-bootstrap/es/Accordion";
import Card from "react-bootstrap/es/Card";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";
import Image from "react-bootstrap/es/Image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";

class Item extends React.Component {
    state = {
        color: "#28a745", // borrow = #28a745 lend = #dc3545
        state: "done", // waiting, done, overdue
        icon: "check-circle",
        iconColor: "green",
        title: "Lorem ipsum",
        date: "20.12.2019",
        person: "John Smith",
        shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    };

    constructor(props) {
        super(props);
        console.log(props)
        if(this.props.color !== undefined)
            this.state.color = this.props.color;
        if(this.props.state !== undefined)
            this.state.state = this.props.state;
        if(this.props.title !== undefined)
            this.state.title = this.props.title;
        if(this.props.date !== undefined)
            this.state.date = this.props.date;
        if(this.props.person !== undefined)
            this.state.person = this.props.person;
        if(this.props.description !== undefined)
            this.state.description = this.props.description;
        if(this.props.shortDescription !== undefined)
            this.state.shortDescription = this.props.shortDescription;




        if(this.state.state === "done") {
            this.state.icon = "check-circle";
            this.state.iconColor = "green";
        }
        if(this.state.state === "overdue") {
            this.state.icon = "exclamation-circle";
            this.state.iconColor = "red"
        }
        if(this.state.state === "waiting") {
            this.state.icon = "clock";
            this.state.iconColor = "grey"
        }
        console.log(this.state)
    }

    render() {
        return (
            <Card style={{
                width: '100%',
                borderColor: this.state.color,
                borderWidth: 3,
            }}>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.id} style={{backgroundColor: 'white'}}>
                    <Row>
                        <Col xs={2} sm={2} md={1} lg={2} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'}}>
                            <Image style={{width: '50%', minWidth: 50}} src={"https://picsum.photos/100/100/?image=" + Math.ceil(Math.random()*20)} roundedCircle />
                        </Col>
                        <Col xs={7} sm={7} md={4} lg={3}>
                            <h6>{this.state.title}</h6>
                            <Row>
                                <Col xs={1}><FontAwesomeIcon icon="clock" color="grey" size="1x"/></Col>
                                <Col xs={9}>{this.state.date}</Col>
                            </Row>
                            <Row>
                                <Col xs={1}><FontAwesomeIcon icon="user" color="grey" size="1x"/></Col>
                                <Col xs={9}>{this.state.person}</Col>
                            </Row>
                        </Col>
                        <Col xs={1} sm={1} md={5} lg={6}>
                            <div className="d-none d-md-block">
                                {this.state.shortDescription}
                            </div>
                        </Col>
                        <Col xs={1} sm={1} md={1} lg={1}>
                            <FontAwesomeIcon icon={this.state.icon} color={this.state.iconColor} size="2x" style={{marginTop: 15}}/>
                        </Col>
                    </Row>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.id}>
                    <Card.Body>{this.state.description}</Card.Body>
                </Accordion.Collapse>
            </Card>

        )
    }
}

export default Item;