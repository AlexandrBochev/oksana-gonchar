import React, { Component } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Background from '../Img/lactalis-kids.jpg';
import Checkbox from '../Img/svg/checkbox-icon-green.svg';
import Lactalisfork from '../Img/lactalis-fork-icon.png'
import Lactalisbottle from '../Img/lactalis-bottle-icon.png'
import Lactalisheart from '../Img/lactalis-heart-icon.png'
import Lactalis from '../Img/lactalis-img.jpg';
import Lactalisgym from '../Img/lactalis-gym-icon.png';
import Lactalisleaf from '../Img/lactalis-leaf-icon.png';
import Lactalischat from '../Img/lactalis-chat-icon.png';
import Lactalissocial from '../Img/lactalis-social.png';
import Lactalisbanners from '../Img/lactalis-banners.png';

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
                            <h1 style={{fontSize: '20px'}}>LACTALIS Ukraine</h1>
                        </Col>
                        <Col sx={{ order: 12 }}>
                            <p>Агентство</p>
                            <h2 style={{fontSize: '20px'}}>NSG</h2>
                        </Col>
                        <Col sx={{ order: 1 }}>
                            <p>Проект</p>
                            <h2 style={{fontSize: '20px'}}>Бренд-платформа "Лактония"</h2>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <div>
                        <h3 style={{color: '#61c5b8'}}>ЗАДАЧА</h3>
                        <hr />
                        <p>Лактония – бренд кисломолочных продуктов, который очень давно на рынке. Многие годы у него не менялась упаковка, не было четкого позиционирования и яркой рекламной активности. Просто еще один "кефир в зеленой бутылочке".<br /><br />Нам предстояло придумать для Лактонии бренд-платформу, которая была бы близка семейной аудитории, современной и активной.</p>
                    </div>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Давайте признаемся</h3>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row className="justify-content-md-center">
                        <Col md={8}>
                            <Table>
                                <tbody>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <h3 style={{color: '#61c5b8', fontSize: '22px'}}>Мы живем в безумном ритме</h3>
                                            <p>Тут ребенку пошить костюм на утренник, там отчет дописать, чтобы успеть на маникюр. А ряженка – на ходу вместо обеда.</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <h3 style={{color: '#61c5b8', fontSize: '22px'}}>Мы неидеальные родители</h3>
                                            <p>Однажды мы покупаем йогурт, потому что решаем, что вся семья будет питаться правильно. Но вечером опять заезжаем на макдрайв – ведь как отказать детям в милкшейке?</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <h3 style={{color: '#61c5b8', fontSize: '22px'}}>Мы мамы, но еще и девочки</h3>
                                            <p>Наше любимое – похудеть за две недели до отпуска. Записаться в зал, измучить всю семью диетой – и посадить на кефирчик.</p>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr>
                                        <td>
                                            <img  src={Checkbox} style={{height: '50px'}} />
                                        </td>
                                        <td>
                                            <h3 style={{color: '#61c5b8', fontSize: '22px'}}>Да, мы не идеальны!</h3>
                                            <p>Поэтому больше всего ценим бренды, которые понимают это – и упрощают нам жизнь.</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>У Лактонии есть преимущества</h3>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row md={1} lg={3} className="g-5">
                        <Col className="text-center">
                            <img src={Lactalisfork} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>БЫСТРО</h3>
                            <br /><p>Тебе не нужно заморачиваться с завтраком или готовить перекус на прогулку с детьми. Открыл крышечку – получил необходимую дозу калорий и полезных веществ.</p> 
                        </Col>
                        <Col className="text-center">
                            <img src={Lactalisbottle} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>БЫСТРО</h3>
                            <br /><p>Не нужно тащить судочки, которые вечно открываются в сумке. Не нужно готовить судочки мужу. Как еда космонавта, только вкусная.</p> 
                        </Col>
                        <Col className="text-center">
                            <img src={Lactalisheart} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>БЫСТРО</h3>
                            <br /><p>В нашей линейке привычные продукты – ты всегда знаешь, что ожидать от кефира. Это важно – ведь мы каждый день так часто сталкиваемся с выбором, что этот процесс иногда мучителен.</p> 
                        </Col>
                    </Row>
                    <br /><br /><br />
                </Container>
                    <div className="mb-4" style={{
                            backgroundImage:`url(${Lactalis})`,
                            backgroundRepeat:"no-repeat",
                            backgroundSize:"cover",
                            backgroundPosition: "center",
                            paddingTop: '30vh',
                            height: '70vh'
                        }}>
                        <Container>
                            <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                                <Col>
                                    <h3 style={{fontSize: '6vh', lineHeight:'9vh',  color: '#61c5b8'}}>ЛАКТОНИЯ.<br />МОЛОЧКА БЕЗ<br />ЗАМОРОЧКИ</h3>
                                </Col>
                            </Row>
                        </Container>
                    </div> 
                <Container>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3>Мы придумали несколько активностей,<br />которые отображают основное сообщение</h3>
                        </Col>
                    </Row>
                    <br /><br /><br />
                    <Row md={1} lg={3} className="g-5">
                        <Col className="text-center">
                            <img src={Lactalisgym} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>Весна<br />#СпортБезЗаморочки</h3>
                            <br /><p>Digital-активность. Записываем три видеокомплекса упражнений от трех спортивных семей-селебрити. Обязательное условие: каждое упражнение очень простое и выполняется с поддержкой семьи. Пользователи каждую неделю подписываются на новый челлендж, выкладывают фото с участием и хештегом.</p> 
                        </Col>
                        <Col className="text-center">
                            <img src={Lactalisleaf} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>Лето<br />#ЛанчБезЗаморочки</h3>
                            <br /><p>Летом хочется есть здоровую еду, желательно не в офисе. Для Лактонии это комбо – ведь наши продукты удобно брать с собой – хоть в парк на мини-пикник, хоть на рабочую встречу. Мы предлагаем пользователям поддержать здоровый флешмоб – выйти на обед дышать свежим воздухом. И показать свой #ЛанчБезЗаморочки.</p> 
                        </Col>
                        <Col className="text-center">
                            <img src={Lactalischat} style={{width: "120px", marginBottom: "38px"}} />
                            <h3>Зима<br />чат-бот БезТурбот</h3>
                            <br /><p>Это наш чат-бот в Facebook, который поможет пользователям заботиться об иммунитете. Ежедневно он будет присылать маленькие напоминания с простыми лайфхаками: что сегодня сделать, чтобы завтра не заболеть. Ведь все вроде знают, что нужно пить витамины и чай с имбирем, но разве кто-то делает это до того, как придет простуда?</p> 
                        </Col>
                    </Row>
                    <br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h3 style={{color: '#61c5b8'}}>Также мы обновили соцсети</h3>
                            <img src={Lactalissocial} />
                            <br /><br />
                            <h3 style={{color: '#61c5b8'}}>И разработали баннера</h3><br />
                            <img src={Lactalisbanners} />
                            <br /><br /><br /><br />
                            <p style={{fontSize: '14px'}}>* к сожалению, клиент не реализовал бренд-платформу, но предоставил права на использование в портфолио.</p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
