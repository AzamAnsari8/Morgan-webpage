import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';

const Mypainting = () => {
    // const paintings = [
    //     { img: project1, title: "Sea Storm", description: "This painting is one of my latest works on sea and ocean topics." },
    //     { img: project2, title: "Ruins of Ancient Fortress", description: "When I’ve been to Scotland, I made this painting just in a day." },
    //     { img: project3, title: "Two Lovers", description: "This work was finished in two days for my customers from San Diego, CA, who needed something special." },
    //     { img: project4, title: "Watercolor Portrait", description: "Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did." },
    //     { img: project5, title: "Birches in Autumn", description: "I love painting autumn trees and this work is a perfect example." },
    //     { img: project6, title: "Green Landscape", description: "Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016." },
    // ];
    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col lg='12'>
                        <h1 className='text-center pb-4'>My Paintings</h1>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project1} className="paintingimg" />
                            <Card.Body>
                                <Card.Title className='cardtitle text-warning fs-3'>Sea Storm</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    This painting is one of my latest works on sea and ocean
                                    topics.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project2} className="paintingimg" />
                            <Card.Body >
                                <Card.Title className='cardtitle text-warning fs-3'>Ruins of Ancient Fortress</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    When I’ve been to Scotland, I made this painting just in a day.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project3} className="paintingimg" />
                            <Card.Body>
                                <Card.Title className='cardtitle text-warning fs-3'>Two Lovers</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    This work was finished in two days for my customers from San Diego, CA, who needed something special.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project4} className="paintingimg" />
                            <Card.Body>
                                <Card.Title className='cardtitle text-warning fs-3'>Watercolor Portrait</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project5} className="paintingimg" />
                            <Card.Body>
                                <Card.Title className='cardtitle text-warning fs-3'>Birches in Autumn</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    I love painting autumn trees and this work is a perfect example.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4' className="mb-4">
                        <Card className='shadow h-100'>
                            <Card.Img variant="top" src={project6} className="paintingimg" />
                            <Card.Body>
                                <Card.Title className='cardtitle text-warning fs-3'>Green Landscape</Card.Title>
                                <Card.Text className="text-secondary fs-5">
                                    Another abstract work, which appeared at my last year’s exhibition, Morgan Paintings 2016.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Mypainting;