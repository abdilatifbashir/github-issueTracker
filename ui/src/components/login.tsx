import React from "react";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import { LoginContainer } from "../styles/login-style";
import Form from 'react-bootstrap/Form'

const Login: React.FC = () => {
  
    return <LoginContainer>
        <Container>
            <Row>
                <Col>
                <h3>Github authorization</h3>
                </Col>
            </Row>
           
        </Container>
    </LoginContainer>
};
export default Login;
