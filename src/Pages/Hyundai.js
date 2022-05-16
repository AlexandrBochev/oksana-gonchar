import React, { Component } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Background from '../Img/hyundai-img.jpg';
import Stage from '../Img/hyundai-stage.jpg';
import Slide_1 from '../Img/hyundai-slide_1.jpg';
import Slide_2 from '../Img/hyundai-slide_2.jpg';
import Slide_3 from '../Img/hyundai-slide_3.jpg';
import Slide_4 from '../Img/hyundai-slide_4.jpg';

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
                            <h1 style={{fontSize: '20px'}}>Hyundai Ukraine</h1>
                        </Col>
                        <Col sx={{ order: 12 }}>
                            <p>Агентство</p>
                            <h2 style={{fontSize: '20px'}}>Engine</h2>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Hyundai Santa Fe Launch</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3>Challenge</h3>
                        <hr />
                        <p>Представить журналистам и дилерским центрам новое поколение кроссовера Hyundai Santa Fe</p>
                    </div>
                    <br />
                    <div>
                        <h3>Idea</h3>
                        <hr />
                        <p>"Hyundai Santa Fe будет флагманом нашей линейки. Примой салона на весь следующий год", – подчеркнул в брифе клиент.<br /><br />"А если автомобиль – прима, значит – место ему на сцене", – подумали мы и решили провести презентацию кроссовера в театре. Ну, точнее, отдать ему главную роль в представлении, написанному специально для бренда.</p>
                    </div>
                    <br /><br /><br />
                </Container>
                    <div className="mb-4" style={{
                            backgroundImage:`url(${Stage})`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover",
                            backgroundPosition: "center",
                            paddingTop: '30vh',
                            height: '70vh'
                        }}>
                    </div> 
                <Container>
                    <br /><br /><br />
                    <div>
                        <h3>Execution</h3>
                        <hr />
                        <p>Мы связались со Славой Жилой – театральным продюсером и режиссером. Он разработал сценарий спектакля "Жизнь и другие моменты", а также пригласил для участия в нем лучших актеров: Алексея Вертинского и Руслану Писанку. Согласно сценарию, Hyundai Santa был центральным элементом происходящих событий, и появлялся на сцене посредине представления.<br /><br />Когда у нас появилась идея представить кроссовер в театре, стало ясно – ничего подобного в Украине до сих пор никто не делал. Поэтому клиент решил сделать нашу презентацию основной для всего Восточноевропейского региона.<br /><br />Единственным театром, на сцену которого мог заехать Hyundai Santa Fe, оказался Оперный. Мы анонсировали спектакль городскими афишами с пометкой "sold out", отправили приглашения в виде театральных билетов, до самого конца выдерживая интригу. Вечером 25 июля на красной дорожке Национальной Оперы Украины собралось более 600 гостей! Украинские и европейские журналисты, селебрити, партнеры, гости из Кореи – все они оценили бенефис Santa Fe.</p>
                    </div>
                    <br /><br />
                    <div style={{position: "relative"}}>
                        <div style={{paddingTop: "56.25%"}}></div>
                        <iframe style={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%"}}
                            src="https://www.youtube.com/embed/hWQd0x32GCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <br /><br /><br />
                    <div>
                        <h3>Results</h3>
                        <hr />
                        <p>Десятки публикаций от топовых автомобильных СМИ страны, сотни публикаций в соцсетях. Все они единогласны: презентация Hyundai Santa Fe – заявка на эксклюзивность – даже в сравнение с мировой премьерой.<br /><br />Например, так событие отметил AUTO-Consulting: "Наш корреспондент уже видел новый Santa Fe весной этого года на автосалоне в Женеве. Но на сцене Национальной оперы автомобиль выглядел более монументально, изысканно и премиально. Можно утверждать, что это самая яркая генерация Santa Fe, которая появилась за 18 лет".</p>
                    </div>
                    <br /><br />
                    <Carousel>
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
                </Container>
            </>
        );
    }
}
