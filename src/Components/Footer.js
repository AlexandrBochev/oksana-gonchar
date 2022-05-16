import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Footer extends Component {
    render () {
        return (
            <>
                <Container fluid style={{backgroundColor: '#282c34', marginTop: '80px'}}>
                    <Container style={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                        <a href="/" style={{textDecoration: 'none', color: '#c6949e'}}>© Оксана Гончар</a>
                    </Container>
                </Container>
            </>
        )
    }
}