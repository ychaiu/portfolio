import React, { Component } from 'react';
import './App.css';
import Sidebar from './containers/Sidebar.js';
import MainContent from './containers/MainContent.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
        <Container className="app-container">
          <Row>
            <Col><Sidebar/></Col>
            <Col><MainContent /></Col>
          </Row>
        </Container>
    );
  }
}

export default App;
