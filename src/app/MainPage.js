import React from "react";
import Route from "react-router-dom/es/Route";
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavDropdown from "react-bootstrap/es/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome/index.es";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons/index";
import Button from "react-bootstrap/es/Button";


class MainPage extends React.Component {
    state = {
        applicationTile: "BorrowLend",
    };

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" fill>
                        <Nav>
                            <Nav.Link href="#features"><FontAwesomeIcon icon="user" size="lg" /></Nav.Link>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon="bell" size="lg" /></Nav.Link>
                        </Nav>
                        <Nav className="mx-auto" variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Button variant="success" style={{minWidth:120}}>Borrow</Button>
                            </Nav.Item>
                            <Nav.Item>
                                <Button variant="danger" style={{minWidth:120}}>Lend</Button>
                            </Nav.Item>
                        </Nav>
                        <Nav >
                            <NavDropdown title={<FontAwesomeIcon icon="cog" size="lg" />} id="collasible-nav-dropdown" drop="left" >
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing"><FontAwesomeIcon icon="sign-out-alt" size="lg" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.state.applicationTile}
            </div>
        );
    }
}

export default MainPage;
