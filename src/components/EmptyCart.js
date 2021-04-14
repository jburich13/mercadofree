import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";



export function EmptyCart(){

return <Container>
        <Row className="justify-conten-center mt-5">
            <Col>
                <h1 className="Cart__titleItem text-center">El carrito esta vacío</h1>
                <Link to="/" className="Cart__titleItem text-center"><h2>Volver al Inicio</h2></Link>
            </Col>
        </Row>
    </Container>
}