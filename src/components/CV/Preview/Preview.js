import PreviewEducation from "./PreviewEducation";
import PreviewPersonal from "./PreviewPersonal";
import Section from "../../Utils/Section/Section";
import PreviewExperience from "./PreviewExperience";

const Preview = (props) => {
  return (
    <Section className="preview">
      <PreviewPersonal data={props.personal} />
      <PreviewEducation data={props.education} />
      <PreviewExperience data={props.experience} />
    </Section>
  );
};

export default Preview;
