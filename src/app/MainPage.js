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
import Item from "./Item";
import Accordion from "react-bootstrap/es/Accordion";
import Fab from "@material-ui/core/es/Fab/Fab";
import AddIcon from '@material-ui/icons/Add';
import Carousel from "react-bootstrap/es/Carousel";


class MainPage extends React.Component {
    state = {
        applicationTile: "BorrowLend",
        index: 0, //0- borrow , 1= lend
        mode: "borrow", //borrow,lend
        styleMode: "success", // borrow=success lend=danger
        color: "#28a745", // borrow = #28a745 lend = #dc3545
        opositColor: "#dc3545",
        direction: "next",
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
        this.state.index = 1;
        this.forceUpdate()
    }

    lendButton() {
        console.log('Lend mode');
        this.state.mode = "lend";
        this.state.styleMode = "danger";
        this.state.color = "#dc3545";
        this.state.opositColor = "#28a745";
        this.state.index = 0;
        this.forceUpdate()
    }

    toggle(e) {
        this.state.direction = "prev";
        if (this.state.mode === "borrow")
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
                            <Nav.Item as={Button} style={{display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 120}} onClick={this.borrowButton} variant="success">
                                Borrow
                            </Nav.Item>
                            <Nav.Item as={Button} style={{display: 'flex', alignItems: 'center', justifyContent: 'center',  minWidth: 120}} onClick={this.lendButton} variant="danger">
                                Lend
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
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="#pricing" style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}><FontAwesomeIcon icon="sign-out-alt" size="lg"/></Nav.Link>
                    </Nav>
                </Navbar>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 20,
                    padding: 0,
                }}>
                    <Fab aria-label="Add" style={{backgroundColor: this.state.color, color: 'white'}}>
                        <AddIcon/>
                    </Fab>
                </div>


                <Carousel controls={false} indicators={false} activeIndex={this.state.index}>
                    <Carousel.Item>
                        <Row style={{
                            maxWidth: '100%', margin: 0,
                            padding: 0,
                        }}>
                            <Col xs={0} sm={2} md={2} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}>
                                <div onClick={this.toggle} className="d-none d-sm-block"><FontAwesomeIcon
                                    icon="chevron-left"
                                    size="5x"
                                    color={this.state.opositColor}/>
                                </div>
                            </Col>
                            <Col xs={12} sm={8} md={8} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}><Accordion style={{
                                width: '100%',
                                margin: 10,
                            }}>
                                <Item id={1}/>
                                <Item id={2}/>
                                <Item id={3}/>
                            </Accordion>
                            </Col>
                            <Col xs={0} sm={2} md={2} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}>
                                <div onClick={this.toggle} className="d-none d-sm-block"><FontAwesomeIcon
                                    icon="chevron-right"
                                    size="5x"
                                    color={this.state.opositColor}/>
                                </div>
                            </Col>
                        </Row>

                        {this.state.applicationTile}
                    </Carousel.Item>


                    <Carousel.Item>
                        <Row style={{
                            minHeight: 200, maxWidth: '100%', margin: 0,
                            padding: 0,
                        }}>
                            <Col xs={0} sm={2} md={2} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}>
                                <div onClick={this.toggle} className="d-none d-sm-block"><FontAwesomeIcon
                                    icon="chevron-left"
                                    size="5x"
                                    color={this.state.opositColor}/>
                                </div>
                            </Col>
                            <Col xs={12} sm={8} md={8} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}><Accordion style={{
                                width: '100%',
                                margin: 10,
                            }}>
                                <Item id={1}/>
                                <Item id={2}/>
                            </Accordion>
                            </Col>
                            <Col xs={0} sm={2} md={2} style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: 0,
                                padding: 0,
                            }}>
                                <div onClick={this.toggle} className="d-none d-sm-block"><FontAwesomeIcon
                                    icon="chevron-right"
                                    size="5x"
                                    color={this.state.opositColor}/>
                                </div>
                            </Col>
                        </Row>

                        {this.state.applicationTile}
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default MainPage;
