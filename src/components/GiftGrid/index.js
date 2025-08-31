"use client"
import { useRouter } from 'next/navigation';
import { Card, Col, Row } from 'react-bootstrap';

export default function GiftGrid({products}) {
  const router = useRouter();

  const handleCheckout = (price, productName) => {
    router.push(`/checkout?price=${price}&productName=${productName}`);
  };

  function formatToBRL(value) {
    const number = Number(value) / 100;
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  return (
    <Row xl={3} className="g-1">
      {products.map((product) => (
        <Col key={product.id}>
          <Card>
            <Card.Img
              variant="top"
              src={product.imageUrl}
            />
            <Card.Body>
              <Card.Title className='product-title' >Produto: {product.name}</Card.Title>
              <Card.Text className='product-description'>{product.description}</Card.Text>
              <Card.Text className='product-price'>Valor: {formatToBRL(product.price)}</Card.Text>
              <button onClick={() => handleCheckout(product.price, product.description)} className='buy-button'> COMPRAR</button>
              <button onClick={() => handleCheckout(product.price, product.description)} className='buy-button'> COTA</button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};