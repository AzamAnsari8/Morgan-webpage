import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import still from '../assets/still-life-1.jpg';
import Mypainting from '../components/Mypainting';

const About = () => {
    return (
        <>
            <section className='bannerc bannerr'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1 className='text-light text-center conb'>ABOUT</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col lg='7' className=''>
                            <h1 className='mt-5'>A Few Words About Me</h1>
                            <p className='mt-5 fs-5 text-secondary'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character. I am always ready to meet all your wishes and preferences in your portrait, whether it’s created as a personal painting or a piece of art for an official person. Contact me today to discuss your future portrait.F</p>
                            <Button variant='outline-warning btn-lg' className='rounded-pill' >Learn More</Button>
                        </Col>
                        <Col lg='5'>
                            <img src={still} className='img-fluid mt-5 rounded-4 shadow float-end' alt='still' />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Mypainting />
        </>
    )
};

export default About