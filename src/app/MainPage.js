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
        mode: "borrow", //borrow,lend
        styleMode: "success" // borrow=success lend=danger
    };

    constructor(props) {
        super(props);
        this.borrowButton = this.borrowButton.bind(this);
        this.lendButton = this.lendButton.bind(this);

    }


    borrowButton(e) {
        e.preventDefault();
        console.log('Borrow mode');
        this.state.mode = "borrow";
        this.state.styleMode = "success";
        this.forceUpdate()
    }

    lendButton(e) {
        e.preventDefault();
        console.log('Lend mode');
        this.state.mode = "lend";
        this.state.styleMode = "danger";
        this.forceUpdate()
    }

    render() {


        return (
            <div>
                <Navbar collapseOnSelect expand="sm" bg={this.state.styleMode} variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" fill>
                        <Nav>
                            <Nav.Link href="#features" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}} ><FontAwesomeIcon icon="user" size="lg"/></Nav.Link>
                            <Nav.Link href="#pricing" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}} ><FontAwesomeIcon icon="bell" size="lg" /></Nav.Link>
                        </Nav>
                        <Nav className="mx-auto" variant="pills" defaultActiveKey="/home">
                            <Nav.Item style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
                                <Button onClick={this.borrowButton} variant="success" style={{minWidth:120}}>Borrow</Button>
                            </Nav.Item>
                            <Nav.Item style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
                                <Button onClick={this.lendButton} variant="danger" style={{minWidth:120}}>Lend</Button>
                            </Nav.Item>
                        </Nav>
                        <Nav >
                            <NavDropdown title={<FontAwesomeIcon icon="cog" size="lg" />} id="collasible-nav-dropdown" drop="left" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing" style={{display: 'flex',alignItems: 'center', justifyContent: 'center',}}><FontAwesomeIcon icon="sign-out-alt" size="lg" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                {this.state.applicationTile}
            </div>
        );
    }
}

export default MainPage;
