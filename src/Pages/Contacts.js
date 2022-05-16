import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Contacts from '../Img/gonchar-contacts.jpg';


export default class Home extends Component {
    render () {
        return (
            <>
                <Container>
                    <br />
                    <Row className="justify-content-md-center" style={{textAlign: 'center'}}>
                        <Card style={{ width: '30rem', border: 'none' }}>
                            <Card.Body>
                                <Card.Img variant="top" src={Contacts} />
                                <p style={{fontSize: '16px'}}>copywriter</p>
                                <h1>Оксана Гончар</h1>
                            </Card.Body>
                        </Card>
                        <Col md={8}>
                            <p>Если вы решили, что я правильный человек, который расскажет о вашем бизнесе или организации – давайте поговорим.</p><hr />
                            <p><a href="tel:+380978198838" target="_self" style={{textDecoration: 'none'}}>+38 (097) 819 88 38 </a></p>
                            <p style={{fontSize: '16px', marginBottom: '22vh'}}><a href="mailto:ksenya.gonсhar@gmail.com" style={{textDecoration: 'none'}}>ksenya.gonсhar@gmail.com</a></p>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}
