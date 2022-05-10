import { Component } from "react";
import Header from "./components/Header/Header";
import Form from "./components/CV/Form/Form";
import Section from "./components/Utils/Section/Section";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
