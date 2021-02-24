import React from "react";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from "react-bootstrap";
import { MenuContainer } from "../styles/menu-style";
import Login from "./login"

const Menu: React.FC = () => {
  return (<MenuContainer>
      <Container>
          <Row>
              <Col lg={10}><span><img src="logo.png" /></span> &nbsp; &nbsp; &nbsp; &nbsp;<span>About</span></Col>
              
              <Col><Login /></Col>
          </Row>
      </Container>
     
  </MenuContainer>
  
  )
};
export default Menu;
