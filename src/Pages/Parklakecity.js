import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Slide_1 from '../Img/parklakecity-slide_1.png';
import Slide_2 from '../Img/parklakecity-slide_2.png';
import Slide_3 from '../Img/parklakecity-slide_3.png';

export default class Home extends Component {
    render () {
        return (
            <>
                <div className="mb-4" style={{
                    backgroundImage:`url(${Slide_1})`,
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
                            <h1 style={{fontSize: '20px'}}>DIM</h1>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Промо ЖК Park Lake City</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>Task</h3>
                        <hr />
                        <p>Park Lake City – это очень классный комплекс за городом. В нем все сделали по-человечески для человека: тут тебе и озерцо почистили, чтобы ловить рыбу и купаться, и дорожки велосипедные проложили, и террасы большие построили, чтобы ты с друзьями мог пожарить барбекю летом. Короче, все как в Копенгагене, только под Киевом. Об этом нужно было рассказать в наружной рекламе.</p>
                    </div>
                    <br /><br />
                    <div>
                        <h3>Execution</h3>
                        <hr />
                        <p>Чтобы покрыть разные целевые (и семью, и молодых людей) я придумала троих героев – Вудкомена, Веломаму и Стейкодрузів. От первого лица они говорят о преимуществах комплекса. Идея вижуалов была в том, чтобы показать микс делового человека, который спешит на работу в Киев, и второго – знающего, что такое модная нынче slow life. Вижуалы драфтовые – клиент еще не запустил рекламу.</p>
                    </div>
                    <br /><br /><br />
                    <Carousel variant="dark">
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
                    </Carousel>
                </Container>
            </>
        );
    }
}
