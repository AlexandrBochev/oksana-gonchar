import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Background from '../Img/timeforfamily-img.jpg';
import Timeforfamilyhand from '../Img/timeforfamily-hand.jpg';
import Timeforfamilyglass from '../Img/timeforfamily-glass.jpg';
import Timeforfamily2518 from '../Img/timeforfamily-2518.png';
import Slide_1 from '../Img/timeforfamily-slide_1.jpg';
import Slide_2 from '../Img/timeforfamily-slide_2.jpg';
import Slide_31 from '../Img/timeforfamily-slide_31.jpg';
import Slide_32 from '../Img/timeforfamily-slide_32.jpg';
import Slide_33 from '../Img/timeforfamily-slide_33.jpg';
import Slide_34 from '../Img/timeforfamily-slide_34.jpg';
import Timeforfamilygallery from '../Components/Timeforfamilygallery'

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
                            <h1 style={{fontSize: '20px'}}>Дім Рональда МакДональда</h1>
                        </Col>
                        <Col sx={{ order: 12 }}>
                            <p>Агентство</p>
                            <h2 style={{fontSize: '20px'}}>Gres Todorchuk PR</h2>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Благотворительный онлайн-магазин</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>О чем этот проект и почему он так важен</h3>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md lg="6">
                            <Card>
                                <Card.Img variant="center" src={Timeforfamilyhand} style={{height: '40vh', objectFit: 'cover'}} />
                            </Card>
                        </Col>
                        <Col md lg="6">
                            <p>Во всем мире Дом Рональна МакДональда открывает Семейные Комнаты в детских больницах. Это место, где родители могут отдохнуть, заночевать, готовить еду, играть с детьми. Тут семья может побыть вместе.<br />У нас это особенно актуально — просто вспомните, как выглядят украинские больницы. Кроме того, в нашей стране только начинают развивать семейно-ориентированный подход к медицине: во всем мире считают, что родители и врачи должны быть партнерами, чтобы ребенок быстрее выздоровел.<br />Для родителей пользование Комнатами бесплатно. Но их содержание стоит немалых денег.<br /><b>Нам нужно было придумать: как собрать на это донейты.</b></p>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                        <Card>
                            <Card.Body><p>Сбор денег через благотворительные смс и онлайн-флешмобы не работает.<br />                                   Самый эффективный инструмент пожертвования — сайт (с) клиент.</p></Card.Body>
                        </Card>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>ПОЭТОМУ МЫ РЕШИЛИ ПРОДАВАТЬ ВРЕМЯ</h3>
                        <hr />
                        <p>То время, которое родители смогут провести в Семейных Комнатах, заботясь о своих детях или просто отдыхая. Время, которое мы "продаем", имеет разную стоимость. Но оно бесценно для родителей.</p>
                    </div>
                    <br />
                    <Card>
                        <Card.Img variant="center" src={Timeforfamilyglass} />
                    </Card>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Все выглядит как в привычном интернет-магазине</h3>
                            <p>Каждая позиция оформлена как обычный товар: есть описание, цена (ее мы, кстати, посчитали исходя из стоимости содержания Комнат). Вместо кнопки "купить" вы дарите время. И даже видеообзоры от блогеров тоже тут — ну, вдруг вы сомневаетесь в выборе.</p>
                        </Col>
                    </Row>
                    <br /><br /><br />
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
                    </Carousel>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Мы превратили шопоголиков в доброголиков</h3>
                            <p>Ведь, покупая это виртуальное время, вы конвертируете его в реальную помощь — даете родителям возможность почувствовать себя людьми и побыть с детьми.</p>
                        </Col>
                    </Row>
                    <br /><br />
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
                    </Carousel>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>На главной странице сайта есть часы</h3>
                            <p>Вместо привычного счетчика о пожертвах он показывает в режиме онлайн, сколько бесценного времени уже подарили семьям.</p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Card>
                        <Card.Img variant="center" src={Timeforfamily2518} />
                    </Card>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Мы добавили отзывы реальных семей, для которых Комнаты были очень ценными</h3>
                            <p>Эти трогательные истории помогли нам создать виральный контент, который стимулировал пользователей делать донейты.</p>
                        </Col>
                    </Row>
                    <br />
                    <Timeforfamilygallery />
                </Container>
            </>
        );
    }
}
