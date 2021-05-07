import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <main className="py-4">
            <Route path="/" component={HomeScreen} exact />
          </main>
        </Container>
      </Router>
    );
  }
}

export default App;
