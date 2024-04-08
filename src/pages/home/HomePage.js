import React from 'react';
import Header from '../../global/pages/Header'
import Footer from '../../global/pages/Footer'
import { Container, Row, Col } from 'react-bootstrap';

function HomePageMain() {
  return (
    <>
      <Header />

      {/* Contact number section */}
      <Container fluid className="bg-contactnumb pt-2">
        <Row>
          <Col xs={12} md={{ span: 4, offset: 4 }} className="treeContent text-center">
            <h3 className="text-white">City Tree Service</h3>
            <h2 className="phoneNumb">(415) 000 000</h2>
            <div className="headBorder"></div>
          </Col>
        </Row>
      </Container>
      {/* Contact number section close */}

      {/* Banner section */}
      <section className="bg-hero py-5">
        <Container>
          <Row>
            <Col md={7}>
              <div className="top-text">
                <p className="text-white">
                  <span className="text-warning">&starf; &starf; &starf; &bigstar; &star; </span> 
                  Rated4.6/5.0 by 238 Happy Customers
                </p>
                <h3 className="text-white">Value Proposnon Featuring Benefit </h3>
                <p className="heroText text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                  <div className="iconBox">
                    <p className="text-white mb-0"><img src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></img>Text ever since the 1500s,</p>
                    <p className="text-white mb-0"><img src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></img>Text ever since the 1500s,</p>
                    <p className="text-white  mb-0"><img src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></img>Text ever since the 1500s,</p>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Banner section */}

      <Footer />
    </>
  );
}

export default HomePageMain;
