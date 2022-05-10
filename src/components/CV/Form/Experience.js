import { Component } from "react";
import FormButton from "../../Utils/FormButton/FormButton";
import FormControl from "../../Utils/FormControl/FormControl";
import FormInput from "../../Utils/FormInput/FormInput";
import FormLabel from "../../Utils/FormLabel/FormLabel";
import CVSectionTitle from "../../Utils/CVSectionTitle/CVSectionTitle";
import FormWrapper from "../../Utils/FormWrapper/FormWrapper";

class Experience extends Component {
  render() {
    return (
      <FormWrapper>
        <CVSectionTitle title="Work Experience" />

        <FormControl>
          <FormLabel htmlFor="workPosition" labelName="Position" />
          <FormInput args={{ type: "text" }} name="workPosition" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workCompany" labelName="Company" />
          <FormInput args={{ type: "text" }} name="workCompany" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workCity" labelName="City" />
          <FormInput args={{ type: "text", name: "workCity" }} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workStart" labelName="Start Date" />
          <FormInput args={{ type: "month" }} name="workStart" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="workEnd" labelName="End Date" />
          <FormInput args={{ type: "month" }} name="workEnd" />
        </FormControl>

        <FormControl>
          <FormButton args={{ type: "submit" }} label="Add" />
        </FormControl>
      </FormWrapper>
    );
  }
}

export default Experience;
