import { Component } from "react";
import Header from "./components/Header/Header";
import Form from "./components/CV/Form/Form";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
