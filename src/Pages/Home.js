import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Background from '../Img/Background-invert-gray.jpg';
import Intertop from '../Img/intertop-img.jpg';
import Rexona from '../Img/rexona-img.jpg';
import Approved from '../Img/approved-img.png';
import Timeforfamily from '../Img/timeforfamily-img.jpg';
import Lactalis from '../Img/lactalis-img.jpg';
import Unicef from '../Img/unicef-img.png';
import Parklakecity from '../Img/parklakecity-image.png';
import Hyundai from '../Img/hyundai-img.jpg';
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    render () {
        return (
            <>
                <div className="mb-4" style={{
                        backgroundImage:`url(${Background})`,
                        backgroundRepeat:"no-repeat",
                        backgroundSize:"cover",
                        backgroundPosition: "right",
                        paddingTop: '48vh',
                        height: '108vh'
                    }}>
                    <Container>
                        <Row>
                            <Col sm={9} style={{color: '#fff'}}>
                                <h1 style={{fontSize: '6.2vh'}}>Оксана Гончар</h1>
                                <p style={{fontSize: '3vh', color: '#fff'}}>Привет, я копирайтер. Придумываю и пишу, чтобы люди полюбили ваш продукт или услугу. Мне нравится, когда креатив или тексты помогают бизнесу расти и приносят обществу пользу.</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Intertop} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Манифест экоиста INTERTOP</Card.Title>
                                    <Card.Text>WEDNESDAY, APRIL 15</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/intertop">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Rexona} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Rexona #меніліньки</Card.Title>
                                    <Card.Text>MONDAY, DECEMBER 10</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/rexona">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Approved} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>ЗУХВАЛІ</Card.Title>
                                    <Card.Text>FRIDAY, MAY 1</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/approved">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Timeforfamily} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>#ГодиниДляРодини</Card.Title>
                                    <Card.Text>THURSDAY, APRIL 23</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/timeforfamily">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Lactalis} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Молочка без заморочки</Card.Title>
                                    <Card.Text>WEDNESDAY, DECEMBER 25</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/lactalis">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Unicef} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>UNICEF, нацпромо по вакцинации</Card.Title>
                                    <Card.Text>THURSDAY, DECEMBER 26</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/unicef">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Parklakecity} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Вудкомен для Park Lake City</Card.Title>
                                    <Card.Text>THURSDAY, JUNE 13</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/parklakecity">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={Hyundai} style={{height: '354px', objectFit: 'cover'}} />
                                <Card.Body>
                                    <Card.Title>Hyundai Santa Fe Launch</Card.Title>
                                    <Card.Text>MONDAY, DECEMBER 10</Card.Text>
                                    <hr />
                                    <div className="d-flex justify-content-end">
                                        <Button href="/hyundai">Подробнее</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
