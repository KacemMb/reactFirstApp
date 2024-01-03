// src/App.js
import React from 'react';
import { Container, Navbar, Nav, Card, CardDeck } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar>
        <Container>
          <h1 className="mt-4">React Bootstrap App</h1>
          <CardDeck className="mt-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  This is a sample card with some text content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  Another sample card with different text content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  Yet another sample card with more text content.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
      </div>
    </>
  );
};

export default App;
