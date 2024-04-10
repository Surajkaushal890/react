import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

function FloatingBtn() {
    return (
        <>
            <div className='btnFloating position-fixed w-100' style={{zIndex:"9999", bottom:"10px"}}>
                <Container>
                    <Row>
                        <Col md={12} className='text-center'>
                            <a href="tel:4150000000" className="btn btn-secondary plant px-5 py-2 mt-4 text-center" style={{ backgroundColor: '#153f01' }}>
                                <span></span>
                                (415) 000-0000
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default FloatingBtn;
