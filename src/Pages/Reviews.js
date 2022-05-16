import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Background from '../Img/review-background.png';
import Kurus from '../Img/review-kurus.png';
import Kovalishin from '../Img/review-kovalishin.jpg';
import Toloshina from '../Img/review-toloshina.jpg';
import Chut from '../Img/review-chut.jpg';
import Nurginskaya from '../Img/review-nurginskaya.jpg';
import Prudnik from '../Img/review-prudnik.jpg';
import Fronoshuk from '../Img/review-fronoshuk.jpg';
import Strelnikova from '../Img/review-strelnikova.jpg';
import Selutina from '../Img/review-selutina.jpg';
import Nasikovskaya from '../Img/review-nasikovskaya.jpg';
import Vanchenko from '../Img/review-vanchenko.jpg';
import Drozdik from '../Img/review-drozdik.jpg';

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
                    height: '91vh'
                    }}>
                </div>
                <Container>
                    <br /><br /><br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Col md={8}>
                            <h1>Люди, с которыми я работала</h1>
                            <p>Расскажут обо мне не хуже кейсов. Обычно такие отзывы оставляют, чтобы придать себе пущей важности. Конечно, я не исключение — но, надеюсь, они позволят вам доверять мне чуточку больше.</p>
                        </Col>
                    </Row>
                    <br /><br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Kurus} style={{height: '42vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8">
                                    <h3>Екатерина Курусь, Carlberg Ukraine, Unilever Ukraine ex-brand manager</h3>
                                    <br />
                                    <p>Я познакомилась с Оксаной в 2016-м на защите тендерного предложения по SMM стратегиям для нескольких брендов Carlsberg Ukraine. Было понятно, что человек на своем месте: всё было разложено по полочкам, оформлено в стилистике каждого бренда, а отдельные копирайты к постам вызывали такую широкую улыбку, что отдельная галочка за отменное чувство юмора была сразу поставлена! Более предметно мы начали сотрудничать с Оксаной уже в 2017 в Unilever Ukraine. Для проектов Rexona и AXE Оксана уже выступала больше в роли стратега, что позволило поработать более комплексно: от начальной идеи проекта до его полной реализации – у нее на контроле было всё.<br />Так что для меня Оксана, это тот человек из креативной индустрии, который может многое, и главное – качественно это делает! За 4 года знакомства я успела убедиться в этом 😉 За стратегиями и крутыми проектами – точно к ней!</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Антон Ковалишин, руководитель отдела по внешним коммуникациям YASNO (холдинг ДТЭК)</h3>
                                    <br />
                                    <p>Оксана помогла подготовить коммуникационную команду трех поставщиков электроэнергии для работы в соцсетях под новым брендом YASNO для 3,5 млн клиентов. Благодаря ей мы проработали имевшийся опыт в работе наших ФБ-представительств, нашли новые форматы коммуникации с клиентами, адаптировали наш копирайтинг для соответствия новому бренду и архетипу «Заботливый».<br /><br />Менеджеры по коммуникациям YASNO в трех регионах до этого уже проходили обучение по двум разным программам копирайтинга. Но стиль и формат, в котором работает Оксана, ценен своей простотой и доступностью, что особенно важно при контакте с более зрелой аудиторией.</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Kovalishin} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Toloshina} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8"><br />
                                    <h3>Лера Толочина, Chief marketing officer INTERTOP</h3>
                                    <br />
                                    <p>Лера Толочина, Chief marketing officer INTERTOP<br />Оксана – Богиня букв и Повелительница слов, работать с которой настоящее удовольствие! Даже находясь в отпуске, за тысячи километров, Оксана готова подключиться к проекту и спасти его.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Инна Чут, General Producer LABA</h3>
                                    <br />
                                    <p>Мы с Оксаной начали работать еще в 2017 году, и честно говоря, жалеем только о том, что это фриланс, а не фуллтайм. Потому что за такого человека можно отдать все зарплаты и бонусы мира. И я очень рада, что в рекламе мы даем только те обещания, за которые реально можем поручиться.</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Chut} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Nurginskaya} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8"><br />
                                    <h3>Анастасия Нуржинская, Communication for social and behaviour change, M.Sc., Ph.D.</h3>
                                    <br />
                                    <p>Анастасия Нуржинская, Communication for social and behaviour change, M.Sc., Ph.D.<br />"Оксана выступала тренером и ментором на программе по коммуникациям для неприбыльного сектора УКУ, в также на семинаре для общественных организаций в рамках проекта ЕС. Оксана проделала огромную работу по подготовке, просмотрев все профили и примеры текстов участников, чтобы использовать во время тренинга. В результате организации смогли получить практические рекомендации для их отдельных проектов. Оксана отлично преподаёт материл, эмоционально взаимодействуя и вовлекая участников, а также давая возможность для практики. Это один из самых сильных тренингов, которые я посещала за свою 15 летнюю карьеру в коммуникациях"</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Вика Прудник, бренд-менеджер Jägermeister в Украине</h3>
                                    <br />
                                    <p>Для меня в работе важны профессионализм, проактивность и знание рыночной ситуации/трендов, креатив, умение работать с обратной связью. Работая в сфере маркетинга 12 лет, для меня счастье было сотрудничать с Оксаной, так как она в себе сочетала все эти навыки, находя общий язык между маркетинговыми задачами и целевой аудиторией.</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Prudnik} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Fronoshuk} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8"><br />
                                    <h3>Марія Фронощук, CEO and Co-Founder в Platfor.ma</h3>
                                    <br />
                                    <p>Марія Фронощук, CEO and Co-Founder в Platfor.ma<br />У роботі та житті я найбільше ціную тих, на кого можна покластися. Серед креативних професіоналів багато талановитих людей. Але серед цих талановитих обмаль надійних, хоч у червону книгу заноси. Кожен раз віддаючи бриф Оксані, я можу не хвилюватися ані за якість, ані за глибину, ані за дедлайни. Я знаю, що вона до останнього вишукуватиме ідеальне слово та зможе просто пояснити навіть найскладнішу деталь. Ось за це відчуття: довірився і забув – я готова платити великі гроші.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Жанна Стрельникова, ex-маркетинг директор TCCC, ex-маркетинг менеджер PepsiCo</h3>
                                    <br />
                                    <p>Я работаю с партнёрами по принципу химия или есть или нет. Большое количество проектов было сделано с Оксаной в период работы над брендом Pepsi. Самый сложный и громкий – Лига Чемпионов. По результатам 2018 Украину признали одним из самых успешных рынков, которые активировали контракт с Лигой Чемпионов. Заслуга Оксаны в этом также есть: идеи и тексты, точно подобранные слова.</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Strelnikova} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Selutina} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8"><br />
                                    <h3>Елена Селютина, PR директор, ГК Новые продукты</h3>
                                    <br />
                                    <p>Елена Селютина, PR директор, ГК Новые продукты<br />Помимо отличных профессиональных качеств, о которых, уверена, скажут многие, хочу отметить важный для меня лично фактор – эстетическое удовольствие от внешнего вида при работе со специалистом творческой профессии. Всегда со вкусом одета, ухоженные волосы, руки, яркий макияж или его отсутствие всегда выглядит эстетично и целостно. Для меня внешняя эстетика является неотъемлемой составляющей человека творческой профессии. Эстетика внешняя и внутренняя всегда взаимосвязаны. Если она есть, человек способен переносить ее в том числе и на то, что создает интеллектуально.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Анна Насиковская, Co-Founder в DIM</h3>
                                    <br />
                                    <p>Очень рада встрече и сотрудничеству! Всегда очень лаконично и по сути. Без шаблонных избитых фраз и что важно для меня как для заказчика – выполнение работы в срок и умение сказать креативно и просто о скучном и сложном!</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Nasikovskaya} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Vanchenko} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                                <Col md lg="8"><br />
                                    <h3>Юлия Ванченко, Head of Marketing Department в Hyundai Ukraine</h3>
                                    <br />
                                    <p>С уверенностью могу сказать, что Оксана обожает свою работу и получает колоссальное удовольствие от результата. Оксана имеет великолепное чувство такта и чувство юмора, а это немаловажные качества для специалиста. Тексты очень живые и легкие – одно наслаждение.</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Body>
                            <Row className="justify-content-md-center">
                                <Col md lg="8"><br />
                                    <h3>Лілія Дроздик, ex-head of communications and advocacy department в Центр демократії та верховенства права</h3>
                                    <br />
                                    <p>Коли я потрапила до Оксани на лекцію під час форуму SHKALA, зрозуміла, що мушу її покликати на якийсь із наших заходів. На Школі комунікацій для громадських організацій вона за півтори години виклала цікавий і вичерпний матеріал по темі сторітелінгу. Учасники відзначили Оксану як одну із кращих лекторів на школі, поставивши середній бал 4,81 з 5 можливих за повноту інформації на лекції.</p>
                                </Col>
                                <Col lg="4">
                                    <Card>
                                        <Card.Img variant="center" src={Drozdik} style={{height: '46vh', objectFit: 'cover'}} />
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                    <br />
                </Container>
            </>
        );
    }
}
