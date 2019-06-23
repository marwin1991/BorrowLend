import React from "react";
import Route from "react-router-dom/es/Route";
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/index";
import Button from "react-bootstrap/es/Button";
import Container from "react-bootstrap/es/Container";
import Row from "react-bootstrap/es/Row";
import Col from "react-bootstrap/es/Col";


class MainPage extends React.Component {
    state = {
        applicationTile: "BorrowLend",
        mode: "borrow", //borrow,lend
        styleMode: "success", // borrow=success lend=danger
        color: "#28a745", // borrow = #28a745 lend = #dc3545
        opositColor: "#dc3545",
    };

    constructor(props) {
        super(props);
        this.borrowButton = this.borrowButton.bind(this);
        this.lendButton = this.lendButton.bind(this);
        this.toggle = this.toggle.bind(this);
    }


    borrowButton() {
        console.log('Borrow mode');
        this.state.mode = "borrow";
        this.state.styleMode = "success";
        this.state.color = "#28a745";
        this.state.opositColor = "#dc3545";
        this.forceUpdate()
    }

    lendButton() {
        console.log('Lend mode');
        this.state.mode = "lend";
        this.state.styleMode = "danger";
        this.state.color = "#dc3545";
        this.state.opositColor = "#28a745";
        this.forceUpdate()
    }

    toggle(){
        if(this.state.mode === "borrow")
            this.lendButton();
        else
            this.borrowButton();
    }

    render() {


        return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg={this.state.styleMode} variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav" fill>
                        <Nav>
                            <Nav.Link href="#features" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}><FontAwesomeIcon icon="user" size="lg"/></Nav.Link>
                            <Nav.Link href="#pricing" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}><FontAwesomeIcon icon="bell" size="lg"/></Nav.Link>
                        </Nav>
                        <Nav className="mx-auto" variant="pills" defaultActiveKey="/home">
                            <Nav.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                <Button onClick={this.borrowButton} variant="success"
                                        style={{minWidth: 120}}>Borrow</Button>
                            </Nav.Item>
                            <Nav.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                <Button onClick={this.lendButton} variant="danger" style={{minWidth: 120}}>Lend</Button>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <NavDropdown title={<FontAwesomeIcon icon="cog" size="lg"/>} id="collasible-nav-dropdown"
                                         drop="left"
                                         style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}><FontAwesomeIcon icon="sign-out-alt" size="lg"/></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Row style={{maxWidth: '100%', minHeight:300}}>
                    <Col style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}><div onClick={this.toggle}><FontAwesomeIcon icon="chevron-left" size="6x" color={this.state.opositColor}/></div></Col>
                    <Col xs={6} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>2 of 3 (wider)</Col>
                    <Col style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                    }}><div onClick={this.toggle}><FontAwesomeIcon icon="chevron-right" size="6x" color={this.state.opositColor}/></div></Col>
                </Row>

                {this.state.applicationTile}
            </div>
        );
    }
}

export default MainPage;
