import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import envelope from '../assets/envelope.png';
import phone from '../assets/phone.png';
import building from '../assets/building.png';


const Contact = () => {
    return (
        <>
            <section className='bannerc bannerr'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1 className='text-light text-center conb'>CONTACT</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='mt-5'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <h1>Get in Touch</h1>
                            <Form>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="email" placeholder="Enter Email address" />
                                </Form.Group>
                                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Control type="number" placeholder="Your Mobile Number" />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Your Message"
                                        rows={3}
                                    />
                                </Form.Group>
                                <Button variant="outline-warning btn-lg">
                                    Send Message
                                </Button>
                            </Form>
                        </Col>
                        <Col lg='6'>
                            <h1>Our Address</h1>
                            <div><img src={building} alt='building' /> <small>2130 Fulton Street, San Diego, CA 94117-1080 USA</small></div><br />
                            <span><img src={phone} alt='phone' /> <small>1-800-1234-567</small></span><br /><br />
                            <span><img src={envelope} alt='envelope' /></span> <small>info@demolink.org</small><br />
                            <iframe className='mt-4' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13416.347073766989!2d-117.17785346036119!3d32.789958517302416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d955516221f3ef%3A0xa10590ef3f2cee7e!2sgcaeo!5e0!3m2!1sen!2sin!4v1730479079276!5m2!1sen!2sin" title='Loaction' width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact