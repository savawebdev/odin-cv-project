import { Component } from "react";
import InfoWrapper from "../../Utils/Preview/InfoWrapper/InfoWrapper";
import PreviewDate from "../../Utils/Preview/PreviewDate/PreviewDate";
import PreviewInfo from "../../Utils/Preview/PreviewInfo/PreviewInfo";
import PreviewSection from "../../Utils/Preview/PreviewSection/PreviewSection";
import PreviewSubTitle from "../../Utils/Preview/PreviewSubTitle/PreviewSubTitle";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";

class PreviewEducation extends Component {
  render() {
    const { data } = this.props;

    return (
      <PreviewSection>
        <CVSectionTitle title="Education" />

        {data.map((school) => (
          <InfoWrapper args={{ key: school.id }}>
            <PreviewSubTitle
              name={school.schoolName}
              city={school.schoolCity}
            />
            <PreviewDate
              startDate={school.schoolStart}
              endDate={school.schoolEnd}
            />
            <PreviewInfo info={`Degree: ${school.degree}`} />
            <PreviewInfo info={`Subject: ${school.subject}`} />
          </InfoWrapper>
        ))}
      </PreviewSection>
    );
  }
}

export default PreviewEducation;
