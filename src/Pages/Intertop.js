import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Background from '../Img/Intertop-bg.png';
import Task from '../Img/intertop-task-img.jpg';
import Important from '../Img/intertop-important.jpg';
import Сhoose from '../Img/Intertop-choose.png';
import Slide_1 from '../Img/intertop-slide_1.jpg';
import Slide_2 from '../Img/intertop-slide_2.jpg';
import Slide_3 from '../Img/intertop-slide_3.jpg';
import Slide_4 from '../Img/intertop-slide_4.jpg';
import Slide_5 from '../Img/intertop-slide_5.jpg';
import Slide_6 from '../Img/intertop-slide_6.jpg';
import Slide_31 from '../Img/intertop-slide_31.jpg';
import Slide_32 from '../Img/intertop-slide_32.jpg';
import Slide_33 from '../Img/intertop-slide_33.jpg';
import Slide_34 from '../Img/intertop-slide_34.jpg';
import Slide_35 from '../Img/intertop-slide_35.jpg';
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
                            <h1 style={{fontSize: '20px'}}>INTERTOP UKRAINE</h1>
                        </Col>
                        <Col sx={{ order: 12 }}>
                            <p>Агентство</p>
                            <h2 style={{fontSize: '20px'}}>Platforma</h2>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Весенняя кампания для розничных сетей</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>ЗАДАЧА</h3>
                        <hr />
                        <p>Бренд INTERTOP реализовывал ряд эко-проектов в Украине, но это были точечные активности. В этом году компания решила сделать ответственное потребление своей основной стратегией и, в частности, коммуникацией для анонса новой весенней коллекции. Нам нужно было разработать манифест, который отобразит новые ценности, внешнюю рекламу и брендирование магазинов.</p>
                    </div>
                    <br />
                    <Card>
                        <Card.Img variant="center" src={Task} />
                    </Card>
                    <br />
                    <div>
                        <h3>ЧТО МЫ ПРИДУМАЛИ</h3>
                        <hr />
                        <p>Мы все научились не брать пакет на кассе, но от кассы идем с охапкой одноразовых футболок, купленных в горячке скидок. Шерим трогательные фото спасенных коал в Австралии, а затем выбрасываем на помойку приличный свитер вместо того, чтобы пошерить его подружкам. Отовсюду мы слышим об ответственном потреблении, Грета скандирует, что без изменения бытовых привычек природе будет плохо, но нам уже надоело это слушать. Мы в курсе.</p>
                    </div>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Но мы не поняли самого важного: люди и есть природа!</h3>
                            <p>Беспокоиться о природе означает беспокоиться о себе. Покупать меньше, покупать лучше, сделать сознательное потребление привычкой. Беспокоиться о природе — значит, быть экоистами.</p>
                        </Col>
                    </Row>
                    <br />
                    <Card>
                        <Card.Img variant="center" src={Important} />
                    </Card>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>МЫ СОЗДАЛИ МАНИФЕСТ ЭКОИСТА INTERTOP</h3>
                            <p>И разместили его на отдельной платформе. Он содержит пять простых шагов, которые легко можно внедрить в повседневную жизнь. Они помогут людям ответственней относиться к шопингу и заботиться об окружающей среде.</p>
                        </Col>
                    </Row>
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
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_5}
                                    alt="Slide_5"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_6}
                                    alt="Slide_6"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Card>
                        <Card.Img variant="center" src={Сhoose} />
                    </Card>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>МЫ СНЯЛИ СЕРИЮ ВИЖУАЛОВ</h3>
                            <p>которые подчеркивают связь новой коллекции обуви и аксессуаров с экологичной тематикой. Съемку реализовала команда Platforma вместе с фотографом Александрой Серафимович и стилистом Натальей Осадчей.</p>
                        </Col>
                    </Row>
                    <br />
                    <Gallery />
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>В НАРУЖНОЙ РЕКЛАМЕ И БРЕНДИРОВАНИИ МАГАЗИНОВ</h3>
                            <p>Мы использовали эти вижуалы и базовые ценности, которые декларировали в манифесте.</p>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <Carousel fade>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_31}
                                    alt="Slide_31"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_32}
                                    alt="Slide_32"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_33}
                                    alt="Slide_33"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_34}
                                    alt="Slide_34"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={Slide_35}
                                    alt="Slide_35"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <p>О нашей кампании написали многие медиа — глянец и маркетинг, люди шерили постеры в соцсетях. Но самое важное, что мы сделали: дали толчок к образованию комьюнити людей, которые осознанно относятся к шопингу.</p>
                            <br />
                            <h3>МЫ СОЗДАЛИ ДВИЖЕНИЕ ЭКОИСТОВ</h3>
                        </Col>
                    </Row>
                    <br /><br />
                    <Card>
                        <Card.Img variant="center" src={Intertopbottem} />
                    </Card>
                </Container>
            </>
        );
    }
}
