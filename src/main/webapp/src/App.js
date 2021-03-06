import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';

function App() {
  const marginTop = {
    marginTop: "20px"
  };
  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={Welcome}/>
              <Route path="/add" exact component={Book}/>
              <Route path="/list" exact component={BookList}/>
            </Switch>
          </Col>
        </Row>  
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
