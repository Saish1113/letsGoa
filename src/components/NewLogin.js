import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import './NewLogin.css';

const Login = () => {
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-3">
                        <img className="icon-img" src={'../images/renu.png'} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicName">
                                <Form.Control type="Name" placeholder="Enter Name" required />
                            </Form.Group><br></br>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" required/>
                            </Form.Group><br></br>

                            <Button variant="primary btn-block" type="submit">Login</Button>

                            <div className="text-left mt-">
                                <a href="#"><small className="reset">Forgot password ?</small></a>   II
                                <a href="#"><small className="reset ml-2"> Sign Up</small></a>
                            </div>
                        </Form>
                    </Col>

                    <Col lg={8} md={6} sm={12}>
                        <img className="w-100" src={'../images/login.jpeg'} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;