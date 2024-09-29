"use client"
import { Button, Card, Col, Row } from 'react-bootstrap';

export default function GiftGrid() {
  return (
    <Row xs={1} md={4} className="g-4 mt-2 mb-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src="https://t3.ftcdn.net/jpg/02/05/94/48/360_F_205944846_odbpUqKQp1qZ2OGfrDdCyiHUnjOdYuND.jpg"
            />
            <Card.Body>
              <Card.Title>Produto # {idx}</Card.Title>
              <Button variant="success">Comprar</Button>
              <Button href='checkout' variant="primary">Comprar Cota</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};