import React from 'react';
import {Col, Row} from "react-bootstrap";
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation();

    const isAboutPage = location.pathname === "/about";
    return (
        <footer style={{
            position: 'relative',
            bottom: '0',
            width: '100%',
            height: '60px',
            backgroundColor: '#113946',
            color: '#FFF2D8',
            textAlign: 'center',
            padding: '15px',
            zIndex: 100
        }}>
            <Row className={"d-flex row"}>
                <Col className={"align-self-center"}>InfoCountries</Col>
                <Col>Juan Valera y Víctor Gálvez <u onClick={() => !isAboutPage && navigate("/about")} className='mx-2 about'>Conócenos</u></Col>
            </Row>
        </footer>
    );
};

export default Footer;
