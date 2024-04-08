import React from 'react';
import Header from '../../global/pages/Header'
import Footer from '../../global/pages/Footer'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button, Image } from 'react-bootstrap';
import Slider from "react-slick";
import Accordion from 'react-bootstrap/Accordion';

function HomePageMain() {

  const sliderSettings = {
    centerMode: true,
    arrows: true,
    dots: true,
    centerPadding: '0px',
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
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
                  <p className="text-white mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                  <p className="text-white mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                  <p className="text-white  mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                </div>
              </div>
              <div className="text-center text-lg-start shadow-1-strong rounded mt-4 text-black">
                <div className="card">
                  <div className="card-body">
                    <Row className="row">
                      <Col lg={4} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`} className="rounded-circle img-fluid shadow-1" alt="woman avatar" width="120" height="120" ></Image>
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

      {/* About section */}

      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Image src={`${process.env.PUBLIC_URL}/img/rightImg.png`} alt="textImg" fluid ></Image>
          </Col>
          <Col md={6}>
            <h3 style={{ color: '#153f01' }}>Unlock the Beauty Within your landscape</h3>
            <p className="text_landscape text-secondary mt-3">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
            <p className="text_landscape text-secondary">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
            <div className="iconBox">
              <h6 className=" mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} /> We Are Harmonizing Nature's Symphony
              </h6>
              <h6 className="mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} /> Nature's Artistry Is Our Passion
              </h6>
              <h6 className="mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} /> We Transform Your Yard
              </h6>
            </div>
            <Button className="btn btn-secondary plant px-4 mt-4" style={{ backgroundColor: '#153f01' }}>(415) 000-0000</Button>
            <p className="mt-4">
              <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
              Rated 4.6/5.0 by 238 Happy Customers
            </p>
          </Col>
        </Row>
      </Container>

      {/* End about sec */}

      {/* Servies */}

      <div className="servicesWrapper py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h4 className="sevice_text text-center">
                <span className="plant">
                  <Image src={`${process.env.PUBLIC_URL}/img/leafLeft.png`} alt="leaf"></Image>
                  Services
                  <Image src={`${process.env.PUBLIC_URL}/img/leafright.png`} alt="leaf"></Image>
                </span>
              </h4>
              <h3 className="servicesWrapperHead text-center mb-4" style={{ color: '#153f01' }}>See Our Professional Services</h3>
            </Col>
          </Row>
          <Row className='gap-3'>
            <Col className="imgBox p-0">
              <div className="hovesection p-4">
                <h4>
                  <span className="titlespan">
                    <span className="first-word-asgardia" style={{ color: '#64a507' }}>
                      Unique
                    </span> Residential Landscaping
                  </span>
                </h4>
                <a className="link-image mt-4" title="Unique Residential Landscaping" href="">
                  <Image className="jtcs-image" src={`${process.env.PUBLIC_URL}/img/trees.png`} alt="Unique Residential Landscaping" width="767" ></Image>
                </a>
                <div className="jt-introtext mt-4">
                  Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed outdoor thoughtfully designed outdoor
                </div>
                <p className="readmore mt-4">
                  <a className="jt-readmore" target="_parent" title="Unique Residential Landscaping" href="#">
                    Read More <Image className='btnImg' src={`${process.env.PUBLIC_URL}/img/right-arrow.png`} alt="Right arrow" ></Image>
                  </a>
                </p>
              </div>
            </Col>
            <Col className="imgBox p-0">
              <div className="hovesection p-4">
                <h4>
                  <span className="titlespan">
                    <span className="first-word-asgardia" style={{ color: '#64a507' }}>
                      Unique
                    </span> Residential Landscaping
                  </span>
                </h4>
                <a className="link-image mt-4" title="Unique Residential Landscaping" href="">
                  <Image className="jtcs-image" src={`${process.env.PUBLIC_URL}/img/trees.png`} alt="Unique Residential Landscaping" width="767" ></Image>
                </a>
                <div className="jt-introtext mt-4">
                  Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed outdoor thoughtfully designed outdoor
                </div>
                <p className="readmore mt-4">
                  <a className="jt-readmore" target="_parent" title="Unique Residential Landscaping" href="#">
                    Read More <Image className='btnImg' src={`${process.env.PUBLIC_URL}/img/right-arrow.png`} alt="Right arrow" ></Image>
                  </a>
                </p>
              </div>
            </Col>
            <Col className="imgBox p-0">
              <div className="hovesection p-4">
                <h4>
                  <span className="titlespan">
                    <span className="first-word-asgardia" style={{ color: '#64a507' }}>
                      Unique
                    </span> Residential Landscaping
                  </span>
                </h4>
                <a className="link-image mt-4" title="Unique Residential Landscaping" href="">
                  <Image className="jtcs-image" src={`${process.env.PUBLIC_URL}/img/trees.png`} alt="Unique Residential Landscaping" width="767" ></Image>
                </a>
                <div className="jt-introtext mt-4">
                  Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed outdoor thoughtfully designed outdoor
                </div>
                <p className="readmore mt-4">
                  <a className="jt-readmore" target="_parent" title="Unique Residential Landscaping" href="#">
                    Read More <Image className='btnImg' src={`${process.env.PUBLIC_URL}/img/right-arrow.png`} alt="Right arrow" ></Image>
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* End services */}

      {/* Slider sec */}

      <div className="slider-section pt-5">
        <Container>
          <Row>
            <Col md={3} className="left-content mt-4">
              <h5>Testimonial</h5>
              <h2>What Our Clients Say?</h2>
              <p>Lorem Lorem Lorem LoremLorem Lorem LoremLoremLoremLoremLorem Lorem Lorem Lorem</p>
            </Col>
            <Col md={9} className="right-content position-relative">
              <Slider {...sliderSettings}>
                <div>
                  <Col>
                    <div className="slide-content p-2 m-2 rounded">
                      <div className="inner-block p-2 rounded">
                        <div className="star">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          .</p>
                        <div className="bottom-content d-flex gap-2 position-relative">
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`}></Image>
                          <div className="content">
                            <div className=''>
                              <h5>Client Name</h5>
                              <p>Customer Newyork</p>
                            </div>
                            <div class="bottom-icon">
                              <i class="fa fa-quote-right position-absolute"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
                <div>
                  <Col>
                    <div className="slide-content p-2 m-2 rounded">
                      <div className="inner-block p-2 rounded">
                        <div className="star">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          .</p>
                        <div className="bottom-content d-flex gap-2 position-relative">
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`}></Image>
                          <div className="content">
                            <div className=''>
                              <h5>Client Name</h5>
                              <p>Customer Newyork</p>
                            </div>
                            <div class="bottom-icon">
                              <i class="fa fa-quote-right position-absolute"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
                <div>
                  <Col>
                    <div className="slide-content p-2 m-2 rounded">
                      <div className="inner-block p-2 rounded">
                        <div className="star">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          .</p>
                        <div className="bottom-content d-flex gap-2 position-relative">
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`}></Image>
                          <div className="content">
                            <div className=''>
                              <h5>Client Name</h5>
                              <p>Customer Newyork</p>
                            </div>
                            <div class="bottom-icon">
                              <i class="fa fa-quote-right position-absolute"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
                <div>
                  <Col>
                    <div className="slide-content p-2 m-2 rounded">
                      <div className="inner-block p-2 rounded">
                        <div className="star">
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                          <span className="fa fa-star checked"></span>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          .</p>
                        <div className="bottom-content d-flex gap-2 position-relative">
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`}></Image>
                          <div className="content">
                            <div className=''>
                              <h5>Client Name</h5>
                              <p>Customer Newyork</p>
                            </div>
                            <div class="bottom-icon">
                              <i class="fa fa-quote-right position-absolute"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
      {/* End slider sec */}

      {/* Section FAQ */}

      <div className="faQwrapper py-5 m-5">
        <Container>
          <Row>
            <Col md={5} className="d-flex align-items-center">
              <div>
                <h3 style={{ color: '#153f01' }}>FAQ</h3>
                <p>Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed
                  outdoor thoughtfully designed outdoo</p>
              </div>
            </Col>
            <Col md={7} className='customAccordian'>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      {/* End sec FAQ */}

      <Footer />
    </>
  );
}

export default HomePageMain;
