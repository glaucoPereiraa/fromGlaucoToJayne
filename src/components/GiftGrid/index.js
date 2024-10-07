"use client"
import { useRouter } from 'next/navigation';
import { Card, Col, Row } from 'react-bootstrap';

export default function GiftGrid() {
  const router = useRouter();

  const handleCheckout = () => {
      router.push('/checkout');
  };

  return (
    <Row xl={3} className="g-1">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img
              variant="top"
              src="https://t3.ftcdn.net/jpg/02/05/94/48/360_F_205944846_odbpUqKQp1qZ2OGfrDdCyiHUnjOdYuND.jpg"
            />
            <Card.Body>
              <Card.Title className='product-title' >Produto # {idx}</Card.Title>
              <Card.Text className='product-price'>Valor: 100</Card.Text>
              <button onClick={handleCheckout} className='buy-button'> COMPRAR</button>
              <button onClick={handleCheckout} className='buy-button'> COTA</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};