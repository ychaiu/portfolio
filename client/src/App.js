import React, { Component } from 'react';
import Sidebar from './containers/Sidebar.js';
import MainContent from './containers/MainContent.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={4}><Sidebar /></Col>
            <Col><MainContent /></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
