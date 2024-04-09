import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footermain py-5" style={{ backgroundColor: '#153f016b' }}>
                    <Container>
                        <Row>
                            <Col>
                                <h3 className="servicesWrapperHead text-center mb-4" style={{ color: '#153f01' }}>See Our Professional Services</h3>
                                <p className="text-center">Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed
                                    outdoor thoughtfully designed outdoo Illuminate your landscape's all beauty while enhancing safety and security with thoughtfully designed
                                    outdoor thoughtfully designed outdooIlluminate your landscape's all beauty while enhancing safety and security with thoughtfully designed
                                    outdoor thoughtfully designed outdoo</p>
                                <p className="text-black text-center mt-3">
                                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span> Rated 4.6/5.0 by 238 Happy Customers
                                </p>
                                <Col md={12} className='text-center'>
                                    <a href="tel:4150000000" className="btn btn-secondary plant px-4 mt-4 text-center" style={{ backgroundColor: '#153f01' }}>
                                        <span></span>
                                        (415) 000-0000
                                    </a>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}

export default Footer;