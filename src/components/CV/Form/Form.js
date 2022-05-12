import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Section from "../../Utils/Section/Section";
import SectionTitle from "../../Utils/SectionTitle/SectionTitle";

const Form = (props) => {
  return (
    <Section className="form">
      <SectionTitle title="Enter Your Information" />
      <Personal onChange={props.onPersonalChange} />
      <Education addSchool={props.addSchool} />
      <Experience addWorkExperience={props.addWorkExperience} />
    </Section>
  );
};

export default Form;
