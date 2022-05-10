import { Component } from "react";
import PreviewEducation from "./PreviewEducation";
import PreviewPersonal from "./PreviewPersonal";
import Section from "../../Utils/Section/Section";
import PreviewExperience from "./PreviewExperience";

class Preview extends Component {
  render() {
    return (
      <Section className="preview">
        <PreviewPersonal data={this.props.personal} />
        <PreviewEducation data={this.props.education} />
        <PreviewExperience data={this.props.experience} />
      </Section>
    );
  }
}

export default Preview;
