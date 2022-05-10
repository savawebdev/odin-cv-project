import { Component } from "react";
import Header from "./components/Header/Header";
import Form from "./components/CV/Form/Form";
import Preview from "./components/CV/Preview/Preview";
import "./App.module.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      personal: {
        name: "Andrei Sava",
        address: "Bacau, Romania",
        email: "andreisava88@gmail.com",
        phoneNumber: "0748976101",
      },
      education: [
        {
          schoolName: "Emil Botta",
          degree: "High School",
          city: "Adjud, Romania",
          subject: "Mathematics&Informatics",
          startDate: "September 2003",
          endDate: "June 2007",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header />

        <main>
          <Form />
          <Preview
            personal={this.state.personal}
            education={this.state.education}
          />
        </main>
      </div>
    );
  }
}

export default App;
