import React, { Component } from "react";
import ReactDOM from "react-dom";

// muicss
import Container from "muicss/lib/react/container";
import Panel from "muicss/lib/react/panel";
import HomePage from "../../containers/home-page/HomePage";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import './App.scss';

class App extends Component {
  render() {
    return (
      <main>
      <Header />
        <div className="mui--appbar-height" />
        <Container>
          <Panel className="panel-container">
            <HomePage />
          </Panel>
        </Container>
        <Footer />
      </main>
    );
  }
}

export default App;
