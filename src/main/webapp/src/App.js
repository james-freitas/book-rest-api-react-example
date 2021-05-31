import React from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './App.css';

import NavigationBar from './components/NavigationBar'

function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
    <div className="App">
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Jumbotron className="bg-dark text-white">
              <h1>Hello, world!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
              </p>
            </Jumbotron>
          </Col>
        </Row>  
      </Container>
    </div>
  );
}

export default App;
