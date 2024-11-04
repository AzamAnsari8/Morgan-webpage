import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <section className='bg-dark mt-5'>
            <Container>
                <Row className='py-3'>
                    <Col lg='6'>
                        <p className='fs-6 pt-3 text-light'>&copy;Copyright All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;
