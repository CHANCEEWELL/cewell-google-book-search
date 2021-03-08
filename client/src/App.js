import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <Router>
      <NavBar />
      <Container fluid>
        <Row>
          <Container fluid>
            <Header />
            <Switch>
              <Route exact path='/' component={Search} />
              <Route exact path='/saved' component={Saved} />
            </Switch>
          </Container>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
