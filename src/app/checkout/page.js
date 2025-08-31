"use client"
import { useSearchParams } from 'next/navigation';
import { QrCodePix } from 'qrcode-pix';
import { QRCodeSVG } from 'qrcode.react';
import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Alert, Spinner, Modal, Button } from 'react-bootstrap';

export default function Checkout({ priceProp = null}) {
  const query = useSearchParams();
  const userId = query.get('userId');
  const priceFromQuery = query.get('price');
  const productNameQuery = query.get('productName');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    price: priceProp || priceFromQuery || '',
  });

  function formatToBRL(value) {
    const number = Number(value) / 100;
    return number.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    });
  }

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPixModal, setShowPixModal] = useState(false);
  const [pixConfirmed, setPixConfirmed] = useState(false);
  const [pixPayload, setPixPayload] = useState(null);

  useEffect(() => {
    if (userId) {
      fetchUserInfo(userId);
    }
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePixPayment = async (e) => {
    e.preventDefault();

    const valor = Number(formData.price) / 100;

    const qrCodePix = QrCodePix({
      version: '01',
      key: '9f30ed07-e611-4f3b-b046-41e1bf624254', // sua chave Pix
      name: 'GLAUCO PEREIRA STARLING',
      city: 'GOVERNADOR VALA',
      message: 'Presente Casamento',
      value: valor,
    });

    setPixPayload(qrCodePix.payload());
    setShowPixModal(true);
  };

  const handleConfirmPix = () => {
    setPixConfirmed(true);
    // Aqui você pode futuramente chamar uma API para registrar o pagamento confirmado
  };

  const handleCardPayment = () => {
    alert('Você será redirecionado para o pagamento via Cartão de Crédito.');
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

          <Form.Group controlId="email" className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Digite seu email"
              value={formData.email}
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

          {!priceProp && (
            <Form.Group controlId="price" className="mb-3">
              <Form.Label>Valor do Produto</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Digite o valor do produto"
                value={formatToBRL(formData.price)}
                onChange={(e) => {
                  const raw = e.target.value.replace(/\D/g, "");
                  setFormData({ ...formData, price: raw });
                }}
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
            <p><strong>Nome do Produto:</strong> {productNameQuery} </p>
            <p><strong>Valor do Produto:</strong> R$ {formData.price ? formatToBRL(formData.price) : '---'}</p>
            <p>Obrigado por escolher nossos produtos para o seu casamento! Estamos felizes em fazer parte desse momento especial.</p>
          </Alert>
        </Form>
      )}

      <Modal show={showPixModal} onHide={() => setShowPixModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Pagamento via Pix</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          {!pixConfirmed ? (
            <>
              <p>Escaneie o QR Code abaixo ou copie o código Pix para pagar:</p>
              {pixPayload && <QRCodeSVG value={pixPayload} size={200} />}
              <Button
                className="mt-3"
                variant="outline-primary"
                onClick={() => {
                  navigator.clipboard.writeText(pixPayload);
                  alert("Código Pix copiado com sucesso!");
                }}
              >
                Copiar código Pix
              </Button>
            </>
          ) : (
            <Alert variant="success">
              🎉 Obrigado por sua compra! Seu presente foi registrado com carinho para o nosso casamento. 💍
            </Alert>
          )}
        </Modal.Body>
        <Modal.Footer>
          {!pixConfirmed ? (
            <Button variant="success" onClick={handleConfirmPix}>
              Já realizei o pagamento
            </Button>
          ) : (
            <Button variant="secondary" onClick={() => setShowPixModal(false)}>
              Fechar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
