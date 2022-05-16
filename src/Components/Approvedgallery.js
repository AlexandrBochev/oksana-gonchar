import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Modal, ModalHeader, ModalBody, Row, Col, Card } from 'react-bootstrap';
import Slide_1 from '../Img/Approved-slide_1.jpg';
import Slide_2 from '../Img/Approved-slide_2.jpg';
import Slide_3 from '../Img/Approved-slide_3.jpg';

export default function Approvedgallery() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <>
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <Card className="mb-2">
                        <Card.Img
                            variant="center"
                            src={Slide_1}
                            onClick={handleShow}
                            style={{height: '60vh', objectFit: 'cover'}}
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-2">
                        <Card.Img
                            variant="center"
                            src={Slide_2}
                            onClick={handleShow}
                            style={{height: '60vh', objectFit: 'cover'}}
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-2">
                        <Card.Img
                            variant="center"
                            src={Slide_3}
                            onClick={handleShow}
                            style={{height: '60vh', objectFit: 'cover'}}
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose} size="lg">
            <ModalHeader closeButton></ModalHeader>
            <ModalBody>
                <Carousel fade>
                    <Carousel.Item style={{maxHeight: '88vh'}}>
                        <img
                            className="d-flex w-100"
                            src={Slide_1}
                            alt="Slide_1"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{maxHeight: '88vh'}}>
                        <img
                            className="d-block w-100"
                            src={Slide_2}
                            alt="Slide_2"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{maxHeight: '88vh'}}>
                        <img
                            className="d-block w-100"
                            src={Slide_3}
                            alt="Slide_3"
                        />
                    </Carousel.Item>
                </Carousel>
            </ModalBody>
        </Modal>
    </>
)}