import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";


export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        window.location.assign("/");
    };

    render() {
        return (
            <div className="Login"
                 style={{
                     padding: "60px 0",
                     margin: "0 auto",
                     maxWidth: "320px",
                 }}>
                <h1 className="d-flex justify-content-center" style={{paddingBottom:"30px"}}>Sign in</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email" bsSize="large">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        block
                        bsSize="large"
                        type="submit"
                    >
                        Login
                    </Button>
                </Form>
                <div className="card-footer" style={{backgroundColor: "white"}}>
                    <div className="d-flex justify-content-center links">
                        Don't have an account? <a href="#"> Sign Up</a>
                    </div>
                    <div className="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        );
    }
}