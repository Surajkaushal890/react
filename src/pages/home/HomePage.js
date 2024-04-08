import React from 'react';
import Header from '../../global/pages/Header'
import Footer from '../../global/pages/Footer'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

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
      <div className="bg-hero py-5">
        <Container>
          <Row>
            <Col md={7}>
              <div className="top-text">
                <p className="text-white">
                  <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
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
              <div className="text-center text-lg-start shadow-1-strong rounded mt-4 text-black">
                <div className="card">
                  <div className="card-body">
                    <Row className="row">
                      <Col lg={4} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src={`${process.env.PUBLIC_URL}/img/clientimg.webp`} className="rounded-circle img-fluid shadow-1" alt="woman avatar" width="120" height="120" />
                      </Col>
                      <Col lg={8}>
                        <p className="text-muted fw-light mb-2 text-black"> Id quamapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam.</p>
                        <p className="fw-bold lead mb-2"><strong>Anna Smith</strong></p>
                        <p className="text-warning m-0">&#9733; &#9733; &#9733; &#9733; &#9734;</p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={5} className="p-5 pt-0 formLeft">
              <Form>
                <h4 className="text-black">FREE Instant Quote Plus Special Bonus Coupon</h4>
                <Form.Group className="mb-3 text-black">
                  <Form.Label>Tree Services Needed</Form.Label>
                  <Form.Control as="select" id="selectField" name="selectField">
                    <option selected>Tree Services Needed</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-black">How soon do you need our services?</Form.Label><br></br>
                  <Form.Check inline label="Radio 1" type="radio" id="radio1" name="radioGroup" value="radio1" ></Form.Check>
                  <Form.Check inline label="Radio 2" type="radio" id="radio2" name="radioGroup" value="radio2" ></Form.Check>
                  <Form.Check inline label="Radio 3" type="radio" id="radio3" name="radioGroup" value="radio3" ></Form.Check>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="text" id="nameField" name="nameField" placeholder="Enter your name" required ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" id="emailField" name="emailField" placeholder="Enter your email address" required ></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="tel" id="phoneField" name="phoneField" placeholder="Enter your phone number" required ></Form.Control>
                </Form.Group>
                <Button type="submit" className="btn btn-primary w-100">Submit</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      {/* End Banner section */}

      <Footer />
    </>
  );
}

export default HomePageMain;
