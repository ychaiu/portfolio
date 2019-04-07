import React, { Component } from 'react';
import './App.css';
import NavBar from './containers/NavBar.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Homepage from './components/Homepage';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blog from './components/Blog';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Row>
            <Col>
              <NavBar />
            </Col>
          </Row>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/blog" component={Blog}/>
            </Switch>
        </Container>
      </BrowserRouter>
    )
  }
}

export default App;
