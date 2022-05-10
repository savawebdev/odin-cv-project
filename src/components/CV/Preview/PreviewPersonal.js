import { Component } from "react";
import PersonalAddress from "../../Utils/Preview/PersonalAddress/PersonalAddress";
import PersonalInfo from "../../Utils/Preview/PersonalInfo/PersonalInfo";
import PersonalTitle from "../../Utils/Preview/PersonalTitle/PersonalTitle";
import PersonalWrapper from "../../Utils/Preview/PersonalWrapper/PersonalWrapper";

class PreviewPersonal extends Component {
  render() {
    const { data } = this.props;

    return (
      <PersonalWrapper>
        <PersonalTitle title={data.name} />
        <PersonalAddress address={data.address} />
        <PersonalInfo label="Email" info={data.email} />
        <PersonalInfo label="Phone" info={data.phoneNumber} />
      </PersonalWrapper>
    );
  }
}

export default PreviewPersonal;
