import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';

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
            <Welcome/>
          </Col>
        </Row>  
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
