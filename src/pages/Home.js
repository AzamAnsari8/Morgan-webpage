import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Mypainting from '../components/Mypainting';
import brand from '../assets/brand-inverse.png';
import home from "../assets/home.jpg";
import user from '../assets/user.png';
import leaf from '../assets/leaf.png';
import house from '../assets/house.png';
import apple from '../assets/apple-logo.png';



const Home = () => {
    return (
        <>
            <section className='banner bannerr'>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <img src={brand} className=' brand' alt='brand' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <h1 className='mt-5'>A Few Words About Me</h1>
                            <p className='mt-5 fs-5 text-secondary'>My name is Samantha Morgan, and I have been a fine artist since my youth.
                                I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations.
                                I strongly believe that art is a global form of communication.
                                It educates visually by either moving you, pleasing you, or even inspiring you.</p>
                            <Button variant='outline-warning btn-lg' className='rounded-pill' >Learn More</Button>
                        </Col>
                        <Col lg='6'>
                            <img src={home} className='mt-5 rounded-3 shadow img-fluid' alt='home' />
                        </Col>
                    </Row>
                </Container>
            </section>

            <Mypainting />

            <section className='mt-5'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h1>Services</h1>
                            <p className='fs-5 text-secondary'>If you are looking for custom paintings, which will decorate your home or office,
                                consider booking one or several of<br /> my services listed below.
                                They will add more colors and emotions to your daily life.</p>
                        </Col>
                        <Col lg='3' sm="12" className='boxmargin mt-5'>
                            <div className='box rounded shadow'>
                                <div className='text-center my-5 py-5'>
                                    <img src={user} alt='user' />
                                    <h3>Portrait</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' sm="12" className='boxmargin mt-5'>
                            <div className='box rounded shadow'>
                                <div className='text-center my-5 py-5'>
                                    <img src={leaf} alt='leaf' />
                                    <h3>Portrait</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' sm="12" className='boxmargin mt-5'>
                            <div className='box rounded shadow'>
                                <div className='text-center my-5 py-5'>
                                    <img src={apple} alt='apple' />
                                    <h3>Portrait</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg='3' sm="12" className='boxmargin mt-5'>
                            <div className='box rounded shadow'>
                                <div className='text-center my-5 py-5'>
                                    <img src={house} alt='house' />
                                    <h3>Portrait</h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg='12' className='text-center mt-5'>
                            <Button variant='outline-dark btn-lg' className='rounded-pill viewbtn'>View All Services</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Home;