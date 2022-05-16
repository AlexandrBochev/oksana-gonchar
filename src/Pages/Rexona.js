import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Background from '../Img/rexona-img.jpg';
import Rexonafit from '../Img/rexona-fit.jpg';
import Rexonasite from '../Img/rexona-site.png';
import Сhoose from '../Img/Intertop-choose.png';
import Slide_1 from '../Img/rexona-slide_1.jpg';
import Slide_2 from '../Img/rexona-slide_2.jpg';
import Slide_3 from '../Img/rexona-slide_3.jpg';
import Slide_4 from '../Img/rexona-slide_4.jpg';
import Intertopbottem from '../Img/intertop-bottem.jpg';
import Gallery from '../Components/Gallery'

export default class Home extends Component {
    render () {
        return (
            <>
                <div className="mb-4" style={{
                    backgroundImage:`url(${Background})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition: "center",
                    paddingTop: '48vh',
                    height: '92vh'
                    }}>
                </div>
                <Container>
                    <Row style={{textAlign: 'center'}}>
                        <Col sx>
                            <p>Клиент</p>
                            <h1 style={{fontSize: '20px'}}>Unilever, Rexona</h1>
                        </Col>
                        <Col sx={{ order: 12 }}>
                            <p>Агентство</p>
                            <h2 style={{fontSize: '20px'}}>Engine</h2>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>#меніліньки</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>Challenge</h3>
                        <hr />
                        <p>Rexona всегда поддерживала территорию активного образа жизни. Нам предстояло в очередной раз мотивировать людей заниматься спортом. Но это и так делают куча брендов, коучей и даже ваши друзья в Instagram. Все вокруг просто кричат о спорте и ЗОЖ.</p>
                    </div>
                    <br /><br />
                    <Row className="justify-content-md-center">
                        <Col md lg="4">
                            <Card>
                                <Card.Img variant="center" src={Rexonafit} />
                            </Card>
                        </Col>
                        <Col md lg="4">
                            <h3>запишись в спортзал давай побегаем всего три километра ты потом втянешься нужны упругие ягодицы все любят спорт хотя бы йогу попробуй офис бежит марафон мы подарим тебе абонемент это весело бегай приседы пресс потей</h3>
                        </Col>
                    </Row>
                    <br /><br />
                    <div>
                        <h3>Idea</h3>
                        <hr />
                        <p>Мы решили, что не будем заставлять людей бегать. Rexona попотеет вместо них!<br />Взамен на то, что люди честно признаются, почему им лень заниматься спортом.</p>
                    </div>
                    <br /><br /><br />
                    <Card>
                        <Card.Img variant="center" src={Rexonasite} />
                    </Card>
                    <br />
                    <div>
                        <h3>Execution</h3>
                        <hr />
                        <p>Cайт, на котором пользователи могли рассказать, почему им лень заниматься спортом. Взамен мы пообещали пробежать двойную дистанцию за тех, кто оставит самые интересные отмазки, на киевском Пробеге под каштанами (Rexona уже традиционно его главный спонсор). Собрали команду Rexona Run Club: она состояла из селебрити, профессиональных спортсменов и представителей бренда. За две недели получили 3600 отмазок! Самые интересные напечатали на футболках для членов команды - и побежали. Потеть за себя, и за всех, кому лень встать с дивана.</p>
                    </div><br /><br />
                    <br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_1}
                                    alt="Slide_1"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_2}
                                    alt="Slide_2"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_3}
                                    alt="Slide_3"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_4}
                                    alt="Slide_4"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>Results</h3>
                        <hr />
                        <p>Медиаохват кампании составил больше 4 миллионов пользователей.</p>
                    </div>
                </Container>
            </>
        );
    }
}
