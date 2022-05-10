import { Component } from "react";
import InfoWrapper from "../../Utils/Preview/InfoWrapper/InfoWrapper";
import PreviewDate from "../../Utils/Preview/PreviewDate/PreviewDate";
import PreviewInfo from "../../Utils/Preview/PreviewInfo/PreviewInfo";
import PreviewSection from "../../Utils/Preview/PreviewSection/PreviewSection";
import PreviewSubTitle from "../../Utils/Preview/PreviewSubTitle/PreviewSubTitle";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";

class PreviewExperience extends Component {
  render() {
    const { data } = this.props;

    return (
      <PreviewSection>
        <CVSectionTitle title="Work Experience" />

        {data.map((work) => (
          <InfoWrapper args={{ key: work.id }}>
            <PreviewSubTitle name={work.company} city={work.workCity} />
            <PreviewDate startDate={work.workStart} endDate={work.workEnd} />
            <PreviewInfo info={`Position: ${work.position}`} />
          </InfoWrapper>
        ))}
      </PreviewSection>
    );
  }
}

export default PreviewExperience;
