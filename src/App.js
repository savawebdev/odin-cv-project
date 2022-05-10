import { Component } from "react";
import Header from "./components/Header/Header";
import Form from "./components/CV/Form/Form";
import Preview from "./components/CV/Preview/Preview";
import "./App.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <main>
          <Form />
          <Preview />
        </main>
      </div>
    );
  }
}

export default App;
