import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import './Login.css';
 
const Login = () => {
  const navigate = useNavigate();
  const { setAuthenticated } = useOutletContext();
  const loginUser = (event) => {
    event.preventDefault()
    console.log('loginUser')
    setAuthenticated(true)
    navigate('/')
  }
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6} lg={5}>
          <Form onSubmit={(event)=>loginUser(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="danger" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
