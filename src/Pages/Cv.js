import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Background from '../Img/cv.png';
import Checkbox from '../Img/svg/checkbox-icon-blue.svg';
import Trening from '../Img/cv-trening.png';

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
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h1>Мой опыт работы</h1>
                        </Col>
                    </Row>
                    <br /><br />
                    <Card>
                        <Card.Body>
                            <Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>Период</th>
                                        <th>Должность</th>
                                        <th>Ответственность</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Декабрь 2018 – по сегодня</td>
                                        <td>Независимый креативный консультант</td>
                                        <td>Консультирую бизнес и общественные организации по разработке коммуникационных стратегий, креативу (ДТЕК, строительная компания DIM, LABA, Intertop). Сотрудничаю как креативный копирайтер с европейскими организациями UNIСEF, GoTogether – Европейський Простір, Home of Europe.</td>
                                    </tr>
                                    <tr>
                                        <td>Август 2018 – декабрь 2018</td>
                                        <td>NSG Agency, Сreative Group Head</td>
                                        <td>Менеджмент креативного отдела агентства, разработка и сопровождение креативных digital-проектов, развитие new business направления. Основные клиенты: Unilever, Henkel, BAT.</td>
                                    </tr>
                                    <tr>
                                        <td>Май 2016 – август 2018</td>
                                        <td>NGN, Senior Copywriter</td>
                                        <td>Подготовка тендерных предложений, коммуникационных стратегий (контентная составляющая), ведение текущих проектов по креативу, а также менторство младших копирайтеров, фрилансеров. Основные клиенты: PepsiCo, Pernod Ricard (Jameson, Becherovka, Ballantine's), Unilever (Axe, Rexona), Karlsberg Ukraine (ТМ Tuborg, Garage, Квас Тарас), Roshen, Ferrero, Нестле Фуд Казахстан, ТМ LIMO, KABANOSY</td>
                                    </tr>
                                    <tr>
                                        <td>Март 2014 – ноябрь 2015</td>
                                        <td>SPN Comms, Senior Copywriter</td>
                                        <td>Организация работы копирайтеров и фрилансеров агентства, написание рекламных и PR-текстов, разработка контентных стратегий, креативных идей и активаций. Основные клиенты: MTI Fashion, «Новые Продукты» (бренды REVO, APPS, NON-STOP, MOJO), МАУ, Укртелеком, Киевстар, Баядера Логистик, P&G, Novartis, Shell, Canon.</td>
                                    </tr>
                                    <tr>
                                        <td>Июнь 2011 – март 2014</td>
                                        <td>CMBGroup, Copywriter</td>
                                        <td>Написание рекламных текстов, имиджевых и PR-материалов, разработка PR-стратегий, полное PR-сопровождение текущих клиентов (строительная компания НБК, финансово-розничная сеть «КредитМаркет»).</td>
                                    </tr>
                                    <tr>
                                        <td>2007 – 2011</td>
                                        <td>журналист</td>
                                        <td>Телеканал «Сити», медиахолдинг «1+1», журналист теленовостей<br />Интернет-издание «Багнет», журналист, редактор ленты новостей<br />Газета «Вечерний Киев», обозреватель отдела «Город»<br />Коммуникационная группа «ESG», журналист теленовостей<br />ТК «Мегаспорт», литературный редактор<br />«Газета по-украински», фрилансер-журналист спортивного отдела</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={6}>
                            <h3>Что я хорошо умею делать кроме креатива</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md={6}>
                            <Table>
                                <tbody>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <p>Работаю системно и могу организовать работу копирайтеров, фрилансеров.</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <p>Умею и люблю презентовать идеи, у меня хорошие ораторские навыки.</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <p>Выступаю на профильных мероприятиях как лектор (копирайтинг, сторителлинг).</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <p>Благодаря журналистскому бекграунду способна разобраться в любой сложной теме и бизнесе.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <br /><br /><br /><br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8">
                                    <h3>Еще я читаю лекции и тренинги</h3>
                                    <br />
                                    <p>Лекции по копирайтингу я читаю в образовательных проектах и на профильных конференциях, например:<br /><br />Cвободная школа журналистики<br />Targenta Communications School<br />PRACTICUM лектор и ментор<br />SHKALA. Конференция для общественного сектора<br /><br />Но с большим удовольствием делаю корпоративные тренинги для отдельных компаний. На них мы можем качественно проработать коммуникации бренда без абстрактных примеров и с пользой для компании. Такие тренинги я делала для бренда холдинга ДТЕК YASNO , европейских общественных организаций Прямуємо Разом и Internews Ukraine.</p>
                                </Col>
                                <Col md lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Trening} style={{height: '43vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={6}>
                            <h3>Кстати, у меня есть высшее образование</h3>
                            <p>Киевский национальный университет имени Тараса Шевченко Институт журналистики, магистр (2005 – 2011).</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
