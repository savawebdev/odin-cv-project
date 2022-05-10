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
        name: "",
        address: "",
        email: "",
        phoneNumber: "",
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
      experience: [
        {
          position: "Customer Agent",
          company: "Orange Romania",
          city: "Bacau, Romania",
          startDate: "March 2020",
          endDate: "June 2021",
        },
      ],
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
  }

  onNameChange(e) {
    this.setState((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        name: e.target.value,
      },
    }));
  }

  onAddressChange(e) {
    this.setState((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        address: e.target.value,
      },
    }));
  }

  onEmailChange(e) {
    this.setState((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        email: e.target.value,
      },
    }));
  }

  onPhoneChange(e) {
    this.setState((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        phoneNumber: e.target.value,
      },
    }));
  }

  render() {
    return (
      <div>
        <Header />

        <main>
          <Form
            handlers={{
              onNameChange: this.onNameChange,
              onAddressChange: this.onAddressChange,
              onEmailChange: this.onEmailChange,
              onPhoneChange: this.onPhoneChange,
            }}
          />

          <Preview
            personal={this.state.personal}
            education={this.state.education}
            experience={this.state.experience}
          />
        </main>
      </div>
    );
  }
}

export default App;
