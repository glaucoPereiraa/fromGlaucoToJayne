"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Alert, Spinner } from 'react-bootstrap';

export default function Checkout({ priceProp = null }) {
  const query = useSearchParams();
  const userId = query.get('userId');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    price: priceProp || '', // Se o preço for passado via props, inicializa com ele
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função simulada para buscar as informações do usuário com base no ID
  const fetchUserInfo = async (userId) => {
    setLoading(true);
    setError(null);

    try {
      // Simulando um fetch de API para buscar dados do usuário
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ name: 'João Silva', phone: '11999999999', price: 150 }), 1000)
      );

      setFormData({
        name: response.name,
        phone: response.phone,
        price: priceProp || response.price, // Se "priceProp" for passado como prop, ele prevalece
      });
    } catch (error) {
      setError('Erro ao buscar informações do usuário.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserInfo(userId);
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePixPayment = () => {
    alert('Você será redirecionado para o pagamento via Pix.');
    // Link do pix
  };

  const handleCardPayment = () => {
    alert('Você será redirecionado para o pagamento via Cartão de Crédito.');
    // Link do cartao
  };

  return (
    <Container className="py-5 romantic-page">
      <h1 className="text-center mb-4">Finalizar Compra</h1>

      {userId ?
        <h2>João Silva</h2>
        : ''
      }

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
          <p>Carregando informações do usuário...</p>
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Form>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="phone" className="mb-3">
            <Form.Label>Número de Telefone</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Digite seu número de telefone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Mostra o input do preço apenas se o preço não vier como prop */}
          {!priceProp && (
            <Form.Group controlId="price" className="mb-3">
              <Form.Label>Valor do Produto</Form.Label>
              <Form.Control
                type="number"
                name="price"
                placeholder="Digite o valor do produto"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}

          <Row className="mb-4">
            <Col>
              <button className='buy-button' onClick={handlePixPayment}>
                Pix
              </button>
            </Col>
            <Col>
              <button className='buy-button' onClick={handleCardPayment}>
                Pagar com Cartão de Crédito
              </button>
            </Col>
          </Row>

          <Alert variant="info">
            <h4>Detalhes da Compra</h4>
            <p><strong>Nome do Produto:</strong> Conjunto de Pratos Elegante</p>
            <p><strong>Valor do Produto:</strong> R$ {formData.price || '---'}</p>
            <p>Obrigado por escolher nossos produtos para o seu casamento! Estamos felizes em fazer parte desse momento especial.</p>
          </Alert>
        </Form>
      )}
    </Container>
  );
};
