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
          id: 1,
          schoolName: "Emil Botta",
          degree: "High School",
          schoolCity: "Adjud, Romania",
          subject: "Mathematics&Informatics",
          schoolStart: "September 2003",
          schoolEnd: "June 2007",
        },
        {
          id: 1,
          schoolName: "Emil Botta",
          degree: "High School",
          schoolCity: "Adjud, Romania",
          subject: "Mathematics&Informatics",
          schoolStart: "September 2003",
          schoolEnd: "June 2007",
        },
      ],
      experience: [
        {
          id: 2,
          position: "Customer Agent",
          company: "Orange Romania",
          workCity: "Bacau, Romania",
          workStart: "March 2020",
          workEnd: "June 2021",
        },
        {
          id: 2,
          position: "Customer Agent",
          company: "Orange Romania",
          workCity: "Bacau, Romania",
          workStart: "March 2020",
          workEnd: "June 2021",
        },
      ],
    };

    this.onPersonalChange = this.onPersonalChange.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.addWorkExperience = this.addWorkExperience.bind(this);
  }

  onPersonalChange(e) {
    e.preventDefault();
    const name = e.target.name;

    this.setState((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [name]: e.target.value,
      },
    }));
  }

  addSchool(newSchool) {
    this.setState((prev) => ({
      ...prev,
      education: [...prev.education, newSchool],
    }));
  }

  addWorkExperience(newWorkExperience) {
    this.setState((prev) => ({
      ...prev,
      experience: [...prev.experience, newWorkExperience],
    }));
  }

  render() {
    return (
      <div>
        <Header />

        <main>
          <Form
            onPersonalChange={this.onPersonalChange}
            addSchool={this.addSchool}
            addWorkExperience={this.addWorkExperience}
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
