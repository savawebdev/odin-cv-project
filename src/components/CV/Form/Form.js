import { Component, Fragment } from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Section from "../../Utils/Section/Section";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";

class Form extends Component {
  render() {
    return (
      <Fragment>
        <Section>
          <SectionTitle title="Enter Your Information" />
          <Personal />
          <Education />
          <Experience />
        </Section>
      </Fragment>
    );
  }
}

export default Form;
