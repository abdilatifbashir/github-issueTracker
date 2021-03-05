import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { MenuContainer } from "../styles/menu-style";
import Login from "./login";

const Menu: React.FC = () => {
  return (
    <MenuContainer>
      <Container>
        <Row>
          <Col lg={2} xs={4}>
            <Link to="/">
              <span>
                <img src="logo.png" alt="logo" />
              </span>{" "}
            </Link>
          </Col>
          <Col lg={9} xs={6} className="about">
            <span>About</span>
          </Col>

          <Col lg={1} xs={2}>
          
            <Link to="/login"><Button>Login</Button></Link>
          </Col>
        </Row>
      </Container>
    </MenuContainer>
  );
};
export default Menu;
