import React, { Component } from "react";
import { Container, Nav, Navbar, NavbarBrand, NavLink, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from '../Img/gonchar-icon.png';
import facebook from '../Img/svg/facebook-icon.svg';
import instagram from '../Img/svg/instagram-icon.svg';

import Home from '../Pages/Home';
import Intertop from '../Pages/Intertop';
import Rexona from '../Pages/Rexona';
import Approved from '../Pages/Approved';
import Timeforfamily from '../Pages/Timeforfamily';
import Lactalis from '../Pages/Lactalis';
import Unicef from '../Pages/Unicef';
import Parklakecity from '../Pages/Parklakecity';
import Hyundai from '../Pages/Hyundai';
import Reviews from '../Pages/Reviews';
import Cv from '../Pages/Cv';
import Contacts from '../Pages/Contacts';

export default class Header extends Component {
    render () {
        return (
            <>
                <Navbar sticky="top" collapseOnSelect expand='md' bg="light" variant="light" style={{fontSize: '18px'}}>
                    <Container>
                        <NavbarBrand href="/">
                            <img 
                                src={logo}
                                height='60'
                                width='60'
                                className='d-inline-block align-top'
                                alt="Icon"
                            />
                        </NavbarBrand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto m-2">
                                <hr />
                                <NavDropdown title="Проекты" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/intertop">Манифест экоиста INTERTOP</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/rexona">Rexona #меніліньки</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/approved">ЗУХВАЛІ</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/timeforfamily">#ГодиниДляРодини</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/lactalis">Молочка без заморочки</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/unicef">UNICEF, нацпромо по вакцинации</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/parklakecity">Вудкомен для Park Lake City</NavDropdown.Item>
                                    <hr className="m-2" />
                                    <NavDropdown.Item href="/hyundai">Hyundai Santa Fe Launch</NavDropdown.Item>
                                </NavDropdown>
                                <hr />
                                <NavLink href="/reviews">Отзывы</NavLink>
                                <hr />
                                <NavLink href="/cv">CV</NavLink>
                                <hr />
                                <NavLink href="/contacts">Контакты</NavLink>
                                <hr />
                            </Nav>
                            <NavbarBrand href="https://www.facebook.com/oksana.gonchar88"  target="_blank">
                                <img 
                                    src={facebook}
                                    height='30'
                                    width='30'
                                    className='d-inline-block align-top'
                                    alt="Facebook"
                                />
                            </NavbarBrand>
                            <NavbarBrand href="https://www.instagram.com/o_gonchar_/?hl=uk"  target="_blank">
                                    <img 
                                        src={instagram}
                                        height='30'
                                        width='30'
                                        className='d-inline-block align-top'
                                        alt="Instagram"
                                    />
                            </NavbarBrand>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/intertop" element={<Intertop />} />
                        <Route path="/rexona" element={<Rexona />} />
                        <Route path="/approved" element={<Approved />} />
                        <Route path="/timeforfamily" element={<Timeforfamily />} />
                        <Route path="/lactalis" element={<Lactalis />} />
                        <Route path="/unicef" element={<Unicef />} />
                        <Route path="/parklakecity" element={<Parklakecity />} />
                        <Route path="/hyundai" element={<Hyundai />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/cv" element={<Cv />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </Router>
            </>
        )
    }
}