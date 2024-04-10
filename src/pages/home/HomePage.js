import React, { useState } from 'react';
import Header from '../../global/pages/Header'
import Footer from '../../global/pages/Footer'
import { Container, Row, Col } from 'react-bootstrap';
import { Form, Button, Image } from 'react-bootstrap';
import Slider from "react-slick";
import { toast } from 'react-toastify';
import Accordion from 'react-bootstrap/Accordion';
import http from '../../https';
import Spinner from 'react-bootstrap/Spinner';

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

  const sliderSettingsLogo = {
    centerMode: true,
    arrows: false,
    dots: false,
    centerPadding: '0px',
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      }
    ]
  };

  const [dataFormMain, setDataMain] = useState({
    services: 'treeCutting',
    soon_services_do_you_need: '',
    userEmail: '',
    userName: '',
    userPhoneNumber: '',
  });

  const [loading, setLoading] = useState(false);

  const treeServiesNeed = (event) => {
    setDataMain({ ...dataFormMain, services: event.target.value });
  };

  const needServices = (event) => {
    setDataMain({ ...dataFormMain, soon_services_do_you_need: event.target.value });
  };

  const userEmail = (event) => {
    setDataMain({ ...dataFormMain, userEmail: event.target.value });
  };

  const userName = (event) => {
    setDataMain({ ...dataFormMain, userName: event.target.value });
  };

  const userPhone = (event) => {
    setDataMain({ ...dataFormMain, userPhoneNumber: event.target.value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /*const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  }*/

  const handelSubmitmain = async (event) => {
    event.preventDefault();
    if (!dataFormMain.userName || !dataFormMain.services || !dataFormMain.soon_services_do_you_need || !dataFormMain.userEmail || !dataFormMain.userPhoneNumber) {
      toast.error('Please fill all fields.');
    } else if (!isValidEmail(dataFormMain.userEmail)) {
      toast.error('Please enter a valid email address.');
    } else {
      setLoading(true);
      try {
        const response = await http.post('/send-email', dataFormMain);
        if (response.data && response.data.message) {
          toast.success(response.data.message);
          setDataMain({
            ...dataFormMain,
            services: 'treeCutting',
            soon_services_do_you_need: '',
            userEmail: '',
            userName: '',
            userPhoneNumber: '',
          });
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error('An error occurred. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    }
  }

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
      <div className='bannerBg'>
        <div className="bg-hero py-5">
          <Container>
            <Row>
              <Col md={7}>
                <div className="top-text">
                  <p className="text-white">
                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
                    Rated 4.6/5.0 by 238 Happy Customers
                  </p>
                  <h3 className="text-white">Value Proposnon Featuring Benefit </h3>
                  <p className="heroText text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <div className="iconBox">
                    <p className="text-white mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                    <p className="text-white mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                    <p className="text-white  mb-0"><Image src={`${process.env.PUBLIC_URL}/img/checked.png`} alt="Check"></Image>Text ever since the 1500s,</p>
                  </div>
                </div>
                <div className="text-center text-lg-start shadow-1-strong rounded mt-4 text-black d-md-block d-none">
                  <div className="card">
                    <div className="card-body">
                      <Row>
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
              <Col md={5} className="pt-0 formLeft">
                <Form onSubmit={handelSubmitmain}>
                  <h4 className="text-black">FREE Instant Quote Plus Special Bonus Coupon</h4>
                  <Form.Group className="mb-3 text-black">
                    <Form.Label>Tree Services Needed</Form.Label>
                    <Form.Control as="select" id="selectField" name="selectField" onChange={treeServiesNeed}>
                      <option value="treeCutting">Tree Cutting</option>
                      <option value="totalCare">Total Care</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-black">How soon do you need our services?</Form.Label><br></br>
                    <Form.Check inline label="In 2 days" checked={dataFormMain.soon_services_do_you_need === "2days"} onChange={needServices} type="radio" id="radio1" name="radioGroup" value="2days" ></Form.Check>
                    <Form.Check inline label="In 1 week" checked={dataFormMain.soon_services_do_you_need === "1week"} onChange={needServices} type="radio" id="radio2" name="radioGroup" value="1week" ></Form.Check>
                    <Form.Check inline label="In 2 weeks" checked={dataFormMain.soon_services_do_you_need === "2weeks"} onChange={needServices} type="radio" id="radio3" name="radioGroup" value="2weeks" ></Form.Check>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" onChange={userName} id="nameField" value={dataFormMain.userName} name="nameField" placeholder="Enter your name" ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="email" id="emailField" onChange={userEmail} value={dataFormMain.userEmail} name="emailField" placeholder="Enter your email address" ></Form.Control>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control type="tel" id="phoneField" onChange={userPhone} value={dataFormMain.userPhoneNumber} name="phoneField" placeholder="Enter your phone number" ></Form.Control>
                  </Form.Group>
                  <Button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#153f01', borderColor: '#153f01', height: "40px" }}>
                    {loading ? (
                      <Spinner animation="border" size="sm" />
                    ) : (
                      <span>Submit</span>
                    )}
                  </Button>
                </Form>
                <div className="text-center text-lg-start shadow-1-strong rounded mt-4 text-black d-md-none">
                  <div className="card">
                    <div className="card-body">
                      <Row>
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
            </Row>
          </Container>
        </div>
      </div>
      {/* End Banner section */}

      {/* Recommended by */}

      <div className="slider-image-section py-2" style={{ backgroundColor: "#e6e6e6" }}>
        <Container>
          <Row className='align-items-center'>
            <Col md={3}>
              <div className="slide-content">
                <h4>As recommended by:</h4>
              </div>
            </Col>
            <Col md={9}>
              <Slider {...sliderSettingsLogo}>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
                <div>
                  <Image className='w-100 logoSlider' src={`${process.env.PUBLIC_URL}/img/dummy-logo-08.png`} alt="Logo"></Image>
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>


      {/* End recommended by */}

      {/* About section */}

      <Container className="my-5">
        <Row>
          <Col md={6}>
            <Image src={`${process.env.PUBLIC_URL}/img/rightImg.png`} alt="textImg" className='w-100'></Image>
          </Col>
          <Col md={6}>
            <h3 style={{ color: '#153f01' }}>Unlock the Beauty Within your landscape</h3>
            <p className="text_landscape mt-3">
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
            <p className="text_landscape">
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
              a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'.
            </p>
            <div className="iconBox">
              <h6 className=" mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} alt="check"></Image> We Are Harmonizing Nature's Symphony
              </h6>
              <h6 className="mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} alt="check"></Image> Nature's Artistry Is Our Passion
              </h6>
              <h6 className="mb-2" style={{ color: '#153f01' }}>
                <Image src={`${process.env.PUBLIC_URL}/img/check.png`} alt="check"></Image> We Transform Your Yard
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

      <div className="slider-section py-5 mt-5">
        <Container>
          <Row>
            <Col md={3} className="left-content mt-4">
              <h5>Testimonial</h5>
              <h2>What Our Clients Say?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
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
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`} alt="clientimage"></Image>
                          <div className="content">
                            <div className=''>
                              <h5 className='m-0'>Client Name</h5>
                              <p className='m-0'>Customer Newyork</p>
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
                              <h5 className='m-0'>Client Name</h5>
                              <p className='m-0'>Customer Newyork</p>
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
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`} alt="Clinet image"></Image>
                          <div className="content">
                            <div className=''>
                              <h5 className='m-0'>Client Name</h5>
                              <p className='m-0'>Customer Newyork</p>
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
                          <Image src={`${process.env.PUBLIC_URL}/img/clientimg.webp`} alt="client image"></Image>
                          <div className="content">
                            <div className=''>
                              <h5 className='m-0'>Client Name</h5>
                              <p className='m-0'>Customer Newyork</p>
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

      <div className="faQwrapper py-5 ">
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
