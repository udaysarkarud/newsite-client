import React from "react";
import Header from "../page/Shared/Header/Header";
import Footer from "../page/Shared/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNav from "../page/Shared/LeftNav/LeftNav";
import RightNav from "../page/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav />
          </Col>
          <Col lg={6}>
            <h1>Main content coming soon</h1>
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
