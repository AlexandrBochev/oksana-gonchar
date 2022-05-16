import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Background from '../Img/approved-img.png';
import Checkbox from '../Img/svg/checkbox-icon-blue.svg';
import Logo from '../Img/approved-logo.png';
import Run from '../Img/approved-run.jpg';
import Coach from '../Img/approved-coach.jpg';
import Approvedlittle from '../Img/approved-little.png';
import Approvedgallery from '../Components/Approvedgallery'

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
                            <h1 style={{fontSize: '20px'}}>ЗУХВАЛІ</h1>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Неймінг та позиціонування</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>ЩО ПОТРІБНО БУЛО ЗРОБИТИ</h3>
                        <hr />
                        <p>Вигадати назву і слоган для дитячого спортивного кемпу. Однак щоб відрізнявся від усіх інших: був драйвовим, з викликом, про справжніх чемпіонів. Ще дуже хотілося, аби слово було направду українським і щоб хуком з першого разу в серце. Бачите, навіть цей кейс українською! І я придумала.</p>
                    </div>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md lg="8">
                            <Card style={{border: 'none'}}>
                                <Card.Img variant="center" src={Logo} />
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <div>
                        <h3>ПРО ЩО ЦЕЙ ПРОЕКТ</h3>
                        <hr />
                        <p>Зухвалі – це ті, хто не боїться кидати виклик. Насамперед собі – аби долати щоденні перешкоди.<br />Зухвалі – це ті, хто хочуть бути першими. У всьому, за що беруться, чи то спорт, чи блогінг, чи кар'єра.<br />Зухвалі – так кажуть про нинішніх підлітків. Бо вони виросли у системі вільних цінностей і знають, що не буває недосяжних цілей.</p>
                    </div>
                    <br />
                    <Card>
                        <Card.Img variant="center" src={Run} />
                    </Card>
                    <br />
                    <div>
                        <h3>НЕЙМІНГ СТАВ ІДЕАЛЬНИМ БРЕНДИНГОМ</h3>
                        <hr />
                        <p>Зухвала: так ми називаємо наших дівчаток на футболках.<br />Зухвалий! З такими лого носять рюкзаки наші хлопчики.<br />Зухвалий тренер – а хіба ми працюємо з іншими?</p>
                    </div>
                    <br /><br /><br />
                    <Card>
                        <Card.Img variant="center" src={Coach} />
                    </Card>
                    <br /><br /><br />
                    <Approvedgallery />
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>СЛОГАНИ</h3>
                            <p>Я запропонувала клієнту декілька варіантів, з яких він використовує два перших:</p>
                        </Col>
                    </Row>
                    <br />
                    <Row className="justify-content-md-center">
                        <Col md={7}>
                            <p><img variant="center" src={Checkbox} style={{height: '50px', marginRight: '24px'}} />Тренуємо майбутнє!</p><br />
                            <p><img variant="center" src={Checkbox} style={{height: '50px', marginRight: '24px'}} />Наважся бути сильним!</p><br />
                            <p><img variant="center" src={Checkbox} style={{height: '50px', marginRight: '24px'}} />Виховуємо переможців!</p><br />
                            <p><img variant="center" src={Checkbox} style={{height: '50px', marginRight: '24px'}} />Тренуємо тіло та впевненість!</p><br />
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row className="justify-content-md-center">
                        <Col md={8}>
                            <Card>
                                <Card.Img variant="center" src={Approvedlittle} />
                            </Card>
                        </Col>
                    </Row>
                    <br /><br />
                </Container>
            </>
        );
    }
}
