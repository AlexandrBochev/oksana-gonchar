import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, Modal, ModalHeader, ModalBody, Row, Col, Card } from 'react-bootstrap';
import Slide_21 from '../Img/intertop-slide_21.jpg';
import Slide_22 from '../Img/intertop-slide_22.jpg';
import Slide_23 from '../Img/intertop-slide_23.jpg';

export default function Gallery() {

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
                            src={Slide_21}
                            onClick={handleShow}
                            style={{height: '60vh', objectFit: 'cover'}}
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-2">
                        <Card.Img
                            variant="center"
                            src={Slide_22}
                            onClick={handleShow}
                            style={{height: '60vh', objectFit: 'cover'}}
                        />
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-2">
                        <Card.Img
                            variant="center"
                            src={Slide_23}
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
                            className="d-block w-100"
                            src={Slide_21}
                            alt="Slide_21"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{maxHeight: '88vh'}}>
                        <img
                            className="d-block w-100"
                            src={Slide_22}
                            alt="Slide_22"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{maxHeight: '88vh'}}>
                        <img
                            className="d-block w-100"
                            src={Slide_23}
                            alt="Slide_23"
                        />
                    </Carousel.Item>
                </Carousel>
            </ModalBody>
        </Modal>
    </>
)}