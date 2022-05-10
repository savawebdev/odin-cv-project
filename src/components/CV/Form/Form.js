import { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Section from "../../Utils/Section/Section";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";

class Form extends Component {
  render() {
    return (
      <Section>
        <SectionTitle title="Enter Your Information" />
        <Personal />
        <Education />
        <Experience />
      </Section>
    );
  }
}

export default Form;
