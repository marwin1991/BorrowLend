import React from "react";
import Accordion from "react-bootstrap/es/Accordion";
import Card from "react-bootstrap/es/Card";

class Item extends React.Component {
    state = {
        mode: "borrow", //borrow,lend
        styleMode: "success", // borrow=success lend=danger
        color: "#28a745", // borrow = #28a745 lend = #dc3545
        opositColor: "#dc3545",
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{
                width: '100%',
                borderColor: this.state.color,
                borderWidth: 3,
            }}>
                <Accordion.Toggle as={Card.Header} eventKey={this.props.id}>
                    Click me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.id}>
                    <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
            </Card>

        )
    }
}

export default Item;