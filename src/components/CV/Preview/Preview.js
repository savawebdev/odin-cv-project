import { Component } from "react";
import PreviewPersonal from "./PreviewPersonal";
import Section from "../../Utils/Section/Section";

class Preview extends Component {
  render() {
    return (
      <Section className="preview">
        <PreviewPersonal />
      </Section>
    );
  }
}

export default Preview;
