import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import services1 from '../assets/services-1.jpg';
import portrait2 from '../assets/portrait-2.jpg';
import portrait3 from '../assets/portrait-3.jpg';
import portrait4 from '../assets/portrait-4.jpg';
import portrait5 from '../assets/portrait-5.jpg';
import Mypainting from "../components/Mypainting";


const Service = () => {
    return (
        <>
            <section className='bannerc bannerr'>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <h1 className='text-light text-center conb'>SERVICES</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='my-5'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={services1} className='img-fluid mt-5 rounded-3 shadow' alt='services' />
                        </Col>
                        <Col lg='6' className='pe-5'>
                            <h1 className='mt-5'>Service Description</h1>
                            <p className=' text-secondary'>There are always situations that call for more than just a photograph. Have your portrait painted by a really experienced fine artist who can literally paint anything you can dream up! A portrait is a representation of a particular person. Such paintings have always been more than just a record. They have been used to show the power, importance, virtue, beauty, wealth, taste, learning or other important qualities that characterize the sitter. It is one of the best ways to depict a person and show his/her character.</p>
                            <Button variant='outline-warning btn-lg' className='rounded-pill' >Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='my-5'>
                <Container fluid >
                    <Row>
                        <Col lg='4'>
                            <img src={portrait2} className='img-fluid rounded-3 shadow' />
                        </Col>
                        <Col lg='8'>
                            <img src={portrait3} className='img-fluid rounded-3 shadow' />
                            <p className="text-end mt-4 fs-2 text-warning ">Oil on Canvas of a Little Girl</p>
                            <p className="text-end mt-1 fs-5 text-secondary">This portrait was created in 2015 for my brother’s daughter, Emily Morgan.</p>
                        </Col>
                        <Col lg='8 mt-5'>
                            <img src={portrait4} className='img-fluid rounded-3 shadow' />
                            <p className="mt-4 fs-2 text-warning ">Watercolor Portrait</p>
                            <p className="fs-5 text-secondary">Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.</p>
                        </Col>
                        <Col lg='4 mt-5'>
                            <img src={portrait5} className='img-fluid rounded-3 shadow' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Mypainting />
        </>
    )
};

export default Service;